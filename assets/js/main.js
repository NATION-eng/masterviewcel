/**
 * Masterview Consults Engineering Limited (M-CEL)
 * Main Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initMobileMenu();
  initProjectFilters();
  initModals();
  initCounters();
  initContactForms();
  initScrollEffects();
});

/* ==========================================================================
   1. HERO SLIDER ENGINE
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (!slides.length) return;

  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-amber-400', i === index);
      dot.classList.toggle('w-8', i === index);
      dot.classList.toggle('bg-white/50', i !== index);
      dot.classList.toggle('w-2.5', i !== index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slideCount);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slideCount) % slideCount);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, 6500);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoplay();
    });
  });

  const heroSection = document.getElementById('home');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }

  showSlide(0);
  startAutoplay();
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menuClose = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('translate-x-full');
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      mobileBackdrop.classList.add('opacity-100');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('translate-x-full');
    if (mobileBackdrop) {
      mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
      mobileBackdrop.classList.remove('opacity-100');
    }
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   3. FILTERABLE PROJECT PORTFOLIO
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectItems = document.querySelectorAll('.project-grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('bg-purple-900', 'text-white', 'shadow-md');
        b.classList.add('bg-slate-100', 'text-slate-700');
      });
      btn.classList.add('bg-purple-900', 'text-white', 'shadow-md');
      btn.classList.remove('bg-slate-100', 'text-slate-700');

      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   4. MODALS & LIGHTBOX (Army Project Gallery & RFQ)
   ========================================================================== */
