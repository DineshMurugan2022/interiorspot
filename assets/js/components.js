window.siteHeaderHTML = `
<style>
@media (max-width: 992px) {
    .header-nav-links { align-items: stretch !important; padding: 60px 30px 40px !important; }
    .mobile-menu-close { position: absolute !important; top: 20px !important; right: 20px !important; margin: 0 !important; width: 40px !important; height: 40px !important; display: flex !important; align-items: center !important; justify-content: center !important; background: #f5f5f5 !important; border-radius: 50% !important; color: #333 !important; font-size: 18px !important; z-index: 10 !important; cursor: pointer; }
    .mobile-nav-top { width: 100% !important; text-align: left !important; border-bottom: 2px solid #f0f0f0 !important; margin-bottom: 25px !important; padding-bottom: 20px !important; align-items: flex-start !important; }
    .mobile-nav-top a { display: block !important; width: 100% !important; padding: 12px 0 !important; font-size: 20px !important; text-align: left !important; }
    .mobile-nav-categories { width: 100% !important; text-align: left !important; align-items: flex-start !important; }
    .mobile-nav-categories h4 { margin-bottom: 20px !important; text-align: left !important; }
    .mobile-nav-categories a { display: block !important; width: 100% !important; padding: 12px 0 !important; font-size: 16px !important; border-bottom: 1px dashed #f5f5f5 !important; text-align: left !important; }
    .mobile-nav-categories a:last-child { border-bottom: none !important; }
}
</style>
<div class="container">
    <nav class="navbar">
        <div class="header-left">
            <div class="mobile-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <div class="logo">
                <a href="index.html">
                    <img src="assets/img/logo.png" alt="Interior Spot Logo">
                </a>
            </div>
            <div class="header-categories-dropdown">
                <a href="categories.html" class="cat-toggle-btn">
                    <i class="fas fa-th-large"></i> Categories
                </a>
                <div class="all-cats-mega-menu">
                    <div class="mega-menu-container">
                        <div class="mega-row">
                            <!-- Row 1: 10 Categories -->
                            <div class="mega-item">
                                <a href="laminate.html">
                                    <img src="assets/img/categories/laminates.png" alt="Laminates">
                                    <span>Laminates</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="charcoal-sheets.html">
                                    <img src="assets/img/categories/charcoal-sheets.png" alt="Charcoal Sheets">
                                    <span>Charcoal Sheets</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="fluted-panel.html">
                                    <img src="assets/img/categories/fluted-panel.png" alt="Fluted Panel">
                                    <span>Fluted Panel</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="decoratives.html">
                                    <img src="assets/img/categories/decoratives.jpeg" alt="Decorative">
                                    <span>Decorative</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="rattan-cane.html">
                                    <img src="assets/img/categories/rattan-cane.png" alt="Rattan Cane">
                                    <span>Rattan Cane</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="3d-designs.html">
                                    <img src="assets/img/categories/3d-designs.jpeg" alt="3D MDF Designs">
                                    <span>3D MDF Designs</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="pvc-wall-panels.html">
                                    <img src="assets/img/categories/IMG_20260610_103436.jpg(1).jpeg" alt="PVC Wall Panels">
                                    <span>PVC Wall Panels</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="mosaics.html">
                                    <img src="assets/img/categories/mosaics.png" alt="Mosaics">
                                    <span>Mosaics</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="korian.html">
                                    <img src="assets/img/categories/korian.png" alt="Corian">
                                    <span>Corian</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="alabaster.html">
                                    <img src="assets/img/categories/alabaster.png" alt="Alabaster">
                                    <span>Alabaster</span>
                                </a>
                            </div>
                        </div>
                        <div class="mega-row row-8">
                            <!-- Row 2: 8 Categories -->
                            <div class="mega-item">
                                <a href="stone-veneer.html">
                                    <img src="assets/img/categories/stone-veneer.jpg" alt="Stone Veneer">
                                    <span>Stone Veneer</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="ripple-ss.html">
                                    <img src="assets/img/categories/ripple-ss.png" alt="Ripple SS">
                                    <span>Ripple SS</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="exterior-products.html">
                                    <img src="assets/img/categories/exterior-products.png"
                                        alt="Exterior Products">
                                    <span>Exterior Products</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="plywood.html">
                                    <img src="assets/img/categories/plywood.png" alt="Plywood">
                                    <span>Plywood</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="flexible-fluted-panel.html">
                                    <img src="assets/img/categories/flexible-fluted-panel.jpeg" alt="Flexible Fluted Panel">
                                    <span>Flexible Fluted Panel</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="wpc-wall-panels.html">
                                    <img src="assets/img/categories/soffit-panels.png" alt="WPC Wall Panels">
                                    <span>WPC Wall Panels</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="wood-panels.html">
                                    <img src="assets/img/categories/timber-wood.png" alt="Wood Panels">
                                    <span>Wood Panels</span>
                                </a>
                            </div>
                            <div class="mega-item">
                                <a href="profile-doors.html">
                                    <img src="assets/img/categories/profile-works.png" alt="Profile Doors">
                                    <span>Profile Doors</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-nav-links">
                <div class="mobile-menu-close">
                    <i class="fas fa-times"></i>
                </div>
                <div class="mobile-nav-top">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                </div>
                <div class="mobile-nav-categories">
                    <h4>Our Collections</h4>
                    <a href="laminate.html">Laminates</a>
                    <a href="charcoal-sheets.html">Charcoal Sheets</a>
                    <a href="fluted-panel.html">Fluted Panel</a>
                    <a href="decoratives.html">Decorative Sheets</a>
                    <a href="rattan-cane.html">Rattan Cane</a>
                    <a href="3d-designs.html">3D MDF Designs</a>
                    <a href="pvc-wall-panels.html">PVC Wall Panels</a>
                    <a href="mosaics.html">Designer Mosaics</a>
                    <a href="korian.html">Corian Surfaces</a>
                    <a href="alabaster.html">Alabaster Sheets</a>
                    <a href="stone-veneer.html">Stone Veneer</a>
                    <a href="ripple-ss.html">Ripple SS</a>
                    <a href="exterior-products.html">Exterior Products</a>
                    <a href="plywood.html">Plywood</a>
                    <a href="flexible-fluted-panel.html">Flexible Fluted Panel</a>
                    <a href="wpc-wall-panels.html">WPC Wall Panels</a>
                    <a href="wood-panels.html">Wood Panels</a>
                    <a href="profile-doors.html">Profile Doors</a>
                </div>
            </div>
        </div>

        <div class="header-search">
            <div class="search-dropdown">
                <div class="all-dropdown">All</div>
                <ul class="search-dropdown-menu">
                    <li><a href="laminate.html">Laminates</a></li>
                    <li><a href="charcoal-sheets.html">Charcoal Sheets</a></li>
                    <li><a href="fluted-panel.html">Fluted Panel</a></li>
                    <li><a href="decoratives.html">Decorative</a></li>
                    <li><a href="rattan-cane.html">Rattan Cane</a></li>
                    <li><a href="3d-designs.html">3D MDF Designs</a></li>
                    <li><a href="pvc-wall-panels.html">PVC Wall Panels</a></li>
                    <li><a href="mosaics.html">Mosaics</a></li>
                    <li><a href="korian.html">Corian</a></li>
                    <li><a href="alabaster.html">Alabaster</a></li>
                    <li><a href="stone-veneer.html">Stone Veneer</a></li>
                    <li><a href="ripple-ss.html">Ripple SS</a></li>
                    <li><a href="exterior-products.html">Exterior Products</a></li>
                    <li><a href="plywood.html">Plywood</a></li>
                    <li><a href="flexible-fluted-panel.html">Flexible Fluted Panel</a></li>
                    <li><a href="wpc-wall-panels.html">WPC Wall Panels</a></li>
                    <li><a href="wood-panels.html">Wood Panels</a></li>
                    <li><a href="profile-doors.html">Profile Doors</a></li>
                </ul>
            </div>
            <input type="text" placeholder="What are you looking for?">
            <i class="fas fa-search"></i>
        </div>

        <div class="header-icons">
            <a href="https://wa.me/918220667127" class="icon-circle whatsapp"><i
                    class="fab fa-whatsapp"></i></a>
            <a href="tel:+918220667127" class="icon-circle phone"><i class="fas fa-phone-alt"></i></a>
        </div>
    </nav>
</div>
`;

