<template>
  <div>
    <div id="canvas"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "wireframe",
  data: function () {
    return {
      show: this.tabs,
      scene: null,
      renderer: null,
      camera: null,
      controls: null,
      points: [],
      lightHolder: null,
      height: 0,
      object: null,
      nozzle: null,
      raycaster: null,
      mouse: null,
      gcode: "",
    };
  },
  methods: {
    init() {
      var self = this;
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x000000);
      //this.scene.fog = new THREE.FogExp2(0xcccccc, 0.002);
      var container = document.getElementById("canvas");

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      //this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setSize(1500, 700);
      container.appendChild(this.renderer.domElement);

      this.camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      this.camera.position.set(50, 0, 0);

      // controls

      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.listenToKeyEvents(window); // optional

      //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

      this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
      this.controls.dampingFactor = 0.05;

      this.controls.screenSpacePanning = false;

      this.controls.minDistance = 0;
      this.controls.maxDistance = 500;

      this.controls.maxPolarAngle = Math.PI / 2;

      //var mesh = null;
      //WIREFRAME
      var loader = new STLLoader();
      loader.load("./stl/stone_mesh_refined.stl", function (geometry) {
        geometry.scale(50, 50, 50);
        //var material = new THREE.MeshPhongMaterial();

        // mesh.scale = new THREE.Vector3(5, 5, 5);
        //mesh.scale.set(5, 5, 5);

        //mesh.position.set(60, 60, 0);
        //self.scene.add(new THREE.Mesh(geometry));

        const wireframe = new THREE.WireframeGeometry(geometry);

        const line = new THREE.LineSegments(wireframe);

        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = true;

        self.scene.add(line);
      });

      // var loader2 = new STLLoader();
      // loader2.load("./stl/stone_mesh_refined.stl", function (geometry) {
      //   var material = new THREE.MeshPhongMaterial({
      //     color: 0xbcbcff,
      //     specular: 0x111111,
      //     shininess: 200,
      //   });
      //   geometry.scale(50, 50, 50);
      //   //var material = new THREE.MeshPhongMaterial();
      //   mesh = new THREE.Mesh(geometry, material);
      //   // mesh.scale = new THREE.Vector3(5, 5, 5);
      //   //mesh.scale.set(5, 5, 5);

      //   //mesh.position.set(60, 60, 0);
      //   mesh.position.set(1, 1, 0);
      //   //self.scene.add(mesh);
      //   //self.scene.add(new THREE.Mesh(geometry));

      //   const wireframe = new THREE.WireframeGeometry(geometry);

      //   const line = new THREE.LineSegments(wireframe);
      //   //wireframe.position.set(3, 1, 0);

      //   line.material.depthTest = false;
      //   line.material.opacity = 0.5;
      //   line.material.transparent = true;

      //   self.scene.add(line);
      // });

      // lights

      // const light = new THREE.PointLight(0xffffff, 1);
      // light.position.set(0, 600, 1000);
      // this.scene.add(light);
      const light2 = new THREE.PointLight(0xffff00, 0.5);
      light2.position.set(1000, 200, 0);
      this.scene.add(light2);
      // const light3 = new THREE.PointLight(0xffffff, 1);
      // light3.position.set(0, 200, -1000);
      // this.scene.add(light3);
      // const light4 = new THREE.PointLight(0xffffff, 1);
      // light4.position.set(-1000, 600, 1000);
      // this.scene.add(light4);

      var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(ambientLight);

      //

      //window.addEventListener("resize", onWindowResize);
    },

    animate() {
      this.controls.update();
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    this.animate();
    //window.addEventListener("mousedown", this.onMouseDown, false);
  },
};
</script>
