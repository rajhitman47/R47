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
    tshirts: "T-Shirts & Tops",
    pants: "Pants & Joggers",
    shorts: "Training Shorts",
    hoodies: "Athletic Hoodies",
    shoes: "Athletic Footwear",
    caps: "Headwear & Accessories",
    compressions: "Compression & Baselyr"
};

const CATEGORIES_ORDER = ["tshirts", "pants", "shorts", "hoodies", "shoes", "caps", "compressions"];

function initProductCatalog() {
    GENDERS.forEach(gender => {
        const panel = document.getElementById(`panel-${gender}`);
        if (!panel) return;

        let panelHtml = "";

        CATEGORIES_ORDER.forEach(catKey => {
            // Filter products matching this gender and category
            const filtered = PRODUCTS.filter(p => p.gender === gender && p.category === catKey);
            if (filtered.length === 0) return;

            const categoryName = CATEGORIES_MAPPING[catKey];
            
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
                    <h3 class="category-title">${categoryName}</h3>
                    <div class="product-grid">
                        ${gridCardsHtml}
                    </div>
                </div>
            `;
        });

        panel.innerHTML = panelHtml;
    });

    updateCartBadgeCount();
}

// Tab Switching
function switchGenderTab(gender) {
    const tabMen = document.getElementById("tab-btn-men");
    const tabWomen = document.getElementById("tab-btn-women");
    const panelMen = document.getElementById("panel-men");
    const panelWomen = document.getElementById("panel-women");

    if (!tabMen || !tabWomen) return;

    if (gender === "men") {
        tabMen.classList.add("active");
        tabWomen.classList.remove("active");
        panelMen.classList.add("active");
        panelWomen.classList.remove("active");
    } else {
        tabWomen.classList.add("active");
        tabMen.classList.remove("active");
        panelWomen.classList.add("active");
        panelMen.classList.remove("active");
    }
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