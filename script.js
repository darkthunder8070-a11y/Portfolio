// Agar future mein kuch interactive features add karne ho
// Jaise click events, form validation, etc.

// Example: Button click effects
document.addEventListener('DOMContentLoaded', function() {
    // Buttons par click effect
    const buttons = document.querySelectorAll('.btn-custom');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Button ke hisaab se action
            if (this.classList.contains('btn-gradient')) {
                console.log('Hire Me clicked!');
                // Yahan apna action daalo
            } else if (this.classList.contains('btn-border-pulse')) {
                console.log('Resume clicked!');
                // Yahan apna action daalo
            } else if (this.classList.contains('btn-3d')) {
                console.log('3D Button clicked!');
                // Yahan apna action daalo
            }
        });
    });

    // Social icons par hover effect
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.5s ease';
        });
    });

    // Typing text effect (agar customize karna ho)
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const texts = ['Full Stack Developer', 'UI/UX Designer', 'Freelancer'];
        let index = 0;
        
        // Agar multiple text chahiye toh ye use karo
        setInterval(() => {
            index = (index + 1) % texts.length;
            typingElement.textContent = texts[index];
        }, 3000);
    }
});

// Smooth scroll functionality (agar zaroorat ho)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Custom cursor effect (optional)
// Yeh feature add karna ho toh use karo
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
              }
