document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#FFD700';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#FF6347';
    });
});