<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppCard from './components/AppCard.vue'

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
    AppCard
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {
      let myURL = store.apiCall;

      if (store.searchText !== '') {
        myURL += `api_key=${store.apiKey}&query=${store.searchText}`;
      }

      // chiamata api cards
      axios
        .get(myURL)
        .then((res => {
          console.log(res.data.results);
          store.moviesArr = res.data.results;
        }))
        .catch((err) => {
          console.log("errori", err);
        })
    },
    created() {
      this.getCard();
    }
  }
}


</script>

<template>
  <AppHeader @search="getCard" />
  <AppMain />
  <AppCard />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>
