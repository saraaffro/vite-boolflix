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
    }
}
</script>

<template>
    <div class="card" v-for="movie in store.moviesArr">
        <AppCard :info="movie" />
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin: 20px;
}
</style>