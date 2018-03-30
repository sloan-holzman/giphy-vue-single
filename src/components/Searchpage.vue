<template>
  <div id="searchpage">
    <Navbar v-model="searchText" @fetchSearchResults="fetchSearchResults" @fetchRandomResult="fetchRandomResult" @fetchTrendingResults="fetchTrendingResults" @goToSettings="goToSettings" @goToFavorites="goToFavorites"/>
    <div v-if="!searched && !settingsScreen && !searching && !favoritesScreen">
      <h1>Giphy Search!</h1>
      <h2>By Sloan Holzman</h2>
    </div>
    <div v-if="searched">
      <h3 className="search-results__explanation">Search results for {{searchText}}<button v-on:click.prevent="clearSearch">[clear]</button></h3>
      <p className="italic">Click on any GIF for full size and details</p>
      <Grid :results="results" @onClickFavoriteIcon="addFavorite"  iconColor="black"/>
    </div>
    <div v-if="searching">
      <br>
      <p>Loading...</p>
      <v-progress-circular indeterminate :size="120" :width="7" color="primary"></v-progress-circular>
    </div>
    <div v-if="settingsScreen">
      <Settings :currentSettings="settings" @changeSettings="changeSettings" @exitSettings="exitSettings"/>
    </div>
    <div v-if="favoritesScreen">
      <Favorites/>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar.vue'
import Grid from './Grid.vue'
import Settings from './Settings.vue'
import Favorites from './Favorites.vue'
import GiphyApi from '../api/GiphyApi.js'
import FavoritesApi from '../api/FavoritesApi.js'


export default {
  name: 'Searchpage',
  components: {
    Navbar, Grid, Settings, Favorites
  },
  data () {
    return {
      searchText: '',
      favoritesScreen: false,
      settingsScreen: false,
      searched: false,
      searching: false,
      results: [],
      settings: {
        limit: '25',
        rating: 'pg'
      }
    }
  },
  methods: {
    fetchSearchResults: function(searchText){
      this.setSearchState(searchText)
      let joinedSearchText = this.searchText.split(" ").join("+")
      GiphyApi.fetchSearchResults(this.settings.limit, this.rating, joinedSearchText)
      .then(this.loadResponse)
      .catch(err => console.log(err))
    },
    fetchTrendingResults: function(){
      this.setSearchState("trending")
      GiphyApi.fetchTrendingResults(this.settings.limit, this.rating)
      .then(this.loadResponse)
      .catch(err => console.log(err))
    },
    fetchRandomResult: function(){
      this.setSearchState("random")
      GiphyApi.fetchRandomResult(this.rating)
      .then(this.loadResponse)
      .catch(err => console.log(err))
    },
    addFavorite: function(gif){
      FavoritesApi.addFavorite(gif)
      .then(() => console.log("success!"))
      .catch(err => console.log(err))
    },
    loadResponse: function(response){
      if (response.status === 200) {
        this.searched = true
        this.searching = false
        if (response.data.data.constructor === Array) {
          this.results = response.data.data.map(item => {return {id: item.id, imgUrl: item.images.downsized.url, title: item.title}})
        } else {
          this.results = [{id: response.data.data.id, imgUrl: response.data.data.images.downsized.url, title: response.data.data.title}]
        }
      }
    },
    setSearchState: function(searchText){
      this.searching = true
      this.settingsScreen = false
      this.favoritesScreen = false
      this.searchText = searchText
    },
    clearSearch: function(){
      this.searchText = ''
      this.searched = false
      this.favoritesScreen = false
      this.results = []
    },
    changeSettings: function(settings) {
      this.settings = settings
      console.log(this.settings)
    },
    goToSettings: function(){
      this.clearSearch()
      this.settingsScreen = true
    },
    exitSettings: function(){
      this.settingsScreen = false
    },
    goToFavorites: function(){
      this.clearSearch()
      this.favoritesScreen = true
    },
    exitFavorites: function(){
      this.favoritesScreen = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#searchpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  text-align: center;
}

h1 {
  margin-top: 3vh;
}

</style>
