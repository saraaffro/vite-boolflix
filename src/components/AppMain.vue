<script>
// importo store
import { store } from '../store';

import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main>
        <div class="container">
            <h2 v-if="store.moviesArr.length > 0">FILM</h2>
            <h2 v-else>Non hai cercato un titolo</h2>
            <div class="row">
                <div class="card" v-for="movie in store.moviesArr">
                    <AppCard :info="movie" />
                </div>
            </div>

            <h2 v-if="store.seriesArr.length > 0">SERIE TV</h2>
            <div class="row">
                <div class="card" v-for="series in store.seriesArr">
                    <AppCard :info="series" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container {
    width: 90%;
    margin: 0 auto;

    h2 {
        margin-left: 10px;
        margin-top: 20px;
        color: red;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;

        .card {
            flex-basis: calc((100% / 5) - 20px);
            margin: 10px;
            font-size: 12px;
            color: white;
            position: relative;
        }
    }
}
</style>