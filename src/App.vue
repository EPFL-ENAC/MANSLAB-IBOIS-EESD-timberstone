<template>
  <div>
    <section id="1">
      <my-gallery></my-gallery>
    </section>

    <section id="3">
      <third-section></third-section>
      <v-card class="center" width="600">
        <model-stl src="stl/wall_t2.stl"></model-stl>
      </v-card>

      <br />
      <br />
    </section>
    <v-card max-width="800">
      <v-slider
        v-model="ex1.val"
        :color="ex1.color"
        :label="ex1.label"
        :step="10"
      ></v-slider>

      <v-slider hint="Im a hint" max="200" min="0" color="red"></v-slider>
    </v-card>
  </div>
</template>

<script>
import MyGallery from "./components/MyGallery";
import ThirdSection from "./components/ThirdSection";
import { ModelStl } from "vue-3d-model";

export default {
  name: "App",

  components: {
    MyGallery,
    ThirdSection,
    ModelStl,
  },

  data: () => ({
    //
    ex1: {
      label: "color",
      val: 0,
      color: "orange darken-3",
      background: "green",
    },
  }),
};
</script>

<style>
.center {
  margin: auto;
  width: 60%;
  border: 3px solid #73ad21;
  padding: 10px;
}
</style>
