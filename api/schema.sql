-- Eagle Tiger Fabb & Infra: backend schema
-- Import this once into your MySQL database (local XAMPP or Hostinger phpMyAdmin).

CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(160) NOT NULL,
  plot_location VARCHAR(160) NULL,
  service_type VARCHAR(120) NULL,
  message TEXT NULL,
  source VARCHAR(40) NOT NULL DEFAULT 'contact_form',
  status ENUM('new', 'contacted', 'won', 'lost') NOT NULL DEFAULT 'new',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS blog_posts (
  id VARCHAR(80) PRIMARY KEY,
  title VARCHAR(220) NOT NULL,
  excerpt TEXT NOT NULL,
  content LONGTEXT NOT NULL,
  category VARCHAR(80) NOT NULL,
  read_time VARCHAR(40) NOT NULL,
  author VARCHAR(120) NOT NULL,
  image VARCHAR(400) NOT NULL,
  published TINYINT(1) NOT NULL DEFAULT 1,
  post_date DATE NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed the blog with the posts that used to be hardcoded in src/data/index.ts,
-- so the blog page isn't empty on first run.

INSERT INTO blog_posts (id, title, excerpt, content, category, read_time, author, image, published, post_date) VALUES
(
  'bylaws-gurugram-low-rise',
  'Haryana Building Bylaws: Ultimate Guide for Low-Rise & Stilt + 4 Floors',
  'Navigating Gurugram and Manesar building codes. Learn floor area ratio rules, setback requirements, stilt parking safety laws, and municipal permissions.',
  '<p>Building a home in Haryana requires understanding the strict building bylaws enforced by DTCP, HSIIDC, and local municipal corporations. This guide explores the Stilt + 4 independent floor policy, explaining maximum permissible heights (typically 15 meters for stilts, 16.5 meters with stilt parking), maximum Floor Area Ratio (FAR) definitions, structural audit guidelines, seismic zones calculations for Gurugram (Zone IV), and the mandatory rainwater harvesting parameters for green certifications. Working with a registered civil contractor like Eagle Tiger guarantees your building is fully compliant, avoiding massive administrative penalties or structural demolition risks.</p>',
  'Local Bylaws',
  '6 Min Read',
  'Er. Rajesh Kumar, Structural Lead',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  1,
  '2026-05-14'
),
(
  'rcc-structure-durability-tips',
  'The Engineering of RCC Slabs: How to Prevent Lifelong Dampness & Cracking',
  'Learn why moisture and cement cracks occur on roof casting. Explore premium waterproofing strategies, curing standards, and steel grade criteria.',
  '<p>An RCC structure forms the absolute skeleton of your luxury residence. Minor shortcuts during casting can result in permanent concrete dampness, ceiling water seepage, and micro-cracking. In this post, we explain the crucial water-cement ratio checks, why we strictly advocate for Fe550D TMT bars over Fe500, the importance of keeping the roof slab moist with proper curing for 14 continuous days, and our triple-layer polyurethane waterproofing layout. By implementing concrete vibrators and professional slump testing, we guarantee an ultra-high density slab designed to last a lifetime.</p>',
  'Engineering Superiority',
  '8 Min Read',
  'Er. Devinder Yadav, Senior Civil Engineer',
  'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80',
  1,
  '2026-06-02'
),
(
  'turnkey-vs-local-mistri',
  'Turnkey Contracts vs. Local Labor Contractors: The True Cost Comparison',
  'Is a cheap local builder actually cheaper? Discover the hidden costs of material leakages, delay penalties, and poor raw quality.',
  '<p>While local labor mistris (contractors) quote low per-square-foot baseline numbers, they often hide massive pricing loops. These include sub-grade bricks, unbranded wiring, steel quantity manipulations, and endless delays due to manual labor sourcing challenges. A turnkey contract with Eagle Tiger locks in your materials down to the precise brand name, guarantees concrete durability with certified tests, and legally enforces completion dates. We compare structural safety, supervision overheads, procurement rates, and detailed quality checkpoints to reveal why a professional turnkey builder saves you up to 15% on total structural maintenance over five years.</p>',
  'Home Building Guide',
  '5 Min Read',
  'Sandeep Gahlot, Managing Director',
  'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80',
  1,
  '2026-06-28'
);
