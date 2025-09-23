// Logger utility for tracking user interactions
class Logger {
    constructor() {
        this.logs = JSON.parse(localStorage.getItem('gclLogs') || '[]');
    }

    log(action, details = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            action,
            details,
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        this.logs.push(logEntry);
        localStorage.setItem('gclLogs', JSON.stringify(this.logs));
        console.log('GCL Log:', logEntry);
    }

    getLogs() {
        return this.logs;
    }

    clearLogs() {
        this.logs = [];
        localStorage.removeItem('gclLogs');
    }
}

const logger = new Logger();

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    logger.log('page_load', { page: 'home' });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            logger.log('navigation_toggle', { action: 'mobile_menu' });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                logger.log('navigation_click', { 
                    section: this.getAttribute('href'),
                    text: this.textContent 
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            logger.log('form_submission', { 
                service: formData.service,
                hasPhone: !!formData.phone 
            });

            // Simulate form submission
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            contactForm.reset();
        });
    }

    // Enhanced animation observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                const animatableElements = entry.target.querySelectorAll('h3, .equipment-item, .expertise-item');
                animatableElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate');
                    }, index * 100);
                });
                logger.log('section_view', { 
                    section: entry.target.id,
                    visibility: entry.intersectionRatio 
                });
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('section[id], .equipment-item, .expertise-item, h3').forEach(element => {
        animationObserver.observe(element);
    });
});

// Utility function for programmatic scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        logger.log('programmatic_scroll', { section: sectionId });
    }
}

// Track user engagement
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
    const timeSpent = Date.now() - startTime;
    logger.log('session_end', { 
        timeSpent: Math.round(timeSpent / 1000),
        scrollDepth: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    });
});

// Equipment inquiry tracking
function trackEquipmentInterest(equipmentType) {
    logger.log('equipment_interest', { type: equipmentType });
}

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to equipment items
    document.querySelectorAll('.equipment-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add ripple effect on click
    document.querySelectorAll('.equipment-item, .expertise-item').forEach(item => {
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.cssText = 'position: absolute; border-radius: 50%; background: rgba(255,107,53,0.3); transform: scale(0); animation: ripple 0.6s linear; pointer-events: none;';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});