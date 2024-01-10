<script>
// importo axios
import axios from 'axios';

// importo componenti
import AppHeader from './components/AppHeader.vue'

// importo store
import { store } from './store';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  created() {

  }
}


</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/mixins' as *;
@use './styles/partials/variables' as *;
</style>
