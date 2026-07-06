import { Project, Service, Testimonial, BlogPost, FAQItem, TimelineStep, TeamMember } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    icon: 'Home',
    description: 'Bespoke independent villas, floors, and low-rise residential structures built to international standards.',
    detailedDescription: 'We build state-of-the-art residential houses, luxury floors, and modular villas. From high-grade RCC foundations to structural safety, our engineering ensures that your family home stands resilient for generations. We manage structural, electrical, plumbing, and structural detailing seamlessly.',
    benefits: [
      'Seismic-resistant RCC design guidelines',
      'Class-A bricks and branded high-tensile TMT steel',
      'Termite proofing and triple-layer waterproofing',
      'Sleek modern elevations designed for ventilation and natural light'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'turnkey-construction',
    title: 'Turnkey Construction',
    icon: 'Key',
    description: 'Hassle-free design-to-delivery services covering architecture, structural civil, permits, and finishing.',
    detailedDescription: 'Our turnkey service covers everything from plot acquisition consults and soil testing to structural designs, material procurement, government permissions, and absolute interior styling. We handle the headaches so you only receive the keys to a ready-to-move masterpiece.',
    benefits: [
      'Single point of contact for the entire lifecycle',
      'Zero budget escalations with legally locked contract pricing',
      'Strict quality timelines with penalty-backed handovers',
      'Live camera feeds and weekly milestone updates via our digital tracking portal'
    ],
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'civil-contracting',
    title: 'Civil Contracting',
    icon: 'HardHat',
    description: 'High-precision core structural civil execution with skilled execution teams and corporate supervisors.',
    detailedDescription: 'For clients with pre-designed architectural templates, we provide pure civil contracting services. Our team executes heavy earthworks, brick masonry, plastering, internal systems, and premium concrete casting with commercial-grade machinery and heavy structural supervision.',
    benefits: [
      'Experienced on-site civil engineers with 15+ years of corporate exposure',
      'Rigorous raw material testing (cement, aggregates, steel tensile parameters)',
      'Adherence to strict Indian Standard (IS) civil codes',
      'Heavy scaffolding and safety layouts ensuring hazard-free operations'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rcc-structures',
    title: 'RCC Structures & Fabrication',
    icon: 'Layers',
    description: 'Super-strength reinforced concrete frames and high-end industrial pre-engineered steel fabrications.',
    detailedDescription: 'We specialize in heavy RCC works, column casting, flat slabs, beams, and dynamic high-strength industrial structure fabrication. As custom fabricators, we deliver metal sheds, heavy framing, deck slabs, and multi-tier modular frames customized for both residential and commercial scales.',
    benefits: [
      'Strict water-cement ratio checks using digital slump tests',
      'Branded cement (Ultratech / Ambuja) and premium Fe550D TMT bars',
      'Custom heavy metal fabrication using advanced high-frequency welding machines',
      'Certified structural stability certificates provided on handover'
    ],
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'architectural-planning',
    title: 'Architectural Planning',
    icon: 'Compass',
    description: 'Breathtaking 3D elevations, structural analysis, and compliance-driven low-rise layout blueprints.',
    detailedDescription: 'Excellent structures require flawless calculations. Our engineering design team creates detailed Vastu-compliant architectural floor plans, high-fidelity 3D front elevations, mechanical/electrical/plumbing (MEP) layouts, and precise civil execution drawings.',
    benefits: [
      '3D photo-realistic walkthroughs and VR-guided layouts',
      'Optimal floor-area ratio (FAR) utilization aligned with Haryana building bylaws',
      'Fully vetted seismic-resistant structural drawings by certified engineers',
      'Eco-friendly sustainable designs maximizing cross-ventilation'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'interior-finishing',
    title: 'Interior Finishing',
    icon: 'Paintbrush',
    description: 'Luxury Italian marble work, false ceilings, bespoke cabinetry, and modern interior lighting details.',
    detailedDescription: 'We deliver ultra-premium finishing. Our team handles specialized tasks: custom Italian marble polishing, luxury tiles installation, flawless POP work, designer LED acoustics false ceilings, high-end modular kitchens, and custom-manufactured hardwood doors and window frames.',
    benefits: [
      'Flawless compound miter joints and zero-level tiles leveling',
      'Highest quality paints (Asian Paints Royale / Berger Silk)',
      'Rust-proof powder-coated high-gauge aluminum windows (UPVC premium profiles)',
      'Full bespoke material customizations to perfectly match your aesthetic'
    ],
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'project-management',
    title: 'Project Management & Audit',
    icon: 'Briefcase',
    description: 'Third-party material auditing, cost control, structural assessments, and safety supervision.',
    detailedDescription: 'If you already have a builder, we can act as your professional project management consultant (PMC). We inspect materials on-site, audit daily billing, verify steel layout configurations, check cement grades, ensure design safety, and keep the timeline in check.',
    benefits: [
      'Unbiased third-party QA/QC checks on construction sites',
      'Detailed bill verification saving up to 12% in material leakages',
      'Daily site logs and progress reporting with direct executive escalations',
      'Material test lab reports certification'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'manesar-villa-luxury',
    title: 'The Golden Crest Estate',
    category: 'Turnkey Luxury Villa',
    location: 'Sector 2, Manesar',
    duration: '14 Months',
    area: '5,500 Sq. Ft.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'A magnificent ultra-luxury residential villa featuring a triple-height lobby, expansive glass facades, custom floating structural RCC staircases, and premium structural gold-accented steel canopies. Handed over with absolute interior styling, state-of-the-art automation, and smart cooling systems.',
    highlights: [
      'Engineered M30 grade concrete structural core',
      'High-grade premium UPVC glazing for soundproofing near highway routes',
      'Bespoke Italian Botticino marble flooring with detailed inlays',
      'Integrated solar grid and smart home energy metrics'
    ]
  },
  {
    id: 'gurugram-low-rise',
    title: 'Heritage Heights Low-Rise Floors',
    category: 'Independent Floors Construction',
    location: 'Sohna Road, Gurugram',
    duration: '18 Months',
    area: '14,200 Sq. Ft.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'An premium Stilt + 4 Independent Floors development designed under the Haryana building policy. Built using high-capacity structural steel beams, heavy concrete pillars, dual-elevator cores, and beautifully optimized common entries.',
    highlights: [
      'Stilt floor with high-tensile shear walls for structural safety',
      'Individual soundproof luxury levels with modular modular kitchens',
      'Dual Otis elevator integration with acoustic dampening',
      'Premium exterior textured paint with dynamic timber HPL louvers'
    ]
  },
  {
    id: 'manesar-industrial-fabb',
    title: 'Aero-Fabb Industrial Facility',
    category: 'Industrial RCC & Structural Fabb',
    location: 'IMT Manesar, Gurugram',
    duration: '11 Months',
    area: '22,000 Sq. Ft.',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    description: 'A heavy industrial Pre-Engineered Building (PEB) combined with an elegant multi-story administrative office block. Showcases complex heavy RCC casting, high-span metal trusses, dynamic ventilation shafts, and high-load industrial floors.',
    highlights: [
      'Heavy-duty industrial vacuum-dewatered concrete flooring (FM2 level)',
      '30-meter clear-span pre-fabricated structural steel trusses',
      'Insulated sandwich panel roof cladding for dynamic temperature controls',
      'Seismic-vetted heavy machine foundation blocks'
    ]
  },
  {
    id: 'gurugram-ultra-modern-residence',
    title: 'The Obsidian House',
    category: 'Residential Design & Build',
    location: 'Sector 57, Gurugram',
    duration: '16 Months',
    area: '6,800 Sq. Ft.',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'A pathbreaking minimalist modern home featuring cantilevered structural concrete slabs, floor-to-ceiling panoramic glass, internal open courtyards, and beautiful customized interior wood-concrete-gold fusion details.',
    highlights: [
      'Double-cantilevered post-tensioned slab technology',
      'Integrated micro-cement seamless floors',
      'High-spec internal smart drainage and heat pumps',
      'Custom gold leaf high-ceiling detailing'
    ]
  },
  {
    id: 'manesar-premium-turnkey',
    title: 'The Royal Oak Floors',
    category: 'Turnkey Construction',
    location: 'Sector 1, Manesar',
    duration: '12 Months',
    area: '8,500 Sq. Ft.',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'A state-of-the-art high-density independent floors layout featuring elegant brick-slip facades, classic arches, deep-set balconies, and sustainable solar terraces. Demolition of existing structures is completed and foundation works are scheduled.',
    highlights: [
      'Eco-friendly low carbon structural footprint design',
      'Deep underground rainwater harvesting pits integration',
      'Zero-leakage warranty for 10 years including triple waterproofing',
      'High efficiency VRV air-conditioning provisions'
    ]
  }
];

export const TIMELINE: TimelineStep[] = [
  {
    title: 'Consultation & Vastu Check',
    subtitle: 'Setting Foundations',
    description: 'Detailed scope discussion, budget structuring, initial spatial sketches, and land Vastu orientation inspection.',
    duration: 'Week 1'
  },
  {
    title: 'On-Site Evaluation & Soil Testing',
    subtitle: 'Physical Reality Assessment',
    description: 'Comprehensive topographical survey, core soil bearing capacity checks (SBC), water table tests, and structural load analysis.',
    duration: 'Week 2'
  },
  {
    title: 'Architectural Planning & MEP Design',
    subtitle: 'Engineering Blueprints',
    description: 'Creation of detailed 2D layouts, 3D structural renderings, electrical, plumbing, HVAC blueprints, and civic approval drawings.',
    duration: 'Week 3 - 5'
  },
  {
    title: 'Comprehensive Transparent Estimation',
    subtitle: 'Absolute Financial Clarity',
    description: 'Detailed Bill of Quantities (BOQ) containing exact material brands, structural steel weights, cement grades, and legally bound milestones.',
    duration: 'Week 6'
  },
  {
    title: 'Civil Construction & RCC Framing',
    subtitle: 'Strength and Structure',
    description: 'Excavation, heavy-duty anti-termite treatment, high-spec foundation casting, pillar erection, solid brickwork, and slab casting.',
    duration: 'Month 2 - 8'
  },
  {
    title: 'Rigorous 150-Point Quality Inspection',
    subtitle: 'Engineering Verification',
    description: 'Dynamic pressure testing of pipes, ultrasonic concrete health audits, brick plaster alignment checks, and moisture-barrier diagnostics.',
    duration: 'Month 9'
  },
  {
    title: 'Flawless Handovers & Certifications',
    subtitle: 'Welcome to Your Legacy',
    description: 'Deep mechanical cleaning, testing of smart home assets, transfer of guarantees, and submission of the structural stability dossier.',
    duration: 'Month 10 - 12+'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Civil Engineers',
    description: 'Led by industry veterans with years of experience across massive corporate infrastructure and luxury residential developments in Haryana.',
    icon: 'Award'
  },
  {
    title: 'Branded High-Grade Materials',
    description: 'Zero local substitutes. We strictly utilize Fe550D TMT steel, Ultratech/Ambuja cement, premium UPVC profiles, and standardized copper wiring.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Legally Locked Transparent Pricing',
    description: 'Our digital Bill of Quantities (BOQ) details exactly where every rupee goes. Zero surprise costs, zero mid-project rate escalations.',
    icon: 'FileText'
  },
  {
    title: 'Continuous Rigorous Supervision',
    description: 'A dedicated on-site graduate civil engineer supervises every stage. You are never left dealing with local sub-contractors or mistris.',
    icon: 'Eye'
  },
  {
    title: '150-Point Quality Assurance',
    description: 'We perform concrete cube compress testing, moisture scanning, laser-guided level checks, and extreme plumbing pressure tests.',
    icon: 'CheckCircle'
  },
  {
    title: 'Timelines Guaranteed by Contracts',
    description: 'We believe in commitment. Our construction contracts feature strict timeline guarantees, backed by penalty clauses for delay.',
    icon: 'Clock'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Major General Vikram Singh (Retd.)',
    role: 'Homeowner, Premium Villa',
    location: 'Sector 2, Manesar',
    rating: 5,
    text: 'Building a home after retirement is a dream, but you hear so many horror stories about contractors. Eagle Tiger was an absolute blessing. Their transparent pricing, detailed BOQ, and professional engineers made the process stress-free. The concrete structural strength and elegant gold facades are beautiful. Flawless execution!',
    date: 'February 2024'
  },
  {
    id: 't2',
    name: 'Rajeev Singhal',
    role: 'Managing Director, Singhal Logistics',
    location: 'IMT Manesar',
    rating: 5,
    text: 'We commissioned them for our corporate office-cum-fabrication plant. Their heavy fabrication and structural RCC slab works are state-of-the-art. They respected industrial safety norms, finished ahead of schedule, and delivered perfect floor levels. They understand the real commercial construction standards!',
    date: 'April 2024'
  },
  {
    id: 't3',
    name: 'Dr. Ananya Sharma',
    role: 'Property Owner, Independent Floors',
    location: 'Sector 47, Gurugram',
    rating: 5,
    text: 'As a medical professional, I have zero time to manage masonry, steel delivery, or permits. Their turnkey design-and-build service was a game changer. From Haryana municipal approvals to Italian marble finishing and elevator commissioning, they handled everything. They are elite builders.',
    date: 'June 2024'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    category: 'Architecture & Elevation',
    title: 'Modern Facade Gold Accent Detail',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g2',
    category: 'RCC & Foundation',
    title: 'Heavy RCC Column Steel Layout Vetting',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g3',
    category: 'Luxury Interior',
    title: 'Premium Living Hall with Italian marble flooring',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g4',
    category: 'Structural Steel',
    title: 'Industrial Heavy Truss Fabrication and Fitting',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g5',
    category: 'Luxury Interior',
    title: 'Bespoke modern modular kitchen alignment',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g6',
    category: 'Architecture & Elevation',
    title: 'Turnkey low-rise executive elevation view',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bylaws-gurugram-low-rise',
    title: 'Haryana Building Bylaws: Ultimate Guide for Low-Rise & Stilt + 4 Floors',
    excerpt: 'Navigating Gurugram and Manesar building codes. Learn floor area ratio rules, setback requirements, stilt parking safety laws, and municipal permissions.',
    content: 'Building a home in Haryana requires understanding the strict building bylaws enforced by DTCP, HSIIDC, and local municipal corporations. This guide explores the Stilt + 4 independent floor policy, explaining maximum permissible heights (typically 15 meters for stilts, 16.5 meters with stilt parking), maximum Floor Area Ratio (FAR) definitions, structural audit guidelines, seismic zones calculations for Gurugram (Zone IV), and the mandatory rainwater harvesting parameters for green certifications. Working with a registered civil contractor like Eagle Tiger guarantees your building is fully compliant, avoiding massive administrative penalties or structural demolition risks.',
    category: 'Local Bylaws',
    readTime: '6 Min Read',
    date: 'May 14, 2026',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    author: 'Er. Rajesh Kumar, Structural Lead'
  },
  {
    id: 'rcc-structure-durability-tips',
    title: 'The Engineering of RCC Slabs: How to Prevent Lifelong Dampness & Cracking',
    excerpt: 'Learn why moisture and cement cracks occur on roof casting. Explore premium waterproofing strategies, curing standards, and steel grade criteria.',
    content: 'An RCC structure forms the absolute skeleton of your luxury residence. Minor shortcuts during casting can result in permanent concrete dampness, ceiling water seepage, and micro-cracking. In this post, we explain the crucial water-cement ratio checks, why we strictly advocate for Fe550D TMT bars over Fe500, the importance of keeping the roof slab moist with proper curing for 14 continuous days, and our triple-layer polyurethane waterproofing layout. By implementing concrete vibrators and professional slump testing, we guarantee an ultra-high density slab designed to last a lifetime.',
    category: 'Engineering Superiority',
    readTime: '8 Min Read',
    date: 'June 2, 2026',
    image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
    author: 'Er. Devinder Yadav, Senior Civil Engineer'
  },
  {
    id: 'turnkey-vs-local-mistri',
    title: 'Turnkey Contracts vs. Local Labor Contractors: The True Cost Comparison',
    excerpt: 'Is a cheap local builder actually cheaper? Discover the hidden costs of material leakages, delay penalties, and poor raw quality.',
    content: 'While local labor mistris (contractors) quote low per-square-foot baseline numbers, they often hide massive pricing loops. These include sub-grade bricks, unbranded wiring, steel quantity manipulations, and endless delays due to manual labor sourcing challenges. A turnkey contract with Eagle Tiger locks in your materials down to the precise brand name, guarantees concrete durability with certified tests, and legally enforces completion dates. We compare structural safety, supervision overheads, procurement rates, and detailed quality checkpoints to reveal why a professional turnkey builder saves you up to 15% on total structural maintenance over five years.',
    category: 'Home Building Guide',
    readTime: '5 Min Read',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80',
    author: 'Sandeep Gahlot, Managing Director'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Service Scope',
    question: 'Does Eagle Tiger Fabb & Infra provide architectural plans only, or do you also build?',
    answer: 'We are a full-service turnkey design-and-build construction company. We handle everything from the initial soil testing, Vastu architectural layouts, structural designs, and state permits, to raw civil masonry, premium structural steel fabrication, high-end Italian tiling, and turnkey key handover. However, if you already have custom architectural blueprints, we can act strictly as your civil structure contractor or RCC specialist.'
  },
  {
    category: 'Materials & Quality',
    question: 'Which raw materials do you use for your RCC frame structure?',
    answer: 'We strictly refuse unbranded local materials. Our civil structural core is built using Ultratech or Ambuja PPC cement, Fe550D high-tensile TMT steel (Tata Tiscon or Jindal Panther), graded coarse local sands, and tested clean mountain aggregates. All reinforcement detailing complies strictly with IS 456:2000 and IS 1893 seismic protection codes.'
  },
  {
    category: 'Pricing & Budget',
    question: 'How do you guarantee that construction costs will not exceed the agreed budget?',
    answer: 'We prevent cost creep using our Legally Locked Detailed BOQ (Bill of Quantities). Before a single brick is laid, we map out exact material specs, steel tonnage, paint coats, and finish models. This is appended directly to our notarized contract. The rate remains fixed irrespective of minor market variations. Zero surprise invoices.'
  },
  {
    category: 'Timelines & Deadlines',
    question: 'What is the average duration required to build an independent 3-story house?',
    answer: 'For a typical 3-story high-end residential structure in Manesar or Gurugram, civil structural frame completion requires 6 to 8 months. High-end interior finishes, carpentry, plastering, painting, and systems commissioning require another 4 to 6 months. Typically, a complete turnkey handover requires 11 to 14 months, with milestone dates protected by penalty clauses in our construction contracts.'
  },
  {
    category: 'Approvals & Bylaws',
    question: 'Do you help in securing DTCP or HSIIDC municipal approvals for Manesar layouts?',
    answer: 'Yes! Our turnkey construction package includes managing the entire municipal approval, drawing submissions, DTCP/HSIIDC low-rise floor approvals, fire security alignments, and final water-sewer-electrical occupancy certifications.'
  }
];

export const STATISTICS = [
  { value: '100+', label: 'Premium Projects', suffix: '+' },
  { value: '95%', label: 'Happy Clients', suffix: '%' },
  { value: '20+', label: 'Elite Engineers', suffix: '+' },
  { value: '100%', label: 'Pricing Transparency', suffix: '%' }
];

export const CORE_TEAM: TeamMember[] = [
  {
    name: 'Sandeep Gahlot',
    role: 'Founder & Managing Director',
    experience: '18+ Years Corporate Civil Execution',
    specialty: 'Civil Engineering & Project Controls',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Er. Rajesh Kumar',
    role: 'Chief Structural Consultant',
    experience: '15+ Years Structural Design',
    specialty: 'Seismic Analysis, RCC Drafting & Heavy Fabbs',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Er. Devinder Yadav',
    role: 'Senior QA / QC Manager',
    experience: '12+ Years Site Supervision',
    specialty: '150-Point Inspection Controls & Slump Checks',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80'
  }
];
