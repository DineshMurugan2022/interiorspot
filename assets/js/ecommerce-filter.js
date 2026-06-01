document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion Toggle
    const accordions = document.querySelectorAll('.filter-accordion');
    accordions.forEach(acc => {
        const header = acc.querySelector('.filter-accordion-header');
        if(header) {
            header.addEventListener('click', () => {
                acc.classList.toggle('active');
            });
        }
    });

    // 2. View As Toggle
    const gridViewBtn = document.getElementById('view-grid');
    const listViewBtn = document.getElementById('view-list');
    const shopGrid = document.getElementById('ecommerce-grid');

    if(gridViewBtn && listViewBtn && shopGrid) {
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            shopGrid.classList.remove('list-view');
        });

        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            shopGrid.classList.add('list-view');
        });
    }

    // 3. Wishlist Toggle
    const wishlistBtns = document.querySelectorAll('.btn-wishlist');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            if(btn.classList.contains('active')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
            }
        });
    });

    // 4. Mobile Filter Toggle
    const filterToggleBtn = document.getElementById('mobile-filter-toggle');
    const filterSidebar = document.getElementById('sidebar-filter');
    const closeFilterBtn = document.getElementById('close-filter-btn');

    if(filterToggleBtn && filterSidebar) {
        filterToggleBtn.addEventListener('click', () => {
            filterSidebar.classList.add('open');
            if(closeFilterBtn) closeFilterBtn.style.display = 'block';
        });
    }

    if(closeFilterBtn && filterSidebar) {
        closeFilterBtn.addEventListener('click', () => {
            filterSidebar.classList.remove('open');
            closeFilterBtn.style.display = 'none';
        });
    }

    // 5. Active Filters & Count Logic (Basic visual update)
    const checkboxes = document.querySelectorAll('.filter-checkbox-item input[type="checkbox"]');
    const activeFiltersContainer = document.getElementById('active-filters-row');
    const resultsCount = document.getElementById('results-count');
    const allCards = document.querySelectorAll('.ecommerce-card');

    function updateFilters() {
        if(!activeFiltersContainer) return;
        
        activeFiltersContainer.innerHTML = '';
        let checkedValues = [];

        checkboxes.forEach(cb => {
            if(cb.checked) {
                const label = cb.parentElement.textContent.trim();
                checkedValues.push(cb.value);
                
                const chip = document.createElement('div');
                chip.className = 'filter-chip';
                chip.innerHTML = label + ' <i class="fas fa-times"></i>';
                chip.addEventListener('click', () => {
                    cb.checked = false;
                    updateFilters();
                });
                activeFiltersContainer.appendChild(chip);
            }
        });

        let visibleCount = 0;
        allCards.forEach(card => {
            if(checkedValues.length === 0) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                const randomShow = Math.random() > 0.5;
                card.style.display = randomShow ? 'flex' : 'none';
                if(randomShow) visibleCount++;
            }
        });

        if(resultsCount) {
            resultsCount.textContent = (checkedValues.length === 0 ? allCards.length : visibleCount) + ' results';
        }
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateFilters);
    });
});
