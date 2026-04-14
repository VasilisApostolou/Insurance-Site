// ============================================================
// MOBILE MENU
// ============================================================

function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    if (!mobileNav) return;
    mobileNav.classList.contains('mobile-nav-active') ? closeMobileMenu() : openMobileMenu();
}

function openMobileMenu() {
    const mobileNav  = document.getElementById("mobileNav");
    const burgerIcon = document.querySelector(".burger-menu i");

    mobileNav.classList.add('mobile-nav-active');
    document.body.classList.add('menu-open');

    if (burgerIcon) {
        burgerIcon.classList.remove("fa-bars");
        burgerIcon.classList.add("fa-times");
    }

    createMobileOverlay();
    document.addEventListener('keydown', handleEscapeKey);
}

function closeMobileMenu() {
    const mobileNav  = document.getElementById("mobileNav");
    const burgerIcon = document.querySelector(".burger-menu i");
    const overlay    = document.querySelector('.mobile-overlay');

    mobileNav.classList.add('closing');

    // Wait for the CSS transition (0.3s = 300ms) to finish before removing classes
    setTimeout(() => {
        mobileNav.classList.remove('mobile-nav-active', 'closing');
        document.body.classList.remove('menu-open');

        if (burgerIcon) {
            burgerIcon.classList.remove("fa-times");
            burgerIcon.classList.add("fa-bars");
        }

        if (overlay) overlay.remove();
        document.removeEventListener('keydown', handleEscapeKey);
    }, 300);
}

function createMobileOverlay() {
    const existing = document.querySelector('.mobile-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    document.body.appendChild(overlay);

    // Small delay so the browser registers the element before we add .active,
    // which triggers the CSS opacity transition
    setTimeout(() => overlay.classList.add('active'), 10);
    overlay.addEventListener('click', closeMobileMenu);
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') closeMobileMenu();
}

// ============================================================
// SMOOTH SCROLL
// Temporarily disables scroll-snap while scrolling, then
// re-enables it. This prevents snap from fighting the animation.
// ============================================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const main    = document.querySelector('main');

    if (!section) {
        console.error(`Section '${sectionId}' not found.`);
        return;
    }

    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav && mobileNav.classList.contains('mobile-nav-active')) {
        document.body.classList.remove('menu-open');
        closeMobileMenu();
        // Give the menu close animation time to start before scrolling
        setTimeout(performScroll, 10);
    } else {
        performScroll();
    }

    function performScroll() {
        if (main) main.style.scrollSnapType = 'none';

        // Let the browser handle the math and the scroll container automatically
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Re-enable snap after scroll animation completes (~1s)
        setTimeout(() => {
            if (main) main.style.scrollSnapType = 'y mandatory';
        }, 1000);
    }
}

