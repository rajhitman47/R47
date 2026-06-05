// Armour47 Women's Product Database Generator
// Generates exactly 10 unique premium products per category for Women (50 total products)

const IMAGES_DATABASE_WOMEN = {
    tshirts: [
        { front: "WC TP.jpg", back: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80" }
    ],
    pants: [
        { front: "Wtp,fb.jpg", back: "https://images.unsplash.com/photo-1506629082925-534e3652def4?w=800&auto=format&fit=crop&q=80" },
        { front: "WC TP.jpg", back: "https://images.unsplash.com/photo-1582552938357-32b906df43cd?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80" }
    ],
    shorts: [
        { front: "WCs,fb.jpg", back: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1506629082925-534e3652def4?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1506629082925-534e3652def4?w=800&auto=format&fit=crop&q=80" }
    ],
    hoodies: [
        { front: "Who.jpg", back: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80" }
    ],
    shoes: [
        { front: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80" },
        { front: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80", back: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80" }
    ],
    caps: [
        { front: "cp.jpg", back: "https://images.unsplash.com/photo-1575428262454-d222e4149dbf?w=800&auto=format&fit=crop&q=80" },
        { front: "cp1.jpg", back: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&auto=format&fit=crop&q=80" }
    ],
    compressions: [
        { front: "WC t&s-1.jpg", back: "WC t&s-1.jpg" },
        { front: "WC t&s-2.jpg", back: "WC t&s-2.jpg" },
        { front: "WC t&s-3.jpg", back: "WC t&s-3.jpg", isSideBySide: true },
        { front: "WC t&s.jpg", back: "WC t&s.jpg" }
    ]
};

const BRAND_ADJECTIVES_WOMEN = [
    "Stealth", "Apex", "Vortex", "Warrior", "Phantom",
    "Stealth Heavy", "Apex Pro", "Aero Lite", "Classic", "Luxe"
];

const CATEGORY_SINGULARS_WOMEN = {
    tshirts: "Oversized Tee",
    pants: "Training Jogger",
    shoes: "Apex Trainer",
    caps: "Stealth Cap",
    compressions: "Compression Guard",
    shorts: "Training Shorts",
    hoodies: "Apex Hoodie"
};

const CATEGORIES_WOMEN = ["tshirts", "pants", "shorts", "hoodies", "shoes", "caps", "compressions"];

// Core product details that we maintain for reference/consistency
const CORE_PRODUCTS_WOMEN = [
    {
        id: "w-tee-1",
        name: "Signature Crop Tee",
        price: "1499.00",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80"
        ],
        category: "tshirts",
        gender: "women",
        description: "Sleek, relaxed crop-top shirt with minimal R47 chest lettering. Perfect transition piece from heavy gym sessions to casual streetwear.",
        features: [
            "Super-soft combed ringspun cotton",
            "On-trend cropped boxy fit",
            "Drop shoulder styling",
            "Heat-sealed neck label for irritation-free comfort"
        ]
    },
    {
        id: "w-pant-1",
        name: "Apex Ribbed Joggers",
        price: "2799.00",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506629082925-534e3652def4?w=800&auto=format&fit=crop&q=80"
        ],
        category: "pants",
        gender: "women",
        description: "High-waisted, slim-fit joggers in a luxurious ribbed knit fabric. Super soft touch with high shape retention.",
        features: [
            "Polyester-nylon ribbed knit blend",
            "High-rise flattering supportive waistband",
            "Deep side slip-in pockets",
            "Cuffed ankles for a tailored look"
        ]
    },
    {
        id: "w-shoe-1",
        name: "Valkyrie Apex Trainers",
        price: "6499.00",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80"
        ],
        category: "shoes",
        gender: "women",
        description: "Premium trainers tailored specifically for women's foot shapes. High stability for dynamic lateral movements and weightlifting.",
        features: [
            "Engineered mesh with synthetic overlays",
            "Optimized arch support structure",
            "Gum-rubber outsole for premium multidirectional grip",
            "Chic dark silhouette with red neon lace tips"
        ]
    },
    {
        id: "w-cap-1",
        name: "Aero Sport Cap",
        price: "899.00",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1575428262454-d222e4149dbf?w=800&auto=format&fit=crop&q=80"
        ],
        category: "caps",
        gender: "women",
        description: "Ultra-lightweight sports hat with moisture-absorbing properties. Adjustable backing accommodates high ponytails.",
        features: [
            "Lightweight nylon body with mesh inserts",
            "Hook-and-loop adjustable strap with elastic loop",
            "UPF 50+ sun protection shield",
            "Ponytail friendly design"
        ]
    },
    {
        id: "w-comp-1",
        name: "Vortex High-Rise Leggings",
        price: "2299.00",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&auto=format&fit=crop&q=80"
        ],
        category: "compressions",
        gender: "women",
        description: "A second-skin high-compression legging designed with an anti-slip wide waistband. Deep black squat-proof performance fabric.",
        features: [
            "Squat-proof thick double-faced fabric",
            "High-waisted tummy control waistband",
            "Hidden card/key waistband pocket",
            "Seamless front panel to prevent riding up"
        ]
    },
    {
        id: "w-short-1",
        name: "Valkyrie Training Shorts",
        price: "1499.00",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
        ],
        category: "shorts",
        gender: "women",
        description: "High-waisted, supportive training shorts designed for dynamic movements. Breathable, sweat-wicking knit panels keep you cool under high loads.",
        features: [
            "High-waisted double layer waistband",
            "Hidden card waistband utility pocket",
            "Moisture-wicking active dry fabric",
            "Seamless front contours to prevent ride up"
        ]
    },
    {
        id: "w-hood-1",
        name: "Valkyrie Crop Hoodie",
        price: "3299.00",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
        images: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80"
        ],
        category: "hoodies",
        gender: "women",
        description: "Premium cropped boxy fit fleece hoodie. Cozy, warm, and styled for workout transitions to streetwear styling.",
        features: [
            "Premium soft cotton fleece (350 GSM)",
            "Chic cropped boxy streetwear crop styling",
            "Double layered hood with clean finishes",
            "Ribbed cuff cuffs and shape retention waist"
        ]
    }
];

