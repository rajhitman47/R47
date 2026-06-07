/* ==========================================================================
   ARMOUR47 PREMIUM INTERACTIVES & ANIMATIONS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize components
    initEmbersCanvas();
    initParallax();
    initMobileNav();
    initMarqueeCarousel();
    initProductCatalog();
    checkUrlHash();
    initHeroSlider();
});

/* ==========================================================================
   1. PREMIUM CANVAS FIRE EMBERS SYSTEM
   ========================================================================== */

function initEmbersCanvas() {
    const canvas = document.getElementById("canvas-embers");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const maxParticles = window.innerWidth < 768 ? 40 : 90; // Optimize for mobile
    let mouseWindX = 0;

    // Handle Resize
    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Track mouse to adjust ember drift (wind)
    window.addEventListener("mousemove", (e) => {
        const percentX = (e.clientX / window.innerWidth) - 0.5; // -0.5 to 0.5
        mouseWindX = percentX * 1.5; // Scale wind drift
    });

    class Ember {
        constructor(isInitial = false) {
            this.reset(isInitial);
        }

        reset(isInitial = false) {
            this.x = Math.random() * width;
            this.y = isInitial ? Math.random() * height : height + Math.random() * 50;
            this.size = Math.random() * 2.5 + 0.8;
            this.speedY = Math.random() * 1.2 + 0.6;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.alpha = Math.random() * 0.7 + 0.3;
            this.fadeSpeed = Math.random() * 0.003 + 0.001;
            // Hot red/orange tones
            this.r = 255;
            this.g = Math.floor(Math.random() * 80) + 20;
            this.b = 0;
            this.oscillationSpeed = Math.random() * 0.02;
            this.oscillationWidth = Math.random() * 0.8;
            this.angle = Math.random() * Math.PI;
        }

        update() {
            this.y -= this.speedY;
            this.angle += this.oscillationSpeed;
            this.x += this.speedX + Math.sin(this.angle) * this.oscillationWidth + mouseWindX;
            this.alpha -= this.fadeSpeed;

            // Shrink slightly as they cool down and fade
            if (this.size > 0.5) this.size -= 0.002;

            if (this.alpha <= 0 || this.y < -10 || this.x < -10 || this.x > width + 10) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            
            // Draw a subtle radial glow for the ember
            const glow = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.size * 2.5
            );
            glow.addColorStop(0, `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`);
            glow.addColorStop(0.4, `rgba(${this.r}, ${this.g - 20}, ${this.b}, ${this.alpha * 0.6})`);
            glow.addColorStop(1, "rgba(255, 0, 0, 0)");
            
            ctx.fillStyle = glow;
            ctx.fill();
            ctx.restore();
        }
    }

    // Spawn initial particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Ember(true));
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw soft background fire glow at the bottom
        const bottomGlow = ctx.createLinearGradient(0, height - 100, 0, height);
        bottomGlow.addColorStop(0, "rgba(5, 5, 5, 0)");
        bottomGlow.addColorStop(1, "rgba(100, 0, 0, 0.06)"); // Extremely subtle
        ctx.fillStyle = bottomGlow;
        ctx.fillRect(0, height - 100, width, 100);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   2. HERO INTERACTIVE PARALLAX EFFECT
   ========================================================================== */

function initParallax() {
    const hero = document.querySelector(".hero");
    const heroImageWrap = document.querySelector(".hero-image");
    const bgOverlay = document.querySelector(".bg-overlay");
    const heroContent = document.querySelector(".hero-content");

    if (!hero || !heroImageWrap) return;

    window.addEventListener("mousemove", (e) => {
        // Calculate offset from center (-0.5 to 0.5)
        const moveX = (e.clientX / window.innerWidth) - 0.5;
        const moveY = (e.clientY / window.innerHeight) - 0.5;

        // Shift layers by different weights to create depth
        heroImageWrap.style.transform = `translate(${moveX * -18}px, ${moveY * -12}px)`;
        heroContent.style.transform = `translate(${moveX * 10}px, ${moveY * 6}px)`;
        if (bgOverlay) {
            bgOverlay.style.backgroundPosition = `${50 + moveX * 4}% ${50 + moveY * 4}%`;
        }
    });
}

