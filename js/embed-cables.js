window.CABLES = window.CABLES || {};

// Public API under
// window.CABLES.API

SECTION_VAR = "partId";
OBJ_VAR = "objId";
SHOW_SIDEBAR = "showSidebar";
SLIDER_VALUE = "sliderConstructionValue";

/*Reset the object displayed to num 1
Otherwise when the user switch the object displayed in a section,
ther is an error when we change section, Cable keep the last value and try to display
an object who doesn't exist in the section*/
function resetObjecValue(){
  const curObj = CABLES.patch.getVar(OBJ_VAR);
  curObj.setValue(1);
  let slider = document.getElementById("mySlider");
  slider.style.display = "block";

  document.getElementById("Layer1").disabled = true;
  document.getElementById("BuildWall").disabled = true;
  document.getElementById("Stones").disabled = false;
  lastSelectedButton['4'] = document.getElementById("Layer1");
  lastSelectedButton['5'] = document.getElementById("BuildWall");
  for (let i = 2; i < 8; i++) {
    document.getElementById("Layer"+i).disabled = false;
  }
}

//to replace the Cables Slider. Ti use the HTML Slider
function moveSlider(num){
  const slider = CABLES.patch.getVar(SLIDER_VALUE);
  slider.setValue(num);
}

function getCurrentCablesSection() {
  const curSec = CABLES.patch.getVar(SECTION_VAR);
  if (curSec) return curSec.getValue();
  return null;
}

function showCablesSidebar(show) {
  const sidebar = CABLES.patch.getVar(SHOW_SIDEBAR);
  if (sidebar) return sidebar.setValue(show);
  return null;
}

function getCablesSidebar() {
  let sidebar = document.getElementsByClassName("sidebar-cables");
  if (!sidebar) {
    return null;
  }
  // Only 1 sidebar
  return sidebar[0];
}

function hideCablesSidebar() {
  let sidebar = getCablesSidebar();
  if (sidebar) {
    sidebar.style.display = "none";
  }
}

function changeSection(sectionId) {
  const curSec = CABLES.patch.getVar(SECTION_VAR);
  if (!curSec) return null;

  const id = curSec.getValue();
  if (sectionId !== id) {
    curSec.setValue(sectionId);
    return true;
  }
  return false;
}

function loadObjInSection(sectionId, objId) {
  changeSection(sectionId);

  const curObj = CABLES.patch.getVar(OBJ_VAR);
  if (!curObj) return null;

  const id = curObj.getValue();
  if (objId !== id) {
    curObj.setValue(objId);
  }
  return objId;
}

function checkChangeSection() {
  const numberPattern = /\d+/g;
  const currentSection = window.SEMICOLON_onePageCurrentSection();
  if (!currentSection) return;

  const sectionIds = currentSection.match(numberPattern);
  if (!sectionIds) return; // if section does not contain a number;

  const sectionId = parseInt(sectionIds[0]);
  console.log("[CABLES.API.checkChangeSection]: Current section: ", sectionId);
  const changed = changeSection(sectionId);
  if (changed) moveCanvasToPlaceholder(sectionId);
}

function moveCanvasToPlaceholder(sectionId) {
  let glcanvas = document.getElementById("glcanvas");
  let img3d = document.getElementById(`img-3d-p${sectionId}`);
  let sidebar = getCablesSidebar();

  const dest = document.getElementById(`cables-container-${sectionId}`);
  if (!dest) {
    // can't find placeholder, hide
    glcanvas.display = "none";
    showCablesSidebar(false);
    img3d.style.display = "block";
    return;
  }
  resetObjecValue();
  const curObj = CABLES.patch.getVar(OBJ_VAR);
  console.log("______OBJVALUE__________");
  console.log(curObj.getValue());

  glcanvas.display = "block";
  glcanvas.position = "relative";

  glcanvas.style.width = `${$(dest).width()}px`;
  glcanvas.style.height = `${$(dest).height()}px`;

  // Move canvas
  img3d.style.display = "none";
  dest.append(glcanvas, sidebar);
  showCablesSidebar(false);
}

// INTERNAL
function createAPI() {
  window.CABLES.API = {};
  window.CABLES.API.getCurrentCablesSection = getCurrentCablesSection;
  window.CABLES.API.changeSection = changeSection;
  window.CABLES.API.loadObjInSection = loadObjInSection;
  window.CABLES.API.checkChangeSection = checkChangeSection;
  window.CABLES.API.moveCanvasToPlaceholder = moveCanvasToPlaceholder;
  window.CABLES.API.moveSlider = moveSlider;
}

(function () {
  // disable rubberband effect on mobile devices
  document.getElementById("glcanvas").addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
    },
    false
  );

  function patchFinishedLoading(patch) {
    createAPI();

    // we register the callback (window.CABLES.API.checkChangeSection)
    // in the plugins.onepage.js directly instead of here
    // mainly: to avoid concurent calls
    // ---> the consequence was that we lost the onepage plugin behavior for the nav-bar
  }

  document.addEventListener("CABLES.jsLoaded", function (event) {
    CABLES.patch = new CABLES.Patch({
      patch: CABLES.exportedPatch,
      prefixAssetPath: "",
      glCanvasId: "glcanvas",
      glCanvasResizeToWindow: false,
      onFinishedLoading: patchFinishedLoading,
      // "canvas":{"alpha":true,"premultipliedAlpha":true} // make canvas transparent
    });
  });
})(); // Automatically called
