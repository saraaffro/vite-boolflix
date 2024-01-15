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
        <div class="container">
            <div class="logo">
                BOOLFLIX
            </div>
            <div>
                <input type="text" placeholder="Cerca un titolo" v-model="store.searchText" @keyup.enter="$emit('search')">
                <button type="submit" @click="$emit('search')">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .container {
        height: 70px;
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    .logo {
        color: red;
        font-size: 25px;
        font-weight: bold;
    }

    input {
        height: 25px;
        border-radius: 2px;
        padding: 2px;
        border-color: transparent;
        margin-right: 10px;
    }

    button {
        padding: 3px;
        width: 55px;
        background-color: red;
        border-color: transparent;
        border-radius: 3px;
        color: white;
    }
}
</style>