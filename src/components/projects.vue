<template>
    <div class="container">
        <div class="title">
            <h1>{{ $t("projects.desc") }}:</h1>
            <div class="list">
                <ul>
                    <li v-for="project in $i18n.i18next.store.data[$i18n.i18next.language].translation.projects.list">{{ project.title }}</li>
                </ul>
            </div>
            <h2>{{ $t("projects.github") }} <a target="_blank" href="https://github.com/Irevall">GitHub</a>.</h2>
        </div>

        <div class="projects">
            <article v-for="project in $i18n.i18next.store.data[$i18n.i18next.language].translation.projects.list">
                <h1>{{ $t(project.title) }}</h1>
                <a target="_blank" :href="project.live"><img :src="`./assets/projects/${project.screen}.png`"/></a>
                <div class="text">
                    <p>{{ $t("projects.features") }}:</p>
                    <ul>
                        <li v-for="feature in project.features">
                            {{ feature }}
                        </li>
                    </ul>
                    <p v-if="project.live"><a target="_blank" :href="project.live">{{ $t("projects.live") }}</a></p>
                    <p><a target="_blank" :href="project.source">{{ $t("projects.source") }}</a></p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        name: "projects",
        data: function() {
            return {
                projects: [

                ]
            }
        },
        created() {
            console.log(this.$t('projects.list'));
            console.log(this.$t('projects.github'));
        },
        mounted() {
            console.log(document.querySelector('.title'));
            document.querySelector('.title').querySelectorAll('li').forEach((element, index) => {
                element.addEventListener('click', () => {
                    document.querySelector('.container').querySelectorAll('article')[index].scrollIntoView({block: "start", behavior: "smooth"});
                });
            });
        }
    };
</script>

<style scoped>
    .container {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .container a {
        text-decoration: underline;
    }

    .projects {
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 100px;
        justify-content: center;
    }

    article {
        max-width: 600px;
    }

    article > a {
        max-width: 500px;
    }


    .projects > article {
        background-color: #070b14;
        margin-bottom: 45px;
    }

    .title {
        margin-bottom: 15px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .title a {
        display: inline;
    }

    .title > h1, .title > h2 {
        margin: 0;
    }

    .list a {
        text-decoration: none;
    }

    .title li:hover {
        cursor: pointer;
        color: #0096e8;
    }

    article h1{
        font-size: 3.2em;
        margin: 15px 0;
        text-align: center;
    }

    article > a {
        display: block;
        border: 3px #0263e2 solid;
        border-radius: 4px;
        margin: 0 auto;
    }

    article > .text {
        display: inline-block;
        margin-left: 15px;
    }

    article img {
        display: block;
        width: 100%;
    }

    article p {
        font-size: 1.5em;
        margin: 5px 0;
    }

    ul {
        margin: 5px 0;
    }

    li {
        font-size: 1.2em;
    }

    @media only screen and (max-width: 1380px) {
        .projects {
            display: grid;
            grid-template-columns: auto;
            justify-content: center;
        }

        @media only screen and (max-width: 500px) {
            .title > h1, .title > h2 {
                font-size: 1.3em;
            }

            article > h1 {
                font-size: 2.7em;
            }

            article > .text {
                font-size: 0.8em;
            }
        }
    }
</style>