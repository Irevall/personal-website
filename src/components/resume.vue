<template>
    <div class="container">
        <embed :src="`./assets/resumes/${$t('resume.source')}.pdf`" type="application/pdf" />
        <h1 class="text">{{ $t('resume.text') }} <a :href="`../assets/resumes/${$t('resume.source')}.pdf`" download="CV - Kuba Marek">{{ $t('resume.click') }}</a>.</h1>
    </div>
</template>

<script>
    export default {
        name: "resume",
        beforeCreate() {
            document.body.className = 'resume';
        },
        beforeDestroy() {
            document.body.className = '';
        }
    };
</script>

<style>
    .resume  {
        overflow: hidden;
    }

    .resume nav  {
        margin-bottom: 0;
    }

    .resume .container {
        padding-bottom: 0;
    }

    .resume footer, .resume .text {
        display: none;
    }

</style>

<style scoped>
    .text {
        margin-top: 100px;
        font-size: 2em;
        text-align: center;
    }

    .container .text > a {
        text-decoration: underline;
    }

    footer, .text {
        display: none;
    }

    .container > embed {
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 750px) {
        .container {
            width: auto;
        }

        footer, .text {
            display: block;
        }

        embed {
            display: none;
        }
    }
</style>