document.addEventListener('DOMContentLoaded', () => {
    
    // Kinetic Typography for Hero Title (optional scroll effect)
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            // Simple parallax for text
            heroTitle.style.transform = `translateY(${scrollPos * 0.15}px)`;
        });
    }

    // Magnetic Button Implementation (Desktop only)
    if (window.innerWidth > 768) {
        const newsletterCard = document.querySelector('.newsletter-card');
        const magneticBtn = document.querySelector('.magnetic-btn');

        if (newsletterCard && magneticBtn) {
            newsletterCard.addEventListener('mousemove', (e) => {
                const cardRect = newsletterCard.getBoundingClientRect();
                
                const mouseX = e.clientX - cardRect.left;
                const mouseY = e.clientY - cardRect.top;
                
                const centerX = cardRect.width / 2;
                const centerY = cardRect.height / 2;
                
                const percentX = (mouseX - centerX) / (cardRect.width / 2);
                const percentY = (mouseY - centerY) / (cardRect.height / 2);

                const maxOffset = 15; 

                const moveX = percentX * maxOffset;
                const moveY = percentY * maxOffset;

                magneticBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            newsletterCard.addEventListener('mouseleave', () => {
                magneticBtn.style.transform = `translate(0px, 0px)`;
            });
        }
    }
    
    // Video Modal
    const openModalBtn = document.getElementById('open-video-modal');
    const videoModal = document.getElementById('video-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close');
    const youtubeIframe = document.getElementById('youtube-iframe');
    
    const youtubeVideoId = '4FJEbzPhqq8';
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
    
    function openModal() {
        videoModal.classList.add('active');
        youtubeIframe.src = youtubeEmbedUrl;
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        videoModal.classList.remove('active');
        youtubeIframe.src = '';
        document.body.style.overflow = '';
    }
    
    if (openModalBtn) {
        openModalBtn.addEventListener('click', openModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Vanilla Tilt is auto-initialized by data-tilt attribute
});
