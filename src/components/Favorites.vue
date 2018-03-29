<template>
  <div>
    Favorites
  </div>
</template>

<script>

import FavoritesApi from '../api/FavoritesApi.js'

export default {
  name: 'Favorites',
  props: [],
  data: function() {
    return {
    }
  },
  created: function() {
    this.fetchFavorites();
  },
  methods: {
    fetchFavorites: function() {
      FavoritesApi.fetchFavorites()
      .then(results => console.log(results))
      .catch(err => console.log(err))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
