let spent = 0;
let tries = document.getElementById('tries').value;
let triesInput = document.getElementById('tries');

// Calculate the total cost from 0

function calculateSpent() {
  spent = 0;
  for (let i = 1; i <= tries; i++) {
    spent += i * 100;
  }
  result.textContent = spent;
}

triesInput.addEventListener('input', function() {
  tries = this.value;
  calculateSpent();
});

// Calculate the cost for a chosen selection

let spentSelect = 0;
let startingInput = document.getElementById('startingTry');
let endingInput = document.getElementById('endingTry');
let calculateSelection = document.getElementById('calculateSelection');

function calculateSelect() {
  let startingTry = parseInt(startingInput.value);
  let endingTry = parseInt(endingInput.value);
  spentSelect = 0;
  for (let i = 0; i <= endingTry - startingTry; i++) {
    spentSelect += (startingTry + i) * 100;
  }
  resultSelect.textContent = spentSelect;
}

calculateSelection.addEventListener('click', function() {
  calculateSelect();
});

calculateSpent();