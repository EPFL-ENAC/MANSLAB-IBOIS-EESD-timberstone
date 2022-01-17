<template>
  <div>
    <h1>Section 3</h1>

    <model-stl src="stl/wall_t2.stl"></model-stl>

    <v-card max-width="800">
      <v-slider></v-slider>

      <v-slider hint="Im a hint" max="200" min="0" color="red"></v-slider>
    </v-card>
  </div>
</template>

<script>
import { ModelStl } from "vue-3d-model";
export default {
  name: "ThirdSection",

  data: () => ({
    components: {
      ModelStl,
    },
  }),
};
</script>
