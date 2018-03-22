<template>
  <v-container fluid>
    <h2>Giphy Search Settings</h2>
    <br>
    <v-layout row wrap>
      <v-flex xs6>
        <v-subheader>Results per search</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          :items="limits"
          v-model="settings.limit"
          label="Select"
          single-line
        ></v-select>
      </v-flex>
      <v-flex xs6>
        <v-subheader>Rating</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-select
          :items="ratings"
          v-model="settings.rating"
          label="Select"
          single-line
        ></v-select>
      </v-flex>
      <v-btn flat v-on:click.prevent="$emit('fetchRandomResult')">Submit</v-btn>
      <!-- <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Settings',
  props: ['currentSettings'],
  data: function() {
    return {
      settings: this.currentSettings,
      limits: ['5', '10', '25', '50'],
      ratings: [
        {text: 'Y', value: 'y'},
        {text: 'G', value: 'g'},
        {text: 'PG', value: 'pg'},
        {text: 'PG-13', value: 'pg-13'},
        {text: 'R', value: 'r'}
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