function initHeroSlider() {
    const images = document.querySelectorAll(".hero-image .athlete-img");
    if (images.length <= 1) return;

    let currentIndex = 0;
    setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }, 4500); // Cross-fade every 4.5 seconds for a premium, continuous feel
}

/* ==========================================================================
   3. MOBILE NAVIGATION DRAWER
   ========================================================================== */

function initMobileNav() {
    const menuToggle = document.getElementById("hamburger-menu-toggle");
    const closeBtn = document.getElementById("mobile-nav-close");
    const mobilePanel = document.getElementById("mobile-nav");

    if (!menuToggle || !mobilePanel) return;

    menuToggle.addEventListener("click", () => {
        mobilePanel.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        mobilePanel.classList.remove("active");
    });

    // Close when clicking outside the panel
    document.addEventListener("click", (e) => {
        if (mobilePanel.classList.contains("active") && 
            !mobilePanel.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            mobilePanel.classList.remove("active");
        }
    });
}

function toggleMobileMenu() {
    const mobilePanel = document.getElementById("mobile-nav");
    if (mobilePanel) mobilePanel.classList.remove("active");
}

/* ==========================================================================
   4. AUTO-SCROLLING HORIZONTAL MARQUEE CAROUSEL
   ========================================================================== */

function initMarqueeCarousel() {
    const track = document.getElementById("carousel-marquee-track");
    if (!track) return;

    // Filter a subset of premium items for the marquee showcase
    const showcaseItems = PRODUCTS.filter((_, index) => index % 2 === 0);

    function createMarqueeCard(product) {
        const sbsContainerClass = product.isSideBySide ? "carousel-card sbs-container" : "carousel-card";
        const sbsImgClass = product.isSideBySide ? "carousel-card-img sbs-img" : "carousel-card-img";
        return `
            <div class="${sbsContainerClass}" onclick="navigateToProduct('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="${sbsImgClass}" loading="lazy">
                <div class="carousel-card-info">
                    <h4>${product.name}</h4>
                    <p>₹${parseFloat(product.price).toLocaleString('en-IN')}</p>
                </div>
            </div>
        `;
    }

    // Render twice to allow seamless infinite loops
    let htmlContent = "";
    showcaseItems.forEach(item => {
        htmlContent += createMarqueeCard(item);
    });

    // Append twice
    track.innerHTML = htmlContent + htmlContent;
}

/* ==========================================================================
   5. CATALOG RENDERING & TABS
   ========================================================================== */

const CATEGORIES_MAPPING = {
    // Men & Women categories
    Cpants: "Compression Pants",
    Ctshrits: "Compression T-Shirts",
    "gym gear": "Gym Gear",
    hoodies: "Hoodies",
    oversized: "Oversized Tees",
    pants: "Track Pants & Joggers",
    shorts: "Training Shorts",
    sleless: "Sleeveless Tops",
    tshrits: "Athletic T-Shirts",
    
    // Accessories categories
    "all gears": "Sports Gear",
    caps: "Caps & Headwear",
    shoes: "Athletic Footwear"
};

const CATEGORY_ORDER = [
    "Cpants", "Ctshrits", "gym gear", "hoodies", "oversized", "pants", "shorts", "sleless", "tshrits",
    "all gears", "caps", "shoes"
];

