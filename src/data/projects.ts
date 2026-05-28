export interface Project {
  name: string;
  description: string;
  tech: string[];
  info?: string;
  demo?: string;
  code?: string;
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
    name: "Pink – Ankü Game Jam",
    description:
      "20 takım arasından 2. olan proje. 48 saatte geliştirilen 'Pink' oyununda oyun tasarımı, yazılım geliştirme, seviye tasarımı ve proje yönetimi süreçlerini başarıyla tamamladım.",
    tech: ["Game Development", "Game Design", "Project Management"],
    info: "https://comp.eng.ankara.edu.tr/2024/05/14/anku-game-jam-sona-erdi/",
    demo: "https://bycycomr.itch.io/pink",
    achievement: "🥈 2. Ödül",
  },
];
