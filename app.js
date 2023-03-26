// Navbar

let navbarElements = navbar.children;
let tocsNav = document.getElementById("tocsNav");

tocsNav.onclick = function(event) {
  location.href = "tocs3.html";
  }

// Define the base cost of an upgrade

let baseInput = document.getElementById('baseCost').value;
let costStatement = document.getElementById('costStatement')

const changeCost = () => {
  baseInput = parseInt(document.getElementById('baseCost').value);
  costStatement.textContent = `Coût de base ${baseInput} + ${baseInput} par upgrade`
  calculateSpent();
  calculateSelect();
  modal.style.display = "block";
}

defineCost.addEventListener('click', function() {
  changeCost();
});

// Calculate the total cost from 0

let spent = 0;
let triesInput = document.getElementById('tries').value;

const calculateSpent = () => {
  spent = 0;
  for (let i = 1; i <= triesInput; i++) {
    spent += i * baseInput;
  }
  resultLinear.textContent = spent;
}

tries.addEventListener('input', function() {
  triesInput = parseInt(this.value);
  calculateSpent();
});

// Calculate the cost for a chosen selection

let spentSelect = 0;
let startingInput = document.getElementById('startingTry');
let endingInput = document.getElementById('endingTry');
let calculateSelection = document.getElementById('calculateSelection');

const calculateSelect = () => {
  let startingTry = parseInt(startingInput.value);
  let endingTry = parseInt(endingInput.value);
  spentSelect = 0;
  for (let i = 0; i <= endingTry - startingTry; i++) {
    spentSelect += (startingTry + i) * baseInput;
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