function filterSelection(category) {
    const cards = document.querySelectorAll('.item-card');
    const tabs = document.querySelectorAll('.tab-clicker');
    
    tabs.forEach(tab => {
        if(tab.textContent.toLowerCase().includes(category) || (category === 'all' && tab.textContent.includes('All'))) {
            tab.classList.add('active-tab');
        } else {
            tab.classList.remove('active-tab');
        }
    });

    cards.forEach(card => {
        const itemCategory = card.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
