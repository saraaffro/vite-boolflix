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
    <h2>FILM</h2>
    <div class="card" v-for="movie in store.moviesArr">
        <AppCard :info="movie" />
    </div>

    <h2>SERIE TV</h2>
    <div class="card" v-for="series in store.seriesArr">
        <AppCard :info="series" />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin-left: 20px;
    margin-top: 20px;
}

.card {
    margin: 20px;
}
</style>