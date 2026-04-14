// ============================================================
// TRANSLATIONS — i18n dictionary
//
// Every key matches a data-i18n="key" attribute in the HTML.
// To add a new language, add another top-level object here
// (e.g. "de": { ... }) and update the toggle logic below.
//
// Two special cases handled by applyTranslations():
//   - data-i18n          → sets element.textContent
//   - data-i18n-placeholder → sets input/textarea placeholder
// ============================================================
const translations = {
    en: {
        // --- Nav ---
        nav_home:     "Home",
        nav_services: "Services",
        nav_about:    "About Us",
        nav_contact:  "Contact",

        // --- Home ---
        home_title: "~ WELCOME ~",
        home_intro: "Life is unpredictable, but your protection doesn't have to be. As an insurance brokering company, we are passionate about helping you navigate the world of risk and find the perfect coverage for what matters most. Whether you're a trucker hauling precious cargo, a family looking to secure your future, or a homeowner protecting your biggest investment, we are here to offer personalized solutions tailored to your unique needs. We believe in building relationships, not just selling policies, because when it comes to safeguarding your dreams, you deserve a partner who's got your back.",
        // --- Services section 1 ---
        services_title: "Our Insurance Services",
        motor_title: "MOTOR INSURANCE",
        motor_1: "Cars", motor_2: "Motor", motor_3: "Trucks",
        motor_4: "Buses", motor_5: "Taxi", motor_6: "Tugs",

        cargo_title: "CARGO INSURANCE",
        cargo_1: "Industrial Products", cargo_2: "Raw Materials",
        cargo_3: "Fuel", cargo_4: "Machinery", cargo_5: "Jewelry",
        cargo_6: "Food", cargo_7: "Agricultural Products", cargo_8: "Artwork",
        cargo_clause_a: "Clause A: Covers all risks.",
        cargo_clause_b: "Clause B: Covers specific risks, offering moderate protection.",
        cargo_clause_c: "Clause C: Covers limited risks.",

        liability_title: "LIABILITY INSURANCE",
        liability_1: "General Liability",
        liability_2: "Professional Liability",
        liability_3: "Employer's Liability",
        liability_4: "Product Liability",
        liability_info: "Liability insurance provides financial protection for professionals and businesses against legal claims from third parties. It covers various professions, including doctors, lawyers, accountants, construction workers, and industries such as hospitality, workshops, and industrial sectors.",

        yacht_title: "YACHT INSURANCE",
        yacht_info: "We experience numerous accidents that impact our lives, many of which we can't control. However, our relationship with the sea is far more complex — not only are we not always welcomed here, but we operate within an unpredictable realm. From the catastrophic collapse of the Baltimore bridge (costing billions in insurance payouts) to the challenges posed by the Houthi attacks, the sea remains a formidable force. The goal should always be to ensure that, no matter the loss, we can return to the same financial position we were in before disaster struck. Resilience and preparedness are not just options — they are necessities.",

        // --- Services section 2 ---
        services2_title: "Additional Insurance Services",
        property_title: "PROPERTY INSURANCE",
        property_1: "Residential Property",
        property_2: "Business Property",
        property_3: "Hotels",

        energy_title: "ENERGY RELATED INSURANCE",
        energy_1: "Wind Turbines",
        energy_2: "Photovoltaic (PV) Panels",
        energy_info: "Energy is the driving force of the past, present, and future. Greece possesses significant potential in the renewable energy sector, largely due to its favorable geographical and climatic conditions. This potential positions Greece as a key player in the transition to sustainable energy.",

        health_title: "HEALTH INSURANCE",
        health_1: "Life and Medical",
        health_2: "Pension",
        health_info: "We offer the selection of both Greek and international market.",

        // --- About ---
        about_title: "About Us",
        about_text: "Meintanis Insurance Services has been a trusted provider of comprehensive insurance solutions since 2006, catering to both individuals and businesses. From motor and cargo insurance to financial consulting, we are committed to delivering stability, confidence, and expert guidance. Our dedicated team is fully certified by the Bank of Greece and continuously enhances its knowledge by attending seminars and industry events. This ensures we stay ahead of market trends, providing our clients with informed and strategic solutions. If you need expert advice or a tailored insurance plan, don't hesitate to reach out.",
        map_title: "FIND US",
        map_placeholder_text: "This map uses Google cookies. Accept cookies below to view it.",
        map_accept_btn: "Accept & Show Map",

        // --- Contact ---
        contact_form_title: "Get in touch",
        contact_placeholder_name:    "Your Name",
        contact_placeholder_email:   "Your Email",
        contact_placeholder_message: "Your Message",
        contact_submit: "Submit",
        contact_info_title: "Personal Information",
        contact_general:    "General Information:",
        contact_cargo_line: "For property, cargo, yachts and energy related matters:",
        contact_motor_line: "For motor, health, liability, consulting and tax services:",
        contact_email_label: "Email:",

        // --- Feedback messages ---
        form_success: "✓ Message sent! We'll be in touch within 24 hours.",
        form_error:   "Something went wrong. Please try calling us directly.",

        // --- Footer ---
        footer_certified: "Fully certified and regulated by the Bank of Greece.",

        // --- Cookie banner ---
        cookie_text:    "We use cookies to display an interactive map (Google Maps). By accepting, you agree to Google's use of cookies.",
        cookie_decline: "Decline",
        cookie_accept:  "Accept",
    },

    el: {
        // --- Nav ---
        nav_home:     "Αρχική",
        nav_services: "Υπηρεσίες",
        nav_about:    "Σχετικά",
        nav_contact:  "Επικοινωνία",

        // --- Home ---
        home_title: "~ ΚΑΛΩΣ ΗΡΘΑΤΕ ~",
        home_intro: "Η ζωή είναι απρόβλεπτη, αλλά η προστασία σας δεν χρειάζεται να είναι. Ως ελεύθερος επαγγελματίας στον τομέα των ασφαλίσεων, είμαι εδώ για να σας βοηθήσω να πλοηγηθείτε στον κόσμο του ρίσκου και να βρείτε την κατάλληλη κάλυψη για ό,τι σας είναι πιο σημαντικό. Είτε είστε οδηγός που μεταφέρει πολύτιμο φορτίο, μια οικογένεια που θέλει να εξασφαλίσει το μέλλον της, ή ιδιοκτήτης που προστατεύει τη μεγαλύτερη επένδυσή του, είμαστε εδώ για να σας προσφέρουμε εξατομικευμένες λύσεις. Πιστεύουμε στην οικοδόμηση σχέσεων, όχι μόνο στην πώληση ασφαλιστηρίων, γιατί αξίζετε έναν συνεργάτη που σας καλύπτει.",

        // --- Services section 1 ---
        services_title: "Οι Ασφαλιστικές μας Υπηρεσίες",
        motor_title: "ΑΣΦΑΛΙΣΗ ΟΧΗΜΑΤΩΝ",
        motor_1: "Αυτοκίνητα", motor_2: "Μοτοσικλέτες", motor_3: "Φορτηγά",
        motor_4: "Λεωφορεία", motor_5: "Ταξί", motor_6: "Ρυμουλκά",

        cargo_title: "ΑΣΦΑΛΙΣΗ ΦΟΡΤΙΟΥ",
        cargo_1: "Βιομηχανικά Προϊόντα", cargo_2: "Πρώτες Ύλες",
        cargo_3: "Καύσιμα", cargo_4: "Μηχανήματα", cargo_5: "Κοσμήματα",
        cargo_6: "Τρόφιμα", cargo_7: "Αγροτικά Προϊόντα", cargo_8: "Έργα Τέχνης",
        cargo_clause_a: "Ρήτρα Α: Καλύπτει όλους τους κινδύνους.",
        cargo_clause_b: "Ρήτρα Β: Καλύπτει συγκεκριμένους κινδύνους, με μέτρια προστασία.",
        cargo_clause_c: "Ρήτρα Γ: Καλύπτει περιορισμένους κινδύνους.",

        liability_title: "ΑΣΦΑΛΙΣΗ ΑΣΤΙΚΗΣ ΕΥΘΥΝΗΣ",
        liability_1: "Γενική Αστική Ευθύνη",
        liability_2: "Επαγγελματική Ευθύνη",
        liability_3: "Ευθύνη Εργοδότη",
        liability_4: "Ευθύνη Προϊόντος",
        liability_info: "Η ασφάλιση αστικής ευθύνης παρέχει οικονομική προστασία σε επαγγελματίες και επιχειρήσεις έναντι νομικών αξιώσεων τρίτων. Καλύπτει διάφορα επαγγέλματα, όπως γιατρούς, δικηγόρους, λογιστές, εργολάβους, καθώς και κλάδους όπως φιλοξενία, συνεργεία και βιομηχανικούς τομείς.",

        yacht_title: "ΑΣΦΑΛΙΣΗ ΣΚΑΦΩΝ",
        yacht_info: "Βιώνουμε πολλά ατυχήματα που επηρεάζουν τη ζωή μας, πολλά από τα οποία δεν μπορούμε να ελέγξουμε. Ωστόσο, η σχέση μας με τη θάλασσα είναι πολύ πιο σύνθετη — δεν είμαστε πάντα ευπρόσδεκτοι, ενώ λειτουργούμε σε ένα απρόβλεπτο περιβάλλον. Από την καταστροφική κατάρρευση της γέφυρας της Βαλτιμόρης έως τις προκλήσεις από τις επιθέσεις των Χούθι, η θάλασσα παραμένει μια ισχυρή δύναμη. Στόχος πρέπει πάντα να είναι η εξασφάλιση ότι, ανεξάρτητα από τη ζημιά, μπορούμε να επιστρέψουμε στην ίδια οικονομική θέση πριν από το συμβάν. Η ανθεκτικότητα και η ετοιμότητα δεν είναι επιλογές — είναι αναγκαιότητες.",

        // --- Services section 2 ---
        services2_title: "Επιπλέον Ασφαλιστικές Υπηρεσίες",
        property_title: "ΑΣΦΑΛΙΣΗ ΑΚΙΝΗΤΩΝ",
        property_1: "Κατοικίες",
        property_2: "Επαγγελματικά Ακίνητα",
        property_3: "Ξενοδοχεία",

        energy_title: "ΑΣΦΑΛΙΣΗ ΕΝΕΡΓΕΙΑΣ",
        energy_1: "Ανεμογεννήτριες",
        energy_2: "Φωτοβολταϊκά (PV) Πάνελ",
        energy_info: "Η ενέργεια είναι η κινητήριος δύναμη του παρελθόντος, του παρόντος και του μέλλοντος. Η Ελλάδα διαθέτει σημαντικές δυνατότητες στον τομέα των ανανεώσιμων πηγών ενέργειας, κυρίως λόγω των ευνοϊκών γεωγραφικών και κλιματικών συνθηκών της. Αυτό την τοποθετεί ως βασικό παράγοντα στη μετάβαση προς ένα βιώσιμο ενεργειακό σύστημα.",

        health_title: "ΑΣΦΑΛΙΣΗ ΥΓΕΙΑΣ",
        health_1: "Ζωής και Ιατροφαρμακευτική",
        health_2: "Σύνταξη",
        health_info: "Προσφέρουμε επιλογές τόσο από την ελληνική όσο και από τη διεθνή αγορά.",

        // --- About ---
        about_title: "Σχετικά με εμάς",
        about_text: "Η Meintanis Insurance Services είναι αξιόπιστος πάροχος ολοκληρωμένων ασφαλιστικών λύσεων από το 2006, εξυπηρετώντας ιδιώτες και επιχειρήσεις. Από ασφαλίσεις οχημάτων και φορτίου έως χρηματοοικονομικές συμβουλές, δεσμευόμαστε να παρέχουμε σταθερότητα, εμπιστοσύνη και εξειδικευμένη καθοδήγηση. Η ομάδα μας είναι πλήρως πιστοποιημένη από την Τράπεζα της Ελλάδος και συνεχώς εμπλουτίζει τις γνώσεις της μέσω σεμιναρίων και εκδηλώσεων του κλάδου. Εάν χρειάζεστε εξειδικευμένη συμβουλή ή εξατομικευμένο ασφαλιστικό πλάνο, μη διστάσετε να επικοινωνήσετε μαζί μας.",
        map_title: "ΒΡΕΙΤΕ ΜΑΣ",
        map_placeholder_text: "Αυτός ο χάρτης χρησιμοποιεί cookies Google. Αποδεχτείτε τα cookies παρακάτω για να τον δείτε.",
        map_accept_btn: "Αποδοχή & Εμφάνιση Χάρτη",

        // --- Contact ---
        contact_form_title: "Επικοινωνήστε μαζί μας",
        contact_placeholder_name:    "Ονοματεπώνυμο",
        contact_placeholder_email:   "Email σας",
        contact_placeholder_message: "Το μήνυμά σας",
        contact_submit: "Αποστολή",
        contact_info_title: "Στοιχεία Επικοινωνίας",
        contact_general:    "Γενικές Πληροφορίες:",
        contact_cargo_line: "Για ακίνητα, φορτία, σκάφη και ενεργειακά θέματα:",
        contact_motor_line: "Για οχήματα, υγεία, αστική ευθύνη, συμβουλευτική και φορολογικές υπηρεσίες:",
        contact_email_label: "Email:",

        // --- Feedback messages ---
        form_success: "✓ Το μήνυμά σας στάλθηκε! Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.",
        form_error:   "Κάτι πήγε στραβά. Παρακαλώ καλέστε μας απευθείας.",

        // --- Footer ---
        footer_certified: "Πλήρως πιστοποιημένοι και εποπτευόμενοι από την Τράπεζα της Ελλάδος.",

        // --- Cookie banner ---
        cookie_text:    "Χρησιμοποιούμε cookies για την εμφάνιση διαδραστικού χάρτη (Google Maps). Με την αποδοχή, συμφωνείτε με τη χρήση cookies από την Google.",
        cookie_decline: "Απόρριψη",
        cookie_accept:  "Αποδοχή",
    }
};

