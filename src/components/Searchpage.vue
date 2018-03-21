<template>
  <div>
    <Navbar v-model="searchText" @fetchSearchResults="fetchSearchResults" @fetchRandomResult="fetchRandomResult" @fetchTrendingResults="fetchTrendingResults"></Navbar>
    <div v-if="!searched">
      <h1>Giphy Search!</h1>
      <h2>By Sloan Holzman</h2>
    </div>
    <div v-if="searched">
      <h3 className="search-results__explanation">Search results for {{searchText}}<button v-on:click.prevent="clearSearch">[clear]</button></h3>
      <p className="italic">Click on any GIF for full size and details</p>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar.vue'
import GiphyApi from '../api/GiphyApi.js'


export default {
  name: 'Searchpage',
  components: {
    Navbar
  },
  data () {
    return {
      searchText: '',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
