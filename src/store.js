import { reactive } from "vue";

export const store = reactive({
    apiCall: 'https://api.themoviedb.org/3/search/movie?',
    apiKey: '671d6e14fb28ab5a0621cc9eba5387c3',
    searchText: "",
    moviesArr: [],
})