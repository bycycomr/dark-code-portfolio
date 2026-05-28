export interface Certificate {
  name: string;
  issuer: string;
  credential?: string;
  link: string;
  logo: string;
  year?: string;
}

export const certificates: Certificate[] = [
  {
    name: "Savunma Sanayii 401",
    issuer: "Savunma Sanayii Başkanlığı & YÖK",
    credential: "UN_0414772571526477610",
    link: "https://savunma401.ssa.gov.tr/",
    logo: "https://www.ssa.gov.tr/theme/developer/images/logo.png",
    year: "2024",
  },
  {
    name: "İstihbarata Karşı Koyma Eğitimi",
    issuer: "Savunma Sanayii Başkanlığı",
    credential: "",
    link: "https://www.ssa.gov.tr/",
    logo: "https://www.ssa.gov.tr/theme/developer/images/logo.png",
    year: "2024",
  },
];