// ============================================================
// i18n — apply translations to the DOM
//
// How it works:
//   1. We query ALL elements with data-i18n or data-i18n-placeholder.
//   2. For data-i18n: we set textContent to the translated string.
//      NOTE: textContent replaces the ENTIRE text inside the element,
//      including any child nodes. That's fine here because every
//      data-i18n element contains only text (no children we care about).
//   3. For data-i18n-placeholder: we set the placeholder attribute
//      (used on <input> and <textarea> elements).
//   4. We update <html lang="..."> so screen readers and browsers
//      know the active language.
//   5. We update the toggle button itself to show the OPPOSITE language
//      (the one you'll switch TO next), acting as a label, not a state indicator.
// ============================================================
function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // --- text content nodes ---
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // --- placeholder attributes (inputs & textareas) ---
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // --- <html lang> attribute — good for SEO and accessibility ---
    document.documentElement.lang = lang;

    // --- Update the toggle button to show the OTHER language ---
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.dataset.lang = lang; // record the CURRENT language on the button
        if (lang === 'en') {
            // Currently English → button offers Greek
            btn.querySelector('.lang-flag').textContent  = '🇬🇷';
            btn.querySelector('.lang-label').textContent = 'ΕΛ';
        } else {
            // Currently Greek → button offers English
            btn.querySelector('.lang-flag').textContent  = '🇬🇧';
            btn.querySelector('.lang-label').textContent = 'EN';
        }
    }
}

// ============================================================
// Language toggle — called when the button is clicked
//
// The button's data-lang always holds the CURRENT language.
// We flip it, save to localStorage so the choice survives
// page refreshes, then call applyTranslations().
// ============================================================
function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        // data-lang holds the CURRENT language — flip it
        const newLang = btn.dataset.lang === 'en' ? 'el' : 'en';
        localStorage.setItem('preferred-lang', newLang);
        applyTranslations(newLang);
    });
}
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
    initLangToggle();

    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    applyTranslations(savedLang);

    console.log('M.N Insurance website initialized.');
});