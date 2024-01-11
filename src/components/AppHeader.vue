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
    <header>
        <div class="logo">
            BOOLFLIX
        </div>
        <div class="searchbar">
            <input type="text" placeholder="Cerca un titolo" v-model="store.searchText" @keyup.enter="$emit('search')">
            <button type="submit" @click="$emit('search')">Cerca</button>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .logo {
        color: red;
        font-size: 25px;
        font-weight: bold;
    }

    input {
        height: 25px;
        border-radius: 2px;
        border-color: transparent;
        margin-right: 10px;
    }

    button {
        padding: 3px;
        background-color: red;
        border-color: transparent;
        border-radius: 3px;
        color: white;
    }
}
</style>