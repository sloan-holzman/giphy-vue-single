<template>
  <v-layout column class="align-items-center">
    <v-flex xs12 sm6 offset-sm3 class="no-margin-left width-95">
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${result.flex}`]: true }"
              v-for="result in results"
              :key="result.id"
            >
              <v-card>
                <v-card-media
                  :src="result.images.downsized.url"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="result.title"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {
    name: 'Grid',
    props: ['results']
  }
  
</script>

<style>

  .no-margin-left {
    margin-left: 0 !important;
  }

  .width-95 {
    width: 95%;
  }

  .align-items-center {
    align-items: center;
  }

</style>
