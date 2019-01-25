<template>
    <div class="container">
        <div class="photo">
            <img src="../assets/photos/home-photo.png"/>
        </div>
        <div class="text">
            <div class="title">
                <h1>Kuba Marek</h1>
            </div>
            <h2>{{ $t('home.welcome') }}<br/>
                {{ $t('home.rest') }}
            </h2>
            <h2>
                {{ $t('home.contact') }}: <a href="mailto:kjm@irevall.me" class="mail">kjm@irevall.me</a>
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
    }
</script>

<style lang="scss" scoped>
    /*@import url('https://fonts.googleapis.com/css?family=Dosis:400,600');*/
    @import url('https://fonts.googleapis.com/css?family=Poiret+One');
    @import url('https://fonts.googleapis.com/css?family=Baumans');
    /*@import url('https://fonts.googleapis.com/css?family=Megrim');*/

    .container {
        flex-direction: row;
        font-family: 'Dosis', sans-serif;
        font-size: 1.3em;
        padding-top: 20px;
    }

    .title {
        margin-bottom: 45px;
    }

    .text {
        max-width: 500px;
        padding-right: 200px;
    }

    .photo {
        margin-top: 15px;
        margin-right: 45px;
    }

    .photo > img {
        width: 200px;
        border-radius: 50%;
        border: 3px #0096e8 solid;
    }

    .title > h1 {
        margin-top: 0;
        margin-bottom: 5px;
        font-family: 'Poiret One', cursive;
        font-size: 85px;
    }

    .title > h2 {
        margin: 0;
        font-family: 'Baumans', cursive;
        font-size: 40px;
        text-align: center;

    }

    .text > h2 > p {
        margin: 0;
    }
    @media only screen and (max-width: 1000px) {
        .container {
            flex-direction: column;
            justify-content: flex-start !important;
            align-items: center;
            padding-top: 60px;
        }

        .photo img {
            display: block;
            width: calc(100% - 6px);
            max-width: 250px;
        }

        .title {
            margin-bottom: 0;
        }

        .title > h1 {
            font-size: 65px;
        }

        .title > h2 {
            font-size: 25px;
        }

        .text {
            max-width: 400px;
            font-size: 0.8em;
            padding-right: 0;
        }
    }
</style>