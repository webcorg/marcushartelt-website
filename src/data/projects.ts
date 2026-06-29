export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  status: 'published' | 'draft';
  updatedAt: string;
  heroImage: string;
  heroAlt: string;
  previewVideo: string;
  videoVertical: boolean;
  galleryImages: string[];
  description: string;
  pageNumber: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "mh-001",
    slug: "stays-essentials-aw26",
    title: "STAYS Essentials AW26",
    category: "Fashion",
    location: "Berlin",
    year: "2025",
    client: "STAYS",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/7wt7vDMNcCWmqFdEobeRfyWjCn4.jpg",
    heroAlt: "A person dressed entirely in loose, black clothing is crouched with their head bowed, creating a dramatic and mysterious silhouette against a plain, light background.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/7wt7vDMNcCWmqFdEobeRfyWjCn4.jpg"],
    description: "A visual campaign created for STAYS, designed around the Essentials collection. The project translates a reduced, contemporary fashion aesthetic into a cinematic black-and-white visual language. Defined by mood, clarity, and refined form, the imagery highlights the understated character of the collection while emphasizing its quality and modern appeal.",
    pageNumber: "208",
    featured: true
  },
  {
    id: "mh-002",
    slug: "seeds-management-2025",
    title: "SEEDS Management",
    category: "Fashion",
    location: "Berlin",
    year: "2025",
    client: "SEEDS Management",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/MCyL1SaOvf241SjclIcQnWHDW8.jpg",
    heroAlt: "A person with short hair wears a black, feather-accented sleeveless top and a chunky silver necklace, posing against a dark background.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/MCyL1SaOvf241SjclIcQnWHDW8.jpg"],
    description: "An editorial production created for SEEDS Management, shot with fashion represented by Stay Away From Evil. The project focuses on mood-driven imagery and blending contemporary fashion sensibilities with a cinematic visual language.",
    pageNumber: "207",
    featured: true
  },
  {
    id: "mh-003",
    slug: "two-management-ny-2025",
    title: "Two Management, NY",
    category: "Fashion",
    location: "New York",
    year: "2025",
    client: "Two Management",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/PTaXq0ejDodpuEdEiUA0yuOah8.jpg",
    heroAlt: "A person with short brown hair partially hides their face behind a gray coat, with urban skyscrapers and a cloudy sky visible in the background.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/PTaXq0ejDodpuEdEiUA0yuOah8.jpg"],
    description: "An editorial story with Thomas for Two Management, NY, captured on 35mm film.",
    pageNumber: "206",
    featured: true
  },
  {
    id: "mh-004",
    slug: "w1p-studios-ss26",
    title: "W1P Studios SS26",
    category: "Fashion",
    location: "Berlin",
    year: "2025",
    client: "W1P Studios",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/ikqdJwmZ0GXjvSLCVXsCbolhw0.jpg",
    heroAlt: "A brown-haired person wearing a white shirt strikes a dramatic pose in front of flashing lightning, their hands partially covering their face. The letters F, U, C, K stand out prominently in the scene.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/ikqdJwmZ0GXjvSLCVXsCbolhw0.jpg"],
    description: "Editorial shoot featuring two distinct looks from the SS26 collection, produced in collaboration with W1P Studios.",
    pageNumber: "205",
    featured: true
  },
  {
    id: "mh-005",
    slug: "vanessa-baernthol-ss26",
    title: "Vanessa Baernthol SS26",
    category: "Fashion",
    location: "Berlin",
    year: "2025",
    client: "Vanessa Baernthol",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/jYEQtorTmcJRKiVyT1adUg4HYNM.jpg",
    heroAlt: "A person dressed in a stylish, silvery hooded outfit stands confidently on a staircase, blending gothic and avant-garde fashion elements amidst a dramatic indoor setting.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/jYEQtorTmcJRKiVyT1adUg4HYNM.jpg"],
    description: "Editorial shoot capturing the latest looks unveiled at Berlin Fashion Week by Vanessa Baernthol.",
    pageNumber: "204",
    featured: true
  },
  {
    id: "mh-006",
    slug: "emanuel-ungaro-ss26",
    title: "Emanuel Ungaro SS26",
    category: "Fashion",
    location: "Paris",
    year: "2025",
    client: "Emanuel Ungaro",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/JheUIrWy2XIW5B5UUKVk8zkDjLc.jpg",
    heroAlt: "A person in a sleek, double-breasted white suit stands elegantly against a light-colored wall, exuding sophistication and modern style.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/JheUIrWy2XIW5B5UUKVk8zkDjLc.jpg"],
    description: "Lookook shooting showcasing the latest looks from Emanuel Ungaro, presented at Paris Fashion Week.",
    pageNumber: "203",
    featured: true
  },
  {
    id: "mh-007",
    slug: "poet-lab-spring-love-2025",
    title: "Poet-Lab: Spring & Love",
    category: "Fashion",
    location: "London",
    year: "2025",
    client: "Poet-Lab",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/0K780Qzx7fcT0M0lD66jYJhHdfY.jpg",
    heroAlt: "A person wearing a vibrant, floral-patterned shirt and cream-colored pants strikes a dynamic pose against a stone wall backdrop, exuding confidence and artistic expression.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/0K780Qzx7fcT0M0lD66jYJhHdfY.jpg"],
    description: "An editorial project capturing Poet-Lab’s latest designs, celebrating the theme “Spring & Love: A New Chapter of Beauty in Motion.”",
    pageNumber: "202",
    featured: true
  },
  {
    id: "mh-008",
    slug: "w1p-studios-x-timo-kurz-2025",
    title: "W1P Studios x Timo Kurz",
    category: "Fashion",
    location: "Berlin",
    year: "2025",
    client: "W1P Studios",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/CB2vJtg0xHIhpc9D7iaCStVfFGo.jpg",
    heroAlt: "A person in a white, textured sweater and loose-fitting dark pants strikes a dynamic dance pose against a soft blue background, conveying a sense of movement and style.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/CB2vJtg0xHIhpc9D7iaCStVfFGo.jpg"],
    description: "Editorial shoot showcasing multiple fashion looks produced for W1P Studios and Timo Kurz.",
    pageNumber: "201",
    featured: true
  },
  {
    id: "mh-009",
    slug: "collective-bikes-2026",
    title: "Collective Bikes",
    category: "Lifestyle",
    location: "London",
    year: "2026",
    client: "Collective Bikes",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/ix8Zhp6fntmqwjsIHwrZjVHng.jpg",
    heroAlt: "Collective Bikes",
    previewVideo: "https://framerusercontent.com/assets/adgqGOCwPtZ1No9Vrdq5jmQh51o.mp4",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/ix8Zhp6fntmqwjsIHwrZjVHng.jpg"],
    description: "Social media campaign for Collective Bikes, shot on 35mm film across the streets of Elephant and Castle, South London. The project blends urban culture with the identity of the brand, capturing analog grain, raw locations, authentic talent, and a visual language that feels as lived-in as the neighbourhood itself.",
    pageNumber: "304",
    featured: true
  },
  {
    id: "mh-010",
    slug: "meyer-optik-goerlitz-2025",
    title: "Meyer Optik Görlitz",
    category: "Lifestyle",
    location: "Berlin",
    year: "2025",
    client: "Meyer Optik Görlitz",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/roG0p5J9fsLaNzrFBt8CewVoJa8.jpg",
    heroAlt: "A person with long brown hair posed in profile amidst a lush, green forest background, wearing a sleeveless white top, highlighting a serene connection with nature.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/roG0p5J9fsLaNzrFBt8CewVoJa8.jpg"],
    description: "For a campaign with Meyer Optik Görlitz, I worked with the Trioplan 50mm f/2.8 II, a lens that shapes atmosphere as much as it captures images. A dancer moves freely between nature and the city, and the Trioplan follows her through this shift, connecting both worlds through its soft focus and iconic bokeh. The result is a series that does not document but interprets.",
    pageNumber: "303",
    featured: true
  },
  {
    id: "mh-011",
    slug: "fabletics-2025",
    title: "Fabletics",
    category: "Lifestyle",
    location: "London",
    year: "2025",
    client: "Fabletics",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/5WzfiJV8B6gNimdVzBX0a3HSQ.jpg",
    heroAlt: "A person wearing a light gray, long-sleeve cropped sweatshirt paired with matching joggers featuring an embroidered logo on both garments, stands with one hand casually placed in their pocket, highlighting comfortable and fashionable loungewear.",
    previewVideo: "https://framerusercontent.com/assets/3Gl89lHRxFDGMac7THknzMkZZE.mp4",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/5WzfiJV8B6gNimdVzBX0a3HSQ.jpg"],
    description: "Social media content creation for Fabletics, featuring influencer collaborations.",
    pageNumber: "302",
    featured: true
  },
  {
    id: "mh-012",
    slug: "footlocker-x-blockschmidt-2025",
    title: "Footlocker x Blockschmidt",
    category: "Lifestyle",
    location: "Berlin",
    year: "2025",
    client: "Blockschmidt",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/xfhUWZODOctqyZ8yYegMFjVrRao.jpg",
    heroAlt: "A close-up image of a modern sneaker with a sleek, futuristic design, featuring wavy soles and a mix of white and gray tones, worn with striped white athletic socks and light gray joggers.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/xfhUWZODOctqyZ8yYegMFjVrRao.jpg"],
    description: "Editorial project featuring the collaboration between Blockschmidt, adidas, and Footlocker.",
    pageNumber: "301",
    featured: true
  },
  {
    id: "mh-013",
    slug: "rebekka-ruetz-aw26",
    title: "rebekka ruètz AW26",
    category: "Fashion Week",
    location: "Berlin",
    year: "2026",
    client: "rebekka ruètz",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/4ymrky5vVXuBpTSTc1GIteO6FI.jpg",
    heroAlt: "A model walks the runway wearing a dramatic, gothic-inspired black gown with intricate cut-out patterns, complemented by striking dark makeup and a voluminous, intricate hairstyle, set against a dark, minimalist background.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/4ymrky5vVXuBpTSTc1GIteO6FI.jpg"],
    description: "Official Photographer at rebekka ruètz AW26 runway show at Berlin Fashion Week.",
    pageNumber: "404",
    featured: true
  },
  {
    id: "mh-014",
    slug: "hengdi-wang-ss26",
    title: "Hengdi Wang SS26",
    category: "Fashion Week",
    location: "London",
    year: "2025",
    client: "Hengdi Wang",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/0Zw029vJTUqjBrjb3rnvrBQXnmo.jpg",
    heroAlt: "A person wearing an intricate, light-reflecting metallic suit and a pearl necklace poses dramatically under moody lighting with one hand partially covering their face.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/0Zw029vJTUqjBrjb3rnvrBQXnmo.jpg"],
    description: "Official photographer for Hengdi Wang’s SS26 collection during London Fashion Week.",
    pageNumber: "403",
    featured: true
  },
  {
    id: "mh-015",
    slug: "poet-lab-ss26",
    title: "Poet-Lab SS26",
    category: "Fashion Week",
    location: "London",
    year: "2025",
    client: "Poet-Lab",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/af9pMPIw88BXiOtZ2db50kZs4e8.jpg",
    heroAlt: "A model struts down the runway wearing an avant-garde dress resembling fluffy white clouds, set in an opulent venue with blurred figures in the background, highlighting fashion innovation and creativity.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/af9pMPIw88BXiOtZ2db50kZs4e8.jpg"],
    description: "Official photographer for Poet-Lab’s SS26 show at London Fashion Week.",
    pageNumber: "402",
    featured: true
  },
  {
    id: "mh-016",
    slug: "walter-van-beirendonck-ss26",
    title: "Walter Van Beirendonck SS26",
    category: "Fashion Week",
    location: "Paris",
    year: "2025",
    client: "Walter van Beirendonck",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/4iqoxbvIYEHpMfkePdFzFNqj0JA.jpg",
    heroAlt: "A model walks down the runway in a sleeveless, abstract-patterned top and a dark skirt, accessorized with oversized earrings, bold necklaces, large bangles, and decorative socks paired with unique black shoes, in a fashion show setting filled with seated spectators.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/4iqoxbvIYEHpMfkePdFzFNqj0JA.jpg"],
    description: "Photographer at Walter Van Beirendonck’s SS26 show during Paris Fashion Week.",
    pageNumber: "401",
    featured: true
  },
  {
    id: "mh-018",
    slug: "purish-x-revitalash-2026",
    title: "Purish x RevitaLash",
    category: "Events",
    location: "Berlin",
    year: "2026",
    client: "Purish GmbH",
    status: 'published',
    updatedAt: "2026-06-29",
    heroImage: "/images/projects/purish-x-revitalash-2026/08.webp",
    heroAlt: "A runner in pastel sportswear and pink sunglasses is captured mid run in the city during the Run for Confidence charity event.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["/images/projects/purish-x-revitalash-2026/08.webp"],
    description: "Run for Confidence 2026 brought the community together for the second charity run with RevitaLash Cosmetics. Shot for Green Eyes Media, the project captures movement, connection and the energy of a day that opened YES!CON. Every step supported a bigger cause and together the community raised 10.000 € for the Carl Jakob Haupt organisation.",
    pageNumber: "502",
    featured: true
  },
  {
    id: "mh-017",
    slug: "about-you-x-urban-sports-club-2025",
    title: "ABOUT YOU x Urban Sports Club",
    category: "Events",
    location: "Berlin",
    year: "2025",
    client: "Urban Sports Club",
    status: 'published',
    updatedAt: "2026-06-25",
    heroImage: "https://framerusercontent.com/images/7sMAEvwWLjmbMPxt6ybmhj702M.jpg",
    heroAlt: "A person is wearing a sleeveless shirt with bold, playful text saying \"HOT BOYS CRY\" amidst a lively indoor gathering, surrounded by casually dressed people, capturing a sense of youthful, trendy fashion.",
    previewVideo: "",
    videoVertical: true,
    galleryImages: ["https://framerusercontent.com/images/7sMAEvwWLjmbMPxt6ybmhj702M.jpg"],
    description: "Photographer for the activation and event during ABOUT YOU Fashion Week, in collaboration with Urban Sports Club.",
    pageNumber: "501",
    featured: true
  }
];




export const projectsForArchive = [...projects];

export const featuredProjects = projectsForArchive.filter((project) => project.featured);

export const firstProject = projectsForArchive[0] ?? projects[0];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = projectsForArchive.findIndex((project) => project.slug === slug);
  if (index < 0) return { previousProject: undefined, nextProject: undefined };
  return {
    previousProject: projectsForArchive[(index - 1 + projectsForArchive.length) % projectsForArchive.length],
    nextProject: projectsForArchive[(index + 1) % projectsForArchive.length]
  };
}
