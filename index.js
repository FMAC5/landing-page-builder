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
})

let heading = document.getElementById('heading');
heading.addEventListener('click', ()=> {
  console.log('test')
  let headingElement = document.createElement('h1');
  headingElement.textContent = 'Hello';
  columnOneBox.appendChild(headingElement);
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

// ADD COLUMN THREE //
let columnThree = document.getElementById("columnThree");

columnThree.addEventListener("click", () => {
  sectionContainer.classList.toggle("toggle");

  let columnThreeBoxContainer = document.createElement("div");
  columnThreeBoxContainer.classList.add("columnThreeBoxContainer");
  moduleCanvas.appendChild(columnThreeBoxContainer);

// COLUMN THREE (A) ELEMENT //
let columnThreeABox = document.createElement("div");
columnThreeABox.classList.add("columnThreeABox");
columnThreeBoxContainer.appendChild(columnThreeABox);

// COLUMN THREE (B) ELEMENT //
let columnThreeBBox = document.createElement("div");
columnThreeBBox.classList.add("columnThreeBBox");
columnThreeBoxContainer.appendChild(columnThreeBBox);

// COLUMN THREE (C) ELEMENT //
let columnThreeCBox = document.createElement("div");
columnThreeCBox.classList.add("columnThreeCBox");
columnThreeBoxContainer.appendChild(columnThreeCBox);

// CLOSE BUTTON //
let columnThreeBoxContainerClose = document.createElement("i");
columnThreeBoxContainerClose.innerHTML =
  '<span class="iconify" data-icon="eva:close-circle-fill"></span>';
columnThreeBoxContainerClose.classList.add("columnTwoBoxContainerClose");
columnThreeBoxContainer.appendChild(columnThreeBoxContainerClose);

// REMOVE COLUMN THREE  //
columnThreeBoxContainerClose.addEventListener("click", () => {
  moduleCanvas.removeChild(columnThreeBoxContainer);
});

 // ADD MODULE THREE (A) & THREE (B) & THREE (C) //
 let moduleThreeA = document.createElement("i");
 moduleThreeA.innerHTML =
   '<span class="iconify" data-icon="carbon:add-alt"></span>';
  moduleThreeA.classList.add("moduleThreeA");
 columnThreeABox.appendChild(moduleThreeA);

moduleThreeA.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

// MODULE CANVAS //
let moduleCanvas = document.getElementById("moduleCanvas");
moduleCanvas.classList.toggle("toggle");
});

let moduleThreeB = document.createElement("i");
moduleThreeB.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
moduleThreeB.classList.add("moduleTwoB");
columnThreeBBox.appendChild(moduleThreeB);

moduleThreeB.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

// MODULE CANVAS //
let moduleCanvas = document.getElementById("moduleCanvas");
moduleCanvas.classList.toggle("toggle");
});

let moduleThreeC = document.createElement("i");
moduleThreeC.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
moduleThreeC.classList.add("moduleTwoB");
columnThreeCBox.appendChild(moduleThreeC);

moduleThreeC.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

// MODULE CANVAS //
let moduleCanvas = document.getElementById("moduleCanvas");
moduleCanvas.classList.toggle("toggle");
});

});


// ADD COLUMN FOUR //
let columnFour = document.getElementById("columnFour");

columnFour.addEventListener("click", () => {
sectionContainer.classList.toggle("toggle");

let columnFourBoxContainer = document.createElement("div");
columnFourBoxContainer.classList.add("columnFourBoxContainer");
moduleCanvas.appendChild(columnFourBoxContainer);

// COLUMN THREE (A) ELEMENT //
let columnFourABox = document.createElement("div");
columnFourABox.classList.add("columnFourABox");
columnFourBoxContainer.appendChild(columnFourABox);

// COLUMN THREE (B) ELEMENT //
let columnFourBBox = document.createElement("div");
columnFourBBox.classList.add("columnFourBBox");
columnFourBoxContainer.appendChild(columnFourBBox);

// COLUMN THREE (C) ELEMENT //
let columnFourCBox = document.createElement("div");
columnFourCBox.classList.add("columnFourCBox");
columnFourBoxContainer.appendChild(columnFourCBox);

// COLUMN THREE (D) ELEMENT //
let columnFourDBox = document.createElement("div");
columnFourDBox.classList.add("columnFourDBox");
columnFourBoxContainer.appendChild(columnFourDBox);

// CLOSE BUTTON //
let columnFourBoxContainerClose = document.createElement("i");
columnFourBoxContainerClose.innerHTML =
  '<span class="iconify" data-icon="eva:close-circle-fill"></span>';
  columnFourBoxContainerClose.classList.add("columnFourBoxContainerClose");
columnFourBoxContainer.appendChild(columnFourBoxContainerClose);

// REMOVE COLUMN FOUR  //
columnFourBoxContainerClose.addEventListener("click", () => {
  moduleCanvas.removeChild(columnFourBoxContainer);
});

// 

 // ADD MODULE THREE (A) & THREE (B) & THREE (C) //
 let moduleFourA = document.createElement("i");
 moduleFourA.innerHTML =
   '<span class="iconify" data-icon="carbon:add-alt"></span>';
  moduleFourA.classList.add("moduleFourA");
 columnFourABox.appendChild(moduleFourA);

 moduleFourA.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

// MODULE CANVAS //
let moduleCanvas = document.getElementById("moduleCanvas");
moduleCanvas.classList.toggle("toggle");
});

  let moduleFourB = document.createElement("i");
  moduleFourB.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
  moduleFourB.classList.add("moduleFourB");
  columnFourBBox.appendChild(moduleFourB);

  moduleFourB.addEventListener("click", () => {
  let moduleMenu = document.getElementById("moduleMenu");
  moduleMenu.classList.toggle("toggle");

  // MODULE CANVAS //
  let moduleCanvas = document.getElementById("moduleCanvas");
  moduleCanvas.classList.toggle("toggle");
  });

let moduleFourC = document.createElement("i");
moduleFourC.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
moduleFourC.classList.add("moduleFourC");
columnFourCBox.appendChild(moduleFourC);

moduleFourC.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

// MODULE CANVAS //
let moduleCanvas = document.getElementById("moduleCanvas");
moduleCanvas.classList.toggle("toggle");
});

let moduleFourD = document.createElement("i");
moduleFourD.innerHTML = '<span class="iconify" data-icon="carbon:add-alt"></span>';
moduleFourD.classList.add("moduleFourD");
columnFourDBox.appendChild(moduleFourD);

moduleFourD.addEventListener("click", () => {
let moduleMenu = document.getElementById("moduleMenu");
moduleMenu.classList.toggle("toggle");

// MODULE CANVAS //
let moduleCanvas = document.getElementById("moduleCanvas");
moduleCanvas.classList.toggle("toggle");
});
});

