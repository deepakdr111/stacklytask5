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

        // Render candy cards with wishlist heart button before buy button (price -> wishlist -> buy)
        modalGrid.innerHTML = data.candies.map(item => {
            const isInWishlist = wishlist.some(w => w.name === item.name);
            return `
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
                        <button class="modal-candy-wishlist-btn ${isInWishlist ? 'active-heart' : ''}" 
                                data-name="${item.name}" 
                                data-price="${item.price.replace('₹','')}" 
                                data-img="${item.img}" 
                                title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                            ${isInWishlist ? '❤️' : '🤍'}
                        </button>
                        <button class="modal-add-btn add-to-cart-trigger" data-name="${item.name}" data-price="${item.price.replace('₹','')}" data-img="${item.img}">BUY 🛒</button>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Bind quick add buttons inside modal
        modalGrid.querySelectorAll('.add-to-cart-trigger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const name = btn.getAttribute('data-name');
                const price = parseFloat(btn.getAttribute('data-price'));
                const img = btn.getAttribute('data-img');
                addToCart(name, price, img);
            });
        });

        // Bind wishlist toggle buttons on every candy in modal
        modalGrid.querySelectorAll('.modal-candy-wishlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const name = btn.getAttribute('data-name');
                const price = parseFloat(btn.getAttribute('data-price'));
                const img = btn.getAttribute('data-img');
                toggleWishlist(name, price, img, btn);
            });
        });
    }

    function closeCollectionModal() {
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach click handlers to all EXPLORE COLLECTION buttons
    document.querySelectorAll('.explore-collection-btn:not(.open-box-builder-trigger)').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const collectionKey = btn.getAttribute('data-collection');
            if (collectionKey) {
                openCollectionModal(collectionKey);
            }
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


    // ----------------------------------------------------------------------
    // 3B. INTERACTIVE "BUILD YOUR OWN MYSTERY BOX" BUILDER
    // ----------------------------------------------------------------------
    const allCandiesCatalog = [
        // Classic
        { id: "c1", name: "Strawberry Bonbon", flavor: "Strawberry • Classic", price: 49, category: "Classic", img: "assets/sweets.png" },
        { id: "c2", name: "Mint Candy Cane", flavor: "Mint • Nostalgic", price: 39, category: "Classic", img: "assets/candy-cane.png" },
        { id: "c3", name: "Caramel Toffee Bite", flavor: "Caramel • Classic", price: 59, category: "Classic", img: "assets/candy.png" },
        { id: "c4", name: "Vintage Butterscotch", flavor: "Butterscotch • Retro", price: 69, category: "Classic", img: "assets/sweets.png" },
        { id: "c5", name: "Rose Falooda Drop", flavor: "Rose • Heritage", price: 45, category: "Classic", img: "assets/gummy-bear.png" },
        { id: "c6", name: "Tangy Orange Slice", flavor: "Citrus • Nostalgic", price: 39, category: "Classic", img: "assets/lollipop.png" },
        
        // Gummy Galaxy
        { id: "g1", name: "Gummy Bear Blast", flavor: "Mixed Fruit • Gummy", price: 79, category: "Gummy", img: "assets2/21_gummy_bear.png" },
        { id: "g2", name: "Sour Neon Worms", flavor: "Tangy Citrus • Gummy", price: 89, category: "Gummy", img: "assets2/24_gummy_worm.png" },
        { id: "g3", name: "Berry Jelly Cubes", flavor: "Wild Berry • Soft Chew", price: 69, category: "Gummy", img: "assets2/22_gummy_green.png" },
        { id: "g4", name: "Cosmic Gummy Rings", flavor: "Peach & Raspberry", price: 99, category: "Gummy", img: "assets2/23_gummy_orange.png" },
        { id: "g5", name: "Star Gummy Chew", flavor: "Blueberry • Galaxy", price: 75, category: "Gummy", img: "assets2/30_jellybean_purple.png" },
        { id: "g6", name: "Watermelon Slice Gummy", flavor: "Fresh Melon • Soft", price: 85, category: "Gummy", img: "assets2/28_strawberry.png" },
        
        // Chocolates
        { id: "ch1", name: "Dark Cocoa Truffle", flavor: "85% Belgian Dark • Cocoa", price: 149, category: "Choco", img: "assets2/13_chocolate_truffle.png" },
        { id: "ch2", name: "Hazelnut Praline", flavor: "Piedmont Hazelnut • Milk", price: 169, category: "Choco", img: "assets2/choco.png" },
        { id: "ch3", name: "Alpine Milk Chocolate Bar", flavor: "Creamy Cocoa • Milk", price: 99, category: "Choco", img: "assets2/12_chocolate_bar.png" },
        { id: "ch4", name: "Espresso Dark Bite", flavor: "Arabica Coffee • Cocoa", price: 129, category: "Choco", img: "assets2/41_chocolate_piece.png" },
        { id: "ch5", name: "Sea Salt Caramel Fudge", flavor: "Butter Caramel • Cocoa", price: 119, category: "Choco", img: "assets2/11_cookie.png" },
        
        // Rainbow
        { id: "r1", name: "Swirl Rainbow Pop", flavor: "Fruit Fusion • Swirl", price: 89, category: "Rainbow", img: "assets2/18_rainbow_lollipop.png" },
        { id: "r2", name: "Berry Swirl Lollipop", flavor: "Strawberry & Vanilla", price: 79, category: "Rainbow", img: "assets2/32_lollipop_blue.png" },
        { id: "r3", name: "Rainbow Candy Crystals", flavor: "Multi-Fruit • Hard", price: 69, category: "Rainbow", img: "assets2/rainbowlolli.png" },
        { id: "r4", name: "Citrus Drop Lollipop", flavor: "Lemon & Lime Swirl", price: 59, category: "Rainbow", img: "assets2/33_lollipop_green.png" },
        { id: "r5", name: "Heart Swirl Candy", flavor: "Cherry & Cream", price: 75, category: "Rainbow", img: "assets2/31_heart_candy.png" }
    ];

    const boxBuilderModal = document.getElementById('boxBuilderModal');
    const closeBoxBuilderBtn = document.getElementById('closeBoxBuilderBtn');
    const boxSizeChips = document.querySelectorAll('.box-size-chip');
    const boxSlotsGrid = document.getElementById('boxSlotsGrid');
    const builderCandiesGrid = document.getElementById('builderCandiesGrid');
    const builderTabs = document.querySelectorAll('.builder-tab-btn');
    const selectedCountDisplay = document.getElementById('selectedCountDisplay');
    const maxCountDisplay = document.getElementById('maxCountDisplay');
    const builderTotalPrice = document.getElementById('builderTotalPrice');
    const addCustomBoxToCartBtn = document.getElementById('addCustomBoxToCartBtn');
    const clearBoxBtn = document.getElementById('clearBoxBtn');
    const builderGreetingMessage = document.getElementById('builderGreetingMessage');

    let boxSize = 4;
    let boxName = "Small Sweet Box (4 Candies)";
    let boxBasePrice = 249;
    let selectedBoxCandies = [];
    let currentBuilderFilter = "all";

    function updateBoxBuilderUI() {
        if (selectedCountDisplay) selectedCountDisplay.textContent = selectedBoxCandies.length;
        if (maxCountDisplay) maxCountDisplay.textContent = boxSize;
        if (builderTotalPrice) builderTotalPrice.textContent = `₹${boxBasePrice}`;

        // Render slots
        if (boxSlotsGrid) {
            let slotsHTML = '';
            for (let i = 0; i < boxSize; i++) {
                if (i < selectedBoxCandies.length) {
                    const item = selectedBoxCandies[i];
                    slotsHTML += `
                        <div class="box-slot filled">
                            <button class="slot-remove-btn" data-index="${i}" title="Remove Candy">✕</button>
                            <img src="${item.img}" alt="${item.name}" class="slot-candy-img">
                            <span class="slot-candy-label">${item.name}</span>
                        </div>
                    `;
                } else {
                    slotsHTML += `
                        <div class="box-slot empty">
                            <span class="slot-empty-icon">🍬</span>
                            <span class="slot-empty-text">Slot ${i + 1}</span>
                        </div>
                    `;
                }
            }
            boxSlotsGrid.innerHTML = slotsHTML;

            // Bind remove buttons on filled slots
            boxSlotsGrid.querySelectorAll('.slot-remove-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const idx = parseInt(btn.getAttribute('data-index'));
                    selectedBoxCandies.splice(idx, 1);
                    updateBoxBuilderUI();
                    renderBuilderCandies();
                });
            });
        }

        renderBuilderCandies();
    }

    function renderBuilderCandies() {
        if (!builderCandiesGrid) return;

        const filtered = currentBuilderFilter === "all" 
            ? allCandiesCatalog 
            : allCandiesCatalog.filter(c => c.category === currentBuilderFilter);

        builderCandiesGrid.innerHTML = filtered.map(item => {
            const countInBox = selectedBoxCandies.filter(c => c.id === item.id).length;
            const isFull = selectedBoxCandies.length >= boxSize;

            return `
                <div class="builder-candy-card ${countInBox > 0 ? 'selected-in-box' : ''}">
                    <div class="builder-candy-img-wrap">
                        <img src="${item.img}" alt="${item.name}" class="builder-candy-img">
                        ${countInBox > 0 ? `<span class="in-box-badge">${countInBox} in Box</span>` : ''}
                    </div>
                    <div class="builder-candy-details">
                        <span class="builder-candy-cat">${item.category}</span>
                        <h4 class="builder-candy-title">${item.name}</h4>
                        <p class="builder-candy-flavor">${item.flavor}</p>
                    </div>
                    <div class="builder-card-actions">
                        ${countInBox > 0 ? `
                            <button class="builder-remove-single-btn" data-id="${item.id}" title="Remove one from box">-</button>
                        ` : ''}
                        <button class="builder-add-to-box-btn ${isFull ? 'disabled-full' : ''}" data-id="${item.id}">
                            ${isFull ? 'Box Full' : '+ Add to Box'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        // Bind Add to Box buttons
        builderCandiesGrid.querySelectorAll('.builder-add-to-box-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (selectedBoxCandies.length >= boxSize) {
                    showToast(`Your ${boxName} is already full (${boxSize}/${boxSize})! 🎁`);
                    return;
                }
                const id = btn.getAttribute('data-id');
                const candy = allCandiesCatalog.find(c => c.id === id);
                if (candy) {
                    selectedBoxCandies.push(candy);
                    updateBoxBuilderUI();
                    showToast(`Added ${candy.name} to Custom Box! ✨`);
                }
            });
        });

        // Bind Remove Single buttons
        builderCandiesGrid.querySelectorAll('.builder-remove-single-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = btn.getAttribute('data-id');
                const idx = selectedBoxCandies.findIndex(c => c.id === id);
                if (idx > -1) {
                    const removed = selectedBoxCandies.splice(idx, 1)[0];
                    updateBoxBuilderUI();
                    showToast(`Removed ${removed.name} from Box.`);
                }
            });
        });
    }

    // Size Chip selection
    boxSizeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            boxSizeChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            boxSize = parseInt(chip.getAttribute('data-size'));
            boxName = chip.getAttribute('data-name');
            boxBasePrice = parseInt(chip.getAttribute('data-price'));

            if (selectedBoxCandies.length > boxSize) {
                selectedBoxCandies = selectedBoxCandies.slice(0, boxSize);
            }
            updateBoxBuilderUI();
        });
    });

    // Category Filter Tabs
    builderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            builderTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentBuilderFilter = tab.getAttribute('data-cat');
            renderBuilderCandies();
        });
    });

    // Clear Box Button
    if (clearBoxBtn) {
        clearBoxBtn.addEventListener('click', () => {
            selectedBoxCandies = [];
            updateBoxBuilderUI();
            showToast("Custom box cleared!");
        });
    }

    function openBoxBuilder() {
        if (!boxBuilderModal) return;
        updateBoxBuilderUI();
        boxBuilderModal.classList.add('active');
        boxBuilderModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeBoxBuilder() {
        if (!boxBuilderModal) return;
        boxBuilderModal.classList.remove('active');
        boxBuilderModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach open triggers to all "Build a Box" buttons
    document.querySelectorAll('.open-box-builder-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openBoxBuilder();
        });
    });

    if (closeBoxBuilderBtn) {
        closeBoxBuilderBtn.addEventListener('click', closeBoxBuilder);
    }

    if (boxBuilderModal) {
        boxBuilderModal.addEventListener('click', (e) => {
            if (e.target === boxBuilderModal) {
                closeBoxBuilder();
            }
        });
    }

    // Add Custom Box to Cart
    if (addCustomBoxToCartBtn) {
        addCustomBoxToCartBtn.addEventListener('click', () => {
            if (selectedBoxCandies.length === 0) {
                showToast("Please add at least one candy to your box! 🍬");
                return;
            }

            const greetingNote = builderGreetingMessage && builderGreetingMessage.value.trim() 
                ? ` (Note: "${builderGreetingMessage.value.trim()}")` 
                : '';

            const candySummary = selectedBoxCandies.map(c => c.name).join(', ');
            const customBoxItem = {
                name: `Custom ${boxName}${greetingNote}`,
                price: boxBasePrice,
                img: selectedBoxCandies[0]?.img || "assets/candybox.PNG",
                qty: 1,
                details: candySummary
            };

            addToCart(customBoxItem.name, customBoxItem.price, customBoxItem.img);
            showToast(`🎁 Custom Mystery Box added to Cart successfully!`);
            closeBoxBuilder();
        });
    }


    // ----------------------------------------------------------------------
    // 4. INTERACTIVE CART, WISHLIST & ACCOUNT MODAL STATE MANAGEMENT
    // ----------------------------------------------------------------------
    let cart = [
        { name: "Rainbow Galaxy Mixbox", price: 299, img: "assets/mixedcandy.png", qty: 2 }
    ];
    let wishlist = [];

    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');

    function showToast(msg) {
        if (!toast || !toastMsg) return;
        toastMsg.textContent = msg;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    // Cart State Handlers
    const headerCartCount = document.getElementById('headerCartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    const cartModal = document.getElementById('cartModal');
    const openCartModalBtn = document.getElementById('openCartModalBtn');
    const closeCartModalBtn = document.getElementById('closeCartModalBtn');

    function updateCartUI() {
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        if (headerCartCount) headerCartCount.textContent = totalQty;
        if (cartTotalPrice) cartTotalPrice.textContent = `₹${totalPrice}`;

        if (cartItemsList) {
            if (cart.length === 0) {
                cartItemsList.innerHTML = `<p style="text-align:center; padding: 20px; color: rgba(255,255,255,0.7);">Your sweet cart is empty 🍭</p>`;
            } else {
                cartItemsList.innerHTML = cart.map((item, index) => `
                    <div class="drawer-item-card">
                        <div class="drawer-item-left">
                            <img src="${item.img}" alt="${item.name}" class="drawer-item-img">
                            <div>
                                <div class="drawer-item-title">${item.name}</div>
                                <div class="drawer-item-price">₹${item.price} × ${item.qty}</div>
                            </div>
                        </div>
                        <button class="remove-drawer-item-btn" data-index="${index}">Remove</button>
                    </div>
                `).join('');

                cartItemsList.querySelectorAll('.remove-drawer-item-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const idx = parseInt(btn.getAttribute('data-index'));
                        cart.splice(idx, 1);
                        updateCartUI();
                        showToast("Item removed from cart 🗑️");
                    });
                });
            }
        }
    }

    function addToCart(name, price, img) {
        const existing = cart.find(item => item.name === name);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ name, price, img, qty: 1 });
        }
        updateCartUI();
        showToast(`Added ${name} to Cart 🛒!`);
    }

    document.querySelectorAll('.add-to-cart-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = btn.getAttribute('data-name') || 'Sweet Candy Item';
            const price = parseFloat(btn.getAttribute('data-price')) || 299;
            const img = btn.getAttribute('data-img') || 'assets/mixedcandy.png';
            addToCart(name, price, img);
        });
    });

    if (openCartModalBtn) {
        openCartModalBtn.addEventListener('click', () => {
            updateCartUI();
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeCartModalBtn) {
        closeCartModalBtn.addEventListener('click', () => {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast("Your cart is empty! Add some sweet treats first 🍬");
                return;
            }
            showToast("Order placed successfully! Express delivery dispatched 🚀");
            cart = [];
            updateCartUI();
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Wishlist State Handlers
    const headerWishlistCount = document.getElementById('headerWishlistCount');
    const wishlistItemsList = document.getElementById('wishlistItemsList');
    const wishlistModal = document.getElementById('wishlistModal');
    const openWishlistModalBtn = document.getElementById('openWishlistModalBtn');
    const closeWishlistModalBtn = document.getElementById('closeWishlistModalBtn');
    const closeWishlistActionBtn = document.getElementById('closeWishlistActionBtn');

    function syncHeartButtons() {
        document.querySelectorAll('.card-heart-btn').forEach(btn => {
            const name = btn.getAttribute('data-name');
            const isInWishlist = wishlist.some(item => item.name === name);
            if (isInWishlist) {
                btn.classList.add('active-heart');
                btn.textContent = '❤️';
            } else {
                btn.classList.remove('active-heart');
                btn.textContent = '🤍';
            }
        });
    }

    function toggleWishlist(name, price, img, btnEl) {
        const existingIndex = wishlist.findIndex(item => item.name === name);
        if (existingIndex > -1) {
            wishlist.splice(existingIndex, 1);
            showToast(`Removed ${name} from Wishlist ❤️`);
        } else {
            wishlist.push({ name, price, img });
            showToast(`Added ${name} to Wishlist ❤️!`);
        }
        updateWishlistUI();
        syncHeartButtons();
    }

    function updateWishlistUI() {
        if (headerWishlistCount) headerWishlistCount.textContent = wishlist.length;

        if (wishlistItemsList) {
            if (wishlist.length === 0) {
                wishlistItemsList.innerHTML = `<p style="text-align:center; padding: 20px; color: rgba(255,255,255,0.7);">Your wishlist is empty ❤️</p>`;
            } else {
                wishlistItemsList.innerHTML = wishlist.map((item, index) => `
                    <div class="drawer-item-card">
                        <div class="drawer-item-left">
                            <img src="${item.img}" alt="${item.name}" class="drawer-item-img">
                            <div>
                                <div class="drawer-item-title">${item.name}</div>
                                <div class="drawer-item-price">₹${item.price}</div>
                            </div>
                        </div>
                        <button class="remove-drawer-item-btn" data-index="${index}">Remove</button>
                    </div>
                `).join('');

                wishlistItemsList.querySelectorAll('.remove-drawer-item-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const idx = parseInt(btn.getAttribute('data-index'));
                        wishlist.splice(idx, 1);
                        updateWishlistUI();
                        syncHeartButtons();
                        showToast("Removed from Wishlist ❤️");
                    });
                });
            }
        }
    }

    // Attach click events to card heart buttons
    document.querySelectorAll('.card-heart-btn.add-to-wishlist-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const name = btn.getAttribute('data-name') || 'Artisan Candy';
            const price = parseFloat(btn.getAttribute('data-price')) || 49;
            const img = btn.getAttribute('data-img') || 'assets/sweets.png';
            toggleWishlist(name, price, img, btn);
        });
    });

    if (openWishlistModalBtn) {
        openWishlistModalBtn.addEventListener('click', () => {
            updateWishlistUI();
            wishlistModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeWishlistModalBtn) {
        closeWishlistModalBtn.addEventListener('click', () => {
            wishlistModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (closeWishlistActionBtn) {
        closeWishlistActionBtn.addEventListener('click', () => {
            wishlistModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Account Modal Handlers (Sign In & Sign Up)
    const accountModal = document.getElementById('accountModal');
    const openAccountModalBtn = document.getElementById('openAccountModalBtn');
    const closeAccountModalBtn = document.getElementById('closeAccountModalBtn');
    const tabSignInBtn = document.getElementById('tabSignInBtn');
    const tabSignUpBtn = document.getElementById('tabSignUpBtn');
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const accountModalTitle = document.getElementById('accountModalTitle');
    const accountModalDesc = document.getElementById('accountModalDesc');

    if (tabSignInBtn && tabSignUpBtn) {
        tabSignInBtn.addEventListener('click', (e) => {
            e.preventDefault();
            tabSignInBtn.classList.add('active');
            tabSignUpBtn.classList.remove('active');
            if (signInForm) signInForm.style.display = 'block';
            if (signUpForm) signUpForm.style.display = 'none';
            if (accountModalTitle) accountModalTitle.textContent = 'Welcome to CandyRush 🍭';
            if (accountModalDesc) accountModalDesc.textContent = 'Access your sweet profile, orders, and exclusive universe perks!';
        });

        tabSignUpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            tabSignUpBtn.classList.add('active');
            tabSignInBtn.classList.remove('active');
            if (signInForm) signInForm.style.display = 'none';
            if (signUpForm) signUpForm.style.display = 'block';
            if (accountModalTitle) accountModalTitle.textContent = 'Create Your Sweet Account ✨';
            if (accountModalDesc) accountModalDesc.textContent = 'Join the sweet lovers club for exclusive discounts & gifts!';
        });
    }

    if (openAccountModalBtn) {
        openAccountModalBtn.addEventListener('click', () => {
            accountModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeAccountModalBtn) {
        closeAccountModalBtn.addEventListener('click', () => {
            accountModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('signin-email');
            const email = emailInput ? emailInput.value : 'Sweet Lover';
            showToast(`Welcome back, ${email.split('@')[0]}! 🍭`);
            accountModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('signup-name');
            const name = nameInput ? nameInput.value : 'Sweet Friend';
            showToast(`Account created for ${name}! Welcome to CandyRush ✨`);
            accountModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Modal Background Click-to-Close for All Modals
    [accountModal, wishlistModal, cartModal, boxBuilderModal, modal].forEach(m => {
        if (m) {
            m.addEventListener('click', (e) => {
                if (e.target === m) {
                    m.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });

    // Initialize initial cart & wishlist state
    updateCartUI();
    updateWishlistUI();
    syncHeartButtons();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [modal, boxBuilderModal, accountModal, wishlistModal, cartModal].forEach(m => {
                if (m && m.classList.contains('active')) {
                    m.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    });

});






