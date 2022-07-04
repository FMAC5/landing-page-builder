// ADD SECTION //
let addSection = document.getElementById("addSection");
let sectionContainer = document.getElementById("sectionContainer");

addSection.addEventListener("click", () => {
  sectionContainer.classList.toggle("toggle");
});

// CLOSE COLUMN //
let sectionContainerClose = document.getElementById("sectionContainerClose");

sectionContainerClose.addEventListener("click", () => {
  sectionContainer.classList.toggle("toggle");
});

// ADD COLUMN ONE //
let columnOne = document.getElementById("columnOne");

columnOne.addEventListener("click", () => {
  sectionContainer.classList.toggle("toggle");

  let columnOneBoxContainer = document.createElement("div");
  columnOneBoxContainer.classList.add("columnOneBoxContainer");
  moduleCanvas.appendChild(columnOneBoxContainer);

  // COLUMN ONE ELEMENT //
  let columnOneBox = document.createElement("div");
  columnOneBox.classList.add("columnOneBox");
  columnOneBoxContainer.appendChild(columnOneBox);

  // CLOSE BUTTON //
  let columnOneBoxContainerClose = document.createElement("i");
  columnOneBoxContainerClose.innerHTML =
    '<span class="iconify" data-icon="eva:close-circle-fill"></span>';
  columnOneBoxContainerClose.classList.add("columnOneBoxContainerClose");
  columnOneBox.appendChild(columnOneBoxContainerClose);

  // REMOVE COLUMN ONE //
  columnOneBoxContainerClose.addEventListener("click", () => {
    moduleCanvas.removeChild(columnOneBoxContainer);
  });

  // ADD MODULE //
  let module = document.createElement("i");
  module.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
  module.classList.add("module");
  columnOneBoxContainer.appendChild(module);

  module.addEventListener("click", () => {
    let moduleMenu = document.getElementById("moduleMenu");
    moduleMenu.classList.toggle("toggle");
    // MODULE CANVAS //
    let moduleCanvas = document.getElementById("moduleCanvas");
    moduleCanvas.classList.toggle("toggle");
  });
});

let moduleMenuClose = document.getElementById("moduleMenuClose");
moduleMenuClose.addEventListener("click", () => {
  moduleCanvas.classList.toggle("toggle");
  moduleMenu.classList.toggle("toggle");
});

// ADD COLUMN TWO //
let columnTwo = document.getElementById("columnTwo");

columnTwo.addEventListener("click", () => {
  sectionContainer.classList.toggle("toggle");

  let columnTwoBoxContainer = document.createElement("div");
  columnTwoBoxContainer.classList.add("columnTwoBoxContainer");
  moduleCanvas.appendChild(columnTwoBoxContainer);

  // COLUMN TWO(A) ELEMENT //
  let columnTwoABox = document.createElement("div");
  columnTwoABox.classList.add("columnTwoABox");
  columnTwoBoxContainer.appendChild(columnTwoABox);

  // COLUMN TWO(B) ELEMENT //
  let columnTwoBBox = document.createElement("div");
  columnTwoBBox.classList.add("columnTwoBBox");
  columnTwoBoxContainer.appendChild(columnTwoBBox);

  // CLOSE BUTTON //
  let columnTwoBoxContainerClose = document.createElement("i");
  columnTwoBoxContainerClose.innerHTML =
    '<span class="iconify" data-icon="eva:close-circle-fill"></span>';
  columnTwoBoxContainerClose.classList.add("columnTwoBoxContainerClose");
  columnTwoBoxContainer.appendChild(columnTwoBoxContainerClose);

  // REMOVE COLUMN TWO //
  columnTwoBoxContainerClose.addEventListener("click", () => {
    moduleCanvas.removeChild(columnTwoBoxContainer);
  });

  // ADD MODULE TWO(A) & TWO(B) //
  let moduleTwoA = document.createElement("i");
  moduleTwoA.innerHTML =
    '<span class="iconify" data-icon="carbon:add-alt"></span>';
  moduleTwoA.classList.add("moduleTwoA");
  columnTwoABox.appendChild(moduleTwoA);

moduleTwoA.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

    // MODULE CANVAS //
    let moduleCanvas = document.getElementById("moduleCanvas");
    moduleCanvas.classList.toggle("toggle");
});


let moduleTwoB = document.createElement("i");
moduleTwoB.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
moduleTwoB.classList.add("moduleTwoB");
columnTwoBBox.appendChild(moduleTwoB);

moduleTwoB.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

    // MODULE CANVAS //
    let moduleCanvas = document.getElementById("moduleCanvas");
    moduleCanvas.classList.toggle("toggle");
});

});

