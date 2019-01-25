<template>
    <div class="container">
        <div class="short-info">
            <img class="personal-photo" alt="Personal photo" src="../assets/photos/about-photo-1.png"/>
            <div class="picture-buttons">
                <svg height="16" width="16">
                    <circle class="button-selected" cx="8" cy="8" r="6" stroke="#0096e8" stroke-width="1" fill="#25243d"></circle>
                </svg>
                <svg height="16" width="16">
                    <circle cx="8" cy="8" r="6" stroke="#0096e8" stroke-width="1" fill="#25243d"></circle>
                </svg>
                <svg height="16" width="16">
                    <circle cx="8" cy="8" r="6" stroke="#0096e8" stroke-width="1" fill="#25243d"></circle>
                </svg>
            </div>
            <p>{{ $t('about.info.name') }}: Kuba</p>
            <p>{{ $t('about.info.age') }}: <span class="age"></span> {{ $t('about.info.years') }}</p>
            <p>{{ $t('about.info.from') }}: Wrocław <img class="small-flag" src="../assets/pl-flag.png"/></p>
        </div>
        <div class="text">
            <article>
                <h1>{{ $t('about.education.title') }}</h1>
                {{ $t('about.education.text') }}
            </article>
            <article>
                <h1>{{ $t('about.skills.title') }}</h1>
                {{ $t('about.skills.text') }}
            </article>
            <article>
                <h1>{{ $t('about.other.title') }}</h1>
                {{ $t('about.other.text') }}
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about",
        mounted() {
            let date = new Date();
            document.querySelector('.age').innerHTML = (date.getFullYear() - 1997);

            const photos = [
                require('../assets/photos/about-photo-1.png'),
                require('../assets/photos/about-photo-2.png'),
                require('../assets/photos/about-photo-3.png')
            ];


            document.querySelector('.picture-buttons').querySelectorAll('svg').forEach((el, index) => {
                el.addEventListener('click', () => {
                    document.querySelector('.picture-buttons').querySelectorAll('svg').forEach((el) => {
                        el.querySelector('circle').classList.remove('button-selected');
                    });
                    el.querySelector('circle').classList.add('button-selected');
                    document.querySelector('.personal-photo').src = photos[index];
                });
            });
        }
    };
</script>

<style scoped>
    .personal-photo{
        width: calc(100% - 6px);
        max-width: 225px;
    }
    .text {
        margin-left: 45px;
    }


    @media only screen and (max-width: 600px) {
        .container {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }

        .short-info {
            margin-right: auto;
        }

        .text {
            margin-left: 0;
        }
    }

    .short-info {
        display: inline-block;
    }

    .short-info > p {
        font-size: 1.2em;
        margin: 7px 0;
    }

    .button-selected {
        fill: black;
    }

    .picture-buttons {
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin: 3px auto 0 auto;
    }

    .picture-buttons > svg:hover {
        cursor: pointer;
    }

    .picture-buttons > svg:hover > circle:not(.button-selected) {
        fill: #c9cacc;
    }

    .picture-desc {
        text-align: center;
    }

    .personal-photo {
        border-radius: 5px;
        border: 3px #0096e8 solid;
    }

    .small-flag {
        width: 1.2em;
    }

    main {
        display: flex;
    }

    .short-info {
        margin-left: auto;
    }

    .text {
        margin-right: auto;
    }

    .text {
        max-width: 550px;
    }

    .text > article {
        font-size: 1.2em;
        margin-bottom: 15px;
    }

    article > h1 {
        margin: 0;
    }
</style>