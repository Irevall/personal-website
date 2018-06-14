document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.title').querySelectorAll('li').forEach((element, index) => {
        element.addEventListener('click', () => {
            document.querySelector('main').querySelectorAll('article')[index].scrollIntoView({block: "start", behavior: "smooth"});
        });
    });
});