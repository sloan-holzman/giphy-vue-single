<template>
  <div>
    <div v-if="searching">
      <br>
      <p>Loading...</p>
      <v-progress-circular indeterminate :size="120" :width="7" color="primary"></v-progress-circular>
    </div>
    <div v-if="searched">
      <Grid :results="results" @onClickFavoriteIcon="deleteFavorite" iconColor="red"/>
    </div>
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
        this.results = results.data
        this.searched = true
        this.searching = false
      })
      .catch(err => console.log(err))
    },
    deleteFavorite: function(gif) {
      this.searching = true
      FavoritesApi.deleteFavorite(gif)
      .then(() => FavoritesApi.fetchFavorites())
      .then(results => {
        this.results = results.data
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
