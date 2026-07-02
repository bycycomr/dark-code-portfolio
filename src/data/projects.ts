export interface Project {
  name: string;
  description: string;
  tech: string[];
  info?: string;
  demo?: string;
  code?: string;
  /** URL to render inside an in-site iframe dialog instead of an external demo link */
  embed?: string;
  achievement?: string;
}

export const projects: Project[] = [
  {
    name: "TRMedLLM: Türkçe Halk Ağzını Anlayan Tıbbi Büyük Dil Modeli",
    description:
      "Hastaların semptomlarını ifade ederken kullandıkları gündelik dili, yerel ağızları ve dolaylı anlatımları analiz ederek standart tıbbi literatür karşılıklarıyla eşleştiren özelleştirilmiş yapay zeka modeli. Türkçenin morfolojik yapısına ve hasta-doktor iletişimindeki kültürel nüanslara odaklanılarak Unsloth + LoRA ile ince ayar yapıldı. RAG mimarisi entegrasyonu ile halüsinasyon oranı düşürülmesi hedeflenmektedir.",
    tech: ["Python", "LLM Fine-Tuning", "LoRA", "Unsloth", "LangChain", "RAG", "NLP", "Vector Database"],
  },
  {
    name: "DigiCampus – DigiEduHack 2024",
    description:
      "Avrupa Birliği tarafından düzenlenen uluslararası DigiEduHack 2024 hackathonunda Yerel Kazanan seçilen projedir. Fikir geliştirmeden web geliştirme, içerik üretimi ve ekip koordinasyonuna kadar tüm süreçleri yönettim.",
    tech: ["Web Development", "Project Management", "Team Leadership"],
    info: "https://digieduhack.com/solutions/digicampus",
    demo: "https://digicampus.doktortaku.com/",
    achievement: "🏆 Yerel Kazanan",
  },
  {
    name: "Game of Life — Conway Hücresel Otomatı",
    description:
      "Sıfır bağımlılıkla, saf JavaScript ve Canvas API kullanılarak geliştirilen kendi kendine çalışan Conway's Game of Life simülasyonu. Durağanlık ve osilasyon algılama, otomatik yeniden tohumlama, çağ tabanlı renklendirme ve simülasyon çalışırken bile tuvale canlı çizim desteği içerir.",
    tech: ["JavaScript", "Canvas API", "HTML5", "CSS3", "Cellular Automata"],
    demo: "https://bycycomr.github.io/Game-Of-Life-Simulation/",
    code: "https://github.com/bycycomr/Game-Of-Life-Simulation",
    embed: "https://bycycomr.github.io/Game-Of-Life-Simulation/",
  },
  {
    name: "Pink – Ankü Game Jam",
    description:
      "20 takım arasından 2. olan proje. 48 saatte geliştirilen 'Pink' oyununda oyun tasarımı, yazılım geliştirme, seviye tasarımı ve proje yönetimi süreçlerini başarıyla tamamladım.",
    tech: ["Game Development", "Game Design", "Project Management"],
    info: "https://comp.eng.ankara.edu.tr/2024/05/14/anku-game-jam-sona-erdi/",
    demo: "https://bycycomr.itch.io/pink",
    achievement: "🥈 2. Ödül",
  },
];
