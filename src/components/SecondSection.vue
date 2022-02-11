<template>
  <div>
    <v-container>
      <v-card flat>
        <v-row>
          <v-col>
            <iframe
              src="http://localhost:1234/examples/timberstone.html"
              width="80%"
              height="600"
            >
            </iframe>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col v-for="n in 2" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`img/second_part/part2_${n}.png`"
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

      <div>
        <video width="640" height="480" controls class="center">
          <source src="../../public/video/exemple.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SecondSection",
};
</script>
