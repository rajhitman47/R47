// Armour47 Men's Product Database Generator
// Generates exactly 10 unique premium products per category for Men (50 total products)

const IMAGES_DATABASE_MEN = {
    tshirts: [
        { front: "ts.JPEG", back: "ts1.JPEG" },
        { front: "ts2.png", back: "ts3-1.png" },
        { front: "ts3.png", back: "ts3-1.png" },
        { front: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80" }
    ],
    pants: [
        { front: "Mtp,fb.jpg", back: "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=800&auto=format&fit=crop&q=80" },
        { front: "Mtp.jpg", back: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1582552938357-32b906df43cd?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80" }
    ],
    shorts: [
        { front: "Mss,fb.jpg", back: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=80" },
        { front: "sh.jpg", back: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=800&auto=format&fit=crop&q=80" }
    ],
    hoodies: [
        { front: "Mhd-1.jpg", back: "ho.jpg" },
        { front: "Mhd-2.jpg", back: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=800&auto=format&fit=crop&q=80" }
    ],
    shoes: [
        { front: "ss.png", back: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80" },
        { front: "ss1.png", back: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80" },
        { front: "ss3.png", back: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80" },
        { front: "ss4.png", back: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=80" }
    ],
    caps: [
        { front: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1575428262454-d222e4149dbf?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1572307480813-ceb0e59d6941?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1622263623241-11d2797e88b6?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80" }
    ],
    compressions: [
        { front: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80" }
    ]
};

const BRAND_ADJECTIVES_MEN = [
    "Stealth", "Apex", "Vortex", "Warrior", "Phantom",
    "Stealth Heavy", "Apex Pro", "Aero Lite", "Classic", "Luxe"
];

const CATEGORY_SINGULARS_MEN = {
    tshirts: "Oversized Tee",
    pants: "Training Jogger",
    shoes: "Apex Trainer",
    caps: "Stealth Cap",
    compressions: "Compression Guard",
    shorts: "Training Shorts",
    hoodies: "Apex Hoodie"
};

const CATEGORIES_MEN = ["tshirts", "pants", "shorts", "hoodies", "shoes", "caps", "compressions"];

// Core product details that we maintain for reference/consistency
const CORE_PRODUCTS_MEN = [
    {
        id: "m-tee-1",
        name: "Stealth Oversized Tee",
        price: "1999.00",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
        ],
        category: "tshirts",
        gender: "men",
        description: "Heavyweight drop-shoulder t-shirt engineered for extreme lifts and premium street styling. Features the reflective Armour47 logo on the back.",
        features: [
            "100% Premium Heavyweight Cotton (240 GSM)",
            "Relaxed, oversized streetwear fit",
            "Reflective R47 shield chest print",
            "Ribbed crew neck collar for shape retention"
        ]
    },
    {
        id: "m-pant-1",
        name: "Apex Cargo Joggers",
        price: "2999.00",
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=800&auto=format&fit=crop&q=80"
        ],
        category: "pants",
        gender: "men",
        description: "The ultimate training trousers. Tapered fit with secure tactical zip pockets to keep your items safe while running or lifting.",
        features: [
            "88% Nylon, 12% Spandex double-weave blend",
            "DWR water-resistant matte finish",
            "Deep zippered utility side cargo pockets",
            "Encased elastic waistband with internal drawcord"
        ]
    },
    {
        id: "m-shoe-1",
        name: "Apex Predator Trainers",
        price: "6999.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80"
        ],
        category: "shoes",
        gender: "men",
        description: "High-performance training shoes. Engineered with a flat, stable platform for squats and responsive cushioning for agility drills.",
        features: [
            "Breathable mesh upper with TPU overlays for durability",
            "Dual-density midsole for lifting stability",
            "High-traction rubber outsole wraps the sides for rope climbs",
            "Lace-lock system keeps your feet firmly anchored"
        ]
    },
    {
        id: "m-cap-1",
        name: "Stealth Classic Cap",
        price: "999.00",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&auto=format&fit=crop&q=80"
        ],
        category: "caps",
        gender: "men",
        description: "Premium curved-brim dad cap featuring detailed red embroidery of the R47 crest. Built with durable cotton twill.",
        features: [
            "100% Washed Cotton Twill",
            "Adjustable metal buckle strap closure",
            "Embroidered ventilation eyelets",
            "Structured 6-panel design with curved visor"
        ]
    },
    {
        id: "m-comp-1",
        name: "Warrior Baselayer Rash Guard",
        price: "1799.00",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80"
        ],
        category: "compressions",
        gender: "men",
        description: "A locked-in compression shirt that reduces muscle vibration, prevents chafing, and regulates body temperature during extreme sessions.",
        features: [
            "84% Polyester, 16% Spandex knit mesh",
            "Ergonomic flatlock seams minimize friction",
            "Antimicrobial, anti-odor treatment",
            "Sublimated red warrior armor graphics"
        ]
    },
    {
        id: "m-short-1",
        name: "Apex Training Shorts",
        price: "1599.00",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=80"
        ],
        category: "shorts",
        gender: "men",
        description: "Lightweight, breathable training shorts with a zip pocket for keys and phone. Perfect for running, lifting, or high-intensity interval training.",
        features: [
            "Lightweight 4-way stretch fabric",
            "Zip utility pocket for phone and essentials",
            "Sweat-wicking and quick-drying tech",
            "Elastic waistband with drawcord adjustment"
        ]
    },
    {
        id: "m-hood-1",
        name: "Apex Oversized Hoodie",
        price: "3499.00",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80"
        ],
        category: "hoodies",
        gender: "men",
        description: "Heavyweight premium cotton fleece hoodie designed for warmups and streetwear look. Features drop shoulder design and minimal chest embroidery.",
        features: [
            "Heavyweight 400 GSM premium cotton fleece",
            "Drop shoulder oversized streetwear silhouette",
            "Double-lined hood for structured fit",
            "Kangaroo pocket and ribbed trims"
        ]
    }
];

function generateProductsMen() {
    const productsList = [];
    CATEGORIES_MEN.forEach(category => {
        const singular = CATEGORY_SINGULARS_MEN[category];
        const images = IMAGES_DATABASE_MEN[category];
        for (let i = 1; i <= 10; i++) {
            const id = `m-${category === "tshirts" ? "tee" : category === "pants" ? "pant" : category === "shoes" ? "shoe" : category === "caps" ? "cap" : category === "compressions" ? "comp" : category === "shorts" ? "short" : "hood"}-${i}`;

            // Check if we have a predefined core product
            const coreProduct = CORE_PRODUCTS_MEN.find(p => p.id === id);
            if (coreProduct) {
                productsList.push(coreProduct);
                continue;
            }

            const adjective = BRAND_ADJECTIVES_MEN[i - 1];
            const name = `${adjective} ${singular}`;

            // Generate a reasonable price in INR
            let basePrice = 799;
            if (category === "shoes") basePrice = 4999;
            if (category === "pants") basePrice = 1999;
            if (category === "tshirts") basePrice = 1099;
            if (category === "compressions") basePrice = 1399;
            if (category === "shorts") basePrice = 1199;
            if (category === "hoodies") basePrice = 2799;
            const price = (basePrice + (i * 100)).toFixed(2);

            const imagePair = images[(i - 1) % images.length];
            const image = imagePair.front;
            const backImage = imagePair.back;
            const isSideBySide = !!imagePair.isSideBySide;

            const description = `Engineered for high performance, the Men's ${name} utilizes premium material constructs designed to elevate your training. Breathable, durable, and styled for modern warriors.`;

            const features = [
                "High-performance active athletic thread construction",
                "Moisture-wicking mesh ventilation integration",
                "Ergonomic flatlock comfort stitching contours",
                "Reflective Armour47 branding details for safety"
            ];

            productsList.push({
                id,
                name,
                price,
                image,
                images: [image, backImage],
                isSideBySide,
                category,
                gender: "men",
                description,
                features
            });
        }
    });
    return productsList;
}

const PRODUCTS_MEN = generateProductsMen();
