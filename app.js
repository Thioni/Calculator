let spent = 0;
let tries = document.getElementById('tries').value;
let triesInput = document.getElementById('tries');

function recalculateSpent() {
  spent = 0;
  for (let i = 1; i <= tries; i++) {
    spent += i * 100;
  }
  result.textContent = spent;
}

triesInput.addEventListener('input', function() {
  tries = this.value;
  recalculateSpent();
});

recalculateSpent();