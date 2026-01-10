document.addEventListener('DOMContentLoaded', () => {
    
    // Random Fade-in Animation for Cards
    const fadeInCards = () => {
        const cards = document.querySelectorAll('.bento-card, .traits-row, .ventures-row');
        
        // Convert NodeList to Array and shuffle randomly
        const cardsArray = Array.from(cards);
        const shuffledCards = cardsArray.sort(() => Math.random() - 0.5);
        
        // Add initial hidden state
        shuffledCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
        
        // Fade in cards with random order and staggered delay
        shuffledCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 120)); // Staggered delay: 100ms base + 120ms per card
        });
    };
    
    // Execute fade-in animation
    fadeInCards();
    
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
    const youtubeWatchUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}&t=13s`;
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&start=13&rel=0&modestbranding=1`;
    
    function openModal() {
        // 檢查是否為本機環境 (file:// 協定無法嵌入 YouTube)
        if (window.location.protocol === 'file:') {
            window.open(youtubeWatchUrl, '_blank');
            return;
        }
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
    
    // Mentor Modal
    const openMentorModalBtn = document.getElementById('open-mentor-modal');
    const mentorModal = document.getElementById('mentor-modal');
    const mentorModalOverlay = document.getElementById('mentor-modal-overlay');
    const mentorModalCloseBtn = document.getElementById('mentor-modal-close');

    function openMentorModal() {
        mentorModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMentorModal() {
        mentorModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openMentorModalBtn) {
        openMentorModalBtn.addEventListener('click', openMentorModal);
    }

    if (mentorModalOverlay) {
        mentorModalOverlay.addEventListener('click', closeMentorModal);
    }

    if (mentorModalCloseBtn) {
        mentorModalCloseBtn.addEventListener('click', closeMentorModal);
    }
    
    // About Modal
    const openAboutModalBtn = document.getElementById('open-about-modal');
    const aboutModal = document.getElementById('about-modal');
    const aboutModalOverlay = document.getElementById('about-modal-overlay');
    const aboutModalCloseBtn = document.getElementById('about-modal-close');

    function openAboutModal() {
        aboutModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeAboutModal() {
        aboutModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openAboutModalBtn) {
        openAboutModalBtn.addEventListener('click', openAboutModal);
    }

    if (aboutModalOverlay) {
        aboutModalOverlay.addEventListener('click', closeAboutModal);
    }

    if (aboutModalCloseBtn) {
        aboutModalCloseBtn.addEventListener('click', closeAboutModal);
    }

    // Tech Innovator Modal
    const openTechModalBtn = document.getElementById('open-tech-modal');
    const techModal = document.getElementById('tech-modal');
    const techModalOverlay = document.getElementById('tech-modal-overlay');
    const techModalCloseBtn = document.getElementById('tech-modal-close');

    function openTechModal() {
        techModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeTechModal() {
        techModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openTechModalBtn) {
        openTechModalBtn.addEventListener('click', openTechModal);
    }

    if (techModalOverlay) {
        techModalOverlay.addEventListener('click', closeTechModal);
    }

    if (techModalCloseBtn) {
        techModalCloseBtn.addEventListener('click', closeTechModal);
    }

    // Manager Modal
    const openManagerModalBtn = document.getElementById('open-manager-modal');
    const managerModal = document.getElementById('manager-modal');
    const managerModalOverlay = document.getElementById('manager-modal-overlay');
    const managerModalCloseBtn = document.getElementById('manager-modal-close');

    function openManagerModal() {
        managerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeManagerModal() {
        managerModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openManagerModalBtn) {
        openManagerModalBtn.addEventListener('click', openManagerModal);
    }

    if (managerModalOverlay) {
        managerModalOverlay.addEventListener('click', closeManagerModal);
    }

    if (managerModalCloseBtn) {
        managerModalCloseBtn.addEventListener('click', closeManagerModal);
    }

    // Sharer Modal
    const openSharerModalBtn = document.getElementById('open-sharer-modal');
    const sharerModal = document.getElementById('sharer-modal');
    const sharerModalOverlay = document.getElementById('sharer-modal-overlay');
    const sharerModalCloseBtn = document.getElementById('sharer-modal-close');

    function openSharerModal() {
        sharerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSharerModal() {
        sharerModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openSharerModalBtn) {
        openSharerModalBtn.addEventListener('click', openSharerModal);
    }

    if (sharerModalOverlay) {
        sharerModalOverlay.addEventListener('click', closeSharerModal);
    }

    if (sharerModalCloseBtn) {
        sharerModalCloseBtn.addEventListener('click', closeSharerModal);
    }

    // USPACE Modal
    const openUspaceModalBtn = document.getElementById('open-uspace-modal');
    const uspaceModal = document.getElementById('uspace-modal');
    const uspaceModalOverlay = document.getElementById('uspace-modal-overlay');
    const uspaceModalCloseBtn = document.getElementById('uspace-modal-close');

    function openUspaceModal() {
        uspaceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeUspaceModal() {
        uspaceModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openUspaceModalBtn) {
        openUspaceModalBtn.addEventListener('click', openUspaceModal);
    }

    if (uspaceModalOverlay) {
        uspaceModalOverlay.addEventListener('click', closeUspaceModal);
    }

    if (uspaceModalCloseBtn) {
        uspaceModalCloseBtn.addEventListener('click', closeUspaceModal);
    }

    // Backer-Founder Modal
    const openBfModalBtn = document.getElementById('open-bf-modal');
    const bfModal = document.getElementById('bf-modal');
    const bfModalOverlay = document.getElementById('bf-modal-overlay');
    const bfModalCloseBtn = document.getElementById('bf-modal-close');

    function openBfModal() {
        bfModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeBfModal() {
        bfModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openBfModalBtn) {
        openBfModalBtn.addEventListener('click', openBfModal);
    }

    if (bfModalOverlay) {
        bfModalOverlay.addEventListener('click', closeBfModal);
    }

    if (bfModalCloseBtn) {
        bfModalCloseBtn.addEventListener('click', closeBfModal);
    }

    // Inside Modal
    const openInsideModalBtn = document.getElementById('open-inside-modal');
    const insideModal = document.getElementById('inside-modal');
    const insideModalOverlay = document.getElementById('inside-modal-overlay');
    const insideModalCloseBtn = document.getElementById('inside-modal-close');

    function openInsideModal() {
        insideModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeInsideModal() {
        insideModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (openInsideModalBtn) {
        openInsideModalBtn.addEventListener('click', openInsideModal);
    }

    if (insideModalOverlay) {
        insideModalOverlay.addEventListener('click', closeInsideModal);
    }

    if (insideModalCloseBtn) {
        insideModalCloseBtn.addEventListener('click', closeInsideModal);
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (videoModal.classList.contains('active')) {
                closeModal();
            }
            if (mentorModal.classList.contains('active')) {
                closeMentorModal();
            }
            if (aboutModal.classList.contains('active')) {
                closeAboutModal();
            }
            if (techModal.classList.contains('active')) {
                closeTechModal();
            }
            if (managerModal.classList.contains('active')) {
                closeManagerModal();
            }
            if (sharerModal.classList.contains('active')) {
                closeSharerModal();
            }
            if (uspaceModal.classList.contains('active')) {
                closeUspaceModal();
            }
            if (bfModal.classList.contains('active')) {
                closeBfModal();
            }
            if (insideModal.classList.contains('active')) {
                closeInsideModal();
            }
        }
    });
    
    // Vanilla Tilt is auto-initialized by data-tilt attribute
});
