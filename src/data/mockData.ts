export interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  coverUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
  format: "ebook" | "audiobook" | "print";
  category: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  organizer: string;
  organizerId: string;
  date: string;
  venue: string;
  price: number;
  totalSeats: number;
  seatsSold: number;
  image: string;
  category: "concert" | "workshop" | "conference" | "meetup";
  ticketTiers: { name: string; price: number; available: number }[];
}

export interface Webinar {
  id: string;
  title: string;
  host: string;
  hostId: string;
  hostAvatar: string;
  date: string;
  isLive: boolean;
  isFree: boolean;
  price?: number;
  description: string;
  registeredCount: number;
  category: string;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followerCount: number;
  verified: boolean;
  productCount: number;
  category: "author" | "speaker" | "organizer" | "artist";
}

export interface RecentSale {
  id: string;
  item: string;
  buyer: string;
  amount: number;
  date: string;
  status: "completed" | "pending";
}

export interface Booking {
  id: string;
  service: string;
  provider: string;
  date: string;
  timeSlot: string;
  status: "confirmed" | "pending" | "completed";
  price: number;
}

export const categories = ["Books", "Events", "Webinars", "Bookings"] as const;

export const currentUser = {
  id: "usr_001",
  name: "Kwame Asante",
  email: "kwame.asante@gmail.com",
  phone: "+233 24 567 8901",
  avatar: "https://i.pravatar.cc/150?u=kwame_asante",
  role: "creator" as const,
  followersCount: 1243,
  earnings: 8750,
  totalSales: 312,
};

export const creators: Creator[] = [
  {
    id: "crt_001",
    name: "Ama Serwaa",
    avatar: "https://i.pravatar.cc/150?u=ama_serwaa",
    bio: "Bestselling author of 'Echoes of the Volta'. Writing the Ghanaian story one page at a time.",
    followerCount: 4520,
    verified: true,
    productCount: 7,
    category: "author",
  },
  {
    id: "crt_002",
    name: "Nana Kweku Boateng",
    avatar: "https://i.pravatar.cc/150?u=nana_kweku",
    bio: "Public speaker, leadership coach, and founder of the Young Ghana Leaders Summit.",
    followerCount: 3870,
    verified: true,
    productCount: 12,
    category: "speaker",
  },
  {
    id: "crt_003",
    name: "Esi Aidoo",
    avatar: "https://i.pravatar.cc/150?u=esi_aidoo",
    bio: "Event curator and cultural programmer. Bringing Accra's creative scene together.",
    followerCount: 2980,
    verified: false,
    productCount: 9,
    category: "organizer",
  },
  {
    id: "crt_004",
    name: "Kofi Mensah",
    avatar: "https://i.pravatar.cc/150?u=kofi_mensah",
    bio: "Illustrator and visual storyteller. My art is rooted in Ghanaian folklore and futurism.",
    followerCount: 6100,
    verified: true,
    productCount: 15,
    category: "artist",
  },
  {
    id: "crt_005",
    name: "Adwoa Poku-Sarkodie",
    avatar: "https://i.pravatar.cc/150?u=adwoa_poku",
    bio: "Tech entrepreneur and author of 'Digital Gold: Building in West Africa'. Speaker at TEDxAccra.",
    followerCount: 8340,
    verified: true,
    productCount: 4,
    category: "author",
  },
  {
    id: "crt_006",
    name: "Yaw Dabo",
    avatar: "https://i.pravatar.cc/150?u=yaw_dabo",
    bio: "Entertainment promoter and community builder. CEO of Dabo Entertainment.",
    followerCount: 5400,
    verified: true,
    productCount: 18,
    category: "organizer",
  },
];

