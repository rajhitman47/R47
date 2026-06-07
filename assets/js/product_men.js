// Armour47 Men's Product Database
// To add a new product in the future, simply add a new object to the PRODUCTS_MEN array below.
//
// Object properties:
// - id: Unique identifier for the product (e.g. "men-cpants-stealth").
// - gender: Set to "men".
// - name: The product display name.
// - price: The product price in INR.
// - image: The main display image path (e.g. "assets/images/men/.../image.png").
// - category: The folder name (sub-category) where the image is stored.
//             Valid categories for Men: "Cpants", "Ctshrits", "gym gear", "hoodies", "oversized", "pants", "shorts", "sleless", "tshrits"
// - description: (Optional) Description text.
// - images: Array of paths for multiple images in the product details page.
//           Please specify 4 paths here (they can be the same or different images).

const PRODUCTS_MEN = [
    // ----------------------------------------------------
    // COMPRESSION PANTS (Cpants)
    // ----------------------------------------------------
    {
        id: "men-cpants-stealth",
        gender: "men",
        name: "Stealth Compression Tights",
        price: "1999.00",
        image: "assets/images/men/Cpants/Mtp,fb.jpg",
        category: "Cpants",
        description: "Premium base layer compression tights designed to support key muscle groups during intensive training sessions.",
        images: [
            "assets/images/men/Cpants/Mtp,fb.jpg",
            "assets/images/men/Cpants/Mtp,fb.jpg",
            "assets/images/men/Cpants/Mtp,fb.jpg",
            "assets/images/men/Cpants/Mtp,fb.jpg"
        ]
    },
    {
        id: "men-cpants-warrior",
        gender: "men",
        name: "Warrior Compression Tights",
        price: "2199.00",
        image: "assets/images/men/Cpants/Tight Gym Clothes.png",
        category: "Cpants",
        description: "Squat-proof compression tights with a wide waistband to secure fit and reduce fatigue.",
        images: [
            "assets/images/men/Cpants/Tight Gym Clothes.png",
            "assets/images/men/Cpants/Tight Gym Clothes.png",
            "assets/images/men/Cpants/Tight Gym Clothes.png",
            "assets/images/men/Cpants/Tight Gym Clothes.png"
        ]
    },
    {
        id: "men-cpants-basketball",
        gender: "men",
        name: "Basketball Base Layer Leggings",
        price: "1799.00",
        image: "assets/images/men/Cpants/mens Basketball Base Layer Leggings.png",
        category: "Cpants",
        description: "Breathable leggings engineered for maximum mobility on the court or inside the gym.",
        images: [
            "assets/images/men/Cpants/mens Basketball Base Layer Leggings.png",
            "assets/images/men/Cpants/mens Basketball Base Layer Leggings.png",
            "assets/images/men/Cpants/mens Basketball Base Layer Leggings.png",
            "assets/images/men/Cpants/mens Basketball Base Layer Leggings.png"
        ]
    },

    // ----------------------------------------------------
    // COMPRESSION T-SHIRTS (Ctshrits)
    // ----------------------------------------------------
    {
        id: "men-ctshrits-tight",
        gender: "men",
        name: "Tight Gym Compression Tee",
        price: "1499.00",
        image: "assets/images/men/Ctshrits/Tight Gym Clothes.png",
        category: "Ctshrits",
        description: "Ultra-tight fit rash guard constructed with flatlock comfort stitching to minimize friction.",
        images: [
            "assets/images/men/Ctshrits/Tight Gym Clothes.png",
            "assets/images/men/Ctshrits/Tight Gym Clothes.png",
            "assets/images/men/Ctshrits/Tight Gym Clothes.png",
            "assets/images/men/Ctshrits/Tight Gym Clothes.png"
        ]
    },
    {
        id: "men-ctshrits-apex-v1",
        gender: "men",
        name: "Apex Compression Tee v1",
        price: "1399.00",
        image: "assets/images/men/Ctshrits/mc new 1.jpg",
        category: "Ctshrits",
        description: "Athletic compression tee with moisture-wicking technology to keep you dry and comfortable.",
        images: [
            "assets/images/men/Ctshrits/mc new 1.jpg",
            "assets/images/men/Ctshrits/mc new 1.jpg",
            "assets/images/men/Ctshrits/mc new 1.jpg",
            "assets/images/men/Ctshrits/mc new 1.jpg"
        ]
    },
    {
        id: "men-ctshrits-apex-v2",
        gender: "men",
        name: "Apex Compression Tee v2",
        price: "1399.00",
        image: "assets/images/men/Ctshrits/mc new 2.jpg",
        category: "Ctshrits",
        description: "High-performance compression shirt designed to elevate blood flow and expedite recovery.",
        images: [
            "assets/images/men/Ctshrits/mc new 2.jpg",
            "assets/images/men/Ctshrits/mc new 2.jpg",
            "assets/images/men/Ctshrits/mc new 2.jpg",
            "assets/images/men/Ctshrits/mc new 2.jpg"
        ]
    },
    {
        id: "men-ctshrits-apex-v3",
        gender: "men",
        name: "Apex Compression Tee v3",
        price: "1399.00",
        image: "assets/images/men/Ctshrits/mc new 3.jpg",
        category: "Ctshrits",
        description: "Premium base layer with targeted ventilation panels under the arms.",
        images: [
            "assets/images/men/Ctshrits/mc new 3.jpg",
            "assets/images/men/Ctshrits/mc new 3.jpg",
            "assets/images/men/Ctshrits/mc new 3.jpg",
            "assets/images/men/Ctshrits/mc new 3.jpg"
        ]
    },
    {
        id: "men-ctshrits-apex-back",
        gender: "men",
        name: "Apex Compression Tee Back View",
        price: "1399.00",
        image: "assets/images/men/Ctshrits/mc new 3-back.jpg",
        category: "Ctshrits",
        description: "Reflective Armour47 logo details on the spine for early morning or late night runs.",
        images: [
            "assets/images/men/Ctshrits/mc new 3-back.jpg",
            "assets/images/men/Ctshrits/mc new 3-back.jpg",
            "assets/images/men/Ctshrits/mc new 3-back.jpg",
            "assets/images/men/Ctshrits/mc new 3-back.jpg"
        ]
    },
    {
        id: "men-ctshrits-apex-core",
        gender: "men",
        name: "Apex Core Compression Tee",
        price: "1499.00",
        image: "assets/images/men/Ctshrits/mc new.jpg",
        category: "Ctshrits",
        description: "The core training compression shirt. Ergonomic seams follow natural movement vectors.",
        images: [
            "assets/images/men/Ctshrits/mc new.jpg",
            "assets/images/men/Ctshrits/mc new.jpg",
            "assets/images/men/Ctshrits/mc new.jpg",
            "assets/images/men/Ctshrits/mc new.jpg"
        ]
    },

    // ----------------------------------------------------
    // HOODIES (hoodies)
    // ----------------------------------------------------
    {
        id: "men-hoodies-stealth-pullover",
        gender: "men",
        name: "Stealth Pullover Hoodie",
        price: "3499.00",
        image: "assets/images/men/hoodies/Mhd-1.jpg",
        category: "hoodies",
        description: "Heavyweight drop-shoulder street hoodie engineered with ultra-soft double-brushed cotton fleece.",
        images: [
            "assets/images/men/hoodies/Mhd-1.jpg",
            "assets/images/men/hoodies/Mhd-1.jpg",
            "assets/images/men/hoodies/Mhd-1.jpg",
            "assets/images/men/hoodies/Mhd-1.jpg"
        ]
    },
    {
        id: "men-hoodies-apex-heavyweight",
        gender: "men",
        name: "Apex Heavyweight Hoodie",
        price: "3699.00",
        image: "assets/images/men/hoodies/Mhd-2.jpg",
        category: "hoodies",
        description: "Structured double-lined hood for a premium drape and unmatched streetwear silhouette.",
        images: [
            "assets/images/men/hoodies/Mhd-2.jpg",
            "assets/images/men/hoodies/Mhd-2.jpg",
            "assets/images/men/hoodies/Mhd-2.jpg",
            "assets/images/men/hoodies/Mhd-2.jpg"
        ]
    },
    {
        id: "men-hoodies-classic-gym",
        gender: "men",
        name: "Classic Gym Hoodie",
        price: "2999.00",
        image: "assets/images/men/hoodies/ho.jpg",
        category: "hoodies",
        description: "Breathable warmup pullover with dynamic stretch panel inserts for active lifts.",
        images: [
            "assets/images/men/hoodies/ho.jpg",
            "assets/images/men/hoodies/ho.jpg",
            "assets/images/men/hoodies/ho.jpg",
            "assets/images/men/hoodies/ho.jpg"
        ]
    },
    {
        id: "men-hoodies-dominator-warmup",
        gender: "men",
        name: "Dominator Warmup Hoodie",
        price: "3299.00",
        image: "assets/images/men/hoodies/mh new.jpg",
        category: "hoodies",
        description: "Engineered thermal layering to keep core temperature stable during cool outdoor workouts.",
        images: [
            "assets/images/men/hoodies/mh new.jpg",
            "assets/images/men/hoodies/mh new.jpg",
            "assets/images/men/hoodies/mh new.jpg",
            "assets/images/men/hoodies/mh new.jpg"
        ]
    },

    // ----------------------------------------------------
    // OVERSIZED TEES (oversized)
    // ----------------------------------------------------
    {
        id: "men-oversized-vortex-v1",
        gender: "men",
        name: "Vortex Oversized Tee v1",
        price: "1999.00",
        image: "assets/images/men/oversized/ts.JPEG",
        category: "oversized",
        description: "Heavyweight 240 GSM oversized streetwear t-shirt with signature reflective chest branding.",
        images: [
            "assets/images/men/oversized/ts.JPEG",
            "assets/images/men/oversized/ts.JPEG",
            "assets/images/men/oversized/ts.JPEG",
            "assets/images/men/oversized/ts.JPEG"
        ]
    },
    {
        id: "men-oversized-vortex-v2",
        gender: "men",
        name: "Vortex Oversized Tee v2",
        price: "1999.00",
        image: "assets/images/men/oversized/ts1.JPEG",
        category: "oversized",
        description: "Premium combed cotton drop-shoulder tee with a relaxed waist and structural collar shape retention.",
        images: [
            "assets/images/men/oversized/ts1.JPEG",
            "assets/images/men/oversized/ts1.JPEG",
            "assets/images/men/oversized/ts1.JPEG",
            "assets/images/men/oversized/ts1.JPEG"
        ]
    },
    {
        id: "men-oversized-vortex-v3",
        gender: "men",
        name: "Vortex Oversized Tee v3",
        price: "2099.00",
        image: "assets/images/men/oversized/ts2.png",
        category: "oversized",
        description: "Urban utility oversized streetwear fit. Perfect for layering over base sheets.",
        images: [
            "assets/images/men/oversized/ts2.png",
            "assets/images/men/oversized/ts2.png",
            "assets/images/men/oversized/ts2.png",
            "assets/images/men/oversized/ts2.png"
        ]
    },
    {
        id: "men-oversized-vortex-v4",
        gender: "men",
        name: "Vortex Oversized Tee v4",
        price: "2099.00",
        image: "assets/images/men/oversized/ts3.png",
        category: "oversized",
        description: "Limited drop oversized training tee. Heavy wash treatment gives a distinct premium matte feel.",
        images: [
            "assets/images/men/oversized/ts3.png",
            "assets/images/men/oversized/ts3.png",
            "assets/images/men/oversized/ts3.png",
            "assets/images/men/oversized/ts3.png"
        ]
    },

    // ----------------------------------------------------
    // PANTS & JOGGERS (pants)
    // ----------------------------------------------------
    {
        id: "men-pants-apex-training",
        gender: "men",
        name: "Apex Training Joggers",
        price: "2999.00",
        image: "assets/images/men/pants/Mtp.jpg",
        category: "pants",
        description: "Tapered fit training pants featuring secure side-zip utility pockets and robust drawcords.",
        images: [
            "assets/images/men/pants/Mtp.jpg",
            "assets/images/men/pants/Mtp.jpg",
            "assets/images/men/pants/Mtp.jpg",
            "assets/images/men/pants/Mtp.jpg"
        ]
    },
    {
        id: "men-pants-stealth-track",
        gender: "men",
        name: "Stealth Athletic Trackpants",
        price: "2799.00",
        image: "assets/images/men/pants/tracks.png",
        category: "pants",
        description: "Four-way stretch material engineered to flex with squats and dynamic running movements.",
        images: [
            "assets/images/men/pants/tracks.png",
            "assets/images/men/pants/tracks.png",
            "assets/images/men/pants/tracks.png",
            "assets/images/men/pants/tracks.png"
        ]
    },

    // ----------------------------------------------------
    // TRAINING SHORTS (shorts)
    // ----------------------------------------------------
    {
        id: "men-shorts-2in1-sport",
        gender: "men",
        name: "2-in-1 Sport Shorts",
        price: "1699.00",
        image: "assets/images/men/shorts/Men's 2 In 1 Sport Shorts.png",
        category: "shorts",
        description: "Built-in lightweight compression liner shorts with a phone pocket and soft outer shell.",
        images: [
            "assets/images/men/shorts/Men's 2 In 1 Sport Shorts.png",
            "assets/images/men/shorts/Men's 2 In 1 Sport Shorts.png",
            "assets/images/men/shorts/Men's 2 In 1 Sport Shorts.png",
            "assets/images/men/shorts/Men's 2 In 1 Sport Shorts.png"
        ]
    },
    {
        id: "men-shorts-stealth-training",
        gender: "men",
        name: "Stealth Training Shorts",
        price: "1499.00",
        image: "assets/images/men/shorts/Mss,fb.jpg",
        category: "shorts",
        description: "Chafe-free utility shorts with reflective seams and zippered back pockets.",
        images: [
            "assets/images/men/shorts/Mss,fb.jpg",
            "assets/images/men/shorts/Mss,fb.jpg",
            "assets/images/men/shorts/Mss,fb.jpg",
            "assets/images/men/shorts/Mss,fb.jpg"
        ]
    },
    {
        id: "men-shorts-apex-core",
        gender: "men",
        name: "Apex Core Shorts",
        price: "1599.00",
        image: "assets/images/men/shorts/sh.jpg",
        category: "shorts",
        description: "Lightweight, breathable grid-mesh shorts optimized for intense functional workouts.",
        images: [
            "assets/images/men/shorts/sh.jpg",
            "assets/images/men/shorts/sh.jpg",
            "assets/images/men/shorts/sh.jpg",
            "assets/images/men/shorts/sh.jpg"
        ]
    },
    {
        id: "men-shorts-dominator-workout",
        gender: "men",
        name: "Dominator Workout Shorts",
        price: "1499.00",
        image: "assets/images/men/shorts/shorts.png",
        category: "shorts",
        description: "Athletic-cut shorts with side slits for an unrestricted range of motion.",
        images: [
            "assets/images/men/shorts/shorts.png",
            "assets/images/men/shorts/shorts.png",
            "assets/images/men/shorts/shorts.png",
            "assets/images/men/shorts/shorts.png"
        ]
    },

    // ----------------------------------------------------
    // SLEEVELESS TOPS (sleless)
    // ----------------------------------------------------
    {
        id: "men-sleless-warrior-tank",
        gender: "men",
        name: "Warrior Sleeveless Tank",
        price: "1199.00",
        image: "assets/images/men/sleless/MHS 1.jpg",
        category: "sleless",
        description: "Deep armhole performance tank top engineered to highlight shoulder structure.",
        images: [
            "assets/images/men/sleless/MHS 1.jpg",
            "assets/images/men/sleless/MHS 1.jpg",
            "assets/images/men/sleless/MHS 1.jpg",
            "assets/images/men/sleless/MHS 1.jpg"
        ]
    },
    {
        id: "men-sleless-performance",
        gender: "men",
        name: "Performance Sleeveless Tee",
        price: "1299.00",
        image: "assets/images/men/sleless/half sleves.png",
        category: "sleless",
        description: "Dropped armholes and flat seams for maximum cooling during cardio sets.",
        images: [
            "assets/images/men/sleless/half sleves.png",
            "assets/images/men/sleless/half sleves.png",
            "assets/images/men/sleless/half sleves.png",
            "assets/images/men/sleless/half sleves.png"
        ]
    },

    // ----------------------------------------------------
    // ATHLETIC T-SHIRTS (tshrits)
    // ----------------------------------------------------
    {
        id: "men-tshrits-apex-athletic",
        gender: "men",
        name: "Apex Athletic Tee",
        price: "1399.00",
        image: "assets/images/men/tshrits/Cts.jpg",
        category: "tshrits",
        description: "Active-dry training tee with mesh back panels for high air permeability.",
        images: [
            "assets/images/men/tshrits/Cts.jpg",
            "assets/images/men/tshrits/Cts.jpg",
            "assets/images/men/tshrits/Cts.jpg",
            "assets/images/men/tshrits/Cts.jpg"
        ]
    },
    {
        id: "men-tshrits-stealth-training",
        gender: "men",
        name: "Stealth Training Tee",
        price: "1499.00",
        image: "assets/images/men/tshrits/mfs.png",
        category: "tshrits",
        description: "Ultra-soft cotton blend shirt featuring flat lock seam styling and crew neck lines.",
        images: [
            "assets/images/men/tshrits/mfs.png",
            "assets/images/men/tshrits/mfs.png",
            "assets/images/men/tshrits/mfs.png",
            "assets/images/men/tshrits/mfs.png"
        ]
    }
];
