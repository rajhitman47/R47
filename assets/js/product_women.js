// Armour47 Women's Product Database
// To add a new product in the future, simply add a new object to the PRODUCTS_WOMEN array below.
//
// Object properties:
// - id: Unique identifier for the product (e.g. "women-cpants-vortex").
// - gender: Set to "women".
// - name: The product display name.
// - price: The product price in INR.
// - image: The main display image path (e.g. "assets/images/women/.../image.png").
// - category: The folder name (sub-category) where the image is stored.
//             Valid categories for Women: "Cpants", "Ctshrits", "gym gear", "hoodies", "oversized", "pants", "shorts", "sleless", "tshrits"
// - description: (Optional) Description text.
// - images: Array of paths for multiple images in the product details page.
//           Please specify 4 paths here (they can be the same or different images).

const PRODUCTS_WOMEN = [
    // ----------------------------------------------------
    // COMPRESSION PANTS (Cpants)
    // ----------------------------------------------------
    {
        id: "women-cpants-vortex",
        gender: "women",
        name: "Vortex Compression Leggings",
        price: "2299.00",
        image: "assets/images/women/Cpants/CGps.jpg",
        category: "Cpants",
        description: "Squat-proof high-waisted compression leggings designed with an anti-slip wide waistband.",
        images: [
            "assets/images/women/Cpants/CGps.jpg",
            "assets/images/women/Cpants/CGps.jpg",
            "assets/images/women/Cpants/CGps.jpg",
            "assets/images/women/Cpants/CGps.jpg"
        ]
    },
    {
        id: "women-cpants-signature",
        gender: "women",
        name: "Signature Gym Tights",
        price: "2199.00",
        image: "assets/images/women/Cpants/WC TP.jpg",
        category: "Cpants",
        description: "Form-fitting sculpting tights offering targeted ventilation panels behind the knees.",
        images: [
            "assets/images/women/Cpants/WC TP.jpg",
            "assets/images/women/Cpants/WC TP.jpg",
            "assets/images/women/Cpants/WC TP.jpg",
            "assets/images/women/Cpants/WC TP.jpg"
        ]
    },
    {
        id: "women-cpants-luxe",
        gender: "women",
        name: "Luxe High-Rise Leggings",
        price: "2499.00",
        image: "assets/images/women/Cpants/Wtp,fb.jpg",
        category: "Cpants",
        description: "Buttery soft fabric constructed to hold shape and remain fully opaque under heavy loads.",
        images: [
            "assets/images/women/Cpants/Wtp,fb.jpg",
            "assets/images/women/Cpants/Wtp,fb.jpg",
            "assets/images/women/Cpants/Wtp,fb.jpg",
            "assets/images/women/Cpants/Wtp,fb.jpg"
        ]
    },

    // ----------------------------------------------------
    // COMPRESSION T-SHIRTS (Ctshrits)
    // ----------------------------------------------------
    {
        id: "women-ctshrits-vortex-v1",
        gender: "women",
        name: "Vortex Compression Tee v1",
        price: "1599.00",
        image: "assets/images/women/Ctshrits/WC t&s-1.jpg",
        category: "Ctshrits",
        description: "Premium knit mesh active-wear designed to compress and support critical areas during motion.",
        images: [
            "assets/images/women/Ctshrits/WC t&s-1.jpg",
            "assets/images/women/Ctshrits/WC t&s-1.jpg",
            "assets/images/women/Ctshrits/WC t&s-1.jpg",
            "assets/images/women/Ctshrits/WC t&s-1.jpg"
        ]
    },
    {
        id: "women-ctshrits-vortex-v2",
        gender: "women",
        name: "Vortex Compression Tee v2",
        price: "1599.00",
        image: "assets/images/women/Ctshrits/WC t&s-2.jpg",
        category: "Ctshrits",
        description: "Second-skin active top engineered with moisture-absorbing properties.",
        images: [
            "assets/images/women/Ctshrits/WC t&s-2.jpg",
            "assets/images/women/Ctshrits/WC t&s-2.jpg",
            "assets/images/women/Ctshrits/WC t&s-2.jpg",
            "assets/images/women/Ctshrits/WC t&s-2.jpg"
        ]
    },
    {
        id: "women-ctshrits-vortex-v3",
        gender: "women",
        name: "Vortex Compression Tee v3",
        price: "1599.00",
        image: "assets/images/women/Ctshrits/WC t&s-3.jpg",
        category: "Ctshrits",
        description: "Engineered panel contours that follow natural muscle shapes for maximum power feedback.",
        images: [
            "assets/images/women/Ctshrits/WC t&s-3.jpg",
            "assets/images/women/Ctshrits/WC t&s-3.jpg",
            "assets/images/women/Ctshrits/WC t&s-3.jpg",
            "assets/images/women/Ctshrits/WC t&s-3.jpg"
        ]
    },
    {
        id: "women-ctshrits-core-v1",
        gender: "women",
        name: "Core Compression Top v1",
        price: "1499.00",
        image: "assets/images/women/Ctshrits/WC1.jpg",
        category: "Ctshrits",
        description: "Lightweight, breathable base layer top with flatlock comfort stitching.",
        images: [
            "assets/images/women/Ctshrits/WC1.jpg",
            "assets/images/women/Ctshrits/WC1.jpg",
            "assets/images/women/Ctshrits/WC1.jpg",
            "assets/images/women/Ctshrits/WC1.jpg"
        ]
    },
    {
        id: "women-ctshrits-core-v2",
        gender: "women",
        name: "Core Compression Top v2",
        price: "1499.00",
        image: "assets/images/women/Ctshrits/WC2.jpg",
        category: "Ctshrits",
        description: "Quick-drying synthetic fibers keep you cool and completely focus-oriented.",
        images: [
            "assets/images/women/Ctshrits/WC2.jpg",
            "assets/images/women/Ctshrits/WC2.jpg",
            "assets/images/women/Ctshrits/WC2.jpg",
            "assets/images/women/Ctshrits/WC2.jpg"
        ]
    },
    {
        id: "women-ctshrits-vortex",
        gender: "women",
        name: "Vortex Compression Top",
        price: "1699.00",
        image: "assets/images/women/Ctshrits/Wc t&s.jpg",
        category: "Ctshrits",
        description: "A secure and comforting compression fit that helps regulate body temperature.",
        images: [
            "assets/images/women/Ctshrits/Wc t&s.jpg",
            "assets/images/women/Ctshrits/Wc t&s.jpg",
            "assets/images/women/Ctshrits/Wc t&s.jpg",
            "assets/images/women/Ctshrits/Wc t&s.jpg"
        ]
    },

    // ----------------------------------------------------
    // HOODIES (hoodies)
    // ----------------------------------------------------
    {
        id: "women-hoodies-aero-crop-v1",
        gender: "women",
        name: "Aero Crop Hoodie v1",
        price: "3299.00",
        image: "assets/images/women/hoodies/WC3.jpg",
        category: "hoodies",
        description: "Chic cropped streetwear hoodie made with premium structured double-brushed cotton fleece.",
        images: [
            "assets/images/women/hoodies/WC3.jpg",
            "assets/images/women/hoodies/WC3.jpg",
            "assets/images/women/hoodies/WC3.jpg",
            "assets/images/women/hoodies/WC3.jpg"
        ]
    },
    {
        id: "women-hoodies-aero-crop-v2",
        gender: "women",
        name: "Aero Crop Hoodie v2",
        price: "3299.00",
        image: "assets/images/women/hoodies/WC4.jpg",
        category: "hoodies",
        description: "Premium fleece pullover with dynamic sleeve tapering and minimal brand embroidery.",
        images: [
            "assets/images/women/hoodies/WC4.jpg",
            "assets/images/women/hoodies/WC4.jpg",
            "assets/images/women/hoodies/WC4.jpg",
            "assets/images/women/hoodies/WC4.jpg"
        ]
    },
    {
        id: "women-hoodies-valkyrie-fleece",
        gender: "women",
        name: "Valkyrie Fleece Hoodie",
        price: "3499.00",
        image: "assets/images/women/hoodies/Who.jpg",
        category: "hoodies",
        description: "Cosy warmth inside a structured streetwear silhouette. Deep double-lined hood structure.",
        images: [
            "assets/images/women/hoodies/Who.jpg",
            "assets/images/women/hoodies/Who.jpg",
            "assets/images/women/hoodies/Who.jpg",
            "assets/images/women/hoodies/Who.jpg"
        ]
    },
    {
        id: "women-hoodies-classic-pullover",
        gender: "women",
        name: "Classic Pullover Hoodie",
        price: "2999.00",
        image: "assets/images/women/hoodies/mh.jpg",
        category: "hoodies",
        description: "Active pullover featuring functional zipper ventilation and a spacious kangaroo pocket.",
        images: [
            "assets/images/women/hoodies/mh.jpg",
            "assets/images/women/hoodies/mh.jpg",
            "assets/images/women/hoodies/mh.jpg",
            "assets/images/women/hoodies/mh.jpg"
        ]
    },

    // ----------------------------------------------------
    // OVERSIZED TEES (oversized)
    // ----------------------------------------------------
    {
        id: "women-oversized-phantom-v1",
        gender: "women",
        name: "Phantom Oversized Tee v1",
        price: "1999.00",
        image: "assets/images/women/oversized/ts.JPEG",
        category: "oversized",
        description: "Heavyweight drop-shoulder street top featuring detailed matte screen printing on the chest.",
        images: [
            "assets/images/women/oversized/ts.JPEG",
            "assets/images/women/oversized/ts.JPEG",
            "assets/images/women/oversized/ts.JPEG",
            "assets/images/women/oversized/ts.JPEG"
        ]
    },
    {
        id: "women-oversized-phantom-v2",
        gender: "women",
        name: "Phantom Oversized Tee v2",
        price: "1999.00",
        image: "assets/images/women/oversized/ts1.JPEG",
        category: "oversized",
        description: "Premium cotton streetwear drape designed to sustain shape over extensive use.",
        images: [
            "assets/images/women/oversized/ts1.JPEG",
            "assets/images/women/oversized/ts1.JPEG",
            "assets/images/women/oversized/ts1.JPEG",
            "assets/images/women/oversized/ts1.JPEG"
        ]
    },
    {
        id: "women-oversized-phantom-v3",
        gender: "women",
        name: "Phantom Oversized Tee v3",
        price: "2099.00",
        image: "assets/images/women/oversized/ts2.png",
        category: "oversized",
        description: "Limited drops wash style top. Feels buttery smooth and sits beautifully.",
        images: [
            "assets/images/women/oversized/ts2.png",
            "assets/images/women/oversized/ts2.png",
            "assets/images/women/oversized/ts2.png",
            "assets/images/women/oversized/ts2.png"
        ]
    },
    {
        id: "women-oversized-phantom-v4",
        gender: "women",
        name: "Phantom Oversized Tee v4",
        price: "2099.00",
        image: "assets/images/women/oversized/ts3.png",
        category: "oversized",
        description: "Street aesthetic oversized tee designed to pair with cycling shorts or compression pants.",
        images: [
            "assets/images/women/oversized/ts3.png",
            "assets/images/women/oversized/ts3.png",
            "assets/images/women/oversized/ts3.png",
            "assets/images/women/oversized/ts3.png"
        ]
    },

    // ----------------------------------------------------
    // PANTS & JOGGERS (pants)
    // ----------------------------------------------------
    {
        id: "women-pants-coord-set",
        gender: "women",
        name: "Co-ord Training Set",
        price: "4499.00",
        image: "assets/images/women/pants/Women top and pants.png",
        category: "pants",
        description: "Matching top and joggers premium sports co-ord set designed for elite athletes.",
        images: [
            "assets/images/women/pants/Women top and pants.png",
            "assets/images/women/pants/Women top and pants.png",
            "assets/images/women/pants/Women top and pants.png",
            "assets/images/women/pants/Women top and pants.png"
        ]
    },
    {
        id: "women-pants-aero-slim",
        gender: "women",
        name: "Aero Slim-Fit Joggers",
        price: "2799.00",
        image: "assets/images/women/pants/wc new1.jpg",
        category: "pants",
        description: "Slim-cut active joggers with ankle rib cuffs and breathable mesh waistband.",
        images: [
            "assets/images/women/pants/wc new1.jpg",
            "assets/images/women/pants/wc new1.jpg",
            "assets/images/women/pants/wc new1.jpg",
            "assets/images/women/pants/wc new1.jpg"
        ]
    },
    {
        id: "women-pants-valkyrie-ribbed",
        gender: "women",
        name: "Valkyrie Ribbed Joggers",
        price: "2999.00",
        image: "assets/images/women/pants/wst png.png",
        category: "pants",
        description: "Chic and soft ribbed joggers. Holds perfect shape with a structured stretch contour.",
        images: [
            "assets/images/women/pants/wst png.png",
            "assets/images/women/pants/wst png.png",
            "assets/images/women/pants/wst png.png",
            "assets/images/women/pants/wst png.png"
        ]
    },

    // ----------------------------------------------------
    // TRAINING SHORTS (shorts)
    // ----------------------------------------------------
    {
        id: "women-shorts-athletic-v1",
        gender: "women",
        name: "Athletic Training Shorts v1",
        price: "1399.00",
        image: "assets/images/women/shorts/WC t&s-1.jpg",
        category: "shorts",
        description: "Double layered active shorts designed to maximize cooling during dynamic cardio sets.",
        images: [
            "assets/images/women/shorts/WC t&s-1.jpg",
            "assets/images/women/shorts/WC t&s-1.jpg",
            "assets/images/women/shorts/WC t&s-1.jpg",
            "assets/images/women/shorts/WC t&s-1.jpg"
        ]
    },
    {
        id: "women-shorts-athletic-v2",
        gender: "women",
        name: "Athletic Training Shorts v2",
        price: "1399.00",
        image: "assets/images/women/shorts/WC t&s-2.jpg",
        category: "shorts",
        description: "Chafe-free active shorts featuring a secure elastic waistband with internal pocket.",
        images: [
            "assets/images/women/shorts/WC t&s-2.jpg",
            "assets/images/women/shorts/WC t&s-2.jpg",
            "assets/images/women/shorts/WC t&s-2.jpg",
            "assets/images/women/shorts/WC t&s-2.jpg"
        ]
    },
    {
        id: "women-shorts-athletic-v3",
        gender: "women",
        name: "Athletic Training Shorts v3",
        price: "1399.00",
        image: "assets/images/women/shorts/WC t&s-3.jpg",
        category: "shorts",
        description: "Perfect ventilation paneling designed to keep comfort metrics optimal under stress.",
        images: [
            "assets/images/women/shorts/WC t&s-3.jpg",
            "assets/images/women/shorts/WC t&s-3.jpg",
            "assets/images/women/shorts/WC t&s-3.jpg",
            "assets/images/women/shorts/WC t&s-3.jpg"
        ]
    },
    {
        id: "women-shorts-valkyrie-gym",
        gender: "women",
        name: "Valkyrie Gym Shorts",
        price: "1499.00",
        image: "assets/images/women/shorts/WCs,fb.jpg",
        category: "shorts",
        description: "High-waisted compression gym shorts styled for elite athletic movement.",
        images: [
            "assets/images/women/shorts/WCs,fb.jpg",
            "assets/images/women/shorts/WCs,fb.jpg",
            "assets/images/women/shorts/WCs,fb.jpg",
            "assets/images/women/shorts/WCs,fb.jpg"
        ]
    },
    {
        id: "women-shorts-valkyrie-active",
        gender: "women",
        name: "Valkyrie Active Shorts",
        price: "1499.00",
        image: "assets/images/women/shorts/Wc t&s.jpg",
        category: "shorts",
        description: "Lightweight and flexible shorts engineered to stay securely positioned.",
        images: [
            "assets/images/women/shorts/Wc t&s.jpg",
            "assets/images/women/shorts/Wc t&s.jpg",
            "assets/images/women/shorts/Wc t&s.jpg",
            "assets/images/women/shorts/Wc t&s.jpg"
        ]
    },
    {
        id: "women-shorts-aero-running",
        gender: "women",
        name: "Aero Running Shorts",
        price: "1399.00",
        image: "assets/images/women/shorts/wc new.jpg",
        category: "shorts",
        description: "Dynamic stretch running shorts with curved hemline and reflective trims.",
        images: [
            "assets/images/women/shorts/wc new.jpg",
            "assets/images/women/shorts/wc new.jpg",
            "assets/images/women/shorts/wc new.jpg",
            "assets/images/women/shorts/wc new.jpg"
        ]
    },

    // ----------------------------------------------------
    // SLEEVELESS TOPS (sleless)
    // ----------------------------------------------------
    {
        id: "women-sleless-aero-racerback",
        gender: "women",
        name: "Aero Racerback Tank",
        price: "1199.00",
        image: "assets/images/women/sleless/CGts.jpg",
        category: "sleless",
        description: "Racerback athletic tank top designed to ensure complete shoulder blade mobility.",
        images: [
            "assets/images/women/sleless/CGts.jpg",
            "assets/images/women/sleless/CGts.jpg",
            "assets/images/women/sleless/CGts.jpg",
            "assets/images/women/sleless/CGts.jpg"
        ]
    },

    // ----------------------------------------------------
    // ATHLETIC T-SHIRTS (tshrits)
    // ----------------------------------------------------
    {
        id: "women-tshrits-valkyrie-training",
        gender: "women",
        name: "Valkyrie Training Tee",
        price: "1299.00",
        image: "assets/images/women/tshrits/WC1.jpg",
        category: "tshrits",
        description: "Form-fitting, lightweight training top featuring highly breathable properties.",
        images: [
            "assets/images/women/tshrits/WC1.jpg",
            "assets/images/women/tshrits/WC1.jpg",
            "assets/images/women/tshrits/WC1.jpg",
            "assets/images/women/tshrits/WC1.jpg"
        ]
    }
];
