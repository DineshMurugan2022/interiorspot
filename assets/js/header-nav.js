function loadComponents() {
    // Load Header
    const headerElement = document.querySelector('header') || document.getElementById('site-header');
    if (headerElement && !headerElement.innerHTML.trim() && typeof siteHeaderHTML !== 'undefined') {
        headerElement.innerHTML = siteHeaderHTML;
    }

    // Load Footer
    const footerElement = document.querySelector('footer') || document.getElementById('site-footer');
    if (footerElement && !footerElement.innerHTML.trim() && typeof siteFooterHTML !== 'undefined') {
        footerElement.innerHTML = siteFooterHTML;
    }

    // Move category-nav-bar to the bottom of the page (above footer) if present
    const categoryNavBar = document.querySelector('.category-nav-bar');
    if (categoryNavBar && footerElement) {
        footerElement.parentNode.insertBefore(categoryNavBar, footerElement);
    }

    // Initialize Category Page Filter Sidebar
    if (typeof initCategoryFilterSidebar === 'function') {
        initCategoryFilterSidebar();
    }

    // Initialize Logic after components are loaded
    setTimeout(() => {
        initNavLogic();
    }, 100);
}

// Mobile Navigation Toggle & Dropdowns
function initNavLogic() {
    // Dropdown Logic
    const dropdowns = document.querySelectorAll('.search-dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.all-dropdown');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other open dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) other.classList.remove('active');
                });
                
                dropdown.classList.toggle('active');
            });
        }
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
    });

    // Stop propagation inside dropdown menus to prevent accidental closing
    const menus = document.querySelectorAll('.search-dropdown-menu, .all-cats-mega-menu');
    menus.forEach(menu => {
        menu.addEventListener('click', (e) => e.stopPropagation());
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileClose = document.querySelector('.mobile-menu-close');
    const navLinks = document.querySelector('.header-nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.add('active');
        });
    }

    if (mobileClose && navLinks) {
        mobileClose.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.remove('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active')) {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        }
    });
}

