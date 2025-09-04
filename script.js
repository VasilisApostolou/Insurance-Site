
// Enhanced mobile menu toggle with smooth animations
function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    const burgerIcon = document.querySelector(".burger-menu i");
    const body = document.body;
    
    if (!mobileNav) {
        console.error("Mobile navigation not found!");
        return;
    }
    
    const isActive = mobileNav.classList.contains('mobile-nav-active');
    
    if (isActive) {
        // Close menu
        closeMobileMenu();
    } else {
        // Open menu
        openMobileMenu();
    }
}

function openMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    const burgerIcon = document.querySelector(".burger-menu i");
    const body = document.body;
    
    // Add active class for animation
    mobileNav.classList.add('mobile-nav-active');
    body.classList.add('menu-open');
    
    // Change burger icon to X
    if (burgerIcon) {
        burgerIcon.classList.remove("fa-bars");
        burgerIcon.classList.add("fa-times");
    }
    
    // Create overlay
    createMobileOverlay();
    
    // Add escape key listener
    document.addEventListener('keydown', handleEscapeKey);
}

function closeMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    const burgerIcon = document.querySelector(".burger-menu i");
    const body = document.body;
    const overlay = document.querySelector('.mobile-overlay');
    
    // Add closing animation
    mobileNav.classList.add('closing');
    
    // Remove active class after animation
    setTimeout(() => {
        mobileNav.classList.remove('mobile-nav-active', 'closing');
        body.classList.remove('menu-open');
        
        // Change X back to burger icon
        if (burgerIcon) {
            burgerIcon.classList.remove("fa-times");
            burgerIcon.classList.add("fa-bars");
        }
        
        // Remove overlay
        if (overlay) {
            overlay.remove();
        }
        
        // Remove escape key listener
        document.removeEventListener('keydown', handleEscapeKey);
    }, 10);
}

function createMobileOverlay() {
    // Remove existing overlay if present
    const existingOverlay = document.querySelector('.mobile-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);
    
    // Activate overlay after small delay for animation
    setTimeout(() => overlay.classList.add('active'), 10);
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', closeMobileMenu);
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
}

// FIXED: Enhanced smooth scroll that handles scroll-snap properly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.querySelector('.header');
    const main = document.querySelector('main');
    
    if (!section) {
        console.error(`Section with ID '${sectionId}' not found.`);
        return;
    }
    
    // Close mobile menu if open
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav && mobileNav.classList.contains('mobile-nav-active')) {
        closeMobileMenu();
        // Add small delay after closing menu to ensure smooth scroll
        setTimeout(() => performScroll(), 11);
    } else {
        performScroll();
    }
    
    function performScroll() {
        // Temporarily disable scroll-snap for smooth scrolling
        if (main) {
            main.style.scrollSnapType = 'none';
        }
        
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = section.offsetTop - headerHeight;
        
        // Use scrollIntoView for better compatibility with scroll-snap
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Re-enable scroll-snap after scrolling is complete
        setTimeout(() => {
            if (main) {
                main.style.scrollSnapType = 'y mandatory';
            }
        }, 1000);
    }
}

// Copy to clipboard with modern UX
function copyToClipboard(element) {
    const text = element.innerText.trim();
    
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`);
        // Add visual feedback to the clicked element
        element.classList.add('copied');
        setTimeout(() => element.classList.remove('copied'), 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
        // Fallback for older browsers
        fallbackCopyTextToClipboard(text);
    });
}

// Modern toast notification
function showToast(message) {
    // Remove existing toast if present
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        document.body.removeChild(existingToast);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Fallback for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.left = "-999px";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast(`Copied: ${text}`);
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        alert(`Could not copy. Please copy manually: ${text}`);
    }
    
    document.body.removeChild(textArea);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Handle scroll buttons (services navigation)
    const scrollButtons = [
        { id: "scrollToServices2", target: "services2" },
        { id: "scrollToServices1", target: "services" }
    ];
    
    scrollButtons.forEach(({ id, target }) => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener("click", () => scrollToSection(target));
        } else {
            console.error(`Button with ID '${id}' not found!`);
        }
    });
    
    // Desktop navigation - enhanced
    const desktopNavLinks = document.querySelectorAll('.header-nav a[href^="#"]');
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    });
    
    // Mobile navigation - enhanced with proper scroll handling
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a[href^="#"]');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            if (targetId) {
                // Special handling for mobile - ensure menu closes first
                console.log(`Mobile nav: scrolling to ${targetId}`);
                scrollToSection(targetId);
            }
        });
    });
    
    // Add close button functionality to mobile menu
    const mobileCloseButton = document.querySelector('.mobile-close-btn');
    if (mobileCloseButton) {
        mobileCloseButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    } else {
        console.error('Mobile close button not found!');
    }
    
    // Add keyboard navigation support for copy elements
    const copyElements = document.querySelectorAll('.copy-number');
    copyElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                copyToClipboard(element);
            }
        });
        
        // Make elements focusable for keyboard navigation
        element.setAttribute('tabindex', '0');
    });
    
    // Form submission handling
    const contactForm = document.querySelector('form[action*="web3forms"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.innerHTML;
                submitButton.innerHTML = 'Sending...';
                submitButton.disabled = true;
                
                // Re-enable after 3 seconds (Web3Forms handles the actual submission)
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 3000);
            }
        });
    }
    
    // Handle window resize to close mobile menu if screen gets larger
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 810) {
            const mobileNav = document.getElementById("mobileNav");
            if (mobileNav && mobileNav.classList.contains('mobile-nav-active')) {
                closeMobileMenu();
            }
        }
    }, 250));
    
    console.log('M.N Insurance website initialized successfully');
});

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
