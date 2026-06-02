/* ─────────────────────────────────────────────
   INDUSTRIAL LIGHTING DATA
   5 sub-categories, each with products[]
───────────────────────────────────────────── */

export const INDUSTRIAL_CATEGORIES = [
  {
    id: "highbay",
    label: "High Bay Lights",
    tagline: "Powerful overhead illumination for large spaces.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    products: [
      {
        id: "hb1", name: "UFO High Bay 100W", tag: "BESTSELLER",
        desc: "100W circular UFO high bay, IP65",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "100W", lumens: "13,000 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "90° / 120°", ip: "IP65", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "DLC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.2 MB" },
            { name: "Photometric File (IES)", size: "88 KB" },
            { name: "Installation Guide", size: "540 KB" },
          ],
        },
      },
      {
        id: "hb2", name: "UFO High Bay 150W", tag: null,
        desc: "150W UFO high bay for ceiling 8–12m",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        datasheet: {
          wattage: "150W", lumens: "19,500 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "90° / 120°", ip: "IP65", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "DLC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.4 MB" },
            { name: "Photometric File (IES)", size: "96 KB" },
            { name: "CAD Drawing (DWG)", size: "1.8 MB" },
          ],
        },
      },
      {
        id: "hb3", name: "UFO High Bay 200W", tag: null,
        desc: "200W heavy-duty UFO for ceilings 12–16m",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "200W", lumens: "26,000 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "90° / 120°", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK10", "DLC", "ENEC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.6 MB" },
            { name: "Photometric File (IES)", size: "108 KB" },
            { name: "Installation Guide", size: "620 KB" },
          ],
        },
      },
      {
        id: "hb4", name: "Smart UFO 150W", tag: "NEW",
        desc: "150W DALI-2 dimmable smart high bay",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "150W (10–100% dimmable)", lumens: "19,500 lm", cri: "80+", cct: "4000K",
          beam: "120°", ip: "IP65", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "DALI-2", "DLC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.5 MB" },
            { name: "DALI Integration Guide", size: "860 KB" },
            { name: "Photometric File (IES)", size: "94 KB" },
          ],
        },
      },
      {
        id: "hb5", name: "UFO High Bay 240W", tag: null,
        desc: "240W ultra-output for ceilings above 16m",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        datasheet: {
          wattage: "240W", lumens: "31,200 lm", cri: "80+", cct: "5000K",
          beam: "60° / 90°", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK10", "DLC", "ENEC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.8 MB" },
            { name: "Photometric File (IES)", size: "118 KB" },
          ],
        },
      },
      {
        id: "hb6", name: "Sensor High Bay 100W", tag: "NEW",
        desc: "100W UFO with built-in motion & daylight sensor",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "100W (auto-dim to 20%)", lumens: "13,000 lm", cri: "80+", cct: "4000K",
          beam: "120° + 360° PIR sensor",  ip: "IP65", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08"],
          downloads: [
            { name: "Technical Datasheet", size: "1.3 MB" },
            { name: "Sensor Configuration Guide", size: "490 KB" },
          ],
        },
      },
    ],
  },

  {
    id: "linearhighbay",
    label: "Linear High Bay",
    tagline: "Row after row — uniform, efficient, industrial.",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
    products: [
      {
        id: "lhb1", name: "Linear High Bay 80W", tag: "BESTSELLER",
        desc: "80W single-row linear high bay, 1200mm",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "80W", lumens: "10,400 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "90° batwing", ip: "IP65", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "DLC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.1 MB" },
            { name: "Photometric File (IES)", size: "82 KB" },
            { name: "Installation Guide", size: "580 KB" },
          ],
        },
      },
      {
        id: "lhb2", name: "Linear High Bay 120W", tag: null,
        desc: "120W double-row linear, 1500mm, IP66",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "120W", lumens: "15,600 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "90° batwing", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK09", "DLC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.3 MB" },
            { name: "Photometric File (IES)", size: "90 KB" },
            { name: "CAD Drawing (DWG)", size: "1.6 MB" },
          ],
        },
      },
      {
        id: "lhb3", name: "Linear High Bay 160W", tag: null,
        desc: "160W high-output linear for wide spans",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        datasheet: {
          wattage: "160W", lumens: "20,800 lm", cri: "80+", cct: "5000K",
          beam: "90° batwing", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK10", "DLC", "ENEC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.5 MB" },
            { name: "Photometric File (IES)", size: "102 KB" },
          ],
        },
      },
      {
        id: "lhb4", name: "Smart Linear 80W", tag: "NEW",
        desc: "80W DALI-2 dimmable linear high bay",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "80W (10–100% dimmable)", lumens: "10,400 lm", cri: "80+", cct: "4000K",
          beam: "90° batwing", ip: "IP65", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "DALI-2"],
          downloads: [
            { name: "Technical Datasheet", size: "1.2 MB" },
            { name: "DALI Integration Guide", size: "780 KB" },
          ],
        },
      },
      {
        id: "lhb5", name: "Linkable Linear 40W", tag: null,
        desc: "40W linkable linear, daisy-chain up to 10 units",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "40W per unit", lumens: "5,200 lm", cri: "80+", cct: "4000K",
          beam: "120°", ip: "IP65", lifespan: "50,000 hrs", warranty: "3 Years",
          certifications: ["CE", "RoHS", "IK07"],
          downloads: [
            { name: "Technical Datasheet", size: "920 KB" },
            { name: "Linking System Guide", size: "640 KB" },
          ],
        },
      },
    ],
  },

  {
    id: "explosionproof",
    label: "Explosion Proof",
    tagline: "Certified safe in hazardous zone environments.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    products: [
      {
        id: "ep1", name: "Ex High Bay 100W", tag: "BESTSELLER",
        desc: "100W ATEX/IECEx Zone 1 & 2 high bay",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        datasheet: {
          wattage: "100W", lumens: "11,000 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "90° / 120°", ip: "IP66", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "ATEX", "IECEx", "Zone 1 & 2", "IK08"],
          downloads: [
            { name: "Technical Datasheet", size: "1.8 MB" },
            { name: "ATEX Certificate", size: "920 KB" },
            { name: "IECEx Certificate", size: "880 KB" },
            { name: "Installation Guide (Hazardous Areas)", size: "1.4 MB" },
          ],
        },
      },
      {
        id: "ep2", name: "Ex Floodlight 80W", tag: null,
        desc: "80W ATEX floodlight for Zone 1/2/21/22",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "80W", lumens: "8,800 lm", cri: "80+", cct: "4000K",
          beam: "60° / 90°", ip: "IP66", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "ATEX", "IECEx", "Zone 1/2/21/22", "IK10"],
          downloads: [
            { name: "Technical Datasheet", size: "1.6 MB" },
            { name: "ATEX Certificate", size: "870 KB" },
            { name: "Photometric File (IES)", size: "84 KB" },
          ],
        },
      },
      {
        id: "ep3", name: "Ex Linear 60W", tag: "NEW",
        desc: "60W ATEX linear for Zone 2 & Zone 22",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "60W", lumens: "7,200 lm", cri: "80+", cct: "4000K",
          beam: "110° batwing", ip: "IP66", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "ATEX", "IECEx", "Zone 2 & 22", "IK09"],
          downloads: [
            { name: "Technical Datasheet", size: "1.5 MB" },
            { name: "ATEX Certificate", size: "840 KB" },
            { name: "Installation Guide", size: "1.1 MB" },
          ],
        },
      },
      {
        id: "ep4", name: "Ex Bulkhead 30W", tag: null,
        desc: "30W ATEX bulkhead for Zone 1/2 walls",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        datasheet: {
          wattage: "30W", lumens: "3,300 lm", cri: "80+", cct: "4000K",
          beam: "180° surface mount", ip: "IP66", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "ATEX", "IECEx", "Zone 1 & 2", "IK09"],
          downloads: [
            { name: "Technical Datasheet", size: "1.3 MB" },
            { name: "ATEX Certificate", size: "810 KB" },
          ],
        },
      },
      {
        id: "ep5", name: "Ex Emergency 20W", tag: null,
        desc: "20W ATEX emergency fitting, 3hr backup",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "20W", lumens: "2,000 lm", cri: "80+", cct: "4000K",
          beam: "120°", ip: "IP66", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "ATEX", "IECEx", "Zone 1 & 2", "EN 60598-2-22"],
          downloads: [
            { name: "Technical Datasheet", size: "1.4 MB" },
            { name: "ATEX Certificate", size: "830 KB" },
            { name: "Emergency Self-Test Guide", size: "560 KB" },
          ],
        },
      },
    ],
  },

  {
    id: "floodlights",
    label: "Flood Lights",
    tagline: "Wide-area power for yards, sites and facades.",
    img: "https://images.unsplash.com/photo-1558618047-f4e60e3bcda4?w=600&q=80",
    products: [
      {
        id: "fl1", name: "Site Flood 100W", tag: "BESTSELLER",
        desc: "100W heavy-duty site floodlight, IP66",
        img: "https://images.unsplash.com/photo-1558618047-f4e60e3bcda4?w=600&q=80",
        datasheet: {
          wattage: "100W", lumens: "11,000 lm", cri: "70+", cct: "4000K / 5000K",
          beam: "90° adjustable flood", ip: "IP66", lifespan: "50,000 hrs", warranty: "3 Years",
          certifications: ["CE", "RoHS", "IK08"],
          downloads: [
            { name: "Technical Datasheet", size: "980 KB" },
            { name: "Photometric File (IES)", size: "76 KB" },
            { name: "Installation Guide", size: "460 KB" },
          ],
        },
      },
      {
        id: "fl2", name: "Site Flood 200W", tag: null,
        desc: "200W high-mast floodlight for large yards",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "200W", lumens: "22,000 lm", cri: "70+", cct: "4000K / 5000K",
          beam: "60° / 90° / 120°", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK10", "ENEC"],
          downloads: [
            { name: "Technical Datasheet", size: "1.4 MB" },
            { name: "Photometric File (IES)", size: "96 KB" },
            { name: "CAD Drawing (DWG)", size: "1.9 MB" },
          ],
        },
      },
      {
        id: "fl3", name: "Site Flood 400W", tag: null,
        desc: "400W stadium-grade high-mast floodlight",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        datasheet: {
          wattage: "400W", lumens: "52,000 lm", cri: "70+", cct: "5000K",
          beam: "15° / 30° / 60°", ip: "IP66", lifespan: "80,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK10", "ENEC", "DLC"],
          downloads: [
            { name: "Technical Datasheet", size: "2.0 MB" },
            { name: "Photometric File (IES)", size: "130 KB" },
            { name: "Mounting Hardware Guide", size: "780 KB" },
          ],
        },
      },
      {
        id: "fl4", name: "Smart Flood 150W", tag: "NEW",
        desc: "150W DALI-2 smart floodlight, motion sensor",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "150W (10–100% dimmable)", lumens: "16,500 lm", cri: "80+", cct: "4000K",
          beam: "90° adjustable", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK09", "DALI-2"],
          downloads: [
            { name: "Technical Datasheet", size: "1.3 MB" },
            { name: "DALI Integration Guide", size: "820 KB" },
          ],
        },
      },
      {
        id: "fl5", name: "Compact Flood 50W", tag: null,
        desc: "50W slim-profile security floodlight",
        img: "https://images.unsplash.com/photo-1558618047-f4e60e3bcda4?w=600&q=80",
        datasheet: {
          wattage: "50W", lumens: "5,500 lm", cri: "80+", cct: "4000K",
          beam: "120° wide flood", ip: "IP65", lifespan: "50,000 hrs", warranty: "3 Years",
          certifications: ["CE", "RoHS", "IK07"],
          downloads: [
            { name: "Technical Datasheet", size: "780 KB" },
            { name: "Photometric File (IES)", size: "62 KB" },
          ],
        },
      },
    ],
  },

  {
    id: "triproof",
    label: "Tri-Proof Lights",
    tagline: "Dustproof, waterproof, impact-proof — built to last.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    products: [
      {
        id: "tp1", name: "Tri-Proof 36W 1200mm", tag: "BESTSELLER",
        desc: "36W 1200mm tri-proof batten, IP66 IK08",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        datasheet: {
          wattage: "36W", lumens: "4,320 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "120°", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08"],
          downloads: [
            { name: "Technical Datasheet", size: "920 KB" },
            { name: "Installation Guide", size: "480 KB" },
          ],
        },
      },
      {
        id: "tp2", name: "Tri-Proof 58W 1500mm", tag: null,
        desc: "58W 1500mm high-output tri-proof, IP67",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "58W", lumens: "7,250 lm", cri: "80+", cct: "4000K / 5000K",
          beam: "120°", ip: "IP67", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK09"],
          downloads: [
            { name: "Technical Datasheet", size: "1.0 MB" },
            { name: "Photometric File (IES)", size: "74 KB" },
            { name: "CAD Drawing (DWG)", size: "1.2 MB" },
          ],
        },
      },
      {
        id: "tp3", name: "Tri-Proof 24W 600mm", tag: null,
        desc: "24W compact 600mm tri-proof batten",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "24W", lumens: "2,880 lm", cri: "80+", cct: "4000K",
          beam: "120°", ip: "IP65", lifespan: "50,000 hrs", warranty: "3 Years",
          certifications: ["CE", "RoHS", "IK07"],
          downloads: [
            { name: "Technical Datasheet", size: "780 KB" },
            { name: "Installation Guide", size: "390 KB" },
          ],
        },
      },
      {
        id: "tp4", name: "Smart Tri-Proof 36W", tag: "NEW",
        desc: "36W DALI-2 dimmable tri-proof with microwave sensor",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        datasheet: {
          wattage: "36W (10–100% dimmable)", lumens: "4,320 lm", cri: "80+", cct: "4000K",
          beam: "120° + 360° microwave sensor", ip: "IP66", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "DALI-2"],
          downloads: [
            { name: "Technical Datasheet", size: "1.1 MB" },
            { name: "Sensor & DALI Guide", size: "720 KB" },
          ],
        },
      },
      {
        id: "tp5", name: "Emergency Tri-Proof 36W", tag: null,
        desc: "36W tri-proof with 3hr emergency backup",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        datasheet: {
          wattage: "36W (emergency: 10W)", lumens: "4,320 lm / 1,200 lm (emergency)", cri: "80+", cct: "4000K",
          beam: "120°", ip: "IP65", lifespan: "50,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK08", "EN 60598-2-22"],
          downloads: [
            { name: "Technical Datasheet", size: "1.0 MB" },
            { name: "Emergency Self-Test Guide", size: "540 KB" },
          ],
        },
      },
      {
        id: "tp6", name: "Cleanroom Tri-Proof 40W", tag: null,
        desc: "40W sealed tri-proof for cleanroom & food grade",
        img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
        datasheet: {
          wattage: "40W", lumens: "4,800 lm", cri: "90+", cct: "4000K / 5000K",
          beam: "120°", ip: "IP69K", lifespan: "60,000 hrs", warranty: "5 Years",
          certifications: ["CE", "RoHS", "IK10", "IP69K", "Food Grade"],
          downloads: [
            { name: "Technical Datasheet", size: "1.1 MB" },
            { name: "Food Grade Compliance Sheet", size: "680 KB" },
            { name: "Installation Guide", size: "480 KB" },
          ],
        },
      },
    ],
  },
];