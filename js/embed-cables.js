window.CABLES = window.CABLES || {};

// Public API under
// window.CABLES.API

SECTION_VAR = 'partId';
OBJ_VAR = 'objId';

function getCurrentCablesSection() {
    const curSec = CABLES.patch.getVar(SECTION_VAR);
    if (curSec)
        return curSec.getValue();
    return null;
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
    console.log('[CABLES.API.checkChangeSection]: Current section: ', sectionId);
    const changed = changeSection(sectionId);
    if (changed)
        moveCanvasToPlaceholder(sectionId);
}

function moveCanvasToPlaceholder(sectionId) {
    let glcanvas = document.getElementById("glcanvas");

    const dest = document.getElementById(`cables-container-${sectionId}`);
    if (!dest) { // can't find placeholder, hide
        glcanvas.display = 'none';
        return;
    }

    // Move canvas
    dest.append(glcanvas);

    glcanvas.display = 'block';
    glcanvas.position = 'relative';

    glcanvas.style.width = `${$(dest).width()}px`;
    glcanvas.style.height = `${$(dest).height()}px`;
}

// INTERNAL
function createAPI() {
    window.CABLES.API = {};
    window.CABLES.API.getCurrentCablesSection = getCurrentCablesSection;
    window.CABLES.API.changeSection = changeSection;
    window.CABLES.API.loadObjInSection = loadObjInSection;
    window.CABLES.API.checkChangeSection = checkChangeSection;
    window.CABLES.API.moveCanvasToPlaceholder = moveCanvasToPlaceholder;
}

function registerCallbacks() {
    let windowEl = $(window);
    let onePageScrollInterval = setInterval( () => {
		if ('pluginOnePageModuleReady' in window.scwEvents) {
			windowEl.scrollEnd(checkChangeSection, 500);
			clearInterval(onePageScrollInterval);
		}
	}, 1000);
}

(function(){

// disable rubberband effect on mobile devices
document.getElementById('glcanvas').addEventListener('touchmove', 
    (e) => { e.preventDefault(); }, false
);

function patchFinishedLoading(patch) {
    // The patch is ready now, all assets have been loaded
    createAPI();
    registerCallbacks();
}

document.addEventListener('CABLES.jsLoaded', function (event) {
    CABLES.patch = new CABLES.Patch({
        patch: CABLES.exportedPatch,
        "prefixAssetPath": "",
        "glCanvasId": "glcanvas",
        "glCanvasResizeToWindow": true,
        // "onPatchLoaded": patchInitialized,
        "onFinishedLoading": patchFinishedLoading,
        // "canvas":{"alpha":true,"premultipliedAlpha":true} // make canvas transparent
    });
});

})(); // Automatically called