export const books: Book[] = [
  {
    id: "bok_001",
    title: "Echoes of the Volta",
    author: "Ama Serwaa",
    authorId: "crt_001",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=ECHOES+OF+THE+VOLTA",
    price: 85,
    rating: 4.7,
    reviewCount: 234,
    format: "ebook",
    category: "Fiction",
    description: "A sweeping novel tracing three generations of a family along the banks of the Volta River, from colonial resistance to modern-day Accra.",
  },
  {
    id: "bok_002",
    title: "Digital Gold: Building in West Africa",
    author: "Adwoa Poku-Sarkodie",
    authorId: "crt_005",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=DIGITAL+GOLD",
    price: 120,
    rating: 4.9,
    reviewCount: 187,
    format: "ebook",
    category: "Business",
    description: "A practical guide to building tech startups in West Africa, with case studies from Ghana, Nigeria, and Kenya.",
  },
  {
    id: "bok_003",
    title: "Sankofa and the Machine",
    author: "Kofi Mensah",
    authorId: "crt_004",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=SANKOFA+AND+THE+MACHINE",
    price: 65,
    rating: 4.5,
    reviewCount: 142,
    format: "print",
    category: "Art & Design",
    description: "An illustrated exploration of how Ghanaian artistic traditions are shaping the future of AI and digital creativity.",
  },
  {
    id: "bok_004",
    title: "Lessons from the Corner Office",
    author: "Nana Kweku Boateng",
    authorId: "crt_002",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=LESSONS+FROM+THE+CORNER+OFFICE",
    price: 95,
    rating: 4.3,
    reviewCount: 98,
    format: "audiobook",
    category: "Self-Help",
    description: "Leadership principles drawn from interviews with 30 of Ghana's most successful CEOs and founders.",
  },
  {
    id: "bok_005",
    title: "Accra After Dark",
    author: "Naa Adjeley Armah",
    authorId: "crt_001",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=ACCRA+AFTER+DARK",
    price: 55,
    rating: 4.6,
    reviewCount: 310,
    format: "ebook",
    category: "Fiction",
    description: "A short story collection exploring the hidden nightlife of Accra, where dreams collide with reality.",
  },
  {
    id: "bok_006",
    title: "The Ashanti Code",
    author: "Yaw Dabo",
    authorId: "crt_006",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=THE+ASHANTI+CODE",
    price: 78,
    rating: 4.2,
    reviewCount: 67,
    format: "print",
    category: "History",
    description: "A retelling of the founding stories of the Ashanti Kingdom, adapted for young adults.",
  },
  {
    id: "bok_007",
    title: "Jollof Rice and Other Lies",
    author: "Esi Aidoo",
    authorId: "crt_003",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=JOLLOF+RICE+AND+OTHER+LIES",
    price: 45,
    rating: 4.8,
    reviewCount: 423,
    format: "ebook",
    category: "Humour",
    description: "A witty, heartwarming collection of essays about growing up Ghanaian in the age of the internet.",
  },
  {
    id: "bok_008",
    title: "Building the Future: Tech in Ghana",
    author: "Kwame Asante",
    authorId: "usr_001",
    coverUrl: "https://placehold.co/300x450/141414/FAF9F7?text=BUILDING+THE+FUTURE",
    price: 110,
    rating: 4.4,
    reviewCount: 56,
    format: "print",
    category: "Business",
    description: "An insider's look at the Ghanaian tech ecosystem, from MEST graduates to the rise of Kumasi Innovation Hub.",
  },
];

