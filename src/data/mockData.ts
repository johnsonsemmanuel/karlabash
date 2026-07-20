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
  pages: number;
  language: string;
  isbn: string;
  publishedDate: string;
  publisher: string;
  chapters: { title: string; content: string }[];
  previewChapters: number;
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
    pages: 342,
    language: "English",
    isbn: "978-0-571-34521-8",
    publishedDate: "2024-09-15",
    publisher: "Sub-Saharan Publishers",
    previewChapters: 2,
    chapters: [
      {
        title: "Chapter 1: The River's Whisper",
        content: "The morning mist hung low over the Volta, curling around the trunks of mahogany trees like the fingers of ancient spirits. Ama stood at the edge of the water, her bare feet sinking into the cool mud, watching the current carry fallen leaves downstream toward the sea. She had come to this spot every dawn for as long as she could remember, yet today felt different—today, the river seemed to be speaking.\n\nHer grandmother, Nana Yaa, had told her stories of the Volta since she was a child. Tales of how the river had witnessed the marches of warriors and the prayers of priestesses, how it had borne witness to the signing of treaties and the breaking of chains. 'The river remembers everything,' Nana Yaa would say, her voice carrying the weight of generations. 'Even what we choose to forget.'\n\nAma pressed her palm against the water and felt its pulse—a steady, ancient rhythm that matched her own heartbeat. Somewhere downstream, a fisherman cast his net with a graceful arc, the mesh catching the first light of dawn. The village of Akosombo was waking up, and with it, the echoes of a hundred years of stories began to stir."
      },
      {
        title: "Chapter 2: The Colonial Office",
        content: "The District Officer's office in Ho smelled of imported tobacco and bureaucratic indifference. Kwadwo Mensah, the first educated man from the Volta region to serve as interpreter, stood stiffly before the mahogany desk, his starched collar biting into his neck. The British administrator, a thin man named Hartley, was reviewing documents without looking up.\n\n'We require the village elders to relocate from the riverbank,' Hartley said, his pronunciation of the local names mangling them beyond recognition. 'The dam project has been approved in London. There is no room for sentiment.'\n\nKwadwo translated the words into Ewe, but his voice carried a tremor that betrayed his own feelings. The Volta River was not merely water and mud to his people—it was the thread that wove their identity together. To dam it was to silence the ancestors. He looked through the window at the green hills rolling toward the river and wondered how many more truths he would be forced to translate into lies.\n\nThat evening, he sat with the elders under the palaver tree, the kerosene lamp casting long shadows across their faces. 'We will not move,' said Togbe Agbekor, the oldest of them all, his voice still commanding despite his eighty years. 'Let them build their dam. The river will find its way.'"
      },
      {
        title: "Chapter 3: The Rising Waters",
        content: "By 1965, the Akosombo Dam had transformed the landscape beyond recognition. Where once there had been villages, farms, and sacred groves, there was now a vast expanse of water stretching to the horizon—the Volta Lake, the largest man-made lake in the world. The people of the displaced communities had been scattered across new settlements, their connections to the land severed like cut roots.\n\nAbena, Kwadwo's granddaughter, grew up in one of these resettlement towns, a place of identical concrete houses arranged in grids that bore no resemblance to the organic sprawl of the old villages. She learned English in school, studied mathematics and science, and dreamed of becoming a nurse. But at night, she dreamed of the river she had never known, a phantom waterway that whispered through her sleep.\n\nHer mother, Esi, kept a wooden carving of a fish that had belonged to Togbe Agbekor. It was the only artifact they had saved when the waters rose. 'Your grandfather said the river remembers,' Esi told her, turning the carving in her hands. 'Even when we cannot.' The words were a comfort and a curse, a reminder of what had been lost and what might yet be recovered.\n\nAbena traced the grain of the wood and felt the weight of a history she was only beginning to understand."
      },
      {
        title: "Chapter 4: Return to the Shore",
        content: "Forty years later, Abena's daughter Ama stood where the old village of Kpedzaklo had once been, now a shoreline of red earth and scrubby vegetation. The lake stretched behind her, its surface deceptively calm, hiding the ruins of homes and shrines beneath its depths. She had come to scatter the ashes of her grandmother Esi, who had died with the name of the village on her lips.\n\nThe journey had taken three days from Accra—by trotro to Ho, then by motorbike along unpaved roads that grew narrower and more treacherous with each kilometer. The landscape was beautiful but scarred, dotted with the concrete foundations of buildings that had been abandoned when the waters came. Nature had reclaimed much of it, but the scars remained, visible to those who knew what to look for.\n\nAma opened the wooden box that contained her grandmother's ashes and held it up to the wind. 'The river remembers,' she whispered, and as she spoke, the surface of the lake rippled as if in acknowledgment. She stood there for a long time, watching the water move, feeling the presence of all the generations who had stood on this same shore before her.\n\nWhen she finally turned to leave, she noticed something half-buried in the mud—a carved wooden fish, its features worn but still recognizable. She picked it up and felt the weight of a hundred years of stories settle into her palm."
      },
      {
        title: "Chapter 5: The River's Song",
        content: "Back in Accra, Ama placed the wooden fish on her desk beside her laptop and began to write. She wrote of the river, of the dam, of the people who had been displaced and the stories that had been lost. She wrote of her grandmother's dreams and her mother's memories, of the weight of carrying history in your bones. The words came easily, as if they had been waiting inside her all along, patient as the river itself.\n\nThe writing took months. She interviewed elders in the resettlement towns, recorded their voices telling stories that had never been written down. She researched the history of the dam, the political decisions that had shaped it, the economic forces that had driven it. She discovered that the story of the Volta was not just a local tale but a universal one—a story of progress and its costs, of power and its discontents, of memory and itsPersistence.\n\nWhen the manuscript was finished, she held it in her hands and felt its weight—not just the physical weight of paper and ink, but the metaphysical weight of all the voices it contained. She thought of the river, still flowing somewhere beneath the surface of the lake, still carrying its cargo of memories toward the sea.\n\nShe sent the manuscript to a publisher in Accra, and waited. The river, as always, was patient."
      }
    ]
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
    pages: 287,
    language: "English",
    isbn: "978-0-14-352891-3",
    publishedDate: "2025-03-20",
    publisher: "African Minds",
    previewChapters: 2,
    chapters: [
      {
        title: "Chapter 1: The Opportunity in the Noise",
        content: "When I first arrived in Lagos in 2019, the startup scene was a beautiful chaos. Co-working spaces sprouted like mushrooms after rain, pitch competitions drew hundreds of eager founders, and venture capital was flowing in from Silicon Valley, London, and Cape Town. But beneath the excitement, there was a disconnect—the global tech narrative was being written in San Francisco, and West African founders were expected to follow its playbook.\n\nI had spent five years at McKinsey in London, advising Fortune 500 companies on digital transformation. I knew the frameworks, the metrics, the language of Silicon Valley. But standing in a traffic jam on Third Mainland Bridge, watching hawkers weave between cars selling everything from手机充电器 to fried plantains, I realized that the playbook I knew was not just incomplete—it was fundamentally wrong.\n\nThe opportunity in West Africa was not about replicating what worked elsewhere. It was about understanding the unique patterns of this region: the power of informal networks, the mobile-first mindset, the trust economy that operated through family and community ties. The founders who would succeed here were not the ones who could best mimic Silicon Valley, but the ones who could translate local realities into scalable solutions.\n\nThis book is the story of those founders, and the lessons I learned alongside them."
      },
      {
        title: "Chapter 2: Mobile Money and the Trust Revolution",
        content: "The story of tech in West Africa cannot be told without starting with mobile money. In 2009, when Safaricom launched M-Pesa in Kenya, it did something that years of banking reform had failed to do—it brought financial services to the unbanked. By the time I started building in Ghana in 2020, MTN Mobile Money had over 20 million users, and the ecosystem around it was thriving.\n\nBut mobile money was more than a payment system. It was a trust mechanism. In a region where formal institutions were often distrusted, the ability to send money through your phone—to a vendor, a family member, a stranger—created a new kind of social contract. Every transaction was a small act of faith, a belief that the system would work, that the money would arrive, that the recipient would honor their end of the bargain.\n\nThe startups that understood this dynamic were the ones that thrived. They didn't just build apps; they built trust. They understood that in West Africa, technology was not an end in itself but a means to strengthen the human connections that already existed. The most successful fintech companies were not the ones with the most sophisticated algorithms, but the ones with the deepest understanding of how trust worked in their communities.\n\nThis chapter explores how mobile money created the foundation for an entire generation of startups, and what lessons it holds for the future of tech in the region."
      },
      {
        title: "Chapter 3: The Infrastructure Paradox",
        content: "One of the great ironies of building tech in West Africa is that the lack of infrastructure has become a catalyst for innovation. When you cannot rely on consistent electricity, you build solutions that work offline. When traditional banking is inaccessible, you create alternative financial systems. When logistics networks are fragmented, you发明 new ones.\n\nI call this the Infrastructure Paradox: the very constraints that should hold back innovation become the forces that drive it forward. The founders I interviewed for this book all shared this perspective. They didn't see the lack of infrastructure as a problem to be solved, but as a parameter to design around.\n\nTake the example of FarmerLine, a Ghanaian startup that provides information services to smallholder farmers. When they started, there was no reliable way to reach farmers in rural areas—internet penetration was low, smartphones were rare, and electricity was unpredictable. So they built a system that worked through SMS, voice calls in local languages, and solar-powered devices. The constraints forced them to be creative, and the result was a solution that was more resilient and accessible than any high-tech alternative.\n\nThis chapter examines how West African founders are turning constraints into competitive advantages, and what the rest of the world can learn from their approach."
      },
      {
        title: "Chapter 4: Funding the Unfundable",
        content: "Venture capital, as it exists in Silicon Valley, was not designed for West Africa. The typical VC model—raise a large fund, invest in 20-30 companies, expect most to fail but a few to return 100x—does not map cleanly onto a region where businesses grow differently, where exits look different, and where the definition of success is broader than just financial returns.\n\nWhen I started raising money for my own startup, I heard the same refrains from international investors: 'The market is too small,' 'The risks are too high,' 'We don't understand the region.' These were not stupid objections—they reflected real structural challenges. But they also reflected a failure of imagination, an inability to see the opportunity through a different lens.\n\nThe founders who succeeded in raising capital were the ones who learned to speak two languages. They could present to Silicon Valley investors in terms they understood—TAM, unit economics, growth metrics—while simultaneously building businesses that reflected local realities. They learned to be creative about funding, combining equity investment with revenue-based financing, grants, and strategic partnerships.\n\nThis chapter profiles five founders who cracked the code of fundraising in West Africa, and distills the lessons they learned into a practical framework for the next generation."
      },
      {
        title: "Chapter 5: Building for the Next Billion",
        content: "As I write this, West Africa stands at an inflection point. The population is young—over 60% under the age of 25—urbanizing rapidly, and increasingly connected. Mobile penetration is over 80%, internet usage is growing at 20% annually, and a new generation of digital natives is coming of age. The next decade will see more change than the last fifty years combined.\n\nThe startups that will shape this future are already being built—in Accra, Lagos, Nairobi, and Dakar. They are solving problems that matter: healthcare access, education, financial inclusion, agriculture, logistics. They are not building consumer social apps or enterprise SaaS tools for Fortune 500 companies. They are building the infrastructure of a new economy.\n\nBut the challenges are immense. Regulatory frameworks are evolving, talent is scarce, and the competition for resources is fierce. The founders who succeed will need to be more than just entrepreneurs—they will need to be builders of ecosystems, connectors of communities, and stewards of a new kind of capitalism.\n\nThis final chapter looks ahead to the opportunities and challenges of the next decade, and makes the case that West Africa is not just a market to be served, but a laboratory for the future of global tech."
      }
    ]
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
    pages: 218,
    language: "English",
    isbn: "978-3-907-23456-7",
    publishedDate: "2025-11-08",
    publisher: "Farafina Trust",
    previewChapters: 2,
    chapters: [
      {
        title: "Chapter 1: The Bird That Looks Backward",
        content: "The Sankofa bird is a symbol from the Akan people of Ghana—a bird that flies forward while looking backward. It represents the idea that we must reach back to our roots in order to move forward, that the past is not something to be left behind but something to be carried with us. When I first encountered the concept of artificial intelligence, I thought immediately of this bird.\n\nI was sitting in a lecture hall at the Kwame Nkrumah University of Science and Technology, watching a demonstration of a neural network that could generate images from text descriptions. The technology was impressive, even mesmerizing. But as I watched the machine create, I found myself thinking about the adinkra symbols my grandfather used to carve—those elegant geometric forms that encoded complex philosophical concepts in simple visual patterns.\n\nThe connection was not immediately obvious to my classmates, many of whom were focused on the technical specifications, the training data, the computational requirements. But I saw something familiar in the way the machine learned—in the patterns it recognized, in the connections it made, in the way it built new creations from the raw material of what had come before.\n\nThis book is an attempt to explore that connection, to trace the line between the ancestral wisdom encoded in Ghanaian art and the emerging intelligence of machines."
      },
      {
        title: "Chapter 2: Patterns in the Code",
        content: "Adinkra symbols are, at their core, a form of visual language. Each symbol encodes a concept—wisdom, courage, unity, perseverance—and the system of symbols forms a vocabulary that has been used for centuries to communicate complex ideas. When I began studying machine learning, I realized that neural networks operate on a similar principle: they learn to recognize patterns, and those patterns become a language for understanding the world.\n\nConsider the symbol Sankofa itself—a stylized bird whose form is defined by a series of curves and angles. A computer vision system trained on adinkra symbols would learn to recognize these patterns, to distinguish Sankofa from Gye Nyame or Dwennimmen. But the deeper lesson is not just in recognition—it is in generation. Just as an adinkra carver can create new symbols by combining existing elements, a generative AI model can create new images by combining learned patterns.\n\nThis is where the parallel becomes truly interesting. The masters of adinkra carving did not simply copy existing symbols—they understood the underlying principles, the grammar of the visual language, and used that understanding to create new works that were both traditional and original. The most interesting AI systems are doing something similar: not just reproducing what they have seen, but generating new creations that follow the patterns they have learned.\n\nIn this chapter, I explore the technical parallels between adinkra symbolism and neural network architecture, illustrated with original artworks that bridge the two traditions."
      },
      {
        title: "Chapter 3: The Oral Tradition and Large Language Models",
        content: "Ghanaian oral tradition is one of the great knowledge systems of the world. Through stories, proverbs, and songs, generations of teachers have transmitted wisdom, history, and cultural values. The griot—the oral historian and storyteller—is not merely a entertainer but a living archive, a repository of collective memory.\n\nWhen I first encountered large language models like GPT, I was struck by the similarity. These models are, in a sense, digital griots—repositories of human knowledge that can retrieve, combine, and present information in response to questions. They have been trained on vast corpora of text, just as a griot is trained through years of listening to elders. And like griots, they can generate new narratives from the material they have absorbed.\n\nBut the differences are equally important. A griot's knowledge is embodied—it lives in the body, in the voice, in the physical act of performance. It is contextual—it is shaped by the specific community, the specific moment, the specific relationship between teller and listener. A language model's knowledge is disembodied, decontextualized, universal in a way that a griot's knowledge is not.\n\nThis chapter examines the parallels and differences between oral tradition and language AI, arguing that the future of AI should learn from the oral tradition's emphasis on context, embodiment, and relationship."
      },
      {
        title: "Chapter 4: Weaving the Digital Kente",
        content: "Kente cloth is perhaps Ghana's most iconic art form—a vibrant, intricate textile whose patterns encode history, philosophy, and identity. Each pattern has a name and a meaning; each color combination tells a story. The weavers who create kente are not just artisans but scholars, carrying centuries of knowledge in their fingers.\n\nWhen I visited the weaving village of Adanwomase, I watched an elder named Nana Kwame operate a traditional loom. His movements were precise, automatic, the product of decades of practice. But behind the automaticity was a deep understanding of pattern, rhythm, and structure. He could explain the mathematical principles underlying each pattern, the historical events each design commemorated, the philosophical concepts each color combination expressed.\n\nI brought with me a generative adversarial network (GAN) trained on images of kente cloth. The model could generate new patterns that were visually convincing—colors harmonized, lines were straight, the overall aesthetic was authentic. But when I showed the results to Nana Kwame, he saw immediately what was missing. 'The machine knows the pattern,' he said, 'but it does not know the meaning.'\n\nThis chapter explores the gap between visual authenticity and cultural meaning, and what it means for the future of AI-generated art."
      },
      {
        title: "Chapter 5: The Future We Carry",
        content: "As I complete this book, I am aware that I am standing at the intersection of two worlds—the world of my ancestors, with its rich traditions of art and wisdom, and the world of machines, with its terrifying potential for creation and destruction. The question that animates this work is not which world will triumph, but how we can carry the wisdom of one into the other.\n\nThe Sankofa bird teaches us that looking backward is not a sign of weakness but of strength. The future we build with artificial intelligence will be stronger if it is rooted in the knowledge systems that have sustained human communities for millennia. This means more than just using African art as training data for neural networks—it means engaging with the philosophical, ethical, and spiritual dimensions of these traditions.\n\nI have tried in these pages to model what this engagement might look like. The artworks that accompany the text are not illustrations but collaborations—works created in dialogue between human and machine, between tradition and innovation. They are not perfect, and they are not complete. They are attempts, experiments, invitations to conversation.\n\nThe bird flies forward while looking backward. The machine learns from what has been. The future we build will be shaped by how well we understand both."
      }
    ]
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
    pages: 298,
    language: "English",
    isbn: "978-1-23-456789-0",
    publishedDate: "2024-11-10",
    publisher: "Sub-Saharan Publishers",
    previewChapters: 2,
    chapters: [
      {
        title: "Chapter 1: The Weight of the Chair",
        content: "The first thing I learned from sitting across from thirty of Ghana's most successful leaders is that the corner office is not what you think. It is not about the view, the mahogany desk, or the leather chair. It is about the weight—the invisible, constant, sometimes crushing weight of decisions that affect hundreds or thousands of lives.\n\nNana Ampadu, who built a logistics empire from a single truck in Tema, told me that his most important leadership lesson came not from a business school case study but from his grandmother's kitchen. 'She fed fifteen people every Sunday,' he said. 'She always made sure everyone ate before she did. That is leadership—making sure your people are taken care of, even when you are hungry yourself.'\n\nThe leaders I interviewed for this book came from different industries—banking, technology, agriculture, real estate, entertainment—but they shared a common understanding of what leadership means. It is not about charisma or vision or strategic brilliance, though all of those matter. It is about responsibility. It is about waking up every morning knowing that other people are depending on you, and choosing to show up anyway.\n\nThis chapter sets the stage for the lessons that follow, exploring what it means to lead in the Ghanaian context."
      },
      {
        title: "Chapter 2: The Power of No",
        content: "In a culture that values harmony and community, saying no is a radical act. Yet every leader I interviewed identified the ability to say no as perhaps the most important skill they had developed. 'The biggest danger in business is not failure,' said Akua Mensah, CEO of a leading fintech company. 'It is distraction. There are a thousand opportunities every day, and most of them will take you further from your goal.'\n\nThe Ghanaian business environment is particularly rich in distractions. The economy is dynamic, relationships are paramount, and new opportunities seem to emerge around every corner. The temptation to chase every deal, attend every meeting, respond to every request is overwhelming. The leaders who succeeded were the ones who learned to distinguish between what was urgent and what was important.\n\nKwesi Badoo, who runs one of Accra's most successful architecture firms, told me about the turning point in his career. 'I was saying yes to everything. I was exhausted, my work was suffering, and I was losing sight of why I started the firm in the first place. One day, I sat down and made a list of the ten most important things I needed to accomplish that year. Then I said no to everything that wasn't on that list. It was the hardest thing I have ever done, and the most rewarding.'\n\nThis chapter explores the art of strategic refusal, with practical frameworks for saying no without damaging relationships."
      },
      {
        title: "Chapter 3: Hiring for Character",
        content: "When I asked the leaders about their biggest hiring mistakes, the answers were remarkably consistent. It was never about skills or qualifications—it was about character. 'I have hired brilliant people who destroyed my team,' said Esi Kyere, founder of a chain of restaurants. 'And I have hired people with no formal education who became the backbone of my company.'\n\nThe leaders had developed sophisticated methods for assessing character. They looked for consistency between words and actions, for how candidates treated people who could do nothing for them, for evidence of resilience and integrity under pressure. They had learned, often through painful experience, that technical skills could be taught but character could not.\n\nNana Yaa Asantewaa, who runs a manufacturing company in Kumasi, told me about her interview process. 'I take candidates to lunch. I watch how they treat the waitstaff. I ask them about a time they failed. I listen not to what they say but to how they say it. The truth is always in the details.'\n\nThis chapter distills the hiring wisdom of thirty leaders into a practical guide for building teams based on character as much as competence."
      },
      {
        title: "Chapter 4: The Long Game",
        content: "Patience is not a virtue that comes naturally to entrepreneurs. The startup culture celebrates speed—move fast and break things, disrupt or be disrupted, first-mover advantage. But the leaders I interviewed for this book had all learned that the most important things in business take time.\n\nKofi Amoako-Attah, who built a chain of pharmacies across Ghana over twenty years, put it simply: 'Everyone wants to build an empire overnight. But empires are built brick by brick, patient brick by patient brick. The founders who rush are the ones who build on sand.'\n\nThe Long Game requires a different kind of discipline. It means making investments that won't pay off for years. It means building relationships that mature over decades. It means staying the course when the market is screaming at you to pivot. Several of the leaders described periods when they were tempted to abandon their strategies, when competitors were growing faster or investors were pressuring them to change direction. The ones who held firm were the ones who ultimately succeeded.\n\nThis chapter examines the strategies and mindsets that enable leaders to play the long game, even when short-term pressures are intense."
      },
      {
        title: "Chapter 5: Leaving the Chair Empty",
        content: "The final lesson from the corner office is perhaps the most profound: the best leaders are the ones who make themselves unnecessary. 'My goal,' said Nana Ampadu, 'is to build something that can run without me. If the business depends on me being there every day, I have not led—I have just controlled.'\n\nSuccession planning is not a popular topic in Ghanaian business. Many of the leaders I interviewed admitted that they had not adequately planned for their departure. The reasons were various—denial about mortality, attachment to power, fear that no one could do the job as well. But the most self-aware leaders understood that their legacy would be measured not by how long they held the chair, but by what happened after they left it.\n\nAkua Mensah, who stepped down as CEO of her company at age fifty-five, told me about the process of letting go. 'It was the hardest thing I have ever done. I had built this company from nothing. Every part of it bore my fingerprint. But I knew that if I stayed too long, I would become the bottleneck. The company needed to grow beyond me.'\n\nThis chapter explores the art of succession, of building institutions that outlast their founders, and of finding meaning beyond the corner office."
      }
    ]
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
    pages: 224,
    language: "English",
    isbn: "978-0-99-123456-7",
    publishedDate: "2026-02-14",
    publisher: "African Minds",
    previewChapters: 2,
    chapters: [
      {
        title: "Story 1: The Last Drink at Mood Bar",
        content: "The music at Mood Bar was the kind that started in your chest and worked its way down to your feet. Ama felt it in her ribs as she pushed through the crowd, a gin and tonic in each hand. The place was packed—tech bros in designer sneakers, slay queens in outfits that cost more than her monthly rent, old men in kente cloth who had been coming here since before independence.\n\nShe found her friends at a corner table near the DJ booth. Nana was already three drinks in, telling a story about her startup that nobody was listening to. Kojo was on his phone, swiping through Tinder with the focused intensity of a man on a mission. Esi was staring at the dance floor, her lips moving silently to the music.\n\n'This place is dying,' Nana said, shouting over the bass. 'Five years ago, this was the spot. Now it is full of tourists and people who think they are important.'\n\nAma looked around the room and saw something different. She saw a place where the different tribes of Accra—the old money and the new, the traditional and the modern, the local and the global—came together in uneasy but beautiful coexistence. She saw a microcosm of the city itself, messy and vibrant and alive.\n\nShe raised her glass. 'To the last drink,' she said. 'And to the first.'"
      },
      {
        title: "Story 2: The Uber Driver's Confession",
        content: "The Uber driver's name was Patrick, and he had a PhD in philosophy from the University of Ghana. He told me this as we crawled through traffic on the Tema Motorway, the rain turning the road into a river of red light.\n\n'I studied Kierkegaard,' he said, his eyes on the brake lights ahead. 'I wrote my thesis on anxiety and freedom. Now I driveUber. There is a joke in there somewhere, but I have been telling it for so long that I can no longer hear it.'\n\nI asked him why he drove. He laughed—a real laugh, not the performative kind you hear at networking events. 'Because it is honest work. Because I meet people like you, people who are going somewhere, and for a few minutes I am part of their story. And because the university does not pay enough to feed my children.'\n\nWe talked about the city, about the changes he had seen in twenty years of driving. He told me about the old Accra, when Osu was a fishing village and Legon was surrounded by forest. He told me about the new Accra, where a two-bedroom apartment in East Legon costs more than his annual salary.\n\nWhen we reached my destination, he handed me his card. 'If you ever want to talk philosophy,' he said, 'I am available. The rate is very reasonable.'\n\nI took the card. I have not called him yet. But I think about him often."
      },
      {
        title: "Story 3: The Slay Queen's Guide to Surviving Accra",
        content: "Rule number one: Never let them see you sweat. Rule number two: Always have an exit strategy. Rule number three: The most expensive thing in your life is not your rent—it is your pride.\n\nAkosua had learned these rules the hard way. She had arrived in Accra three years ago with a degree in marketing from the University of Cape Town and a head full of dreams. The dreams had not worked out quite as planned. The marketing job had turned out to be a sales job in disguise. The boyfriend had turned out to be married. The apartment in Cantonments had turned out to be infested with cockroaches.\n\nBut Akosua was a survivor. She had pivoted—another word for admitting defeat while pretending it was a strategy. She started a fashion blog, then an Instagram page, then a small business selling imported clothes. The money was not great, but it was hers. And in Accra, where appearances mattered more than reality, she had learned to make the most of what she had.\n\n'The trick,' she told me over cocktails at the Pool Bar, 'is to never let anyone know how much you are struggling. In Accra, if people think you are failing, they will treat you like you are invisible. But if they think you are succeeding, doors open that you did not know existed.'\n\nShe raised her glass—a glass of wine that cost more than she should have spent, but that she would put on her blog as evidence of her sophistication. 'To the performance,' she said. 'And to the woman behind it.'"
      },
      {
        title: "Story 4: The Night the Lights Went Out",
        content: "The power cut at 11:47 PM, just as the DJ was building to the crescendo of his set. The music stopped, the lights died, and for a moment, the only sound was the collective groan of three hundred people who had just paid fifty cedis to get in.\n\nThen the candles came out. Someone produced a guitar. Someone else started singing. And in the flickering candlelight, something magical happened—the pretense fell away. The tech bros stopped talking about their startups. The slay queens stopped posing for photos. The old men stopped holding court.\n\nFor the first time that night, people were actually talking to each other. Not networking, not posturing, not performing—but talking. A woman told a story about her grandmother that made a stranger cry. Two men who had been rivals for years discovered they had grown up on the same street. A teenager who had snuck in showed the crowd a dance that made everyone laugh.\n\nThe power came back two hours later. The music restarted, the lights came on, and the pretense returned. But something had shifted. For those two hours, in the darkness, Accra had remembered what it was—not a city of tribes and classes and hierarchies, but a community of people who shared a geography and a history.\n\nI think about that night often. I think about what we lose when the lights are on."
      },
      {
        title: "Story 5: The Morning After",
        content: "The morning after a night out in Accra is a specific kind of hangover. It is not just the physical discomfort—the headache, the dry mouth, the vague nausea. It is the emotional reckoning—the texts you sent that you wish you hadn't, the conversations you had that you can't quite remember, the realizations that surfaced in the small hours and now seem both profound and embarrassing.\n\nKojo woke up at 7 AM in a stranger's apartment in Labone. He did not remember how he got there. The room was small and neat, decorated with prints of local art and stacks of books on architecture. Through the window, he could see the tops of palm trees and hear the call to prayer from the mosque down the street.\n\nHe lay there for a long time, listening to the sounds of the city waking up—the trotro horns, the street vendors, the distant bark of a dog. He thought about the night before—the drinks, the music, the conversation. He thought about the woman whose apartment this was, a lawyer he had met at the bar, someone who had challenged his assumptions about success and happiness.\n\nHe got up, dressed, and left a note on the kitchen counter: 'Thank you for the conversation. And for not judging me too harshly.' He walked out into the morning heat, the city buzzing around him, feeling simultaneously exhausted and alive.\n\nThe morning after is when the real stories begin."
      }
    ]
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
    pages: 280,
    language: "English",
    isbn: "978-0-9925876-3-4",
    publishedDate: "2025-09-15",
    publisher: "Sub-Saharan Publishers",
    previewChapters: 2,
    chapters: [
      { title: "Chapter 1: The Golden Stool", content: "The elders gathered beneath the Odum tree, their shadows long in the afternoon heat. Okomfo Anokye stood at the centre, his voice carrying across the clearing like a drumbeat. He spoke of the golden stool that would unite the Ashanti people, a stool that would hold the soul of the nation.\n\nThe crowd was sceptical. They had heard promises before, from chiefs and priests and wandering prophets. But there was something in Anokye's eyes, a fire that could not be extinguished by doubt.\n\n'Sit, O Kwame,' he commanded, and the young warrior obeyed. The golden stool descended from the heavens, landing on Kwame's knees with a weight that was both physical and spiritual. The people fell to their knees. The Ashanti Kingdom had begun." },
      { title: "Chapter 2: The Price of Unity", content: "Unity, the elders taught, was not free. It demanded sacrifice, compromise, and the subordination of individual desire to collective purpose. The Ashanti confederacy was built on this principle, each state surrendering a measure of sovereignty for the promise of collective strength.\n\nBut the price was higher than anyone had imagined. Wars with the Fante, the Ga, the Denkyira, each one claiming lives that could never be replaced. Mothers who buried sons. Children who grew up fatherless. The drums that called men to battle also called them to their deaths.\n\nYet the kingdom endured. It endured because the alternative, fragmentation and weakness, was worse. The Ashanti chose unity not because it was easy, but because the cost of division was unbearable." }
    ]
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
    pages: 224,
    language: "English",
    isbn: "978-0-9925876-5-8",
    publishedDate: "2026-01-20",
    publisher: "Farafina Trust",
    previewChapters: 2,
    chapters: [
      { title: "Story 1: The Jollof Wars", content: "Let me tell you something about jollof rice. It is not just food. It is identity. It is national pride. It is the hill upon every West African is willing to die on, figuratively speaking, though I have seen arguments at parties that came dangerously close to literal.\n\nI grew up in a house where my mother's jollof was the standard by which all other jollof was measured. This is not hyperbole. This is Ghanaian motherhood. The rice must be red, but not too red. The tomato must be fresh, never from a tin. The seasoning must include a secret ingredient that changes depending on her mood.\n\nMy Nigerian neighbours across the street had their own opinions. Their jollof was smokier, they said, cooked over firewood and infused with the spirit of competition. Their rice was longer grain, their peppers hotter, their confidence louder.\n\nThe truth, as always, lies somewhere in the middle. Both jollofs are excellent. Both nations are right. And both will never, ever admit it." },
      { title: "Story 2: The Uber Driver's Confession", content: "The Uber driver's name was Patrick, and he had a PhD in philosophy from the University of Ghana. He told me this as we crawled through traffic on the Tema Motorway, the rain turning the road into a river of red light.\n\n'I studied Kierkegaard,' he said, his eyes on the brake lights ahead. 'I wrote my thesis on anxiety and freedom. Now I drive Uber. There is a joke in there somewhere, but I have been telling it for so long that I can no longer hear it.'\n\nI asked him why he drove. He laughed, a real laugh, not the performative kind you hear at networking events. 'Because it is honest work. Because I meet people like you, people who are going somewhere, and for a few minutes I am part of their story.'\n\nWe talked about the city, about the changes he had seen in twenty years of driving. He told me about the old Accra, when Osu was a fishing village and Legon was surrounded by forest." }
    ]
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
    pages: 340,
    language: "English",
    isbn: "978-0-9925876-7-2",
    publishedDate: "2025-11-01",
    publisher: "African Minds",
    previewChapters: 2,
    chapters: [
      { title: "Chapter 1: The MEST Dream", content: "The Meltwater Entrepreneurial School of Technology sits on a quiet street in East Legon, Accra. From the outside, it looks like any other office building. Inside, it is the factory floor of Ghana's tech future.\n\nI arrived on a Monday morning in March, one of thirty-two students selected from over two thousand applicants. The programme was two years, fully funded, and promised to turn us into entrepreneurs. What it actually did was break us down and rebuild us, piece by piece, until we could think in code and speak in pitch decks.\n\nThe first six months were brutal. We coded for twelve hours a day, seven days a week. We built apps that nobody wanted, pitched ideas that nobody funded, and failed in ways we could not have imagined. But failure, we learned, was the curriculum. The real education was in the getting back up.\n\nBy the end of the first year, half the class had dropped out. The survivors were different people, harder and more focused, with eyes that had seen both the promise and the peril of building something from nothing." },
      { title: "Chapter 2: Kumasi Rising", content: "Everyone talks about Accra when they talk about tech in Ghana. The capital city, with its beaches and its nightlife and its conference centres, gets all the attention. But the real revolution, I believe, is happening in Kumasi.\n\nThe Kumasi Innovation Hub opened in 2024, in a converted warehouse near the Kejetia Market. It was founded by a group of MEST graduates who had tired of Accra's inflated rents and inflated egos. They wanted to build something different, something rooted in the second city's traditions of craft and commerce.\n\nThe hub now houses forty-seven startups, employing over three hundred people. They work on everything from agricultural technology to mobile payments, from health tech to creative AI. The common thread is pragmatism. These are not founders chasing unicorns. They are builders solving problems that matter." }
    ]
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