window.siteFooterHTML = `
<div class="container">
    <div class="footer-grid">
        <div class="footer-col">
            <div style="margin-bottom: 20px;">
                <img src="assets/img/logo.png" alt="Interior Spot Logo" style="height: 50px; width: auto; ">
            </div>
            <p>Your one-stop destination for premium interior decorative materials in Chennai. We specialize in
                laminates, charcoal sheets, and customized interior solutions.</p>
        </div>
        <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="nav-center">
                <li><a href="index.html">Home</a></li>
                <li><a href="categories.html?cat=all">All Categories</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Our Categories</h4>
            <ul>
                <li><a href="laminate.html">Laminates</a></li>
                <li><a href="charcoal-sheets.html">Charcoal Sheets</a></li>
                <li><a href="fluted-panel.html">Fluted Panels</a></li>
                <li><a href="flexible-fluted-panel.html">Flexible Fluted Panel</a></li>
                <li><a href="stone-veneer.html">Stone Veneer</a></li>
                <li><a href="plywood.html">Plywood</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Contact Us</h4>
            <p><i class="fas fa-map-marker-alt"></i> 42-69, TK Mudali St, Choolai, Chennai - 600112</p>
            <p><i class="fas fa-phone"></i> +91 82206 67127</p>
            <p><i class="fas fa-phone"></i> +91 80560 57048</p>
            <p><i class="fas fa-envelope"></i> interiorspot8@gmail.com</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 Interior Spot. All Rights Reserved.</p>
    </div>
</div>
`;