function normalizeProductsList() {
    window.PRODUCTS = window.PRODUCTS.map((p, index) => {
        const normalized = { ...p };
        // Determine gender from path or category if not specified
        if (!normalized.gender) {
            if (normalized.image && normalized.image.includes("/men/")) {
                normalized.gender = "men";
            } else if (normalized.image && normalized.image.includes("/women/")) {
                normalized.gender = "women";
            } else if (normalized.image && normalized.image.includes("/accessories/")) {
                normalized.gender = "accessories";
            } else {
                normalized.gender = "men";
            }
        }
        normalized.category = normalized.category || "tshrits";
        normalized.id = normalized.id || `${normalized.gender}-${normalized.category}-${index + 1}`;
        normalized.name = normalized.name || `Premium Gear ${index + 1}`;
        normalized.price = normalized.price || "1499.00";
        normalized.description = normalized.description || `Engineered for high performance, the ${normalized.name} utilizes premium material constructs designed to elevate your training. Breathable, durable, and styled for modern warriors.`;
        
        let imgs = normalized.images || [];
        if (!Array.isArray(imgs)) imgs = [];
        if (imgs.length === 0) {
            if (normalized.image) {
                imgs = [normalized.image, normalized.image, normalized.image, normalized.image];
            }
        } else {
            while (imgs.length < 4) {
                imgs.push(imgs[0] || normalized.image);
            }
        }
        normalized.images = imgs;
        normalized.image = normalized.image || imgs[0];

        normalized.features = normalized.features || [
            "High-performance active athletic thread construction",
            "Moisture-wicking mesh ventilation integration",
            "Ergonomic flatlock comfort stitching contours",
            "Reflective Armour47 branding details for safety"
        ];

        normalized.colors = normalized.colors || [
            { name: "Carbon Black", hex: "#111111" },
            { name: "Stealth Grey", hex: "#555555" },
            { name: "Crimson Red", hex: "#ff2020" },
            { name: "Arctic White", hex: "#ffffff" }
        ];

        return normalized;
    });
}

