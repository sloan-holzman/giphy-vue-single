<template>
  <v-toolbar dark color="primary">
    <v-text-field prepend-icon="search" hide-details single-line placeholder="search for GIFs"></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat v-on:click.prevent="fetchRandomResult">Random</v-btn>
    <v-btn flat>Trending</v-btn>
  </v-toolbar-items>
  <v-menu :nudge-width="100" class="hidden-md-and-up">
    <v-toolbar-title slot="activator">
      <v-toolbar-side-icon/>
    </v-toolbar-title>
    <v-list>
      <v-list-tile>Random</v-list-tile>
      <v-list-tile>Trending</v-list-tile>
    </v-list>
  </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Test'
    }
  },
  methods: {
    fetchRandomResult: function(){
      console.log("random!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
