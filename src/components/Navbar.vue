<template>
  <v-toolbar dark color="primary">
    <form v-on:submit.prevent="$emit('fetchSearchResults', searchText)">
      <v-text-field prepend-icon="search" hide-details single-line placeholder="search for GIFs" v-model="searchText"/>
    </form>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat v-on:click.prevent="$emit('fetchRandomResult')">Random</v-btn>
    <v-btn flat v-on:click.prevent="$emit('fetchTrendingResults')">Trending</v-btn>
    <v-btn flat v-on:click.prevent="$emit('goToSettings')">Settings</v-btn>
  </v-toolbar-items>
  <v-menu :nudge-width="100" class="hidden-md-and-up">
    <v-toolbar-title slot="activator">
      <v-toolbar-side-icon/>
    </v-toolbar-title>
    <v-list>
      <v-list-tile v-on:click.prevent="$emit('fetchRandomResult')">Random</v-list-tile>
      <v-list-tile v-on:click.prevent="$emit('fetchTrendingResults')">Trending</v-list-tile>
    </v-list>
  </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      searchText: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
