// Armour47 Accessories Product Database
// To add a new product in the future, simply add a new object to the PRODUCTS_ACCESSORIES array below.
//
// Object properties:
// - id: Unique identifier for the product (e.g. "accessories-gear-bottle").
// - gender: Set to "accessories".
// - name: The product display name.
// - price: The product price in INR.
// - image: The main display image path (e.g. "assets/images/accessories/.../image.jpg").
// - category: The folder name (sub-category) where the image is stored.
//             Valid categories for Accessories: "all gears", "caps", "shoes"
// - description: (Optional) Description text.
// - images: Array of paths for multiple images in the product details page.
//           Please specify 4 paths here (they can be the same or different images).

const PRODUCTS_ACCESSORIES = [
    // ----------------------------------------------------
    // ALL GEAR (all gears)
    // ----------------------------------------------------
    {
        id: "accessories-gear-bottle",
        gender: "accessories",
        name: "Warrior Water Bottle 750ml",
        price: "799.00",
        image: "assets/images/accessories/all gears/750ml Sublimation Blank Bottles BB7 – ApparelTech.jpg",
        category: "all gears",
        description: "Double-walled vacuum insulated stainless steel water bottle. Keeps fluids cold for up to 24 hours.",
        images: [
            "assets/images/accessories/all gears/750ml Sublimation Blank Bottles BB7 – ApparelTech.jpg",
            "assets/images/accessories/all gears/750ml Sublimation Blank Bottles BB7 – ApparelTech.jpg",
            "assets/images/accessories/all gears/750ml Sublimation Blank Bottles BB7 – ApparelTech.jpg",
            "assets/images/accessories/all gears/750ml Sublimation Blank Bottles BB7 – ApparelTech.jpg"
        ]
    },
    {
        id: "accessories-gear-flask",
        gender: "accessories",
        name: "Custom Sport Flask",
        price: "699.00",
        image: "assets/images/accessories/all gears/Garrafa de agua Esportiva Personalizada.jpg",
        category: "all gears",
        description: "Matte finish lightweight sports bottle with leak-proof carry loop cap.",
        images: [
            "assets/images/accessories/all gears/Garrafa de agua Esportiva Personalizada.jpg",
            "assets/images/accessories/all gears/Garrafa de agua Esportiva Personalizada.jpg",
            "assets/images/accessories/all gears/Garrafa de agua Esportiva Personalizada.jpg",
            "assets/images/accessories/all gears/Garrafa de agua Esportiva Personalizada.jpg"
        ]
    },
    {
        id: "accessories-gear-wristbands",
        gender: "accessories",
        name: "Cotton Sweat Wristbands",
        price: "399.00",
        image: "assets/images/accessories/all gears/Muñequeras de Sudor, Pulseras de Tela de Rizo de Algodón, Muñequeras Deportivas para Hombres y Mujeres, Thicken Bandas Sudor para Deportes, Beisbol, Gimnasio, Entrenamiento, Tenis, Baloncesto 3 Pares.jpg",
        category: "all gears",
        description: "Super absorbent combed cotton wrist sweatbands to keep hands dry for secure grips.",
        images: [
            "assets/images/accessories/all gears/Muñequeras de Sudor, Pulseras de Tela de Rizo de Algodón, Muñequeras Deportivas para Hombres y Mujeres, Thicken Bandas Sudor para Deportes, Beisbol, Gimnasio, Entrenamiento, Tenis, Baloncesto 3 Pares.jpg",
            "assets/images/accessories/all gears/Muñequeras de Sudor, Pulseras de Tela de Rizo de Algodón, Muñequeras Deportivas para Hombres y Mujeres, Thicken Bandas Sudor para Deportes, Beisbol, Gimnasio, Entrenamiento, Tenis, Baloncesto 3 Pares.jpg",
            "assets/images/accessories/all gears/Muñequeras de Sudor, Pulseras de Tela de Rizo de Algodón, Muñequeras Deportivas para Hombres y Mujeres, Thicken Bandas Sudor para Deportes, Beisbol, Gimnasio, Entrenamiento, Tenis, Baloncesto 3 Pares.jpg",
            "assets/images/accessories/all gears/Muñequeras de Sudor, Pulseras de Tela de Rizo de Algodón, Muñequeras Deportivas para Hombres y Mujeres, Thicken Bandas Sudor para Deportes, Beisbol, Gimnasio, Entrenamiento, Tenis, Baloncesto 3 Pares.jpg"
        ]
    },
    {
        id: "accessories-gear-wraps",
        gender: "accessories",
        name: "Core Gym Wrist Wraps",
        price: "599.00",
        image: "assets/images/accessories/all gears/download (1).jpg",
        category: "all gears",
        description: "Heavy-duty elastic wrist wraps providing maximum structural support during heavy press exercises.",
        images: [
            "assets/images/accessories/all gears/download (1).jpg",
            "assets/images/accessories/all gears/download (1).jpg",
            "assets/images/accessories/all gears/download (1).jpg",
            "assets/images/accessories/all gears/download (1).jpg"
        ]
    },
    {
        id: "accessories-gear-straps",
        gender: "accessories",
        name: "Heavy Duty Lifting Straps",
        price: "499.00",
        image: "assets/images/accessories/all gears/download.jpg",
        category: "all gears",
        description: "Premium cotton webbing straps with neoprene padding to secure grip during heavy pulls.",
        images: [
            "assets/images/accessories/all gears/download.jpg",
            "assets/images/accessories/all gears/download.jpg",
            "assets/images/accessories/all gears/download.jpg",
            "assets/images/accessories/all gears/download.jpg"
        ]
    },

    // ----------------------------------------------------
    // HEADWEAR & CAPS (caps)
    // ----------------------------------------------------
    {
        id: "accessories-caps-sport",
        gender: "accessories",
        name: "Aero Sport Cap",
        price: "999.00",
        image: "assets/images/accessories/caps/cap 1.png",
        category: "caps",
        description: "Lightweight, laser-perforated sports hat designed to keep heads cool and shield sun rays.",
        images: [
            "assets/images/accessories/caps/cap 1.png",
            "assets/images/accessories/caps/cap 1.png",
            "assets/images/accessories/caps/cap 1.png",
            "assets/images/accessories/caps/cap 1.png"
        ]
    },
    {
        id: "accessories-caps-baseball",
        gender: "accessories",
        name: "Dominator Baseball Hat",
        price: "899.00",
        image: "assets/images/accessories/caps/caps.png",
        category: "caps",
        description: "Structured classic six-panel baseball cap with detailed red Armour47 embroidery.",
        images: [
            "assets/images/accessories/caps/caps.png",
            "assets/images/accessories/caps/caps.png",
            "assets/images/accessories/caps/caps.png",
            "assets/images/accessories/caps/caps.png"
        ]
    },
    {
        id: "accessories-caps-classic",
        gender: "accessories",
        name: "Stealth Classic Cap",
        price: "999.00",
        image: "assets/images/accessories/caps/cp.jpg",
        category: "caps",
        description: "Premium cotton twill curved-brim dad cap featuring minimal emblem stitching.",
        images: [
            "assets/images/accessories/caps/cp.jpg",
            "assets/images/accessories/caps/cp.jpg",
            "assets/images/accessories/caps/cp.jpg",
            "assets/images/accessories/caps/cp.jpg"
        ]
    },
    {
        id: "accessories-caps-embroidered",
        gender: "accessories",
        name: "Stealth Embroidered Cap",
        price: "999.00",
        image: "assets/images/accessories/caps/cp1.jpg",
        category: "caps",
        description: "Structured streetwear hat with adjustable metal buckle clasp closure.",
        images: [
            "assets/images/accessories/caps/cp1.jpg",
            "assets/images/accessories/caps/cp1.jpg",
            "assets/images/accessories/caps/cp1.jpg",
            "assets/images/accessories/caps/cp1.jpg"
        ]
    },

    // ----------------------------------------------------
    // ATHLETIC FOOTWEAR (shoes)
    // ----------------------------------------------------
    {
        id: "accessories-shoes-predator-v1",
        gender: "accessories",
        name: "Apex Predator Trainers v1",
        price: "6999.00",
        image: "assets/images/accessories/shoes/ss.png",
        category: "shoes",
        description: "Premium cross-training footwear with a flat, stable platform for maximum power transfer during lifts.",
        images: [
            "assets/images/accessories/shoes/ss.png",
            "assets/images/accessories/shoes/ss.png",
            "assets/images/accessories/shoes/ss.png",
            "assets/images/accessories/shoes/ss.png"
        ]
    },
    {
        id: "accessories-shoes-predator-v2",
        gender: "accessories",
        name: "Apex Predator Trainers v2",
        price: "7299.00",
        image: "assets/images/accessories/shoes/ss1.png",
        category: "shoes",
        description: "High-traction rubber wraps and breathable knit uppers perfect for dynamic agility drills.",
        images: [
            "assets/images/accessories/shoes/ss1.png",
            "assets/images/accessories/shoes/ss1.png",
            "assets/images/accessories/shoes/ss1.png",
            "assets/images/accessories/shoes/ss1.png"
        ]
    },
    {
        id: "accessories-shoes-predator-v3",
        gender: "accessories",
        name: "Apex Predator Trainers v3",
        price: "6799.00",
        image: "assets/images/accessories/shoes/ss3.png",
        category: "shoes",
        description: "Engineered high density foam midsole to combine lifting stability with comfort cushion metrics.",
        images: [
            "assets/images/accessories/shoes/ss3.png",
            "assets/images/accessories/shoes/ss3.png",
            "assets/images/accessories/shoes/ss3.png",
            "assets/images/accessories/shoes/ss3.png"
        ]
    },
    {
        id: "accessories-shoes-predator-v4",
        gender: "accessories",
        name: "Apex Predator Trainers v4",
        price: "7499.00",
        image: "assets/images/accessories/shoes/ss4.png",
        category: "shoes",
        description: "Stealth black training shoe featuring quick-lace lockdown loops for seamless secure fits.",
        images: [
            "assets/images/accessories/shoes/ss4.png",
            "assets/images/accessories/shoes/ss4.png",
            "assets/images/accessories/shoes/ss4.png",
            "assets/images/accessories/shoes/ss4.png"
        ]
    }
];
