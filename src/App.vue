<template>
  <v-app>
    <v-app-bar app dense>
      <v-app-bar-title>
        <div>Timberstone</div>
      </v-app-bar-title>
      <v-tabs color="#b45f06">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/sec1">Part 1</v-tab>
        <v-tab to="/sec2">Part 2</v-tab>
        <v-tab to="/sec3">Part 3</v-tab>
        <v-tab>Part 4</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
    </v-app-bar>
    <router-view class="app-bar"></router-view>
    <!--<v-card class="center" width="600">
      <model-stl src="stl/wall_t2.stl"></model-stl>
    </v-card>-->
  </v-app>
</template>

<script>
// import MyGallery from "./components/MyGallery";
// import ThirdSection from "./components/ThirdSection";
// import { ModelStl } from "vue-3d-model";

export default {
  name: "App",

  components: {
    // MyGallery,
    // ThirdSection,
    // ModelStl,
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
}

.app-bar {
  margin-top: 70px;
}
.v-app-bar-title div {
  margin-right: 10px;
}
</style>
