const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      resume: 'Resume',
    },
  },
  pl: {
    nav: {
      home: 'Główna',
      about: 'O mnie',
      projects: 'Projekty',
      resume: 'CV',
    },
  },
};

let i18n = new VueI18n({
  locale: 'en',
  messages,
});

function polygonResize() {
  const width = window.innerWidth || document.body.clientWidth;
  const svg = document.querySelector('footer').querySelectorAll('svg');
  const polygons = document.querySelector('footer').querySelectorAll('polygon');
  const height = 30 + width / 30;
  document.querySelector('footer').style.height = height + 'px';
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

document.addEventListener('DOMContentLoaded', () => {
  polygonResize();

  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');
    i18n.locale = 'en';
    flagSwitch('en');
  } else {
    i18n.locale = localStorage.getItem('lang');
    flagSwitch(i18n.locale);
  }

  new Vue({ i18n }).$mount('nav');

  window.addEventListener('resize', () => {
    polygonResize();
  });

  document
    .querySelector('.flags')
    .querySelectorAll('img')
    .forEach(element => {
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

      element.addEventListener('mouseover', e => {
        if (document.body.clientWidth >= 600) {
          if (i18n.locale === 'pl') {
            flagSwitch('en');
          } else {
            flagSwitch('pl');
          }
        }
      });

      element.addEventListener('mouseout', e => {
        flagSwitch(i18n.locale);
      });
    });

  document.querySelector('.extend').addEventListener('click', () => {
    document.querySelector('nav').classList.add('extended');
  });

  document.querySelector('.shrink').addEventListener('click', () => {
    document.querySelector('nav').classList.remove('extended');
  });
});
