// =========================================
// CANDYRUSH INTERACTIVE SCRIPT
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------
    // 1. BANNER SLIDER LOGIC (< > Keys & Dots)
    // -----------------------------------------
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

        // Apply slide transform
        const offset = -currentSlide * 33.3333;
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }

        // Update dots active state
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        // Sync hidden radios if present
        const radio = document.getElementById(`slide-${currentSlide + 1}`);
        if (radio) radio.checked = true;
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

    // Auto-slide functionality
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

    // Initialize first slide
    goToSlide(0);
    startAutoSlide();


    // -----------------------------------------
    // 2. INTERACTIVE HANGING THREAD CANDIES
    // -----------------------------------------
    const hangingCandies = document.querySelectorAll('.hanging-candy');

    hangingCandies.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.animation = 'none';
            // Force reflow
            void item.offsetWidth;
            item.style.animation = 'threadSwayFast 0.6s ease-in-out infinite alternate';
        });

        item.addEventListener('mouseleave', () => {
            item.style.animation = 'none';
            void item.offsetWidth;
            item.style.animation = 'threadSway 3s ease-in-out infinite alternate';
        });

        item.addEventListener('click', () => {
            item.classList.add('pop-candy');
            setTimeout(() => {
                item.classList.remove('pop-candy');
            }, 600);
        });
    });


    // -----------------------------------------
    // 3. CANDY SPACE ROCKET SPARKLE TRAIL
    // -----------------------------------------
    const rocket = document.querySelector('.candy-rocket');
    const spaceBg = document.querySelector('.background-animation');

    if (rocket && spaceBg) {
        setInterval(() => {
            const rect = rocket.getBoundingClientRect();
            if (rect.x > 0 && rect.x < window.innerWidth) {
                const star = document.createElement('span');
                star.className = 'rocket-trail-star';
                star.textContent = ['✨', '⭐', '🍬', '💫'][Math.floor(Math.random() * 4)];
                star.style.left = `${rect.x + 10}px`;
                star.style.top = `${rect.y + 20}px`;
                spaceBg.appendChild(star);

                setTimeout(() => {
                    star.remove();
                }, 1200);
            }
        }, 400);
    }
});
