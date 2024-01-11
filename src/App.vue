<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovie() {
      let myURL = store.apiCallMovie;

      if (store.searchText !== '') {
        myURL += `?api_key=${store.apiKey}&query=${store.searchText}`;
      }

      // chiamata film
      axios
        .get(myURL)
        .then((res => {
          console.log(res.data.results);
          store.moviesArr = res.data.results;
        }))
        .catch((err) => {
          console.log("errori", err);
        })

      this.getSeries();

      store.searchText = '';

    },
    getSeries() {
      let myURLSeries = store.apiCallSeries;

      if (store.searchText !== '') {
        myURLSeries += `?api_key=${store.apiKey}&query=${store.searchText}`;
      }

      // chiamata serie tv
      axios
        .get(myURLSeries)
        .then((res => {
          console.log(res.data.results);
          store.seriesArr = res.data.results;
        }))
        .catch((err) => {
          console.log("errori", err);
        })
    },
  },
  created() {
    this.getMovie();
  }
}


</script>

<template>
  <AppHeader @search="getMovie" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>
