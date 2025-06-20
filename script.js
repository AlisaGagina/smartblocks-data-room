// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling with investor-specific fields
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const organization = this.querySelectorAll('input[type="text"]')[1].value;
            const investorType = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !organization || !investorType || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert(`Thank you ${name} from ${organization}! We'll get back to you soon regarding our investment opportunity.`);
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Document download handlers
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const docName = this.parentNode.querySelector('.doc-name').textContent;
            
            // Simulate document download
            alert(`Downloading: ${docName}\n\nNote: In a real implementation, this would trigger a secure document download with access logging.`);
        });
    });

    // Video view handlers
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const videoName = this.parentNode.querySelector('.doc-name').textContent;
            
            // Simulate video viewing
            alert(`Opening video: ${videoName}\n\nNote: In a real implementation, this would open a secure video player with access tracking.`);
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.doc-category, .financial-card, .team-member, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Access tracking (simulation)
    trackPageAccess();
    trackDocumentViews();
});

// Function for CTA button scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Simulate access tracking for data room analytics
function trackPageAccess() {
    const timestamp = new Date().toISOString();
    console.log(`Data Room Access: ${timestamp}`);
    
    // In a real implementation, this would send data to your analytics service
    // Example: sendAnalytics('page_view', { timestamp, userAgent: navigator.userAgent });
}

function trackDocumentViews() {
    const allDocButtons = document.querySelectorAll('.download-btn, .view-btn');
    allDocButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const docName = this.parentNode.querySelector('.doc-name').textContent;
            const action = this.classList.contains('download-btn') ? 'download' : 'view';
            const timestamp = new Date().toISOString();
            
            console.log(`Document ${action}: ${docName} at ${timestamp}`);
            
            // In a real implementation, this would log to your data room analytics
            // Example: sendAnalytics('document_access', { docName, action, timestamp });
        });
    });
}

// Privacy and security notice
window.addEventListener('beforeunload', function(e) {
    // Remind users about confidentiality when leaving
    const message = 'Remember: All materials viewed are confidential and proprietary.';
    e.returnValue = message;
    return message;
}); 