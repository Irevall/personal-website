const messages = {
    en: {
        nav: {
            home: 'Home',
            about: 'About me',
            projects: 'Projects',
            resume: 'Resume',
        }
    },
    pl: {
        nav: {
            home: 'Główna',
            about: 'O mnie',
            projects: 'Projekty',
            resume: 'CV',
        }
    }
};

let i18n = new VueI18n({
    locale: 'en',
    messages,
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'en');
        i18n.locale ='en';
        flagSwitch('en');
    } else {
        i18n.locale = localStorage.getItem('lang');
        flagSwitch(i18n.locale);
    }

    new Vue({i18n}).$mount('nav');

    document.querySelector('.flags').querySelectorAll('img').forEach((element) => {
        element.addEventListener('click', () => {
            if (i18n.locale === 'en') {
                localStorage.setItem('lang', 'pl');
                i18n.locale = 'pl';
                flagSwitch('pl');
            } else {
                localStorage.setItem('lang', 'en');
                i18n.locale = 'en';
                flagSwitch('en');
            }
        });
        element.addEventListener('mouseover', (e) => {
            if (document.body.clientWidth >= 600) {
                if (i18n.locale === 'pl') {
                    flagSwitch('en')
                } else {
                    flagSwitch('pl');
                }
            }
        });

        element.addEventListener('mouseout', (e) => {
            flagSwitch(i18n.locale);
        });
    });

    document.querySelector('.extend').addEventListener('click', () => {
        document.querySelector('nav').classList.add('extended');
    });

    document.querySelector('.shrink').addEventListener('click', () => {
        document.querySelector('nav').classList.remove('extended');
    });

    function flagSwitch(code) {
        const flags = document.querySelector('.flags').querySelectorAll('img');
        if (code === 'pl') {
            flags[0].classList.add('hidden');
            flags[1].classList.remove('hidden');
        } else {
            flags[0].classList.remove('hidden');
            flags[1].classList.add('hidden');
        }
    }
    // console.log(window.innerHeight);
    // console.log(document.querySelector('main').clientHeight + document.querySelector('nav').clientHeight + document.querySelector('footer').clientHeight);
    // console.log(document.body.clientHeight);
});