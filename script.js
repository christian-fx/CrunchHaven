/* ============================================
   CRUNCH HAVEN - JavaScript
   ============================================ */

// Toggle Mobile Menu
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navLinksContainer = document.getElementById('navLinks');
            navLinksContainer.classList.remove('active');
        });
    });
});

// Menu Filtering
function filterMenu(category) {
    const menuCards = document.querySelectorAll('.menu-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noItems = document.getElementById('noItems');
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category || 
            (category === 'all' && btn.textContent.toLowerCase() === 'all')) {
            btn.classList.add('active');
        }
    });
    
    // Filter cards
    let visibleCount = 0;
    menuCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategories.includes(category)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no items message
    if (noItems) {
        noItems.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

// Contact Form Submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Log form data (in a real app, you'd send this to a server)
    console.log('Form submitted:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // Show toast notification
    showToast();
    
    // Reset form
    form.reset();
}

// Show Toast Notification
function showToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.add('show');
        
        // Hide after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(93, 78, 55, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(93, 78, 55, 0.1), 0 2px 4px -1px rgba(93, 78, 55, 0.06)';
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
