import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CELL = 16; // hücre boyutu (px)
const STEP_MS = 240; // nesil başına süre — yavaş, ambiyans amaçlı
const DENSITY = 0.12; // başlangıç doluluk oranı
const MAX_AGE = 24; // yaş bazlı sönümleme üst sınırı
const STALE_WINDOW = 80; // durağanlık algılama penceresi (nesil)

/**
 * Conway's Game of Life — dekoratif arkaplan katmanı.
 * Kırmızı tonlarda, düşük opaklıkta hücreler; yeni doğan hücre parlak,
 * yaşlandıkça sönümlenir. Popülasyon durağanlaşırsa otomatik yeniden tohumlanır.
 */
export const LifeBackground = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Hareket azaltma tercihi olan kullanıcılara animasyon gösterme
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cols = 0;
    let rows = 0;
    let cells = new Uint8Array(0); // 0 = ölü, >0 = canlı hücrenin yaşı
    let next = new Uint8Array(0);
    let raf = 0;
    let last = 0;
    let acc = 0;
    let popHistory: number[] = [];
    let running = true;

    const seed = () => {
      popHistory = [];
      for (let i = 0; i < cells.length; i++) {
        cells[i] = Math.random() < DENSITY ? 1 : 0;
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
      cells = new Uint8Array(cols * rows);
      next = new Uint8Array(cols * rows);
      seed();
      draw();
    };

    const step = () => {
      let pop = 0;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let n = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (!dx && !dy) continue;
              const nx = (x + dx + cols) % cols; // toroidal — kenarlar birbirine bağlı
              const ny = (y + dy + rows) % rows;
              if (cells[ny * cols + nx]) n++;
            }
          }
          const i = y * cols + x;
          const age = cells[i];
          if (age ? n === 2 || n === 3 : n === 3) {
            next[i] = age ? Math.min(age + 1, MAX_AGE) : 1;
            pop++;
          } else {
            next[i] = 0;
          }
        }
      }
      [cells, next] = [next, cells];

      // Popülasyon uzun süre sabitleştiyse (ölü/osilatör kaldıysa) yeniden tohumla
      popHistory.push(pop);
      if (popHistory.length > STALE_WINDOW) popHistory.shift();
      if (popHistory.length === STALE_WINDOW && new Set(popHistory).size <= 2) {
        seed();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const age = cells[y * cols + x];
          if (!age) continue;
          const alpha = age === 1 ? 0.3 : Math.max(0.05, 0.2 - (age / MAX_AGE) * 0.15);
          ctx.fillStyle = `rgba(225, 29, 42, ${alpha})`;
          ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
        }
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!running) return;
      if (!last) last = t;
      acc += t - last;
      last = t;
      if (acc >= STEP_MS) {
        acc = acc % STEP_MS;
        step();
        draw();
      }
    };

    // Hero ekran dışına çıkınca simülasyonu duraklat
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      last = 0;
    });
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={cn("block", className)} />;
};