// ===== GLOBAL LIGHTBOX =====
document.addEventListener('DOMContentLoaded', () => {
    // Create lightbox HTML
    const lightboxHTML = `
        <div class="lightbox-overlay" id="is-lightbox">
            <div class="lightbox-img-container">
                <i class="fas fa-times lightbox-close" id="lb-close"></i>
                <i class="fas fa-chevron-left lightbox-nav lightbox-prev" id="lb-prev"></i>
                <i class="fas fa-chevron-right lightbox-nav lightbox-next" id="lb-next"></i>
                <img src="" id="lb-img" alt="Lightbox Image">
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const overlay = document.getElementById('is-lightbox');
    const lbImg = document.getElementById('lb-img');
    const btnClose = document.getElementById('lb-close');
    const btnPrev = document.getElementById('lb-prev');
    const btnNext = document.getElementById('lb-next');

    // Use event delegation so dynamically loaded images work
    let currentGallery = [];
    let currentIndex = 0;

    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const img = e.target;
            
            // Exclude lightbox image itself
            if (img.id === 'lb-img') return;
            
            // Exclude structural images (logos, icons)
            if (img.closest('header') || img.closest('footer') || img.closest('.logo') || img.closest('.brand-logo')) return;
            
            // If the image is inside a link to another page, don't lightbox it (let it navigate)
            const parentLink = img.closest('a');
            if (parentLink && !parentLink.href.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                return;
            }
            
            if (parentLink) e.preventDefault();

            // Find a logical container to group a gallery
            const container = img.closest('.crayon-grid') || 
                              img.closest('.brand-grid') || 
                              img.closest('.shop-grid') || 
                              img.closest('.nl-collection-grid') || 
                              img.closest('.swiper-wrapper') || 
                              img.closest('.pdp-images') || 
                              img.closest('section') || 
                              document.body;
            
            // Get all valid sibling images in this container
            currentGallery = Array.from(container.querySelectorAll('img')).filter(i => {
                if (i.id === 'lb-img') return false;
                if (i.closest('header') || i.closest('footer') || i.closest('.logo')) return false;
                const pLink = i.closest('a');
                if (pLink && !pLink.href.match(/\.(jpg|jpeg|png|gif|webp)$/i)) return false;
                return true;
            });
            
            currentIndex = currentGallery.indexOf(img);
            if(currentIndex === -1) {
                currentGallery = [img];
                currentIndex = 0;
            }
            
            showLightbox(img.src);
        }
    });

    function showLightbox(src) {
        lbImg.src = src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent scrolling
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext(e) {
        if(e) e.stopPropagation();
        if (currentGallery.length > 0) {
            currentIndex = (currentIndex + 1) % currentGallery.length;
            lbImg.src = currentGallery[currentIndex].src;
        }
    }

    function showPrev(e) {
        if(e) e.stopPropagation();
        if (currentGallery.length > 0) {
            currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
            lbImg.src = currentGallery[currentIndex].src;
        }
    }

    btnClose.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });
    btnNext.addEventListener('click', showNext);
    btnPrev.addEventListener('click', showPrev);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
});