const projectData = {
  army: {
    title: "Military Recreation & Sports Complex",
    client: "Nigerian Army",
    location: "16 Brigade, Nigerian Army, Yenagoa, Bayelsa State",
    category: "Civil Construction & Sports Infrastructure",
    description: "Turnkey design and civil construction of a high-performance 40m × 20m 7-a-side all-weather synthetic turf soccer pitch, a 60-person spectator grandstand pavilion, perimeter security chain-link fencing, floodlighting stanchions, water storage facility, and administrative relaxation quarters.",
    specs: [
      "40m × 20m FIFA-grade dual-tone synthetic turf",
      "Reinforced concrete spectator pavilion with cantilever roof",
      "High-durability galvanized perimeter fence with concrete ground beam",
      "Turnkey site drainage and integrated clubhouse building"
    ],
    images: [
      "assets/images/army-project-5.jpg",
      "assets/images/army-project-1.jpg",
      "assets/images/army-project-2.jpg",
      "assets/images/army-project-3.jpg",
      "assets/images/army-project-4.jpg"
    ]
  },
  total: {
    title: "Upgrade of Central Control Room & Production Building",
    client: "TotalEnergies EP Nigeria",
    location: "OML 58 (Obite/Obagi), Rivers State",
    category: "Oil & Gas Facility Upgrade",
    description: "Complete architectural and engineering upgrade of the Central Control Room (CCR), Executive Conference Hall, Offshore/Onshore Production Manager's (OPM) Office, and Head of Production suites with advanced electrical, HVAC, and ergonomic instrumentation.",
    specs: [
      "Critical instrumentation and control room structural overhaul",
      "Ergonomic operator console integration",
      "HSE-compliant fire-retardant interior architectural finishes",
      "Executed with Zero Operational Downtime for live production"
    ],
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  horandez: {
    title: "Engineering Office Complex & 40m × 40m Steel Warehouse",
    client: "Horandez & Detroit Company Ltd.",
    location: "New KM 21 East-West Road, Iriebe, Rivers State",
    category: "Civil Construction & Structural Steel Fabrication",
    description: "Full civil engineering design, foundation laying, and structural steel erection for an industrial operations base featuring a 1,600 sqm heavy-duty steel warehouse with clear-span rafters and an adjoining multi-storey administrative office building.",
    specs: [
      "40m × 40m clear-span structural steel framework per ASTM standards",
      "Heavy-load industrial concrete slab foundation",
      "Turnkey civil office complex with administrative facilities",
      "Overhead crane load capability and ventilation louvering"
    ],
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  nlng: {
    title: "30m × 6.3m Roof Bitumen Re-Felting & Waterproofing",
    client: "Nigeria LNG Limited (NLNG)",
    location: "NLNG Residential Area (RA) Finima, Bonny Island, Rivers State",
    category: "Facility Maintenance & Waterproofing",
    description: "Specialized bitumen re-felting, membrane waterproofing, and structural thermal protection across the 30m × 6.3m roof slab of the NLNG RA Staff Club under strict island safety protocols and environmental regulations.",
    specs: [
      "Multi-ply elastomeric bitumen membrane installation",
      "Substrate preparation, crack injection, and primer bonding",
      "100% adherence to NLNG Permit-To-Work (PTW) safety standards",
      "Zero leaks guarantee with specialized ponding water test validation"
    ],
    images: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  ictsi: {
    title: "Trexm Chemicals Mud Plant Layout & Engineering Design",
    client: "International Container Terminal Services FZE (ICTSI)",
    location: "Onne Multipurpose Terminal, Rivers State",
    category: "Industrial Plant Layout & CAD/BIM Design",
    description: "Comprehensive 2D/3D plant layout engineering design for Trexm Chemicals industrial mud preparation facility, incorporating bulk storage silos, mixing tanks, slurry piping networks, and heavy tanker loading bays.",
    specs: [
      "BIM 3D modeling and isometric pipe routing per ASME standards",
      "Chemical storage tank bund containment safety sizing",
      "Optimized internal logistics circulation for heavy transport trucks",
      "Full environmental containment and spill prevention design"
    ],
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  goddie: {
    title: "Industrial Mud Plant Layout & Process Piping Design",
    client: "Goddie Chemical International Limited",
    location: "Plot 28, Trans-Amadi Industrial Layout, Port Harcourt",
    category: "Engineering Design & Plant Modeling",
    description: "Turnkey engineering layout for specialized oilfield chemicals and drilling fluid manufacturing, incorporating mixing vats, agitation systems, pumping stations, and safety shower placements.",
    specs: [
      "P&ID schematic drafting and structural layout validation",
      "API & ISO compliant hazardous area classification",
      "Electrical earthing and instrumentation loop design"
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  librod: {
    title: "3D Engineering Miniature & Scale Model Fabrication",
    client: "Librod Energy Services Ltd.",
    location: "Trans-Amadi Phase II, Port Harcourt, Rivers State",
    category: "3D Modeling & Miniature Scale Layout",
    description: "High-precision architectural and mechanical miniature engineering reproduction of Librod's industrial operations base, showcasing offshore supply staging, maintenance bays, and administrative blocks for corporate stakeholder reviews.",
    specs: [
      "Scale-accurate CAD-to-miniature engineering fabrication",
      "Integrated micro-lighting simulating live field conditions",
      "Architectural display engineering for stakeholder alignment"
    ],
    images: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

let currentGalleryImages = [];
let currentGalleryIndex = 0;

function initModals() {
  const projectModal = document.getElementById('project-modal');
  const projectCards = document.querySelectorAll('.project-card-trigger');
  const closeProjectBtn = document.getElementById('close-project-modal');

  const rfqModal = document.getElementById('rfq-modal');
  const rfqTriggers = document.querySelectorAll('.rfq-trigger');
  const closeRfqBtn = document.getElementById('close-rfq-modal');

  const prevGalleryBtn = document.getElementById('gallery-prev');
  const nextGalleryBtn = document.getElementById('gallery-next');

  // Open Project Details
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = card.getAttribute('data-project-id');
      const data = projectData[projId];
      if (!data) return;

      document.getElementById('modal-project-title').textContent = data.title;
      document.getElementById('modal-project-client').textContent = data.client;
      document.getElementById('modal-project-location').textContent = data.location;
      document.getElementById('modal-project-category').textContent = data.category;
      document.getElementById('modal-project-desc').textContent = data.description;

      const specsList = document.getElementById('modal-project-specs');
      specsList.innerHTML = '';
      data.specs.forEach(spec => {
        const li = document.createElement('li');
        li.className = 'flex items-start text-sm text-slate-600 gap-2';
        li.innerHTML = `<span class="text-amber-500 font-bold">✓</span> <span>${spec}</span>`;
        specsList.appendChild(li);
      });

      // Setup Gallery
      currentGalleryImages = data.images;
      currentGalleryIndex = 0;
      updateGalleryView();

      const galleryControls = document.getElementById('modal-gallery-controls');
      if (currentGalleryImages.length > 1) {
        galleryControls.classList.remove('hidden');
      } else {
        galleryControls.classList.add('hidden');
      }

      openModal(projectModal);
    });
  });

  if (prevGalleryBtn) {
    prevGalleryBtn.addEventListener('click', () => {
      if (currentGalleryImages.length <= 1) return;
      currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
      updateGalleryView();
    });
  }

  if (nextGalleryBtn) {
    nextGalleryBtn.addEventListener('click', () => {
      if (currentGalleryImages.length <= 1) return;
      currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
      updateGalleryView();
    });
  }

  function updateGalleryView() {
    const mainImg = document.getElementById('modal-project-img');
    const counter = document.getElementById('modal-gallery-counter');
    if (mainImg && currentGalleryImages.length) {
      mainImg.src = currentGalleryImages[currentGalleryIndex];
    }
    if (counter) {
      counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
    }
  }

  // Open RFQ Modal
  rfqTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service');
      const serviceSelect = document.getElementById('rfq-service-select');
      if (serviceSelect && serviceName) {
        serviceSelect.value = serviceName;
      }
      openModal(rfqModal);
    });
  });

  // Close Handlers
  if (closeProjectBtn) closeProjectBtn.addEventListener('click', () => closeModal(projectModal));
  if (closeRfqBtn) closeRfqBtn.addEventListener('click', () => closeModal(rfqModal));

  [projectModal, rfqModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(projectModal);
      closeModal(rfqModal);
    }
  });

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   5. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counterElements.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 2000;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-strip');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   6. CONTACT & RFQ FORM SUBMISSION (With Direct WhatsApp Option)
   ========================================================================== */
