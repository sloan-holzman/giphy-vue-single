<template>
  <div id="searchpage">
    <Navbar v-model="searchText" @fetchSearchResults="fetchSearchResults" @fetchRandomResult="fetchRandomResult" @fetchTrendingResults="fetchTrendingResults" @goToSettings="goToSettings"/>
    <div v-if="!searched && !settingsScreen">
      <h1>Giphy Search!</h1>
      <h2>By Sloan Holzman</h2>
    </div>
    <div v-if="searched">
      <h3 className="search-results__explanation">Search results for {{searchText}}<button v-on:click.prevent="clearSearch">[clear]</button></h3>
      <p className="italic">Click on any GIF for full size and details</p>
      <Grid :results="results"/>
    </div>
    <div v-if="settingsScreen">
      <Settings :currentSettings="settings"/>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar.vue'
import Grid from './Grid.vue'
import Settings from './Settings.vue'
import GiphyApi from '../api/GiphyApi.js'


export default {
  name: 'Searchpage',
  components: {
    Navbar, Grid, Settings
  },
  data () {
    return {
      searchText: '',
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
      console.log("search!")
      this.searching = true
      this.settingsScreen = false
      this.searchText = searchText
      let joinedSearchText = this.searchText.split(" ").join("+")
      GiphyApi.fetchSearchResults(this.settings.limit, this.rating, joinedSearchText)
      .then(response => {
        if (response.status === 200) {
          this.searched = true
          this.searching = false
          this.results = response.data.data
        }
        console.log(this.results)
      })
      .catch(err => console.log(err))
    },
    fetchTrendingResults: function(){
      this.searching = true
      this.settingsScreen = false
      this.searchText = "trending"
      GiphyApi.fetchTrendingResults(this.settings.limit, this.rating)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.searched = true
          this.searching = false
          this.results = response.data.data
        }
      })
      .catch(err => console.log(err))
    },
    fetchRandomResult: function(){
      this.searching = true
      this.settingsScreen = false
      this.searchText = "random"
      GiphyApi.fetchRandomResult(this.rating)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.searched = true
          this.searching = false
          this.results = [response.data.data]
        }
      })
      .catch(err => console.log(err))
    },
    clearSearch: function(){
      this.searchText = ''
      this.searched = false
      this.results = []
    },
    goToSettings: function(){
      this.clearSearch()
      this.settingsScreen = true
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

</style>
