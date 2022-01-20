<template>
  <v-container>
    <h1></h1>
    <div>
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
    </div>

    <div>
      <video width="640" height="480" controls>
        <source src="../../public/video/exemple.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "SecondSection",
};
</script>