function initContactForms() {
  // Main Contact Form
  const contactForm = document.getElementById('main-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmission(contactForm, 'contact');
    });
  }

  // RFQ Modal Form
  const rfqForm = document.getElementById('rfq-modal-form');
  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormSubmission(rfqForm, 'rfq');
    });
  }
}

function handleFormSubmission(form, type) {
  const name = form.querySelector('[name="fullname"]')?.value || 'Valued Client';
  const email = form.querySelector('[name="email"]')?.value || 'N/A';
  const phone = form.querySelector('[name="phone"]')?.value || 'N/A';
  const service = form.querySelector('[name="service"]')?.value || 'General Inquiry';
  const message = form.querySelector('[name="message"]')?.value || '';

  const responseBox = form.querySelector('.form-response');

  if (responseBox) {
    responseBox.classList.remove('hidden');
    responseBox.innerHTML = `
      <div class="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm">
        <p class="font-bold flex items-center gap-2">
          <span>✓</span> Request Logged Successfully!
        </p>
        <p class="mt-1">Thank you, <strong>${name}</strong>. An engineering representative from Masterview Consults Engineering Limited will review your specifications and contact you shortly.</p>
        <div class="mt-3 pt-3 border-t border-green-200 flex flex-wrap items-center gap-2">
          <span class="text-xs text-green-700">Need immediate priority response?</span>
          <button type="button" onclick="sendViaWhatsApp('${name}', '${phone}', '${service}', '${message}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    `;
  }

  form.reset();
}

// Global WhatsApp redirect helper
window.sendViaWhatsApp = function(name, phone, service, message) {
  const targetPhone = "2349036130587";
  const text = encodeURIComponent(
    `*MASTERVIEW CONSULTS INQUIRY*\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Service:* ${service}\n` +
    `*Details:* ${message}`
  );
  window.open(`https://wa.me/${targetPhone}?text=${text}`, '_blank');
};

/* ==========================================================================
   7. SCROLL EFFECTS & NAVBAR ELEVATION
   ========================================================================== */
function initScrollEffects() {
  const navbar = document.getElementById('main-nav');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar scroll elevation
    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('shadow-lg', 'bg-white/95');
        navbar.classList.remove('bg-white');
      } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.add('bg-white');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