// ============================================================
// CLIPBOARD COPY
// Uses the modern navigator.clipboard API with a fallback
// for older browsers that don't support it.
// ============================================================
function copyToClipboard(element) {
    const text = element.innerText.trim();

    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`);
        element.classList.add('copied');
        setTimeout(() => element.classList.remove('copied'), 2000);
    }).catch(() => fallbackCopyTextToClipboard(text));
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.cssText = "position:fixed;opacity:0;left:-999px";
    document.body.appendChild(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
        showToast(`Copied: ${text}`);
    } catch {
        alert(`Could not copy. Please copy manually: ${text}`);
    }

    document.body.removeChild(textArea);
}

// ============================================================
// TOAST NOTIFICATION
// Reuses the single #toast element already in the HTML.
// _hideTimer stores the pending timeout ID so rapid calls
// don't stack — each call cancels the previous auto-hide.
// ============================================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    clearTimeout(toast._hideTimer);
    toast.textContent = message;
    toast.classList.add('show');

    toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// GDPR COOKIE CONSENT
// Google Maps drops third-party cookies the moment the iframe
// loads. We keep src="" until the user explicitly accepts.
// localStorage persists the choice across page visits.
// ============================================================
function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    loadMap();
    hideCookieBanner();
}

function declineCookies() {
    localStorage.setItem('cookie-consent', 'declined');
    hideCookieBanner();
}

function loadMap() {
    const iframe      = document.getElementById('map-iframe');
    const placeholder = document.getElementById('map-placeholder');
    if (!iframe) return;

    // data-src holds the real URL — only assigned to src NOW,
    // after consent, so Google never loads before this point
    iframe.src           = iframe.dataset.src;
    iframe.style.display = 'block';
    if (placeholder) placeholder.classList.add('hidden');
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');
}

// ============================================================
// SCROLL PROGRESS BAR
// Reads scrollTop and scrollHeight from <main> and sets the
// width of #scroll-progress as a 0–100% value.
// ============================================================
function initScrollProgress() {
    const bar  = document.getElementById('scroll-progress');
    const main = document.querySelector('main');
    if (!bar || !main) return;

    main.addEventListener('scroll', () => {
        const max = main.scrollHeight - main.clientHeight;
        bar.style.width = max > 0 ? (main.scrollTop / max * 100) + '%' : '0%';
    });
}

// ============================================================
// ACTIVE NAV LINK — IntersectionObserver
// The browser fires this callback whenever a watched section
// crosses the 40% visibility threshold inside <main>.
// We then find the nav link whose href="#that-section-id"
// and give it the .nav-active class.
// ============================================================
function initActiveNav() {
    const navLinks = document.querySelectorAll('.header-menu a[href^="#"]');
    const main     = document.querySelector('main');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('nav-active'));
                const active = document.querySelector(
                    `.header-menu a[href="#${entry.target.id}"]`
                );
                if (active) active.classList.add('nav-active');
            }
        });
    }, { root: main, threshold: 0.4 });

    document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
}

// ============================================================
// BACK TO TOP BUTTON
// .visible class is toggled when the user scrolls past 300px.
// ============================================================
function initBackToTop() {
    const btn  = document.getElementById('back-to-top');
    const main = document.querySelector('main');
    if (!btn || !main) return;

    // Handler checks both main (desktop) and window (mobile)
    function onScroll() {
        const scrolled = main.scrollTop || window.scrollY;
        btn.classList.toggle('visible', scrolled > 300);
    }

    main.addEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);  // catches mobile scroll

    btn.addEventListener('click', () => {
        if (main.scrollTop > 0) {
            main.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// ============================================================
// CONTACT FORM — async fetch submission
// e.preventDefault() stops the browser navigating away.
// We send the FormData via fetch, read the JSON response,
// then show #form-success or #form-error accordingly.
// The form element itself is hidden on success.
// ============================================================
function initContactForm() {
    const form       = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg   = document.getElementById('form-error');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn   = form.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;

        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled  = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(form)  // FormData serializes all inputs automatically
            });
            const result = await response.json();

            if (result.success) {
                form.style.display = 'none';
                if (successMsg) successMsg.style.display = 'block';
            } else {
                throw new Error(result.message);
            }
        } catch (err) {
            console.error('Form submission error:', err);
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled  = false;
            if (errorMsg) errorMsg.style.display = 'block';
        }
    });
}

// ============================================================
// PAGE LOAD ANIMATION
// Adds fade-in-up class to welcome box children so they
// animate in on first load. CSS handles the actual keyframes.
// ============================================================
function initPageAnimation() {
    document.querySelectorAll('.welcome_box h1, .welcome_box p, .services-icons')
        .forEach(el => el.classList.add('fade-in-up'));
}

// ============================================================
// UTILITY — debounce
// Wraps a function so it only runs after 'wait' ms of silence.
// Used on the resize listener so it doesn't fire hundreds of
// times per second while the user is dragging the window edge.
// ============================================================
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// ============================================================
// BOOT — runs after HTML is fully parsed (because of 'defer')
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll buttons between service sections ---
    [
        { id: "scrollToServices2", target: "services2" },
        { id: "scrollToServices1", target: "services"  }
    ].forEach(({ id, target }) => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener("click", () => scrollToSection(target));
    });

    // --- Desktop nav links ---
    document.querySelectorAll('.header-nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(link.getAttribute('href').substring(1));
        });
    });

    // --- Mobile nav links ---
    document.querySelectorAll('.mobile-nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(link.getAttribute('href').substring(1));
        });
    });

    // --- Mobile close button ---
    const closeBtn = document.querySelector('.mobile-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // --- Keyboard support for copy-number elements ---
    document.querySelectorAll('.copy-number').forEach(el => {
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                copyToClipboard(el);
            }
        });
    });

    // --- Close mobile menu on window resize to desktop width ---
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 810) {
            const nav = document.getElementById("mobileNav");
            if (nav && nav.classList.contains('mobile-nav-active')) closeMobileMenu();
        }
    }, 250));

    // --- Footer year — auto-updates so it never needs manual editing ---
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // --- GDPR: check localStorage for a previous consent decision ---
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'accepted') {
        loadMap();
        hideCookieBanner();
    } else if (consent === 'declined') {
        hideCookieBanner();
    }
    // If null: banner stays visible (first visit)

    // --- Initialize all features ---
    initScrollProgress();
    initActiveNav();
    initBackToTop();
    initContactForm();
    initPageAnimation();

    console.log('M.N Insurance website initialized.');
});