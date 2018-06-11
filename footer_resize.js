document.addEventListener('DOMContentLoaded', () => {
    polygonResize();
});
window.addEventListener('resize', () => {
    polygonResize();
});

function polygonResize() {
    let width =  window.innerWidth || document.body.clientWidth;
    let polygons = document.querySelectorAll('polygon');
    polygons[0].points[1].x = width;
    polygons[0].points[2].x = width;
    polygons[1].points[2].x = width;
}