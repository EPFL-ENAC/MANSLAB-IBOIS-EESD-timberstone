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

    <!-- _____Project resume_____-->
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
          <v-card-actions>
            <v-btn color="brown darken-1" text to="/sec1"> GO </v-btn>
          </v-card-actions>
        </v-card></v-col
      >
      <v-col>
        <v-card class="mx-auto" max-width="344"
          ><v-img
            src="img/second_part/part2_1.png"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores cupiditate rem
          </v-card-text>
          <v-card-actions>
            <v-btn color="brown darken-1" text to="/sec2"> GO </v-btn>
          </v-card-actions></v-card
        ></v-col
      >
      <v-col>
        <v-card class="mx-auto" max-width="344"
          ><v-img
            src="img/home/stone.jpg"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores
          </v-card-text>
          <v-card-actions>
            <v-btn color="brown darken-1" text to="/sec3"> GO </v-btn>
          </v-card-actions></v-card
        ></v-col
      >
      <v-col>
        <v-card class="mx-auto" max-width="344" flat
          ><v-img
            src="img/home/mesh.jpg"
            width="220"
            height="220"
            class="center"
          ></v-img>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, fugiat facilis ducimus maiores
          </v-card-text>
          <v-card-actions>
            <v-btn color="brown darken-1" text to="/sec4"> GO </v-btn>
          </v-card-actions></v-card
        ></v-col
      >
      <info-tooltip> </info-tooltip>
    </v-row>
    <!-- _____PIs Project_____-->
    <div class="pi-title"><b>PIs</b></div>
    <div class="pi">
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="344" flat>
            <v-card-title
              ><a href="https://people.epfl.ch/julien.gamerro"
                >Julien Gamerro</a
              >
            </v-card-title>
            <a href="https://www.epfl.ch/labs/ibois/fr/2349-2/">
              <v-img
                src="img/home/IBOIS.jpg"
                width="175"
                height="50"
                class="center"
              ></v-img
            ></a> </v-card
        ></v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344" flat
            ><v-card-title>
              <a href="https://people.epfl.ch/nicole.nay"
                >Nicole Nay</a
              ></v-card-title
            >
            <a href="https://www.epfl.ch/labs/manslab/">
              <v-img
                src="img/home/MANSLAB.jpg"
                width="85"
                height="110"
                class="center"
              ></v-img
            ></a> </v-card
        ></v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344" flat>
            <v-card-title
              ><a href="https://people.epfl.ch/mahmoud.shaqfa"
                >Mahmoud Shaqfa</a
              >
            </v-card-title>
            <a href="https://www.epfl.ch/labs/eesd/">
              <v-img
                src="img/home/EESD.png"
                width="175"
                height="50"
                class="center"
              ></v-img
            ></a> </v-card
        ></v-col>
      </v-row>
    </div>
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
.pi {
  text-align: center;
  margin-top: 30px;
}
.pi-title {
  /*padding-top: 150px;*/
  padding-bottom: 30px;
  color: black;
  display: block;
  margin: auto;
  margin-top: 80px;
  font-size: 30px;
  text-align: center;
}

.pi a:link {
  color: black;
  text-decoration: none;
}
.pi a:hover {
  text-decoration: underline;
}
</style>