function initProductCatalog() {
    // Normalize raw products list first
    normalizeProductsList();

    GENDERS.forEach(gender => {
        const panel = document.getElementById(`panel-${gender}`);
        if (!panel) return;

        let panelHtml = "";
        
        // Dynamically get and sort unique category keys for this gender from products
        const catKeys = [...new Set(PRODUCTS.filter(p => p.gender === gender).map(p => p.category))];
        catKeys.sort((a, b) => {
            const indexA = CATEGORY_ORDER.indexOf(a);
            const indexB = CATEGORY_ORDER.indexOf(b);
            if (indexA === -1 && indexB === -1) return a.localeCompare(b);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });

        catKeys.forEach(catKey => {
            // Filter products matching this gender and category
            const filtered = PRODUCTS.filter(p => p.gender === gender && p.category === catKey);
            if (filtered.length === 0) return;

            const categoryName = CATEGORIES_MAPPING[catKey] || catKey.split(/[-_ ]+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            
            let gridCardsHtml = "";
            filtered.forEach(product => {
                const wrapperClass = product.isSideBySide ? "product-img-wrapper sbs-container" : "product-img-wrapper";
                const imgClass = product.isSideBySide ? "product-card-img sbs-img" : "product-card-img";
                gridCardsHtml += `
                    <div class="product-card" onclick="navigateToProduct('${product.id}')" data-id="${product.id}">
                        <div class="${wrapperClass}">
                            <img src="${product.image}" alt="${product.name}" class="${imgClass}" loading="lazy">
                        </div>
                        <div class="product-card-info">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <div class="product-card-footer">
                                <span class="product-price">₹${parseFloat(product.price).toLocaleString('en-IN')}</span>
                                <button class="btn-buy-card">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            panelHtml += `
                <div class="category-block" id="block-${gender}-${catKey}">
                    <div class="category-header-row">
                        <h3 class="category-title">${categoryName}</h3>
                        <div class="scroll-arrows" id="arrows-${gender}-${catKey}">
                            <button class="arrow-btn arrow-prev" onclick="scrollGrid('${gender}-${catKey}', -1)" aria-label="Scroll left">&larr;</button>
                            <button class="arrow-btn arrow-next" onclick="scrollGrid('${gender}-${catKey}', 1)" aria-label="Scroll right">&rarr;</button>
                        </div>
                    </div>
                    <div class="product-grid" id="grid-${gender}-${catKey}">
                        ${gridCardsHtml}
                    </div>
                </div>
            `;
        });

        panel.innerHTML = panelHtml;
    });

    updateCartBadgeCount();

    // Set visibility check for scroll arrows
    setTimeout(updateArrowVisibility, 100);
    window.addEventListener("resize", updateArrowVisibility);
    window.addEventListener("load", updateArrowVisibility);
}

// Scroll grid left or right
function scrollGrid(blockId, direction) {
    const grid = document.getElementById(`grid-${blockId}`);
    if (!grid) return;
    const scrollAmount = grid.clientWidth * 0.8;
    grid.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

// Show/hide arrow buttons based on grid overflow
function updateArrowVisibility() {
    const grids = document.querySelectorAll(".product-grid");
    grids.forEach(grid => {
        const id = grid.id.replace("grid-", "");
        const arrows = document.getElementById(`arrows-${id}`);
        if (arrows) {
            if (grid.scrollWidth > grid.clientWidth) {
                arrows.style.display = "flex";
            } else {
                arrows.style.display = "none";
            }
        }
    });
}

// Tab Switching
function switchGenderTab(gender) {
    const tabMen = document.getElementById("tab-btn-men");
    const tabWomen = document.getElementById("tab-btn-women");
    const tabAccessories = document.getElementById("tab-btn-accessories");
    
    const panelMen = document.getElementById("panel-men");
    const panelWomen = document.getElementById("panel-women");
    const panelAccessories = document.getElementById("panel-accessories");

    const tabs = [tabMen, tabWomen, tabAccessories];
    const panels = [panelMen, panelWomen, panelAccessories];
    const targetKey = gender.toLowerCase();

    tabs.forEach(tab => {
        if (!tab) return;
        if (tab.id === `tab-btn-${targetKey}`) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    panels.forEach(panel => {
        if (!panel) return;
        if (panel.id === `panel-${targetKey}`) {
            panel.classList.add("active");
        } else {
            panel.classList.remove("active");
        }
    });

    // Recalculate arrows when tab changes
    setTimeout(updateArrowVisibility, 150);
}

// Teaser Card Trigger
function setActiveTabAndScroll(gender, categoryKey) {
    // Switch active gender panel
    switchGenderTab(gender);

    // Scroll to the specific category block
    setTimeout(() => {
        const block = document.getElementById(`block-${gender}-${categoryKey}`);
        if (block) {
            block.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, 100);
}

// Route to product details page
function navigateToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// Update Cart Badge from localStorage count
function updateCartBadgeCount() {
    const badge = document.querySelector(".cart-badge");
    if (!badge) return;

    const orders = JSON.parse(localStorage.getItem("armour47_orders") || "[]");
    badge.textContent = orders.length;
}

/* ==========================================================================
   6. PREMIUM FULLSCREEN SEARCH LOGIC
   ========================================================================== */

function toggleSearch() {
    const panel = document.getElementById("search-bar-panel");
    if (!panel) return;

    panel.classList.toggle("active");
    if (panel.classList.contains("active")) {
        const input = document.getElementById("search-input");
        if (input) {
            input.value = "";
            input.focus();
        }
        document.getElementById("search-results-container").innerHTML = "";
    }
}

function handleSearch(query) {
    const resultsContainer = document.getElementById("search-results-container");
    if (!resultsContainer) return;

    if (!query.trim()) {
        resultsContainer.innerHTML = "";
        return;
    }

    const cleanQuery = query.toLowerCase();
    const matches = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(cleanQuery) || 
        p.description.toLowerCase().includes(cleanQuery) || 
        p.category.toLowerCase().includes(cleanQuery)
    ).slice(0, 5); // Limit search display items for premium looks

    if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align:center; color:var(--text-dark); font-size:14px; margin-top:20px;">NO PRODUCTS FOUND</p>`;
        return;
    }

    let resultsHtml = "";
    matches.forEach(product => {
        resultsHtml += `
            <div class="search-result-item" onclick="navigateToProduct('${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="search-result-img">
                <div class="search-result-info">
                    <h4>${product.name}</h4>
                    <p>${product.gender.toUpperCase()} / ${product.category.toUpperCase()}</p>
                </div>
                <span class="search-result-price">₹${parseFloat(product.price).toLocaleString('en-IN')}</span>
            </div>
        `;
    });

    resultsContainer.innerHTML = resultsHtml;
}

/* ==========================================================================
   7. DETECT HASH CHECKS FOR SEAMLESS DEEP LINKS
   ========================================================================== */

function checkUrlHash() {
    const hash = window.location.hash;
    if (hash === "#collections") {
        switchGenderTab("men");
    }
}