<template>
  <v-container>
    <h1></h1>
    <div>
      <v-row>
        <v-col v-for="n in 24" :key="n" class="d-flex child-flex" cols="2">
          <v-img
            :src="`img/${n}_sec1.jpg`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MyGallery",

  data: () => ({
    path: "static/models/img",
  }),
};
</script>