// Dynamic Category Page Filter Sidebar Builder
function initCategoryFilterSidebar() {
    // Only run on category/subcategory pages that have product listings
    const shopGrid = document.querySelector('.shop-grid');
    if (!shopGrid || window.location.pathname.endsWith('index.html') || window.location.pathname === '/') return;

    // Check if we are inside a .shop-section or container
    const shopSection = shopGrid.closest('.shop-section') || shopGrid.parentNode;
    if (!shopSection) return;

    // Get all product cards
    const cards = Array.from(shopGrid.querySelectorAll('.shop-card'));
    if (cards.length === 0) return;

    // Create wrapper elements
    const shopContainer = document.createElement('div');
    shopContainer.className = 'shop-container';

    const sidebar = document.createElement('aside');
    sidebar.className = 'filter-sidebar';

    const shopContent = document.createElement('div');
    shopContent.className = 'shop-content';

    // Inject sidebar filter items html
    sidebar.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 10px;">
            <h3 style="font-size: 16px; font-weight: 800; color: #111; display: flex; align-items: center; gap: 8px; margin: 0;"><i class="fas fa-sliders-h"></i> Filters</h3>
            <span class="btn-close-filter-sidebar" style="display: none; cursor: pointer; font-size: 18px; color: #888;"><i class="fas fa-times"></i></span>
        </div>
        
        <!-- Filter 1: Materials -->
        <div class="filter-group active">
            <div class="filter-header">Materials <i class="fas fa-plus"></i></div>
            <div class="filter-content">
                <ul class="filter-item-list">
                    <li><label><input type="checkbox" value="acrylic" class="filter-checkbox" data-group="material"> Acrylic</label></li>
                    <li><label><input type="checkbox" value="asaa" class="filter-checkbox" data-group="material"> ASAA</label></li>
                    <li><label><input type="checkbox" value="polymer" class="filter-checkbox" data-group="material"> Polymer</label></li>
                    <li><label><input type="checkbox" value="charcoal" class="filter-checkbox" data-group="material"> Charcoal</label></li>
                    <li><label><input type="checkbox" value="wood" class="filter-checkbox" data-group="material"> Wood</label></li>
                </ul>
            </div>
        </div>

        <!-- Filter 2: Size -->
        <div class="filter-group active">
            <div class="filter-header">Size <i class="fas fa-plus"></i></div>
            <div class="filter-content">
                <ul class="filter-item-list">
                    <li><label><input type="checkbox" value="8x4" class="filter-checkbox" data-group="size"> 8x4 ft</label></li>
                    <li><label><input type="checkbox" value="8x2" class="filter-checkbox" data-group="size"> 8x2 ft</label></li>
                    <li><label><input type="checkbox" value="10x4" class="filter-checkbox" data-group="size"> 10x4 ft</label></li>
                    <li><label><input type="checkbox" value="2x2" class="filter-checkbox" data-group="size"> 2x2 ft</label></li>
                </ul>
            </div>
        </div>

        <!-- Filter 3: Thickness -->
        <div class="filter-group active">
            <div class="filter-header">Thickness <i class="fas fa-plus"></i></div>
            <div class="filter-content">
                <ul class="filter-item-list">
                    <li><label><input type="checkbox" value="1mm" class="filter-checkbox" data-group="thickness"> 1 mm</label></li>
                    <li><label><input type="checkbox" value="1.25mm" class="filter-checkbox" data-group="thickness"> 1.25 mm</label></li>
                    <li><label><input type="checkbox" value="1.5mm" class="filter-checkbox" data-group="thickness"> 1.5 mm</label></li>
                    <li><label><input type="checkbox" value="2mm" class="filter-checkbox" data-group="thickness"> 2 mm</label></li>
                    <li><label><input type="checkbox" value="6mm" class="filter-checkbox" data-group="thickness"> 6 mm</label></li>
                    <li><label><input type="checkbox" value="12mm" class="filter-checkbox" data-group="thickness"> 12 mm</label></li>
                    <li><label><input type="checkbox" value="18mm" class="filter-checkbox" data-group="thickness"> 18 mm</label></li>
                </ul>
            </div>
        </div>

        <!-- Filter 4: Price -->
        <div class="filter-group active">
            <div class="filter-header">Price Range <i class="fas fa-plus"></i></div>
            <div class="filter-content">
                <ul class="filter-item-list">
                    <li><label><input type="checkbox" value="low" class="filter-checkbox" data-group="price"> Under ₹1,500</label></li>
                    <li><label><input type="checkbox" value="mid" class="filter-checkbox" data-group="price"> ₹1,500 - ₹3,000</label></li>
                    <li><label><input type="checkbox" value="high" class="filter-checkbox" data-group="price"> Over ₹3,000</label></li>
                </ul>
            </div>
        </div>

        <!-- Filter 5: Colours -->
        <div class="filter-group active">
            <div class="filter-header">Colours <i class="fas fa-plus"></i></div>
            <div class="filter-content">
                <ul class="filter-item-list">
                    <li><label><input type="checkbox" value="white" class="filter-checkbox" data-group="color"> White</label></li>
                    <li><label><input type="checkbox" value="brown" class="filter-checkbox" data-group="color"> Brown</label></li>
                    <li><label><input type="checkbox" value="beige" class="filter-checkbox" data-group="color"> Beige</label></li>
                    <li><label><input type="checkbox" value="gold" class="filter-checkbox" data-group="color"> Gold</label></li>
                    <li><label><input type="checkbox" value="grey" class="filter-checkbox" data-group="color"> Grey</label></li>
                </ul>
            </div>
        </div>

        <!-- Filter 6: Customizable -->
        <div class="filter-group active">
            <div class="filter-header">Customizable <i class="fas fa-plus"></i></div>
            <div class="filter-content">
                <ul class="filter-item-list">
                    <li><label><input type="checkbox" value="yes" class="filter-checkbox" data-group="customizable"> Yes</label></li>
                    <li><label><input type="checkbox" value="no" class="filter-checkbox" data-group="customizable"> No</label></li>
                </ul>
            </div>
        </div>
    `;

    // Inject top filter bar html
    const topBar = document.createElement('div');
    topBar.className = 'top-filter-bar';
    topBar.innerHTML = `
        <div class="top-filter-left">
            <button class="btn-toggle-filter"><i class="fas fa-filter"></i> Filter</button>
            <span class="results-count">${cards.length} results</span>
        </div>
        <div class="top-filter-right">
            <div class="sort-container">
                <span>Sort by:</span>
                <select class="sort-select">
                    <option value="relevance">Relevance</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>
            <div class="view-as-container">
                <button class="btn-view-toggle active" data-view="grid"><i class="fas fa-th"></i></button>
                <button class="btn-view-toggle" data-view="list"><i class="fas fa-list"></i></button>
            </div>
        </div>
    `;

    // Wrap elements inside the DOM
    shopSection.insertBefore(shopContainer, shopGrid);
    shopContainer.appendChild(sidebar);
    shopContainer.appendChild(shopContent);
    shopContent.appendChild(topBar);
    shopContent.appendChild(shopGrid);

    // Auto-Tag Cards and format Card Info
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        
        // Get category name dynamically
        const pageTitleElem = document.querySelector('.hero-content h1') || document.querySelector('h1');
        const pageCategory = pageTitleElem ? pageTitleElem.textContent.toUpperCase().replace('LAMINATES', 'LAMINATE').replace('SHEETS', 'SHEET').replace('PANELS', 'PANEL') : 'LAMINATE';

        // Format card-info
        const cardInfo = card.querySelector('.card-info');
        if (cardInfo) {
            const currentTitle = cardInfo.querySelector('h3') ? cardInfo.querySelector('h3').textContent : 'Product Title';
            cardInfo.innerHTML = `
                <span class="card-category-label" style="display: block; font-size: 11px; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 6px; text-align: left;">${pageCategory}</span>
                <h3 class="card-product-title" style="font-size: 15px; font-weight: 700; color: #111; margin-bottom: 8px; text-align: left; line-height: 1.4; height: 42px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${currentTitle}</h3>
                <div class="card-price-row" style="display: flex; align-items: center; gap: 8px; justify-content: flex-start; margin-top: auto;">
                    <span class="card-current-price" style="font-size: 14px; font-weight: 700; color: #1a3b8f;">Enquire for Price</span>
                </div>
            `;
        }

        // Define smart tags for filtering logic
        let material = 'other';
        if (text.includes('acrylic')) material = 'acrylic';
        else if (text.includes('asaa')) material = 'asaa';
        else if (text.includes('polymer')) material = 'polymer';
        else if (text.includes('charcoal')) material = 'charcoal';
        else if (text.includes('wood') || text.includes(' african ') || text.includes(' ghana ')) material = 'wood';
        
        let size = 'other';
        if (text.includes('8x4') || text.includes('8*4')) size = '8x4';
        else if (text.includes('8x2') || text.includes('8*2')) size = '8x2';
        else if (text.includes('10x4')) size = '10x4';
        else if (text.includes('2x2')) size = '2x2';
        
        let thickness = 'other';
        if (text.includes('1mm') || text.includes('1 mm')) thickness = '1mm';
        else if (text.includes('1.25mm') || text.includes('1.25 mm')) thickness = '1.25mm';
        else if (text.includes('1.5mm') || text.includes('1.5 mm')) thickness = '1.5mm';
        else if (text.includes('2mm') || text.includes('2 mm')) thickness = '2mm';
        else if (text.includes('6mm') || text.includes('6 mm')) thickness = '6mm';
        else if (text.includes('12mm') || text.includes('12 mm')) thickness = '12mm';
        else if (text.includes('18mm') || text.includes('18 mm')) thickness = '18mm';
        
        let color = 'other';
        if (text.includes('white') || text.includes('glass')) color = 'white';
        else if (text.includes('brown') || text.includes('timber')) color = 'brown';
        else if (text.includes('beige')) color = 'beige';
        else if (text.includes('gold') || text.includes('metallic')) color = 'gold';
        else if (text.includes('grey') || text.includes('gray')) color = 'grey';
        
        let customizable = 'no';
        if (text.includes('custom') || text.includes('elite') || text.includes('premium') || text.includes('install')) customizable = 'yes';

        // Extract or default a price value
        let priceValue = parseFloat((details.price || '2000').replace(/,/g, ''));
        let priceRange = 'mid';
        if (priceValue < 1500) priceRange = 'low';
        else if (priceValue > 3000) priceRange = 'high';

        // Set data attributes for sorting/filtering
        card.setAttribute('data-material', material);
        card.setAttribute('data-size', size);
        card.setAttribute('data-thickness', thickness);
        card.setAttribute('data-color', color);
        card.setAttribute('data-customizable', customizable);
        card.setAttribute('data-price-range', priceRange);
        card.setAttribute('data-price-value', priceValue);
        card.setAttribute('data-name', card.querySelector('.card-product-title') ? card.querySelector('.card-product-title').textContent : '');
    });

    // Accordion Toggle Logic
    sidebar.querySelectorAll('.filter-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('active');
        });
    });

    // Mobile Sidebar Drawer Toggle
    const btnToggle = topBar.querySelector('.btn-toggle-filter');
    const btnClose = sidebar.querySelector('.btn-close-filter-sidebar');
    
    if (btnToggle) {
        btnToggle.addEventListener('click', () => {
            sidebar.classList.add('open');
            btnClose.style.display = 'block';
        });
    }
    
    if (btnClose) {
        btnClose.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }

    // Filter Logic Function
    function applyFilters() {
        // Collect checked filters
        const activeFilters = {
            material: [],
            size: [],
            thickness: [],
            color: [],
            customizable: [],
            price: []
        };

        sidebar.querySelectorAll('.filter-checkbox:checked').forEach(cb => {
            const group = cb.getAttribute('data-group');
            activeFilters[group].push(cb.value);
        });

        // Loop through cards
        let visibleCount = 0;
        cards.forEach(card => {
            let matchesMaterial = activeFilters.material.length === 0 || activeFilters.material.includes(card.getAttribute('data-material'));
            let matchesSize = activeFilters.size.length === 0 || activeFilters.size.includes(card.getAttribute('data-size'));
            let matchesThickness = activeFilters.thickness.length === 0 || activeFilters.thickness.includes(card.getAttribute('data-thickness'));
            let matchesColor = activeFilters.color.length === 0 || activeFilters.color.includes(card.getAttribute('data-color'));
            let matchesCustomizable = activeFilters.customizable.length === 0 || activeFilters.customizable.includes(card.getAttribute('data-customizable'));
            let matchesPrice = activeFilters.price.length === 0 || activeFilters.price.includes(card.getAttribute('data-price-range'));

            if (matchesMaterial && matchesSize && matchesThickness && matchesColor && matchesCustomizable && matchesPrice) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results text
        topBar.querySelector('.results-count').textContent = `${visibleCount} results`;
    }

    // Event Listener for Checkboxes
    sidebar.querySelectorAll('.filter-checkbox').forEach(cb => {
        cb.addEventListener('change', applyFilters);
    });

    // Sort Logic
    const sortSelect = topBar.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const val = sortSelect.value;
            const sortedCards = [...cards];

            if (val === 'price-asc') {
                sortedCards.sort((a, b) => parseFloat(a.getAttribute('data-price-value')) - parseFloat(b.getAttribute('data-price-value')));
            } else if (val === 'price-desc') {
                sortedCards.sort((a, b) => parseFloat(b.getAttribute('data-price-value')) - parseFloat(a.getAttribute('data-price-value')));
            } else if (val === 'name-asc') {
                sortedCards.sort((a, b) => a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')));
            } else if (val === 'name-desc') {
                sortedCards.sort((a, b) => b.getAttribute('data-name').localeCompare(a.getAttribute('data-name')));
            }

            // Append in sorted order
            sortedCards.forEach(c => shopGrid.appendChild(c));
        });
    }

    // View Toggle (Grid / List)
    topBar.querySelectorAll('.btn-view-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            topBar.querySelectorAll('.btn-view-toggle').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.getAttribute('data-view');
            if (view === 'list') {
                shopGrid.classList.add('list-view');
            } else {
                shopGrid.classList.remove('list-view');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', loadComponents);
