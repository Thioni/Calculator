// Navbar

let navbarElements = navbar.children;
let tocsNav = document.getElementById("tocsNav");

tocsNav.onclick = function(event) {
  location.href = "tocs3.html";
  }

// Define the base cost of an upgrade

let baseInput = document.getElementById('baseCost');
let costStatement = document.getElementById('costStatement')

const changeCost = () => {
  let base = parseInt(baseInput.value);
  if (!/^[0-9]+$/.test(base)) {
    alert("Vous devez renseigner des caratères numériques");
    return;
  }
  costStatement.textContent = `Le coût augmente de ${base} par upgrade`
  calculateSpent();
  calculateSelect();
  modal.style.display = "block";
}

defineCost.addEventListener('click', function() {
  changeCost();
});

// Calculate the total cost from 0

let spent = 0;
let triesInput = document.getElementById('tries');
let calculateTotal = document.getElementById('calculateTotal');

const calculateSpent = () => {
  if (!/^[0-9]+$/.test(triesInput.value)) {
    alert("Vous devez renseigner des caratères numériques");
    return;
  }
  let tries = parseInt(triesInput.value);
  let base = parseInt(baseInput.value);
  spent = 0;
  for (let i = 1; i <= tries; i++) {
    spent += i * base;
  }
  resultLinear.textContent = spent;
}

calculateTotal.addEventListener('click', function() {
  calculateSpent();
});

// Calculate the cost for a chosen selection

let spentSelect = 0;
let startingInput = document.getElementById('startingTry');
let endingInput = document.getElementById('endingTry');
let calculateSelection = document.getElementById('calculateSelection');

const calculateSelect = () => {
  if (!/^[0-9]+$/.test(startingInput.value) || !/^[0-9]+$/.test(endingInput.value)) {
    alert("Vous devez renseigner des caratères numériques");
    return;
  }
  let base = parseInt(baseInput.value);
  let startingTry = parseInt(startingInput.value);
  let endingTry = parseInt(endingInput.value);
  spentSelect = 0;
  for (let i = 0; i <= endingTry - startingTry; i++) {
    spentSelect += (startingTry + i) * base;
  }
  resultSelect.textContent = spentSelect;
}

calculateSelection.addEventListener('click', function() {
  calculateSelect();
});

// Modal

let modal = document.getElementById("costModal");

window.onclick = function(event) {
  if (event.target == modal || event.target.tagName.toLowerCase() == "input" ) {
    modal.style.display = "none";
  }
}