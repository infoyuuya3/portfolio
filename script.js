document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that need reveal
    const elementsToReveal = document.querySelectorAll('.fade-in-up, .scroll-reveal');
    elementsToReveal.forEach(element => {
        revealObserver.observe(element);
    });

    // Empathy Section Interactive Features
    const empathySection = document.getElementById('empathy');
    const decorWrapper = document.querySelector('.empathy-decorations');
    const decorCircles = document.querySelectorAll('.decor-circle');
    
    // Checklist and dynamic reveal
    const empathyItems = document.querySelectorAll('.empathy-item');
    const resolveBox = document.getElementById('resolve-box');
    
    if (empathyItems.length > 0) {
        empathyItems.forEach(item => {
            // Click to toggle active state
            item.addEventListener('click', () => {
                item.classList.toggle('is-active');
                
                // Show resolve box if any item is active
                const hasActive = Array.from(empathyItems).some(i => i.classList.contains('is-active'));
                if (hasActive && resolveBox) {
                    resolveBox.classList.add('is-visible');
                } else if (!hasActive && resolveBox) {
                    resolveBox.classList.remove('is-visible');
                }
            });

            // 3D Tilt Effect on mousemove
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 8 degrees)
                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;
                
                // Apply inline transform
                item.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            // Reset tilt perfectly on mouseleave
            item.addEventListener('mouseleave', () => {
                // Reset transform
                item.style.transform = '';
            });
        });
    }

    if (empathySection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const sectionTop = empathySection.offsetTop;
            const distance = scrolled - sectionTop;
            
            // Move background decorations relative to scroll
            if (decorWrapper) {
                decorWrapper.style.transform = `translateY(${distance * 0.15}px)`;
            }
        });

        empathySection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = empathySection.getBoundingClientRect();
            
            const mouseX = (clientX - left) / width;
            const mouseY = (clientY - top) / height;

            decorCircles.forEach((circle, index) => {
                const speed = (index + 1) * 30;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                circle.style.marginLeft = `${x}px`;
                circle.style.marginTop = `${y}px`;
            });
        });
    }
});
