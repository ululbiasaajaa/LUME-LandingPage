// src/data/templates.js

export const WHATSAPP_NUMBER = "6285891126071";

// Default general inquiry
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
`Halo LUME! 👋

Saya tertarik dengan undangan digital LUME.
Mohon info langkah selanjutnya. Terima kasih! 💍`
)}`;

// Pre-filled template order message generator
export const getWhatsAppPackageLink = (packageName) => {
  const text = 
`Halo LUME! 👋

Saya tertarik untuk pesan undangan digital LUME.
Paket yang saya minati: ${packageName}

Mohon info langkah pemesanan dan pengisian datanya. Terima kasih! 💍`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/lulbiasalah/",
  tiktok: "https://www.tiktok.com/@lume.invitation",
  whatsapp: WHATSAPP_LINK,
};

export const PACKAGES = [
  {
    id: "basic",
    name: "BASIC",
    normalPrice: "Rp69.000",
    launchPrice: "Rp49.000",
    tagline: "Simple, beautiful, affordable.",
    popular: false,
    features: [
      "2 pilihan template (Dark Elegant / Soft Romantic)",
      "Responsive mobile-first",
      "Countdown timer",
      "Konfirmasi RSVP",
      "Galeri foto",
      "Petunjuk lokasi (Google Maps)",
      "Custom data pasangan & acara"
    ],
    buttonText: "Lihat Template Basic",
    targetSection: "#template"
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "Rp99.000",
    normalPrice: "Rp149.000",
    launchPrice: "Rp99.000",
    tagline: "More immersive, richer experience.",
    popular: true,
    badge: "PREMIUM — MOST POPULAR",
    features: [
      "2 pilihan template (Garden Romance / Modern Black Tie)",
      "Semua fitur paket Basic",
      "Background music control",
      "Love Story / Storytelling timeline",
      "Digital Wedding Gift (Amplop Digital)",
      "Guestbook / Buku Tamu & Ucapan",
      "Galeri foto interaktif & layout sinematik",
      "Animasi & transisi lebih kaya"
    ],
    buttonText: "Lihat Template Premium",
    targetSection: "#template"
  },
  {
    id: "custom",
    name: "CUSTOM",
    normalPrice: "Rp179.000",
    launchPrice: "Rp149.000",
    tagline: "Your story, your way.",
    popular: false,
    features: [
      "Custom design dari awal",
      "Custom layout sesuai permintaan",
      "Custom skema warna & palet",
      "Custom pilihan tipografi",
      "Custom section & fitur khusus",
      "Struktur komponen React fleksibel & interaktif"
    ],
    buttonText: "Lihat Showcase Custom",
    targetSection: "#template"
  }
];

export const TEMPLATES = [
  {
    id: "basic-1",
    name: "Dark Elegant",
    category: "BASIC",
    categoryLabel: "BASIC #1",
    description: "Minimal, classy, dan timeless dengan nuansa gelap yang elegan.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    demoUrl: "https://wed-inv-basic1.vercel.app/",
    tag: "Dark Mode"
  },
  {
    id: "basic-2",
    name: "Soft Romantic",
    category: "BASIC",
    categoryLabel: "BASIC #2",
    description: "Warm, soft, dan romantic dengan sentuhan warna cream & dusty rose.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800",
    demoUrl: "https://wedding-invitation-b2.vercel.app/",
    tag: "Soft Mode"
  },
  {
    id: "premium-1",
    name: "Garden Romance",
    category: "PREMIUM",
    categoryLabel: "PREMIUM #1",
    description: "Botanical, warm, dan immersive dengan alur storytelling dan galeri kaya.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    demoUrl: "https://wedding-inv-prem1.vercel.app/",
    tag: "Botanical"
  },
  {
    id: "premium-2",
    name: "Modern Black Tie",
    category: "PREMIUM",
    categoryLabel: "PREMIUM #2",
    description: "Modern, bold, dan sophisticated bergaya majalah editorial eksklusif.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
    demoUrl: "https://wed-inv-prem2.vercel.app/",
    tag: "Editorial"
  },
  {
    id: "custom-1",
    name: "Bright Romantic Showcase",
    category: "CUSTOM",
    categoryLabel: "CUSTOM SHOWCASE",
    description: "Contoh undangan kustom penuh dengan berbagai komponen interaktif eksklusif.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
    demoUrl: "https://wedding-invitation-gamma-nine-24.vercel.app/",
    tag: "Fully Custom"
  }
];

export const FAQS = [
  {
    q: "Berapa lama pengerjaannya?",
    a: "Proses pengerjaan standar membutuhkan waktu 1-3 hari kerja setelah seluruh data (foto, detail acara, dan cerita) kami terima."
  },
  {
    q: "Apakah bisa custom warna dan font?",
    a: "Untuk paket Basic dan Premium, warna disesuaikan dengan pilihan template. Jika Anda membutuhkan penyesuaian warna dan font khusus, Anda dapat memilih Paket Custom."
  },
  {
    q: "Apakah bisa menggunakan foto dan lagu sendiri?",
    a: "Tentu saja! Anda bisa mengirimkan foto-foto pasangan serta lagu favorit untuk dijadikan musik latar (tersedia pada Paket Premium dan Custom)."
  },
  {
    q: "Berapa kali batas revisi undangan?",
    a: "Kami menyediakan 2-3 kali revisi minor untuk memastikan penulisan nama, tanggal, lokasi, dan detail acara sudah 100% akurat."
  },
  {
    q: "Apakah undangan bisa dibuka dengan lancar di smartphone?",
    a: "Ya, seluruh undangan LUME dirancang dengan pendekatan mobile-first sehingga tampil responsif, cepat, dan rapi di semua ukuran layar smartphone."
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Pembayaran dapat dilakukan melalui transfer bank atau e-wallet. Anda dapat membayar DP terlebih dahulu atau langsung pelunasan saat proses pemesanan."
  },
  {
    q: "Apakah undangan bisa langsung dibagikan melalui WhatsApp?",
    a: "Sangat mudah! Kami akan memberikan 1 link resmi undangan Anda beserta draft teks ucapan manis yang siap langsung Anda sebar ke grup atau chat pribadi WhatsApp."
  }
];