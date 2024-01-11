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
            <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="cover">
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
.card-cover {
    width: 100%;

    img {
        width: 100%;
    }
}

.card-container:hover .card-cover {
    display: none;
}

.card-informations {
    display: none;
    background-color: rgb(154, 154, 154);
    padding: 10px;
    border: 1px solid white;

    .info {
        margin: 7px 0;
    }

    .lang {
        text-align: center;
    }
}

.card-container:hover .card-informations {
    display: block;
}

.flag {
    width: 30px;
}
</style>