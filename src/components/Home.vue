<template>
  <v-container>
    <div class="vp-content">
      <p>
        Traditional hybrid stone-timber structures are part of an ancient
        craftsmanship heritage which is labor-intensive and requires qualified
        workers. Nevertheless, these dry and glue-free construction systems
        using locally available materials have all the qualities defined today
        as sustainable: reuse of mineral waste, low embodied energy, low
        embodied water content, demountable, cement-free; and moreover
        earthquake-resistant. Therefore, the main objective of this research is
        to draw inspiration from this traditional construction method to propose
        ecological and sustainable stone-timber structures that meet the
        requirements of modern buildings. Today’s advanced digital tools are
        leveraged to develop an automated design-production framework to
        generate new designs, reduce labor intensity, and optimize
        cost-effectiveness. Furthermore, developing such a framework is central
        to bridge the historical, theoretical and practical knowledge to foster
        new architectural expressions. New engineering methods are also
        investigated to go beyond the rather empirical knowledge based on
        heuristic rules for traditional constructions and define a clear and
        precise structural design approach.
      </p>
    </div>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="344"
          ><v-img
            src="img/home/gallery.jpg"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores cupiditate rem
          </v-card-text>
        </v-card></v-col
      >
      <v-col>
        <v-card class="mx-auto" max-width="344"
          ><v-img
            src="img/home/gallery.jpg"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores cupiditate rem
          </v-card-text></v-card
        ></v-col
      >
      <v-col>
        <v-card class="mx-auto" max-width="344"
          ><v-img
            src="img/home/rock.jpg"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores
          </v-card-text></v-card
        ></v-col
      >
      <v-col>
        <v-card class="mx-auto" max-width="344"
          ><v-img
            src="img/home/gallery.jpg"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores
          </v-card-text></v-card
        ></v-col
      >
      <info-tooltip> </info-tooltip>
    </v-row>
  </v-container>
</template>

<script>
import InfoTooltip from "./commons/InfoTooltip.vue";
export default {
  name: "Home",

  data: () => ({
    InfoTooltip,
  }),
};
</script>

<style>
.vp-content {
  max-width: 900px;
  /*padding-top: 150px;*/
  padding-bottom: 60px;
  color: black;
  display: block;
  margin: auto;
}

.vp-content p {
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1.7em;
}
</style>
