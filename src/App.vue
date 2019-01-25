<template>
    <div id="app">
        <nav>
            <div class="shrink">
                <i class="fa fa-times"></i>
            </div>
            <div class="extend">
                <i class="fa fa-bars"></i>
            </div>
            <router-link to="/">{{ $t('nav.home') }}</router-link>
            <router-link to="/about">{{ $t('nav.about') }}</router-link>
            <router-link to="/projects">{{ $t('nav.projects') }}</router-link>
            <router-link to="/resume">{{ $t('nav.resume') }}</router-link>
            <div class="icons">
                <a class="github" target="_blank" href="https://github.com/Irevall"><img src="./assets/github.svg" alt="Github"></a>
                <div class="flags" @mouseenter="flagEnter" @mouseleave="flagSwitch($i18n.i18next.language)">
                    <img class="flag-en" src="./assets/en-flag.png" alt="English language" @click="changeLanguage('en')"/>
                    <img class="flag-pl" src="./assets/pl-flag.png" alt="Język polski" @click="changeLanguage('pl')"/>
                </div>
            </div>
        </nav>
        <router-view/>
        <footer>
            <svg height="70px" width="100%">
                <polygon points="0,70 1920,0 1920,70" style="fill:#0096e8"></polygon>
            </svg>
            <svg height="70px" width="100%">
                <polygon points="0,0 0,70 1920,70" style="fill:#0263e2"></polygon>
            </svg>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "App",
        data: function() {
            return {

            }
        },
        mounted() {
            this.flagSwitch(this.$i18n.i18next.language);
            this.footerResize();

            window.addEventListener('resize', () => {
                this.footerResize();
            });

            document.querySelector('.extend').addEventListener('click', () => {
                document.querySelector('nav').classList.add('extended');
            });

            document.querySelector('.shrink').addEventListener('click', () => {
                document.querySelector('nav').classList.remove('extended');
            });
        },
        methods: {
            flagSwitch: function(code) {
                const flags = [
                    document.querySelector('.flag-en'),
                    document.querySelector('.flag-pl'),
                ];
                if (code === 'pl') {
                    flags[0].classList.add('hidden');
                    flags[1].classList.remove('hidden');
                } else {
                    flags[0].classList.remove('hidden');
                    flags[1].classList.add('hidden');
                }
            },
            flagEnter: function() {
                if (window.innerWidth <= 600) {
                    return;
                }
                if (this.$i18n.i18next.language === 'pl') {
                    this.flagSwitch('en');
                } else {
                    this.flagSwitch('pl');
                }
            },
            changeLanguage: function(code) {
                this.$i18n.i18next.changeLanguage(code);
                if (code === 'pl') {
                    this.flagSwitch('en');
                } else {
                    this.flagSwitch('pl');
                }
            },
            footerResize: function() {
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
        }
    }


</script>

<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:600,700');
    @import '~normalize.css/normalize.css';

    #app {
        margin: 0;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        font-family: 'Lato', sans-serif;
        background: url("./assets/dark-background.png");
        color: #dee1e5;
    }

    nav {
        margin: 0 0 50px 0;
        height: 55px;
        display: flex;
        background-color: #1f2a3a;
        font-size: 30px;
        box-shadow: 0 1px 1px 0 black;
    }

   .container {
        margin: 0 5px;
        display: flex;
        justify-content: center;
        padding-bottom: 70px;
    }

    .extend, .shrink {
        margin-left: 5px;
        display: none;
        width: 30px;
    }

    nav > a {
        display: flex;
        align-items: center;
        font-weight: bold;
        padding-bottom: 5px;
        margin-left: 50px;
        height: 100%;
        cursor: pointer;
        box-sizing: border-box;
    }

    nav > a > p {
        margin: 0;
    }

    nav > .router-link-exact-active {
        color: #0096e8;
        border-bottom: #0096e8 5px solid;
        padding-bottom: 0;
    }

    a {
        text-decoration: none;
        color: #dee1e5;
    }

    a:hover {
        color: #0096e8;
    }

    .icons {
        display: flex;
        margin-left: auto;
        margin-right: 10px;
    }

    .github {
        align-self: center;
        margin-right: 10px;
        width: 35px;
        height: 35px;
        margin-left: auto;
    }

    .github > img {
        align-self: center;
        width: 35px;
        height: 35px;
    }

    .flags {
        align-self: center;
    }

    .flags img {
        cursor: pointer;
        width: 40px;
        height: 20px;
        border-radius: 5px;
        border: black solid 1px;
    }

    .hidden {
        display: none;
    }

    footer {
        position: fixed;
        bottom: 0;
        height: 70px;
        width: 100%;
    }

    footer svg {
        position: absolute;
        bottom: 0;
    }

    @media only screen and (min-width: 650px) and (max-width: 800px) {
        nav {
            margin: 0 0 20px 0;
        }

        nav a {
            margin-left: 15px;
        }

        .github {
            margin-right: 7px;
        }
    }

    @media only screen and (max-width: 650px) {
        nav {
            height: auto;
            width: 100%;
            position: fixed;
        }

        nav > a {
            width: max-content;
            padding-bottom: 0;
            margin-left: 5px;
        }

        nav:not(.extended) > a {
            display: none;
        }

        nav .extend {
            display: flex;
            flex-direction: row;
            align-self: center;
        }

        .icons {
            margin-top: 2px;
            height: max-content;
        }

        .extended {
            flex-direction: column;
        }

        .extended > a {
            margin-left: 5px;
        }

        .flags .hidden {
            display: block;
        }

        .flags *:not(.hidden) {
            display: none;
        }

        .extended .extend {
            display: none;
        }

        .extended .shrink {
            display: block;
        }

        .extended .icons {
            position: absolute;
            right: 0;
        }
    }
</style>