export const events: Event[] = [
  {
    id: "evt_001",
    title: "Afrofuture Fest 2026",
    organizer: "Yaw Dabo",
    organizerId: "crt_006",
    date: "2026-09-12",
    venue: "Black Star Square, Accra",
    price: 150,
    totalSeats: 5000,
    seatsSold: 3840,
    image: "https://placehold.co/800x400/141414/FAF9F7?text=AFROFUTURE+FEST",
    category: "concert",
    ticketTiers: [
      { name: "General", price: 150, available: 1160 },
      { name: "VIP", price: 350, available: 200 },
      { name: "Backstage Pass", price: 500, available: 50 },
    ],
  },
  {
    id: "evt_002",
    title: "Ghana Book Fair 2026",
    organizer: "Esi Aidoo",
    organizerId: "crt_003",
    date: "2026-10-03",
    venue: "Accra International Conference Centre",
    price: 25,
    totalSeats: 800,
    seatsSold: 520,
    image: "https://placehold.co/800x400/141414/FAF9F7?text=GHANA+BOOK+FAIR",
    category: "conference",
    ticketTiers: [
      { name: "Day Pass", price: 25, available: 280 },
      { name: "Full Weekend", price: 60, available: 150 },
      { name: "Author Table", price: 200, available: 30 },
    ],
  },
  {
    id: "evt_003",
    title: "WriteShop: Fiction Masterclass",
    organizer: "Ama Serwaa",
    organizerId: "crt_001",
    date: "2026-08-22",
    venue: "Nubuke Foundation, East Legon",
    price: 100,
    totalSeats: 40,
    seatsSold: 35,
    image: "https://placehold.co/800x400/141414/FAF9F7?text=WRITESHOP",
    category: "workshop",
    ticketTiers: [
      { name: "Standard", price: 100, available: 5 },
    ],
  },
  {
    id: "evt_004",
    title: "Creative Meetup: Design x Code",
    organizer: "Kofi Mensah",
    organizerId: "crt_004",
    date: "2026-07-28",
    venue: "iSpace, Osu, Accra",
    price: 20,
    totalSeats: 60,
    seatsSold: 48,
    image: "https://placehold.co/800x400/141414/FAF9F7?text=DESIGN+X+CODE",
    category: "meetup",
    ticketTiers: [
      { name: "Entry", price: 20, available: 12 },
    ],
  },
  {
    id: "evt_005",
    title: "Young Ghana Leaders Summit",
    organizer: "Nana Kweku Boateng",
    organizerId: "crt_002",
    date: "2026-11-15",
    venue: "Kempinski Hotel, Gold Coast City, Accra",
    price: 200,
    totalSeats: 300,
    seatsSold: 195,
    image: "https://placehold.co/800x400/141414/FAF9F7?text=YOUNG+LEADERS+SUMMIT",
    category: "conference",
    ticketTiers: [
      { name: "Student", price: 80, available: 50 },
      { name: "Professional", price: 200, available: 105 },
      { name: "Corporate Table (10)", price: 1800, available: 5 },
    ],
  },
  {
    id: "evt_006",
    title: "Highlife Night: Live at the Garden",
    organizer: "Yaw Dabo",
    organizerId: "crt_006",
    date: "2026-08-30",
    venue: "Alliance Française Garden, Accra",
    price: 75,
    totalSeats: 400,
    seatsSold: 310,
    image: "https://placehold.co/800x400/141414/FAF9F7?text=HIGHLIFE+NIGHT",
    category: "concert",
    ticketTiers: [
      { name: "Standing", price: 75, available: 90 },
      { name: "Table for 4", price: 250, available: 25 },
    ],
  },
];

