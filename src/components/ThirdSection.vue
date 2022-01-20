<template>
  <div>
    <h1>Section 3</h1>
    <v-card class="center" max-width="1000">
      <!--<model-stl src="stl/wall_t2.stl"></model-stl>-->
      <model-stl :src="changeSTL"></model-stl>
      <v-tooltip bottom max-width="512">
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
        </template>
        <span> Move slidebar to change model and picture</span>
      </v-tooltip>
      <v-slider
        v-model="slidervalue"
        :max="4"
        v-on="moveSlider"
        step="1"
      ></v-slider>
      <v-img
        :src="changeImg"
        aspect-ratio="1"
        class="grey lighten-2 center"
        max-width="400"
      ></v-img>
    </v-card>
    {{ slidervalue }}
    <br />
    {{ changeStl }}
  </div>
</template>

<script>
import { ModelStl } from "vue-3d-model";
export default {
  name: "ThirdSection",
  components: {
    ModelStl,
  },

  data: () => ({
    slidervalue: 0,
    // stlSrc: "stl/wall_t2.stl",
    // imgSrc: "",

    stlFiles: [
      "stl/stone_mesh_course.stl",
      "stl/stone_mesh_refined.stl",
      "stl/wall.stl",
      "stl/wall2.stl",
      "stl/wall3.stl",
    ],
    imageFiles: [
      "img/third_part/1_sec1.jpg",
      "img/third_part/2_sec1.jpg",
      "img/third_part/3_sec1.jpg",
    ],
  }),

  computed: {
    changeSTL() {
      let stl = "";

      stl = this.stlFiles[this.slidervalue];

      return stl;
      //this.imgSrc = this.imgFiles[this.slidervalue];
    },
    changeImg() {
      let img = "";

      img = this.imageFiles[this.slidervalue];

      return img;
      //this.imgSrc = this.imgFiles[this.slidervalue];
    },
  },

  methods: () => ({
    moveSlider2() {},
  }),
};
</script>
