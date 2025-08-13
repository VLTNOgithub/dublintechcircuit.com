document.querySelectorAll('.hexagon-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
        const border = container.querySelector('.hex-border');
        border.setAttribute('stroke', '#bada55');
        border.setAttribute('stroke-width', '6');
    });
    container.addEventListener('mouseleave', () => {
        const border = container.querySelector('.hex-border');
        border.setAttribute('stroke', '#879F3C');
        border.setAttribute('stroke-width', '2');
    });
});