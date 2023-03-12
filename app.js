// Calculate the total cost from 0

let spent = 0;
let triesInput = document.getElementById('tries').value;

function calculateSpent() {
  spent = 0;
  for (let i = 1; i <= triesInput; i++) {
    spent += i * 100;
  }
  result.textContent = spent;
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