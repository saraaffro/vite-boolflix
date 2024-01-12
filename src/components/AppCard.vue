<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
    data() {
        return {
            flags: {
                it: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png',
                en: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
                es: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png',
                fr: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png',
                ru: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/400px-Flag_of_Russia.svg.png',
                pt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/400px-Flag_of_Portugal.svg.png',
                ja: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/400px-Flag_of_Japan.svg.png',
                de: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/400px-Flag_of_Germany.svg.png'
            }
        }
    },
    computed: {
        rateVote() {
            return Math.ceil(this.info.vote_average / 2);
        },
    },
}
</script>

<template>
    <div class="card-container">
        <div class="card-cover">
            <img v-if="info.poster_path" :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="cover">
            <!-- se il film/serie tv non ha la cover -->
            <img v-else src="https://image.tmdb.org/t/p/w342//vefWBq6xpeMYtF7ROgGfXLdp5Qu.jpg" alt="cover">
        </div>

        <div class="card-informations">
            <!-- titolo -->
            <div class="info title"><strong>Titolo:</strong> {{ info.title || info.name }}</div>
            <div class="info or-title"><strong>Titolo originale:</strong> {{ info.original_title
                || info.original_name
            }}
            </div>

            <!-- lingua -->
            <div class="info lang" v-if="flags[info.original_language]">
                <img class="flag" :src="flags[info.original_language]" :alt="info.original_language">
            </div>
            <div class="info lang" v-else>
                <img class="flag"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Olympic_flag.svg/560px-Olympic_flag.svg.png"
                    alt="olympic flag">
            </div>

            <!-- overview -->
            <div class="info overview"><strong>Overview:</strong> {{ info.overview }}</div>

            <!-- voto -->
            <div class="info vote"><strong>Voto: </strong>
                <span v-for="i in 5">
                    <i :class="i <= rateVote ? 'fa fa-star' : 'fa fa-star-o'"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-container {
    position: relative;

    &:hover .card-cover {
        opacity: 0;
    }

    &:hover .card-informations {
        display: block;
    }

    .card-cover {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .card-informations {
        display: none;
        background-color: #2f2f2f;
        padding: 10px;
        border: 1px solid white;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-y: auto;

        .info {
            margin: 10px 0;
        }

        .lang {
            text-align: center;

            .flag {
                width: 30px;
            }
        }

        .fa {
            color: rgb(255, 191, 0);
        }
    }
}
</style>



