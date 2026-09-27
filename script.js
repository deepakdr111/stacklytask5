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

});
