<template>
  <div>
    <h1>Section 3</h1>
    <div class="vp-content">
      <p>
        Nobis impedit placeat doloribus dolore repellat eveniet ducimus
        molestiae eius veniam, dignissimos, maiores nemo iste error? Tempore
        aspernatur error distinctio? Nulla, ea!
      </p>
    </div>
    <v-container>
      <v-card class="center card-image" max-width="1500">
        <v-row>
          <v-col>
            <model-stl src="./stl/stone_mesh_course.stl"></model-stl>
          </v-col>
          <v-col>
            <model-stl src="./stl/stone_mesh_refined.stl"></model-stl>
          </v-col>
        </v-row>
      </v-card>
      <div class="vp-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          itaque deserunt nostrum quisquam ipsam soluta repudiandae quia
          dolorem, cum asperiores quasi aliquid modi, accusamus temporibus.
          Cumque provident labore magnam, totam suscipit exercitationem id, quos
          ipsum voluptatum maiores quas? Totam, harum.
        </p>
      </div>
      <v-card class="center" max-width="800">
        <v-row>
          <v-col>
            <v-img
              :src="changeImg2"
              aspect-ratio="1"
              class="grey lighten-2 center"
              width="400"
              height="300"
            ></v-img
          ></v-col>
        </v-row>
        <v-tooltip bottom max-width="512">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-information-outline</v-icon>
          </template>
          <span> Move slidebar to change picture</span>
        </v-tooltip>
        <v-slider
          v-model="slidervalue"
          :max="5"
          v-on="moveSlider"
          step="1"
          :tick-labels="ticksLabels"
          ticks="always"
          tick-size="4"
        ></v-slider>
      </v-card>
    </v-container>

    <!-- <v-row>
          <v-col> <model-stl :src="changeSTL"></model-stl></v-col>
          <v-col>
            <v-img
              :src="changeImg"
              aspect-ratio="1"
              class="grey lighten-2 center"
              max-width="400"
            ></v-img
          ></v-col>
        </v-row>
      </v-container>
      <model-stl src="stl/wall_t2.stl"></model-stl>
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
    </v-card>-->

    <br />
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

    ticksLabels: [
      "1 week",
      "2 weeks",
      "3 weeks",
      "4 weeks",
      "5 weeks",
      "6 weeks",
    ],

    stlFiles: [
      "stl/stone_mesh_course.stl",
      "stl/stone_mesh_refined.stl",
      "stl/wall.stl",
      "stl/wall2.stl",
      "stl/wall3.stl",
    ],
    imageFiles: [
      "img/third_part/stone1.jpg",
      "img/third_part/stone2.jpg",
      "img/third_part/3_sec1.jpg",
      "img/third_part/2_sec1.jpg",
      "img/third_part/4_sec1.jpg",
    ],
    imageFiles2: [
      "img/third_part/wall1.jpg",
      "img/third_part/wall2.jpg",
      "img/third_part/wall3.jpg",
      "img/third_part/wall4.jpg",
      "img/third_part/wall5.jpg",
      "img/third_part/wall6.jpg",
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
    changeImg2() {
      let img = "";
      console.log(img);

      img = this.imageFiles2[this.slidervalue];
      console.log(img);

      return img;
      //this.imgSrc = this.imgFiles[this.slidervalue];
    },
  },
};
</script>

<style>
.card-image {
  text-align: center;
  margin-bottom: 80px;
}
</style>
