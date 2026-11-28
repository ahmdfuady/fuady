import {
  BriefcaseBusinessIcon,
  GraduationCapIcon,
  SchoolIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "ctech-erp",
    companyName: "PT Ctech ERP Indonesia",
    companyWebsite: "https://ctecherp.com",
    positions: [
      {
        id: "ctech-erp-1",
        title: "Functional ERP (Odoo)",
        employmentPeriod: {
          start: "02.2026",
          end: "08.2026",
        },
        employmentType: "Internship",
        icon: <BriefcaseBusinessIcon />,
        description: `- Configured and implemented core Odoo ERP modules including Sales, Purchase, Inventory, Accounting, Point of Sale (POS), and Manufacturing to match client business workflows.
- Managed master data migration and structured CSV/Excel imports across multiple operational modules.
- Authored comprehensive user manuals (*Buku Panduan READY*) complete with Mermaid process flowcharts for end-user onboarding.
- Designed and delivered client training presentations to facilitate smooth ERP system adoption.`,
        descriptionId: `- Mengonfigurasi dan mengimplementasikan modul inti Odoo ERP meliputi Sales, Purchase, Inventory, Accounting, Point of Sale (POS), dan Manufacturing sesuai alur bisnis klien.
- Mengelola migrasi master data serta proses impor data terstruktur di berbagai modul operasional.
- Menyusun buku panduan pengguna (*Buku Panduan READY*) yang dilengkapi diagram alur proses (Mermaid flowchart) untuk memudahkan adaptasi pengguna.
- Merancang dan membawakan materi presentasi pelatihan guna memastikan adopsi sistem ERP berjalan lancar.`,
        skills: [
          "Odoo ERP",
          "Functional Consulting",
          "Business Process",
          "Data Migration",
          "Technical Documentation",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "teaching",
    companyName: "Academic & School Administration",
    positions: [
      {
        id: "teaching-1",
        title: "Teacher & Academic Administrator",
        employmentPeriod: {
          start: "2024",
          end: "2025",
        },
        employmentType: "Full-time",
        icon: <SchoolIcon />,
        description: `- Delivered classroom instruction and structured lesson plans while fostering an engaging learning environment for students.
- Managed student records, academic schedules, and teaching assignment coordination accurately.`,
        descriptionId: `- Melaksanakan kegiatan belajar mengajar dengan rencana pembelajaran terstruktur serta menciptakan lingkungan belajar yang kondusif bagi siswa.
- Mengelola data siswa, penjadwalan akademik, serta koordinasi pembagian tugas mengajar secara rapi dan akurat.`,
        skills: [
          "Teaching",
          "Public Speaking",
          "Academic Administration",
          "Data Management",
          "Communication",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-cakrawala",
        title: "Universitas Cakrawala - B.Sc. in Computer Science",
        employmentPeriod: {
          start: "2025",
          end: "2029",
        },
        icon: <GraduationCapIcon />,
        description: `- Pursuing a Bachelor of Science (S1) degree in Computer Science with a strong focus on Software Engineering, Frontend Development, and Data Science.
- Built end-to-end academic and practical projects spanning web applications (React, Next.js, TypeScript), data warehousing (SQL, BigQuery), machine learning, and combinatorial optimization algorithms.`,
        descriptionId: `- Menempuh pendidikan Sarjana (S1) Ilmu Komputer dengan fokus pada Rekayasa Perangkat Lunak, Pengembangan Frontend, dan Sains Data.
- Mengembangkan berbagai proyek akademik dan terapan mulai dari aplikasi web (React, Next.js, TypeScript), data warehouse (SQL, BigQuery), machine learning, hingga algoritma optimasi kombinatorial.`,
        skills: [
          "Computer Science",
          "Web Development",
          "Data Engineering",
          "Machine Learning",
          "Problem Solving",
        ],
      },
    ],
  },
]