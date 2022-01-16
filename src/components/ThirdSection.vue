<template>
  <div>
    <h1>Section 3</h1>

    <model-stl src="stl/wall.stl"></model-stl>
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
