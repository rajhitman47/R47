// Armour47 Product Database Generator
// Generates exactly 10 unique premium products per category per gender (100 total products)

const IMAGES_DATABASE = {
    tshirts: [
        "ts.jpeg",
        "ts1.jpeg",
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80"
    ],
    pants: [
        "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551854838-212c50b4c184?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506629082925-534e3652def4?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1582552938357-32b906df43cd?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80"
    ],
    shoes: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1525966222434-6ad5334a3588?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=80"
    ],
    caps: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1575428262454-d222e4149dbf?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1572307480813-ceb0e59d6941?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1622263623241-11d2797e88b6?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80"
    ],
    compressions: [
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80"
    ]
};

const BRAND_ADJECTIVES = [
    "Stealth", "Apex", "Vortex", "Warrior", "Phantom",
    "Stealth Heavy", "Apex Pro", "Aero Lite", "Classic", "Luxe"
];

const CATEGORY_SINGULARS = {
    tshirts: "Oversized Tee",
    pants: "Training Jogger",
    shoes: "Apex Trainer",
    caps: "Stealth Cap",
    compressions: "Compression Guard"
};

const CATEGORIES = ["tshirts", "pants", "shoes", "caps", "compressions"];
const GENDERS = ["men", "women"];

// Core product details that we maintain for reference/consistency
const CORE_PRODUCTS = [
    {
        id: "m-tee-1",
        name: "Stealth Oversized Tee",
        price: "49.00",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
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
        price: "69.00",
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800&auto=format&fit=crop&q=80",
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
        price: "129.00",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
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
        price: "25.00",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
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
        price: "45.00",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
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
        id: "w-tee-1",
        name: "Signature Crop Tee",
        price: "35.00",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
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
        price: "65.00",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
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
        price: "125.00",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
        category: "shoes",
        gender: "women",
        description: "Premium trainers tailored specifically for women's foot shapes. High stability for dynamic lateral movements and weightlifting.",
        features: [
            "Engineered engineered mesh with synthetic overlays",
            "Optimized arch support structure",
            "Gum-rubber outsole for premium multidirectional grip",
            "Chic dark silhouette with red neon lace tips"
        ]
    },
    {
        id: "w-cap-1",
        name: "Aero Sport Cap",
        price: "24.00",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?w=800&auto=format&fit=crop&q=80",
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
        price: "55.00",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80",
        category: "compressions",
        gender: "women",
        description: "A second-skin high-compression legging designed with an anti-slip wide waistband. Deep black squat-proof performance fabric.",
        features: [
            "Squat-proof thick double-faced fabric",
            "High-waisted tummy control waistband",
            "Hidden card/key waistband pocket",
            "Seamless front panel to prevent riding up"
        ]
    }
];

// Helper to generate the complete list of 100 products (10 items per category per gender)
function generateProducts() {
    const productsList = [];

    GENDERS.forEach(gender => {
        CATEGORIES.forEach(category => {
            const singular = CATEGORY_SINGULARS[category];
            const images = IMAGES_DATABASE[category];

            for (let i = 1; i <= 10; i++) {
                const id = `${gender.substring(0, 1)}-${category.substring(0, 4)}-${i}`;

                // Check if we have a predefined core product for this ID
                const coreProduct = CORE_PRODUCTS.find(p => p.id === id);
                if (coreProduct) {
                    productsList.push(coreProduct);
                    continue;
                }

                // Otherwise generate a new unique variant product
                const adjective = BRAND_ADJECTIVES[i - 1];
                const name = `${adjective} ${singular}`;

                // Generate a reasonable price
                let basePrice = 25;
                if (category === "shoes") basePrice = 110;
                if (category === "pants") basePrice = 55;
                if (category === "tshirts") basePrice = 30;
                if (category === "compressions") basePrice = 40;
                const price = (basePrice + (i * 2.5)).toFixed(2);

                const image = images[(i - 1) % images.length];

                const description = `Engineered for high performance, the ${name} utilizes premium material constructs designed to elevate your training. Breathable, durable, and styled for modern warriors.`;

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
                    category,
                    gender,
                    description,
                    features
                });
            }
        });
    });

    return productsList;
}

const PRODUCTS = generateProducts();
