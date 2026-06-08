/* ─────────────────────────────────────────────────────────────
   Outdoor.js — Stellmore Italia Outdoor Product Data
   Structure mirrors Indoor.js exactly:
   - shared specs at family level (datasheet)
   - wattage variants in variants[] array (wattage, lumens, dims, code, tag)
───────────────────────────────────────────────────────────── */

const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80"; // fallback only

export const OUTDOOR_CATEGORIES = [

  // ─────────────────────────────────────────────
  // 1. SPIKE & GROUND LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "spike",
    label: "Spike & Ground Lights",
    tagline: "Precision ground accents for planting, paths and landscape features.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── TERRA family (6W / 12W / 24W) ──
      {
        id: "terra",
        name: "TERRA",
        desc: "High-quality spike spotlight — die-cast aluminium body with tempered clear glass optical lens. Adjustable head for precise accent lighting of plants, trees and garden features. Available with spike or base mount.",
        img: "/images/outdoor_images/terra.png",
        datasheet: {
          cri: "95", cct: "—",
          beam: "40° / 60° / 90°", ip: "IP66",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "110 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "BK",
          material: "Die Cast Aluminium · ABS Plastic Spike · Tempered Clear Glass with Optical Lens",
          dimming: "—",
          certifications: [], downloads: ["Stellmore Italia-TERRA.pdf", "Stellmore Italia-TERRA-2.pdf", "Stellmore Italia-TERRA-3.pdf"],
          application: "Garden Beds & Flower Borders, Pathways & Walkways, Lawn & Grass Areas, Trees & Shrubs, Outdoor Seating Areas, Water Features, Statues & Sculptures, Architectural Features, Perimeter Lighting, Outdoor Kitchen, Deck & Deck Stairs",
        },
        variants: [
          { wattage: "6W",  lumens: "660 lm",   dims: "Ø90×H118 mm",  code: "SLM-2821-SL", tag: null },
          { wattage: "12W", lumens: "1,320 lm",  dims: "Ø115×H170 mm", code: "SLM-2821-SL", tag: null },
          { wattage: "24W", lumens: "2,640 lm",  dims: "Ø73×H113 mm",  code: "SLM-2821-SL", tag: null },
        ],
      },

      // ── PICCHETTO (10W) ──
      {
        id: "picchetto",
        name: "PICCHETTO",
        desc: "Durable LED ground spike light — die-cast aluminium body with adjustable head for precision accent lighting of gardens, pathways, trees and architectural features. Suitable for both AC and DC 24V systems.",
        img: "/images/outdoor_images/picchetto.jpeg",
        datasheet: {
          cri: "80+", cct: "3000K / 4000K / 6000K",
          beam: "36° / 45° / 60°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz · DC 24V",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - PICCHETTO.pdf"],
          application: "Garden Lighting, Pathways Lighting, Facade and Wall Lighting, Tree Uplighting, Accent Lighting and general Outdoor Illumination",
        },
        variants: [
          { wattage: "10W", lumens: "850 lm", dims: "160×93×60 mm", code: "STR-90-10", tag: null },
        ],
      },

      // ── PRATTO (12W) ──
      {
        id: "pratto",
        name: "PRATTO",
        desc: "High-quality spike spotlight — die-cast aluminium with tempered clear glass optical lens and baffled head. IP66 rated adjustable accent light for garden beds, trees, sculptures and architectural features.",
        img: "/images/outdoor_images/pratto.png",
        datasheet: {
          cri: "95", cct: "—",
          beam: "30° / 60° / 90°", ip: "IP66",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "110 lm/W", power_factor: "0.5",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "BK",
          material: "Die Cast Aluminium · ABS Plastic Spike · Tempered Clear Glass with Optical Lens",
          dimming: "—",
          certifications: [], downloads: ["Stellmore Italia-PRATTO.pdf"],
          application: "Garden Beds & Flower Borders, Pathways & Walkways, Lawn & Grass Areas, Trees & Shrubs, Outdoor Seating Areas, Water Features, Statues & Sculptures, Architectural Features, Perimeter Lighting, Outdoor Kitchen, Deck & Deck Stairs",
        },
        variants: [
          { wattage: "12W", lumens: "1,320 lm", dims: "Ø120×H152 mm", code: "SLM-2820-SL", tag: null },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 2. INGROUND LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "inground",
    label: "Inground Lights",
    tagline: "Flush to the earth — invisible by day, dramatic by night.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── PRATO family (3W → 40W) ──
      {
        id: "prato",
        name: "PRATO",
        desc: "High-quality circular inground recessed fixture — die-cast aluminium body with mirror-finished aluminium reflector and PMMA opal PC lens. Anti-glare design, IP65 rated. Available in six wattages for corridors, garden and commercial areas.",
        img: "/images/outdoor_images/prato.png",
        datasheet: {
          cri: "80", cct: "—",
          beam: "38°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "—", power_factor: "0.5",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK / GR",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "0/1–10V · DALI",
          certifications: [], downloads: ["Stellmore Italia-PRATO.pdf"],
          application: "Corridors, Garden, Commercial Areas",
        },
        variants: [
          { wattage: "3W",  lumens: "—", dims: "Ø065×H80 mm",  code: "SLM-2028-03", tag: null },
          { wattage: "6W",  lumens: "—", dims: "Ø080×H90 mm",  code: "SLM-2028-06", tag: null },
          { wattage: "9W",  lumens: "—", dims: "Ø100×H90 mm",  code: "SLM-2028-09", tag: null },
          { wattage: "15W", lumens: "—", dims: "Ø120×H110 mm", code: "SLM-2028-15", tag: null },
          { wattage: "20W", lumens: "—", dims: "Ø180×H110 mm", code: "SLM-2028-20", tag: null },
          { wattage: "40W", lumens: "—", dims: "Ø250×H110 mm", code: "SLM-2028-40", tag: "HIGH OUTPUT" },
        ],
      },

      // ── SUBACQUEO (1W underground) ──
      {
        id: "subacqueo",
        name: "SUBACQUEO",
        desc: "Underground inground light — low-profile, high-strength corrosion-resistant stainless steel housing with IP68 rating. Blends naturally with surroundings; suitable for swimming pools, fountains, ponds, waterfalls and outdoor water features. Available in white, colour and RGB options.",
        img: "/images/outdoor_images/subacqueo.jpeg",
        datasheet: {
          cri: "80+", cct: "3000K / 4000K / 6000K / RGB / RGBW / RGBA",
          beam: "8° / 15° / 30° / 45° / 60°", ip: "IP68",
          voltage: "DC 12V / DC 24V",
          lifespan: "30,000 hrs", warranty: "—",
          efficiency: "40 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Stainless Steel",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - SUBACQUEO.pdf"],
          application: "Swimming Pools, Fountains, Ponds & Water Gardens, Aquariums & Large Tanks, Waterfalls, Outdoor Landscaping with Water Elements",
        },
        variants: [
          { wattage: "1W", lumens: "40 lm", dims: "Ø40×86×79 mm", code: "STR-PR-10", tag: null },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 3. TABLE & BOLLARD LAMPS
  // ─────────────────────────────────────────────
  {
    id: "bollard",
    label: "Table & Bollard Lamps",
    tagline: "Sculptural forms that anchor garden paths and terraces.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── TAVOLO ──
      {
        id: "tavolo",
        name: "TAVOLO",
        desc: "Modern outdoor LED table lamp — minimalist cylindrical structure with solid base and top connected by a sleek vertical support. Energy-efficient LED module in the upper section.",
        img: "/images/outdoor_images/tavolo.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "286°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - TAVOLO.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "9W", lumens: "720 lm", dims: "Ø90×195 mm", code: "STR-5020", tag: null },
        ],
      },

      // ── FUNGO TERRA family ──
      {
        id: "fungo-terra",
        name: "FUNGO TERRA",
        desc: "Stylish outdoor table or bollard lamp — sculptural conical silhouette available in two colourways. Seamlessly blends into garden, patio, or outdoor lounge environments offering visual warmth and functional illumination.",
        img: "/images/outdoor_images/fungo-terra.jpeg",
        datasheet: {
          cri: "90", cct: "TRI CCT",
          beam: "95°", ip: "IP54",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "Anthracite Grey / Reddish Brown",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: [],
          application: "Pathways & Walkway Illumination, Landscape & Garden Accents, Driveway & Entrance Lighting, Security, Aesthetic Enhancement & Ambiance",
        },
        variants: [
          { wattage: "2.5W", lumens: "200 lm", dims: "Ø150×230 mm", code: "STR-502", tag: null },
          { wattage: "2.5W", lumens: "200 lm", dims: "Ø150×250 mm", code: "STR-503", tag: null },
        ],
      },

      // ── NEOLUCE (2.5W portable) ──
      {
        id: "neoluce",
        name: "NEOLUCE",
        desc: "Sleek portable outdoor lamp — refined silhouette with cylindrical light head, slim vertical stem and sturdy flared base. Tri-CCT selectable. Matte black die-cast aluminium. Ideal for café terraces, garden dining, hotels and outdoor events.",
        img: "/images/outdoor_images/neoluce.jpeg",
        datasheet: {
          cri: "90", cct: "TRI CCT",
          beam: "49°", ip: "IP54",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "BK",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - NEOLUCE.pdf"],
          application: "Outdoor dining, Gardens & patios, Hotels & resorts, Events & banquets, Residential",
        },
        variants: [
          { wattage: "2.5W", lumens: "200 lm", dims: "Ø120×275 mm", code: "STR-501", tag: null },
        ],
      },

      // ── RIGATO - C (6W cylindrical bollard) ──
      {
        id: "rigato-c",
        name: "RIGATO - C",
        desc: "Modern outdoor bollard light — cylindrical open-frame design with downward-facing LED light source at top, supported by vertical bars for even, unobstructed light spread. Ideal for pathway and perimeter lighting.",
        img: "/images/outdoor_images/rigato-c.jpeg",
        datasheet: {
          cri: "80", cct: "3000K",
          beam: "80°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - RIGATO -C.pdf"],
          application: "Pathway Lighting, Driveways & Entrances, Landscape Highlighting, Decorative Ambience, Perimeter Lighting",
        },
        variants: [
          { wattage: "6W", lumens: "480 lm", dims: "Ø90×180 mm", code: "STR-6150", tag: "CYLINDER" },
        ],
      },

      // ── RIGATO - S (6W square bollard) ──
      {
        id: "rigato-s",
        name: "RIGATO - S",
        desc: "Modern outdoor square bollard light — open-frame structure for architectural appeal. Light source at top projects illumination downward for soft, uniform effect on pathways. Geometric minimal design for contemporary landscapes.",
        img: "/images/outdoor_images/rigato-s.jpeg",
        datasheet: {
          cri: "80", cct: "3000K",
          beam: "80°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - RIGATO -S.pdf"],
          application: "Pathway Lighting, Driveways & Entrances, Landscape Highlighting, Decorative Ambience, Perimeter Lighting",
        },
        variants: [
          { wattage: "6W", lumens: "480 lm", dims: "195×105×105 mm", code: "STR-6160", tag: "SQUARE" },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 4. WALL SPOTLIGHTS
  // ─────────────────────────────────────────────
  {
    id: "street",
    label: "Wall Spotlights",
    tagline: "170° rotation — direct the beam wherever it's needed.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── PUNTO family (5W / 10W / 12W) ──
      {
        id: "punto",
        name: "PUNTO",
        desc: "High-quality outdoor wall spotlight — die-cast aluminium with mirror-finished reflector and PMMA opal lens. Clean surface-mount design for corridors, garden walls and commercial facades.",
        img: "/images/outdoor_images/punto.png",
        datasheet: {
          cri: "80", cct: "—",
          beam: "38°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "—", power_factor: "0.5",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK / GR",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "0/1–10V · DALI",
          certifications: [], downloads: ["Stellmore Italia-PUNTO.pdf"],
          application: "Corridors, Garden, Commercial Areas",
        },
        variants: [
          { wattage: "5W",  lumens: "—", dims: "Ø65×112×H130 mm",  code: "SLM-1203R-1S-LM", tag: null },
          { wattage: "10W", lumens: "—", dims: "Ø90×147×H160 mm",  code: "SLM-1203R-1M-LM", tag: null },
          { wattage: "12W", lumens: "—", dims: "Ø108×167×H160 mm", code: "SLM-1203R-1L-LM",  tag: null },
        ],
      },

      // ── BARILE (single head) ──
      {
        id: "barile",
        name: "BARILE",
        desc: "Modern outdoor wall-mounted spotlight — 170° rotation to highlight specific areas or create dynamic lighting effects. Single cylindrical head, die-cast aluminium.",
        img: "/images/outdoor_images/barile.jpg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "54°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - BARILE.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "GU10", lumens: "—", dims: "Ø60×95×115 mm", code: "STR-791-1W", tag: null },
        ],
      },

      // ── BARILE - D (dual head) ──
      {
        id: "barile-d",
        name: "BARILE - D",
        desc: "Modern dual wall-mounted spotlight — twin heads with 170° rotation for dynamic accent lighting. Minimalist cylindrical design in die-cast aluminium.",
        img: "/images/outdoor_images/barile-d.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "54°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - BARILE -D.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "GU10", lumens: "—", dims: "Ø60×95×180 mm", code: "STR-791-2W", tag: null },
        ],
      },

      // ── DOPPIA - S ──
      {
        id: "doppia-s",
        name: "DOPPIA - S",
        desc: "Adjustable LED wall spotlight for indoor and outdoor use. 170° adjustable head for precise directional lighting of architectural features and pathways.",
        img: "/images/outdoor_images/doppia-s.jpg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "59°", ip: "IP65",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - DOPPIA -S.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "GU10", lumens: "—", dims: "Ø100×Ø125×125 mm", code: "STR-8021-1W", tag: null },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 5. WALL & CEILING LIGHTS
  // ─────────────────────────────────────────────
  {
    id: "wallwasher",
    label: "Wall & Ceiling Lights",
    tagline: "Cylindrical, linear and geometric forms for architectural surfaces.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── CORNICE ──
      {
        id: "cornice",
        name: "CORNICE",
        desc: "High-quality recessed step/wall fixture — die-cast aluminium body with anti-glare PMMA opal lens. Ideal for corridors, garden paths and commercial areas. IP65 rated.",
        img: "/images/outdoor_images/cornice.png",
        datasheet: {
          cri: "80", cct: "—",
          beam: "45°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "—", power_factor: "0.5",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "BRIDGELUX", finish: "WH / BK / GR",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["Stellmore Italia-CORNICE.pdf"],
          application: "Corridors, Garden, Commercial Areas",
        },
        variants: [
          { wattage: "9W", lumens: "—", dims: "210×65×H60 mm", code: "SLM-2692-9", tag: null },
        ],
      },

      // ── PARETE - B ──
      {
        id: "parete-b",
        name: "PARETE - B",
        desc: "Modern outdoor cylindrical wall light — minimalist matte black finish with integrated LED. Designed for up and down light emission creating a refined wall-wash effect.",
        img: "/images/outdoor_images/parete-b.jpg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "60°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA -PARETE-B.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "2×3W", lumens: "480 lm", dims: "Ø45×200×75 mm", code: "STR-8120-2", tag: null },
        ],
      },

      // ── TONDOLUCE family ──
      {
        id: "tondoluce",
        name: "TONDOLUCE",
        desc: "Modern outdoor wall light with ribbed diffuser that directs light downward for glare-free illumination. Available in round (R) and square (S) versions. Enhances safety and visibility around pathways, staircases and entrances.",
        img: "/images/outdoor_images/tondoluce.jpg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "30°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - TONDOLUCE - R.pdf", "STELLMORE ITALIA - TONDOLUCE - S.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure",
        },
        variants: [
          { wattage: "6W", lumens: "480 lm", dims: "Ø160×60 mm",     code: "STR-5223", tag: "ROUND" },
          { wattage: "6W", lumens: "480 lm", dims: "150×175×75 mm",  code: "STR-5225", tag: "SQUARE" },
        ],
      },

      // ── TRAMEZZO - D ──
      {
        id: "tramezzo-d",
        name: "TRAMEZZO - D",
        desc: "Modern outdoor dual wall light — cylindrical glass diffusers on both top and bottom provide illumination in two directions. Matte black metal body with transparent glass for bright, elegant ambiance.",
        img: "/images/outdoor_images/tramezzo-d.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "120°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - TRAMEZZO -D.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "E27 15W", lumens: "—", dims: "Ø80×335×135 mm", code: "STR-8040-2W", tag: null },
        ],
      },

      // ── VOLTALUCE ──
      {
        id: "voltaluce",
        name: "VOLTALUCE",
        desc: "Modern cylindrical wall light — glossy white body with contrasting black mounting base. Up-and-down lighting for architectural enhancement and ambient illumination indoors and outdoors.",
        img: "/images/outdoor_images/voltaluce.jpeg",
        datasheet: {
          cri: "90", cct: "3CCT",
          beam: "160°", ip: "IP54",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - VOLTALUCE.pdf"],
          application: "Facade lighting, Entrances & porches, Balconies & terraces, Corridors & pathway, Garden & patio walls, Commercial use",
        },
        variants: [
          { wattage: "15W", lumens: "1,200 lm", dims: "Ø90×H260×W131.5 mm", code: "STR-7011", tag: null },
        ],
      },

      // ── COLONNA family ──
      {
        id: "colonna",
        name: "COLONNA",
        desc: "Elegant outdoor cylindrical wall light with slatted black finish. Available in upward single-emission (COLONNA) and up-and-down dual-emission (COLONNA-D) versions. Produces balanced ambient glow on walls and façades.",
        img: "/images/outdoor_images/colonna.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "108°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - COLONNA.pdf", "STELLMORE ITALIA - COLONNA-D.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "5W",   lumens: "400 lm",   dims: "Ø95×205×155 mm", code: "STR-9002-1W", tag: "UP" },
          { wattage: "2×5W", lumens: "800 lm",   dims: "Ø95×310×155 mm", code: "STR-9002-2W", tag: "UP/DOWN" },
        ],
      },

      // ── LUMINARE - D (2×6W dual wall) ──
      {
        id: "luminare-d",
        name: "LUMINARE - D",
        desc: "Modern outdoor LED wall-mounted light — rectangular matte black aluminium body with dual-light design providing both upward and downward illumination for enhanced brightness and wider coverage.",
        img: "/images/outdoor_images/luminare-d.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "20°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "90 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - LUMINARE -D.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure",
        },
        variants: [
          { wattage: "2×6W", lumens: "1,080 lm", dims: "130×114×62 mm", code: "STR-8010-2", tag: null },
        ],
      },

      // ── LUMINARE (6W single wall) ──
      {
        id: "luminare",
        name: "LUMINARE",
        desc: "Modern outdoor LED wall-mounted light — sleek rectangular housing with matte black finish. Built from durable die-cast aluminium with tempered glass cover. Single-body design for both upward and downward illumination.",
        img: "/images/outdoor_images/luminare.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "15°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium · Tempered Glass",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - LUMINARE.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure",
        },
        variants: [
          { wattage: "6W", lumens: "480 lm", dims: "130×70×62 mm", code: "STR-8009-2", tag: null },
        ],
      },

      // ── LUXA (5W dome wall) ──
      {
        id: "luxa",
        name: "LUXA",
        desc: "Compact outdoor wall light — rounded dome-shaped head on a minimalist base. Emits a soft halo of warm light, ideal for accent lighting on pathways, staircases, retaining walls and architectural surfaces.",
        img: "/images/outdoor_images/luxa.jpg",
        datasheet: {
          cri: "90", cct: "3000K",
          beam: "108°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - LUXA.pdf"],
          application: "Building facades, Pathways & walkways, Entrances & porches, Gardens & landscapes, Balconies & terraces, Commercial exteriors, Security lighting",
        },
        variants: [
          { wattage: "5W", lumens: "400 lm", dims: "Ø108×72 mm", code: "STR-9030A-W", tag: null },
        ],
      },

      // ── MONOZIONALE - D (2×10W bidirectional cylinder) ──
      {
        id: "monozionale-d",
        name: "MONOZIONALE - D",
        desc: "Modern outdoor wall-mounted cylindrical lamp — bidirectional light emission (upward and downward). Sleek black finish with transparent diffusers for both functional illumination and decorative wall lighting effects.",
        img: "/images/outdoor_images/monozionale-d.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "60°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - MONZIONALE -D.pdf"],
          application: "Facades & Exterior Walls, Entrances & Doorways, Pathways & Corridors, Balconies & Terraces, Commercial Buildings",
        },
        variants: [
          { wattage: "2×10W", lumens: "1,600 lm", dims: "Ø108×245×150 mm", code: "STR-8035-2W", tag: "UP/DOWN" },
        ],
      },

      // ── MONOZIONALE - S (10W single cylinder) ──
      {
        id: "monozionale-s",
        name: "MONOZIONALE - S",
        desc: "Modern cylindrical wall-mounted light for outdoor and indoor use — single direction projection (downward or upward depending on installation) for focused illumination that enhances architectural elements.",
        img: "/images/outdoor_images/monozionale-s.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "60°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - MONZIONALE -S.pdf"],
          application: "Facades & Exterior Walls, Entrances & Doorways, Pathways & Corridors, Balconies & Terraces, Commercial Buildings",
        },
        variants: [
          { wattage: "10W", lumens: "800 lm", dims: "Ø108×165×150 mm", code: "STR-8035-1W", tag: "SINGLE" },
        ],
      },

      // ── OROLUCE (GU10 dual-beam cylinder) ──
      {
        id: "oroluce",
        name: "OROLUCE",
        desc: "Elegant versatile dual-beam wall light collection — sleek cylindrical form with up-and-down lighting for powerful accent illumination. Available in multiple finishes including a striking gold option. Perfect for façades, entryways, columns and garden walls.",
        img: "/images/outdoor_images/oroluce.jpeg",
        datasheet: {
          cri: "90", cct: "3000K / 4000K / 6000K",
          beam: "60°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "120 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - OROLUCE.pdf"],
          application: "Facade lighting, Entrances & porches, Balconies & terraces, Pathways & corridors, Garden & patio walls, Hospitality & commercial spaces, Accent lighting",
        },
        variants: [
          { wattage: "GU10", lumens: "—", dims: "Ø64×180×95 mm", code: "STR-8115", tag: null },
        ],
      },

      // ── OVALE (10W oval wall) ──
      {
        id: "ovale",
        name: "OVALE",
        desc: "Versatile outdoor wall-mounted fixture — smooth oval shape with robust design. Black frame with frosted diffuser suitable for both functional and decorative lighting in residential and commercial settings.",
        img: "/images/outdoor_images/ovale.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "119°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - OVALE.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "10W", lumens: "800 lm", dims: "240×97×90 mm", code: "STR-6005", tag: null },
        ],
      },

      // ── PLAFONIERA - H (E27 pendant) ──
      {
        id: "plafoniera-h",
        name: "PLAFONIERA - H",
        desc: "Outdoor pendant light — elegant cylindrical design with black metal body and transparent glass diffuser that showcases the bulb, spreading a warm and inviting glow. E27 socket.",
        img: "/images/outdoor_images/plafoniera-h.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "127°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - PLAFONIERA -H.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "E27", lumens: "—", dims: "Ø110×230 mm", code: "STR-2152-H", tag: "PENDANT" },
        ],
      },

      // ── PLAFONIERAW - D (2×E27 dual pendant wall) ──
      {
        id: "plafonieraw-d",
        name: "PLAFONIERAW - D",
        desc: "Outdoor elegant wall light — dual-cylinder design with matte black base and clear glass diffusers on both ends. Provides illumination both upwards and downwards for a balanced lighting effect.",
        img: "/images/outdoor_images/plafonieraw-d.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "151°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - PLAFONIERAW -D.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "2×E27", lumens: "—", dims: "Ø110×300×175 mm", code: "STR-2152-2W", tag: "UP/DOWN" },
        ],
      },

      // ── PRISMATICA (2×3W cubic wall) ──
      {
        id: "prismatica",
        name: "PRISMATICA",
        desc: "Modern outdoor cubic LED wall light — clean minimalist geometry with up-and-down illumination creating a refined light effect that enhances both the wall surface and surrounding space. CCT selectable.",
        img: "/images/outdoor_images/prismatica.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "67°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - PRISMATICA.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "2×3W", lumens: "480 lm", dims: "115×90×100 mm", code: "STR-27116", tag: null },
        ],
      },

      // ── QUADRATA - N family (10–42W rectangular) ──
      {
        id: "quadrata-n",
        name: "QUADRATA - N",
        desc: "Rectangular LED wall light — sleek geometric design with powerful, uniform illumination. Minimalist form for both indoor and outdoor environments blending seamlessly with contemporary architecture. Available in four power sizes.",
        img: "/images/outdoor_images/quadrata-n.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "105° / 107° / 110° / 111°", ip: "IP65",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "85 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - QUADRATA -N.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "10W", lumens: "850 lm",   dims: "180×90×90 mm",   code: "STR-7002-10", tag: null },
          { wattage: "20W", lumens: "1,700 lm",  dims: "300×100×113 mm", code: "STR-7002-20", tag: null },
          { wattage: "30W", lumens: "2,550 lm",  dims: "400×150×135 mm", code: "STR-7002-30", tag: null },
          { wattage: "42W", lumens: "3,570 lm",  dims: "600×180×150 mm", code: "STR-7002-42", tag: "HIGH OUTPUT" },
        ],
      },

      // ── QUADRATA - S (10W vertical rectangular) ──
      {
        id: "quadrata-s",
        name: "QUADRATA - S",
        desc: "Outdoor vertical rectangular LED wall light — sleek minimalist look with bright, even illumination. Vertical orientation for a touch of elegance on interior and exterior walls.",
        img: "/images/outdoor_images/quadrata-s.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "81°", ip: "IP65",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - QUADRATA -S.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "10W", lumens: "800 lm", dims: "180×90×70 mm", code: "STR-7001", tag: null },
        ],
      },

      // ── ROTONDA (6W circular wall) ──
      {
        id: "rotonda",
        name: "ROTONDA",
        desc: "Outdoor circular wall light — modern cylindrical design projects light downward (and slightly upward through its edges) for a soft, welcoming atmosphere. Combines elegance with functionality.",
        img: "/images/outdoor_images/rotonda.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "56°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - ROTONDA.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "6W", lumens: "480 lm", dims: "110×105×70 mm", code: "STR-25792", tag: null },
        ],
      },

      // ── SCATOLARE - H (2×5W horizontal bi-directional) ──
      {
        id: "scatolare-h",
        name: "SCATOLARE - H",
        desc: "Modern outdoor wall light with bi-directional illumination — rectangular rounded-edge design for effective wall-washing and decorative effects with both upward and downward light emission.",
        img: "/images/outdoor_images/scatolare-h.jpeg",
        datasheet: {
          cri: "80", cct: "3CCT",
          beam: "120°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - SCATOLARE - H.pdf"],
          application: "Residential exteriors, Commercial buildings, Pathway & perimeter lighting, Decorative lighting",
        },
        variants: [
          { wattage: "2×5W", lumens: "800 lm", dims: "175×95×35 mm", code: "STR-8093", tag: "HORIZONTAL" },
        ],
      },

      // ── SCATOLARE - V (2×2W vertical bi-directional) ──
      {
        id: "scatolare-v",
        name: "SCATOLARE - V",
        desc: "Modern outdoor bi-directional wall light — geometric block-shaped body creates striking light patterns on walls, enhancing architectural features of outdoor spaces with upward and downward illumination.",
        img: "/images/outdoor_images/scatolare-v.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "60°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - SCATOLARE -V.pdf"],
          application: "Residential exteriors, Commercial buildings, Pathway & perimeter lighting, Decorative lighting",
        },
        variants: [
          { wattage: "2×2W", lumens: "320 lm", dims: "160×45×80 mm", code: "STR-8049", tag: "VERTICAL" },
        ],
      },

      // ── SFERA LUCE (10W half-moon wall) ──
      {
        id: "sfera-luce",
        name: "SFERA LUCE",
        desc: "Round outdoor wall light — modern half-moon design delivering soft, diffused illumination. Durable weather-resistant die-cast aluminium with subtle downward glow for warm, welcoming atmospheres.",
        img: "/images/outdoor_images/sfera-luce.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "90°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - SFERA LUCE.pdf"],
          application: "Garden and pathway lighting, Patio and terrace illumination, Building facades and exterior walls, Entrances and gateways, Decorative architectural accents",
        },
        variants: [
          { wattage: "10W", lumens: "800 lm", dims: "Ø150×70 mm", code: "STR-8051", tag: null },
        ],
      },

      // ── SOSPENZIO (10W slim pendant) ──
      {
        id: "sospenzio",
        name: "SOSPENZIO",
        desc: "Outdoor pendant light — sleek cylindrical design with minimalist matte white finish. Suspended from ceiling with adjustable cord for focused downward illumination. Ideal for dining areas, kitchens, living rooms and commercial spaces.",
        img: "/images/outdoor_images/sospenzio.jpeg",
        datasheet: {
          cri: "80", cct: "3000K",
          beam: "120°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - SOSPENZIO.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "10W", lumens: "800 lm", dims: "Ø80×610×300 mm", code: "STR-203", tag: null },
        ],
      },

      // ── GEMELLA ──
      {
        id: "gemella",
        name: "GEMELLA",
        desc: "Modern wall light — sleek cylindrical design with dual light emission providing upward and downward illumination. Minimalist structure for contemporary interiors and exteriors.",
        img: "/images/outdoor_images/gemella.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "60°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - GEMELLA.pdf"],
          application: "Residential spaces, Outdoor areas, Commercial spaces, Architectural lighting",
        },
        variants: [
          { wattage: "2×10W", lumens: "1,600 lm", dims: "240×100×86 mm", code: "STR-29221-C", tag: null },
        ],
      },

      // ── ESTERCI / ESTERCO family ──
      {
        id: "estero",
        name: "ESTERCI / ESTERCO",
        desc: "Cylindrical LED outdoor wall lights — black base with frosted diffuser for soft, uniform, glare-free illumination. ESTERCI has a straight cylindrical diffuser; ESTERCO has a conical form for wider coverage. Facades, entrances, terraces, balconies, pathways and garden walls.",
        img: "/images/outdoor_images/estero.jpeg",
        datasheet: {
          cri: "80", cct: "3000K / 4000K / 6000K",
          beam: "138°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - ESTERCI.pdf", "STELLMORE ITALIA - ESTERCO.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "E27", lumens: "—", dims: "Ø65×250×120 mm",  code: "STR-2763",  tag: "CYLINDER" },
          { wattage: "E27", lumens: "—", dims: "Ø105×250×150 mm", code: "STR-2613",  tag: "CONE" },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 6. GEOMETRIC, LANTERN & RECESSED
  // ─────────────────────────────────────────────
  {
    id: "wallceiling",
    label: "Geometric, Lantern & Recessed",
    tagline: "Bold cubes, discs, lanterns, and flush recessed fixtures.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── ZENO family (10W / 15W / 20W) ──
      {
        id: "zeno",
        name: "ZENO",
        desc: "High-quality surface-mounted square spotlight — die-cast aluminium body with mirror-finished reflector and PMMA opal lens. Bold cube form, IP65, for corridors, garden and commercial use.",
        img: "/images/outdoor_images/zeno.png",
        datasheet: {
          cri: "80", cct: "—",
          beam: "38°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "—", power_factor: "0.5",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK / GR",
          material: "Die Cast Aluminium · Mirror Finished Aluminium Reflector · PMMA Opal PC Lens",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["Stellmore Italia-ZENO.pdf"],
          application: "Corridors, Garden, Commercial Areas",
        },
        variants: [
          { wattage: "10W", lumens: "—", dims: "65×65×H120 mm",   code: "SLM-1203S", tag: null },
          { wattage: "15W", lumens: "—", dims: "90×90×H140 mm",   code: "SLM-1203S", tag: null },
          { wattage: "20W", lumens: "—", dims: "120×120×H170 mm", code: "SLM-1203S", tag: null },
        ],
      },

      // ── FOCOBASSO family (9W / 10W / 12W / 24W) ──
      {
        id: "focobasso",
        name: "FOCOBASSO",
        desc: "YK series recessed outdoor spotlight — cold-forged heat sink with superior heat dissipation, OSRAM LED chip and brand optical lenses for precise light control. Multiple beam angles and outer ring styles available.",
        img: "/images/outdoor_images/focobasso.png",
        datasheet: {
          cri: "90", cct: "—",
          beam: "15° / 24° / 36° / 55°", ip: "IP65",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "120 lm/w", power_factor: "0.9",
          adjustable: "Yes", operating_temp: "-20° to 60°",
          led_chip: "OSRAM", finish: "WH",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["catalog focobasso.pdf", "stellmore Italia focobasso.pdf"],
          application: "Modern Workspaces, Institutions, Small Format Retail Outlets, Hotels, High End Villas",
        },
        variants: [
          { wattage: "9W",  lumens: "1,080 lm", dims: "Ø45×30 mm",  code: "STR-GX-09", tag: null },
          { wattage: "10W", lumens: "1,200 lm", dims: "Ø67×42 mm",  code: "STR-GX-10", tag: null },
          { wattage: "12W", lumens: "1,440 lm", dims: "Ø67×42 mm",  code: "STR-GX-12", tag: null },
          { wattage: "24W", lumens: "2,880 lm", dims: "Ø100×80 mm", code: "STR-GX-24", tag: "BESTSELLER" },
        ],
      },

      // ── ILLUMIX ──
      {
        id: "illumix",
        name: "ILLUMIX",
        desc: "Modern outdoor wall light — minimalist cube design in sleek matte black. Durable powder-coated aluminium delivers a bold architectural statement for any exterior space.",
        img: "/images/outdoor_images/illumix.jpeg",
        datasheet: {
          cri: "90", cct: "TRI CCT",
          beam: "90°", ip: "IP54",
          voltage: "AC 220–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - ILLUMIX.pdf"],
          application: "Facade lighting, Entrance illumination, Pathway & corridor lighting, Balconies & terraces, Garden walls & fences, Commercial spaces",
        },
        variants: [
          { wattage: "2×10W", lumens: "1,600 lm", dims: "150×150×150 mm", code: "STR-23703L", tag: null },
        ],
      },

      // ── LANTERNA family ──
      {
        id: "lanterna",
        name: "LANTERNA",
        desc: "Contemporary lantern-style outdoor light with sturdy black metal frame. LANTERNA-R is a wall-mounted fixture; LANTERNA-S is a pendant suspended by chain. Both blend modern aesthetics with classic lantern inspiration.",
        img: "/images/outdoor_images/lanterna.jpg",
        datasheet: {
          cri: "80", cct: "3000K",
          beam: "66° / 69°", ip: "IP54",
          voltage: "AC 100–240V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "80 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 50°",
          led_chip: "CREE", finish: "WH / BK / Silver / Grey / Dark Grey",
          material: "Die Cast Aluminium",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - LANTERNA -R.pdf", "STELLMORE ITALIA - LANTERNA -S.pdf"],
          application: "Residential Spaces, Commercial Buildings, Architectural & Urban Projects, Hospitality & Leisure, Outdoor Accent Lighting",
        },
        variants: [
          { wattage: "12W", lumens: "960 lm", dims: "270×120×165 mm", code: "STR-798D", tag: "WALL" },
          { wattage: "12W", lumens: "960 lm", dims: "280×120×120 mm", code: "STR-798H", tag: "PENDANT" },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 7. DECORATIVE & SPECIAL LIGHTING
  // ─────────────────────────────────────────────
  {
    id: "decorative",
    label: "Decorative & Special Lighting",
    tagline: "Artful moon lamps, decorative accents and unique statement pieces.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── LUNA (moon lamp) ──
      {
        id: "luna",
        name: "LUNA",
        desc: "Moon lamp with lifelike lunar textures that recreates the serene glow of the moon. Soft and gentle 360° glow — ideal for bedrooms, gardens, patios or cosy corners. Energy-efficient LED with IP65 rating for outdoor use. Available in three sizes.",
        img: "/images/outdoor_images/luna.jpeg",
        datasheet: {
          cri: "80+", cct: "3000K",
          beam: "360°", ip: "IP65",
          voltage: "AC 230V",
          lifespan: "30,000 hrs", warranty: "—",
          efficiency: "40 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-20° to 60°",
          led_chip: "SANAN", finish: "—",
          material: "PE (Polyethylene)",
          dimming: "Triac · 0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - LUNA.pdf"],
          application: "Decorative Lighting, Night Light, Gift Item, Event & Party Decoration, Accent Piece",
        },
        variants: [
          { wattage: "10W", lumens: "400 lm", dims: "Ø150 mm", code: "STR-DX-3-10", tag: null },
          { wattage: "12W", lumens: "480 lm", dims: "Ø200 mm", code: "STR-DX-3-12", tag: null },
          { wattage: "15W", lumens: "600 lm", dims: "Ø300 mm", code: "STR-DX-3-15", tag: "LARGE" },
        ],
      },

    ],
  },

  // ─────────────────────────────────────────────
  // 8. STREET & ROAD LIGHTING
  // ─────────────────────────────────────────────
  {
    id: "street-road",
    label: "Street & Road Lighting",
    tagline: "High-output modular fixtures engineered for highways, streets and industrial zones.",
    img: PLACEHOLDER_IMG,
    products: [

      // ── STRADALE (200W street light) ──
      {
        id: "stradale",
        name: "STRADALE",
        desc: "Modular LED street light — rectangular flat-profile housing with integrated heat sinks and high-efficiency Philips LED arrays. Engineered for roadways, highways and industrial outdoor lighting. 130 lm/w efficiency with IP65 and DALI dimming.",
        img: "/images/outdoor_images/stradale.jpeg",
        datasheet: {
          cri: "90", cct: "3000K / 4000K / 6000K",
          beam: "180°", ip: "IP65",
          voltage: "AC 100–277V 50/60Hz",
          lifespan: "50,000 hrs", warranty: "—",
          efficiency: "130 lm/w", power_factor: "0.9",
          adjustable: "No", operating_temp: "-30° to 60°",
          led_chip: "PHILIPS", finish: "Grey",
          material: "Die Cast Aluminium · Tempered Glass Lens",
          dimming: "0/1–10V · DALI",
          certifications: [], downloads: ["STELLMORE ITALIA - STRADALE.pdf"],
          application: "Highways, City Streets, Parking Lots, Industrial Zones and residential Areas",
        },
        variants: [
          { wattage: "200W", lumens: "26,000 lm", dims: "570×200×90 mm", code: "STR-SSD-200", tag: null },
        ],
      },

    ],
  },

];