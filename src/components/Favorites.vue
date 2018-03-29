<template>
  <div v-if="searched">
    <Grid :results="results"/>
  </div>
</template>

<script>

import FavoritesApi from '../api/FavoritesApi.js'
import Grid from './Grid.vue'

export default {
  name: 'Favorites',
  props: [],
  components: {
    Grid
  },
  data: function() {
    return {
      searched: false,
      searching: false,
      results: []
    }
  },
  created: function() {
    this.fetchFavorites();
  },
  methods: {
    fetchFavorites: function() {
      this.searching = true
      FavoritesApi.fetchFavorites()
      .then(results => {
        console.log(results)
        this.results = results.data.data
        this.searched = true
        this.searching = false
      })
      .catch(err => console.log(err))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