function generateProductsWomen() {
    const productsList = [];
    CATEGORIES_WOMEN.forEach(category => {
        const singular = CATEGORY_SINGULARS_WOMEN[category];
        const images = IMAGES_DATABASE_WOMEN[category];
        for (let i = 1; i <= 10; i++) {
            const id = `w-${category === "tshirts" ? "tee" : category === "pants" ? "pant" : category === "shoes" ? "shoe" : category === "caps" ? "cap" : category === "compressions" ? "comp" : category === "shorts" ? "short" : "hood"}-${i}`;

            // Check if we have a predefined core product
            const coreProduct = CORE_PRODUCTS_WOMEN.find(p => p.id === id);
            if (coreProduct) {
                productsList.push(coreProduct);
                continue;
            }

            const adjective = BRAND_ADJECTIVES_WOMEN[i - 1];
            const name = `${adjective} ${singular}`;

            // Generate a reasonable price in INR
            let basePrice = 699;
            if (category === "shoes") basePrice = 4499;
            if (category === "pants") basePrice = 1799;
            if (category === "tshirts") basePrice = 999;
            if (category === "compressions") basePrice = 1299;
            if (category === "shorts") basePrice = 1099;
            if (category === "hoodies") basePrice = 2599;
            const price = (basePrice + (i * 100)).toFixed(2);

            const imagePair = images[(i - 1) % images.length];
            const image = imagePair.front;
            const backImage = imagePair.back;
            const isSideBySide = !!imagePair.isSideBySide;

            const description = `Engineered for high performance, the Women's ${name} utilizes premium material constructs designed to elevate your training. Breathable, durable, and styled for modern warriors.`;

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
                gender: "women",
                description,
                features
            });
        }
    });
    return productsList;
}

const PRODUCTS_WOMEN = generateProductsWomen();
