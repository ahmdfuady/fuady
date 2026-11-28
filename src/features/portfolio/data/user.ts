import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Ahmad",
  lastName: "Fuady",
  displayName: "Ahmad Fuady",
  username: "fuady",
  gender: "male",
  pronouns: "he/him",

  bio: "I'm a Computer Science student focused on front-end development and ERP solutions, with hands-on experience in configuration, data imports, and technical documentation.",
  bioId:
    "Saya mahasiswa Ilmu Komputer yang berfokus pada pengembangan front-end dan solusi ERP, dengan pengalaman dalam konfigurasi, impor data, dan dokumentasi teknis.",

  flipSentences: [
    "Front-End Developer",
    "ERP Analyst",
    "Web Application Developer",
    "Computer Science Student",
    "Full Stack Developer",
  ],
  flipSentencesId: [
    "Pengembang Front-End",
    "analyst ERP",
    "Pengembang Aplikasi Web",
    "Mahasiswa Ilmu Komputer",
    "Pengembang Full Stack",
  ],

  address: "Indonesia",
  email: "ZnVhZHlhaG1hZDY5QGdtYWlsLmNvbQ==", // base64 of fuadyahmad69@gmail.com
  phone: "+62 895-6351-37292",
  website: "https://ahmadfuady.vercel.app",

  jobTitle: "Software Engineer & ERP Analyst",
  seoTitle: "Ahmad Fuady | Front-End Developer & ERP Analyst",
  seoDescription:
    "I'm Ahmad Fuady, a Software Engineer and ERP Analyst from Indonesia. I build practical software, data products, and machine learning systems.",

  jobs: [
    {
      title: "Functional ERP",
      company: "PT Ctech erp Indonesia",
      website: " ",
      experienceId: "Pengalaman Kerja",
    },
  ],

  about: `I'm a Computer Science student focused on front-end development and ERP solutions. I work with configuration, data imports, and technical documentation.`,
  aboutId: `Saya mahasiswa Ilmu Komputer yang berfokus pada pengembangan front-end dan solusi ERP. Saya berpengalaman dalam konfigurasi, impor data, dan dokumentasi teknis.`,

  avatar: "/image/profile.png",
  ogImage: "/image/og.png",
  sameAs: [
    "https://github.com/ahmdfuady",
    "https://www.linkedin.com/in/ahmad-fuady-0710552b8/",
  ],
  timeZone: "Asia/Jakarta",

  keywords: [
    "Firdaus Khotibul Zickrian",
    "zickrian",
    "Firdaus Khotibul Zickrian portfolio",
    "zickrian portfolio",
    "AI engineer Indonesia",
    "machine learning engineer Indonesia",
    "AI and machine learning",
    "full stack developer",
    "data products",
    "MLOps",
    "computer vision",
    "AI portfolio",
    "machine learning portfolio",
  ],

  // Full ISO 8601 datetimes: Schema.org dateCreated/dateModified expect a
  // time component, and date-only values trip up structured-data validators.
  dateCreated: "2023-11-01T00:00:00Z",
  dateModified: "2026-07-20T00:00:00Z",
}
