<script>
// importo store
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <input type="text" placeholder="cerca un titolo" v-model="store.searchText">
    <button type="submit" @click="$emit('search')">Cerca</button>
</template>

<style lang="scss" scoped></style>