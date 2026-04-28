// ========================================
// Scroll-Triggered Animations
// ========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class to trigger CSS animation
            entry.target.classList.add('visible');
            // Optional: stop observing after animation triggers
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll, .service-card, .portfolio-item, .section-header');
    fadeElements.forEach(el => {
        el.classList.add('fade-in-on-scroll');
        observer.observe(el);
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animated hamburger icon
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ========================================
// Smooth Scroll with Offset for Fixed Nav
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Dynamic Staggered Animation Delays
// ========================================

function applyStaggeredAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Service cards
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Portfolio items
    portfolioItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });
}

// Apply staggered animations on load
window.addEventListener('load', applyStaggeredAnimation);

// ========================================
// Navbar Scroll Effect
// ========================================

let lastScrollPos = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add subtle background effect on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(26, 26, 26, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
    
    lastScrollPos = currentScroll;
});

// ========================================
// Button Ripple Effect
// ========================================

const buttons = document.querySelectorAll('.cta-button');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Remove existing ripples
        const ripples = this.querySelectorAll('.ripple');
        ripples.forEach(r => r.remove());
        
        this.appendChild(ripple);
    });
});

// ========================================
// Parallax Background Effect (Subtle)
// ========================================

const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        const heroBackground = heroSection.querySelector('.hero-background');
        
        if (heroBackground && scrollPosition < heroSection.offsetHeight) {
            heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    }
});

// ========================================
// Counter Animation (Optional Enhancement)
// ========================================

function animateCounters() {
    // Placeholder for future counter animations
    // This can be extended to include counters for projects, clients, etc.
}

// ========================================
// Form Submission (CTA Buttons)
// ========================================

document.querySelectorAll('.cta-button.primary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Check if button is inside a form or has a specific action
        const parent = this.closest('form');
        
        if (!parent) {
            // Smooth scroll to contact section or show modal
            const contactSection = document.querySelector('#contact');
            if (contactSection && this !== document.querySelector('#contact .cta-button')) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========================================
// Accessibility: Keyboard Navigation
// ========================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        }
    }
});

// ========================================
// Performance: Lazy Load Images (if added)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ========================================
// Initialize Page
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('PribiTech Landing Page loaded successfully');
    
    // Add any additional initialization here
    // Example: Load external data, initialize third-party libraries, etc.
});

// ========================================
// CSS for Ripple Effect (Inject Dynamically)
// ========================================

const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: var(--spacing-lg);
            gap: var(--spacing-md);
            display: none;
            box-shadow: 0 8px 24px rgba(26, 26, 26, 0.12);
            border-bottom: 1px solid rgba(30, 136, 229, 0.1);
            z-index: 999;
        }

        .nav-menu.active {
            display: flex;
        }

        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
        }
    }
`;
document.head.appendChild(style);
