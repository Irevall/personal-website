document.addEventListener('DOMContentLoaded', () => {
    polygonResize();
});
window.addEventListener('resize', () => {
    polygonResize();
});

function polygonResize() {
    const width =  window.innerWidth || document.body.clientWidth;
    const svg = document.querySelector('footer').querySelectorAll('svg');
    const polygons = document.querySelector('footer').querySelectorAll('polygon');
    const height = 40 + width / 30;
    document.querySelector('main').style.marginBottom = height + 'px';
    svg[0].style.height = height + 'px';
    svg[1].style.height = height + 'px';
    polygons[0].points[1].x = width;
    polygons[0].points[2].x = width;
    polygons[1].points[2].x = width;
    polygons[0].points[0].y = height;
    polygons[0].points[2].y = height;
    polygons[1].points[1].y = height;
    polygons[1].points[2].y = height;
}