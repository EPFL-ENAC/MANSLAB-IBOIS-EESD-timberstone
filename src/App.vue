<template>
  <v-app>
    <v-app-bar app dense>
      <div class="logo2">
        <a>
          <img
            src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg?refresh=now"
            alt="Logo EPFL, École polytechnique fédérale de Lausanne"
            class="img-fluid"
          />
        </a>
      </div>
      <v-tabs>
        <v-tab to="/">Home</v-tab>
        <v-tab to="/sec1">Part 1</v-tab>
        <v-tab to="/sec2">Part 2</v-tab>
        <v-tab to="/sec3">Part 3</v-tab>
        <v-tab to="/sec4">Part 4</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
    </v-app-bar>
    <router-view class="app-bar"></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

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
.logo2 {
  margin-right: 10px;
  margin-top: 0px;
}
.img-fluid {
  max-width: 70%;
  height: auto;
}
</style>
