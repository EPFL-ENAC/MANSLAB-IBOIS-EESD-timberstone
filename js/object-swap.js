$(document).ready(function () {
    $(".range_02").ionRangeSlider({
      min: 1,
      max: 26,
      from: 1,
    });
  });

  let slider = document.getElementById("myRange");

  slider.oninput = function () {
    // output.innerHTML = this.value;
    window.CABLES.API.moveSlider(this.value);
  };

  let lastSelectedButton = {
    '4': document.getElementById("Layer1"),
    '5': document.getElementById("BuildWall"),
  };
  function handleButton(sectionId, buttonId) {
    // sectionId: string -> corresponding to lastSelectedButton key
    // buttonId: string -> corresponding to button dom ID

    
    lastSelectedButton[sectionId].disabled = false;
    let selectedButton = document.getElementById(buttonId);
    selectedButton.disabled = true;
    lastSelectedButton[sectionId] = selectedButton;
  }

  function changeObjSection5(sectionId, objId, buttonId) {
    changeObj(sectionId, objId, buttonId)
    hideSliderSection5(objId);
  }

  function changeObj(sectionId, objId, buttonId) {
    handleButton(sectionId.toString(), buttonId);
    window.CABLES.API.loadObjInSection(sectionId, objId);
  }

  function hideSliderSection5(objId) {
    //If we are on section 5 we display the slider only for the object one
    let slider = document.getElementById("mySlider");
    if (objId !== 1) {
      slider.style.display = "none";
    } else {
      slider.style.display = "block";
    }
  }