export const webinars: Webinar[] = [
  {
    id: "wbn_001",
    title: "How to Self-Publish Your First Book in Ghana",
    host: "Ama Serwaa",
    hostId: "crt_001",
    hostAvatar: "https://i.pravatar.cc/150?u=ama_serwaa",
    date: "2026-08-05T18:00:00Z",
    isLive: false,
    isFree: true,
    description: "A step-by-step guide to self-publishing in Ghana, from manuscript to marketplace. Learn about local printing options, ISBN registration, and digital distribution.",
    registeredCount: 287,
    category: "Publishing",
  },
  {
    id: "wbn_002",
    title: "Building a Personal Brand as a Creative",
    host: "Adwoa Poku-Sarkodie",
    hostId: "crt_005",
    hostAvatar: "https://i.pravatar.cc/150?u=adwoa_poku",
    date: "2026-07-22T17:00:00Z",
    isLive: true,
    isFree: false,
    price: 45,
    description: "Learn how to build an authentic personal brand that resonates with audiences across West Africa. Covers social media, content strategy, and monetization.",
    registeredCount: 156,
    category: "Branding",
  },
  {
    id: "wbn_003",
    title: "The Business of Events in Accra",
    host: "Yaw Dabo",
    hostId: "crt_006",
    hostAvatar: "https://i.pravatar.cc/150?u=yaw_dabo",
    date: "2026-09-10T19:00:00Z",
    isLive: false,
    isFree: false,
    price: 60,
    description: "An insider's look at running profitable events in Ghana. From venue negotiation to sponsorships and ticketing, everything you need to know.",
    registeredCount: 89,
    category: "Events",
  },
  {
    id: "wbn_004",
    title: "Digital Art and the NFT Opportunity in Africa",
    host: "Kofi Mensah",
    hostId: "crt_004",
    hostAvatar: "https://i.pravatar.cc/150?u=kofi_mensah",
    date: "2026-08-18T16:00:00Z",
    isLive: false,
    isFree: true,
    description: "Explore how African artists are leveraging digital platforms and NFTs to reach global audiences. Includes live demo of minting your first piece.",
    registeredCount: 412,
    category: "Art & Technology",
  },
  {
    id: "wbn_005",
    title: "Leadership in Uncertain Times",
    host: "Nana Kweku Boateng",
    hostId: "crt_002",
    hostAvatar: "https://i.pravatar.cc/150?u=nana_kweku",
    date: "2026-10-02T18:30:00Z",
    isLive: false,
    isFree: false,
    price: 35,
    description: "A practical session on leading teams, making decisions, and staying grounded when the market shifts. Drawn from real case studies across West Africa.",
    registeredCount: 203,
    category: "Leadership",
  },
];

export const recentSales: RecentSale[] = [
  {
    id: "sale_001",
    item: "Digital Gold: Building in West Africa",
    buyer: "Nana Akua Baidoo",
    amount: 120,
    date: "2026-07-19",
    status: "completed",
  },
  {
    id: "sale_002",
    item: "VIP Ticket - Afrofuture Fest 2026",
    buyer: "Samuel Osei Frimpong",
    amount: 350,
    date: "2026-07-18",
    status: "completed",
  },
  {
    id: "sale_003",
    item: "Building the Future: Tech in Ghana",
    buyer: "Abena Mansa Asare",
    amount: 110,
    date: "2026-07-17",
    status: "pending",
  },
  {
    id: "sale_004",
    item: "WriteShop: Fiction Masterclass",
    buyer: "Daniel Kwadwo Tetteh",
    amount: 100,
    date: "2026-07-16",
    status: "completed",
  },
  {
    id: "sale_005",
    item: "Echoes of the Volta",
    buyer: "Grace Afia Nyarko",
    amount: 85,
    date: "2026-07-15",
    status: "completed",
  },
];

export const bookings: Booking[] = [
  {
    id: "bkg_001",
    service: "1-on-1 Writing Consultation",
    provider: "Ama Serwaa",
    date: "2026-07-25",
    timeSlot: "14:00 - 15:00",
    status: "confirmed",
    price: 150,
  },
  {
    id: "bkg_002",
    service: "Book Cover Design",
    provider: "Kofi Mensah",
    date: "2026-07-28",
    timeSlot: "10:00 - 11:00",
    status: "pending",
    price: 200,
  },
  {
    id: "bkg_003",
    service: "Public Speaking Coaching",
    provider: "Nana Kweku Boateng",
    date: "2026-07-20",
    timeSlot: "09:00 - 10:30",
    status: "completed",
    price: 180,
  },
  {
    id: "bkg_004",
    service: "Brand Strategy Session",
    provider: "Adwoa Poku-Sarkodie",
    date: "2026-08-02",
    timeSlot: "15:00 - 16:00",
    status: "confirmed",
    price: 120,
  },
];
