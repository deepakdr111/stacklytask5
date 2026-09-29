// ==========================================================================
// CANDYRUSH INTERACTIVE SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 1. BANNER SLIDER CONTROLS (< > Keys & Dots)
    // ----------------------------------------------------------------------
    const slidesContainer = document.querySelector('.slides');
    const banners = document.querySelectorAll('.banner');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const sliderSection = document.querySelector('.slider');

    let currentSlide = 0;
    const totalSlides = banners.length;
    let autoSlideTimer = null;

    function goToSlide(index) {
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 33.3333;
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }

        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(currentSlide - 1);
            resetAutoSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(currentSlide + 1);
            resetAutoSlide();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(idx);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideTimer = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }

    function stopAutoSlide() {
        if (autoSlideTimer) {
            clearInterval(autoSlideTimer);
            autoSlideTimer = null;
        }
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    if (sliderSection) {
        sliderSection.addEventListener('mouseenter', stopAutoSlide);
        sliderSection.addEventListener('mouseleave', startAutoSlide);
    }

    goToSlide(0);
    startAutoSlide();


    // ----------------------------------------------------------------------
    // 2. INTERACTIVE HANGING THREAD CANDIES SWAY EFFECT
    // ----------------------------------------------------------------------
    const hangingCandies = document.querySelectorAll('.hanging-candy');

    hangingCandies.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.15) rotate(12deg)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });

        item.addEventListener('click', () => {
            item.style.transform = 'scale(1.3) rotate(-18deg)';
            setTimeout(() => {
                item.style.transform = '';
            }, 400);
        });
    });


    // ----------------------------------------------------------------------
    // 3. COLLECTION DATASETS & INTERACTIVE MODAL (INR PRICES ₹)
    // ----------------------------------------------------------------------
    const collectionsData = {
        classic: {
            title: "CLASSIC SWEETS 🍭",
            badge: "24 CANDIES",
            desc: "Rediscover nostalgic sweets and timeless childhood flavors.",
            candies: [
                { name: "Strawberry Bonbon", flavor: "Strawberry • Classic", price: "₹49", category: "Classic", img: "assets/sweets.png" },
                { name: "Mint Candy Cane", flavor: "Mint • Nostalgic", price: "₹39", category: "Classic", img: "assets/candy-cane.png" },
                { name: "Caramel Toffee Bite", flavor: "Caramel • Classic", price: "₹59", category: "Classic", img: "assets/candy.png" },
                { name: "Vintage Butterscotch", flavor: "Butterscotch • Retro", price: "₹69", category: "Classic", img: "assets/sweets.png" },
                { name: "Rose Falooda Drop", flavor: "Rose • Heritage", price: "₹45", category: "Classic", img: "assets/gummy-bear.png" },
                { name: "Tangy Orange Slice", flavor: "Citrus • Nostalgic", price: "₹39", category: "Classic", img: "assets/lollipop.png" },
                { name: "Spiced Aniseed Chew", flavor: "Aniseed • Retro", price: "₹55", category: "Classic", img: "assets/candy.png" },
                { name: "Honey Roasted Toffee", flavor: "Honey • Classic", price: "₹79", category: "Classic", img: "assets/sweets.png" }
            ]
        },
        gummy: {
            title: "GUMMY GALAXY 🍬",
            badge: "32 CANDIES",
            desc: "Colorful, chewy and playful gummies from the sweetest galaxy.",
            candies: [
                { name: "Gummy Bear Blast", flavor: "Mixed Fruit • Gummy", price: "₹79", category: "Gummy", img: "assets/gummy-bear.png" },
                { name: "Sour Neon Worms", flavor: "Tangy Citrus • Gummy", price: "₹89", category: "Gummy", img: "assets/gummy-bear.png" },
                { name: "Berry Jelly Cubes", flavor: "Wild Berry • Soft Chew", price: "₹69", category: "Gummy", img: "assets/lollipop.png" },
                { name: "Cosmic Gummy Rings", flavor: "Peach & Raspberry", price: "₹99", category: "Gummy", img: "assets/candy.png" },
                { name: "Star Gummy Chew", flavor: "Blueberry • Galaxy", price: "₹75", category: "Gummy", img: "assets/gummy-bear.png" },
                { name: "Watermelon Slice Gummy", flavor: "Fresh Melon • Soft", price: "₹85", category: "Gummy", img: "assets/sweets.png" },
                { name: "Fizzy Cola Bottle", flavor: "Fizzy Cola • Gummy", price: "₹65", category: "Gummy", img: "assets/candy-cane.png" },
                { name: "Alphonso Mango Jelly", flavor: "Ripe Mango • Juicy", price: "₹95", category: "Gummy", img: "assets/gummy-bear.png" }
            ]
        },
        choco: {
            title: "CHOCO UNIVERSE 🍫",
            badge: "20 CANDIES",
            desc: "Rich handcrafted chocolates made for every chocolate lover.",
            candies: [
                { name: "Dark Cocoa Truffle", flavor: "85% Belgian Dark • Cocoa", price: "₹149", category: "Choco", img: "assets/candy-cane.png" },
                { name: "Hazelnut Praline", flavor: "Piedmont Hazelnut • Milk", price: "₹169", category: "Choco", img: "assets/sweets.png" },
                { name: "Alpine Milk Chocolate Bar", flavor: "Creamy Cocoa • Milk", price: "₹99", category: "Choco", img: "assets/candy.png" },
                { name: "Espresso Dark Bite", flavor: "Arabica Coffee • Cocoa", price: "₹129", category: "Choco", img: "assets/candy.png" },
                { name: "Sea Salt Caramel Fudge", flavor: "Butter Caramel • Cocoa", price: "₹119", category: "Choco", img: "assets/sweets.png" },
                { name: "Choco Peanut Butter Cup", flavor: "Roasted Peanut • Dark", price: "₹109", category: "Choco", img: "assets/sweets.png" },
                { name: "Golden Almond Brittle", flavor: "Toasted Almond • Cocoa", price: "₹179", category: "Choco", img: "assets/candy.png" },
                { name: "Red Velvet Truffle", flavor: "Creamy Ganache • White Choco", price: "₹159", category: "Choco", img: "assets/sweets.png" }
            ]
        },
        rainbow: {
            title: "RAINBOW LOLLIPOPS 🌈",
            badge: "40 CANDIES",
            desc: "Bright, colorful and swirly treats for every sweet moment.",
            candies: [
                { name: "Swirl Rainbow Pop", flavor: "Fruit Fusion • Swirl", price: "₹89", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Berry Swirl Lollipop", flavor: "Strawberry & Vanilla", price: "₹79", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Rainbow Candy Crystals", flavor: "Multi-Fruit • Hard", price: "₹69", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Citrus Drop Lollipop", flavor: "Lemon & Lime Swirl", price: "₹59", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Cotton Candy Swirl Pop", flavor: "Sweet Floss • Rainbow", price: "₹99", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Galaxy Twist Pop", flavor: "Grape & Mint Swirl", price: "₹85", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Tropical Paradise Pop", flavor: "Mango & Passionfruit", price: "₹95", category: "Rainbow", img: "assets/lollipop.png" },
                { name: "Wild Cherry Swirl", flavor: "Wild Cherry • Rainbow", price: "₹75", category: "Rainbow", img: "assets/lollipop.png" }
            ]
        }
    };

    const modal = document.getElementById('collectionModal');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalGrid = document.getElementById('modalCandiesGrid');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModalActionBtn = document.getElementById('closeModalActionBtn');

    function openCollectionModal(collectionKey) {
        const data = collectionsData[collectionKey];
        if (!data || !modal) return;

        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        // Render candy cards
        modalGrid.innerHTML = data.candies.map(item => `
            <div class="modal-candy-card">
                <div class="modal-candy-img-wrap">
                    <img src="${item.img}" alt="${item.name}" class="modal-candy-img">
                </div>
                <div class="modal-candy-info">
                    <span class="modal-candy-category">${item.category}</span>
                    <h4 class="modal-candy-name">${item.name}</h4>
                    <p class="modal-candy-flavor">${item.flavor}</p>
                    <div class="modal-candy-footer">
                        <span class="modal-candy-price">${item.price}</span>
                        <button class="modal-add-btn" title="Add Sweet">BUY</button>
                    </div>
                </div>
            </div>
        `).join('');

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeCollectionModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach click handlers to all EXPLORE COLLECTION buttons
    document.querySelectorAll('.explore-collection-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const collectionKey = btn.getAttribute('data-collection');
            openCollectionModal(collectionKey);
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeCollectionModal);
    if (closeModalActionBtn) closeModalActionBtn.addEventListener('click', closeCollectionModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCollectionModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeCollectionModal();
        }
    });

});

