let indexNav = document.getElementById("indexNav");

indexNav.onclick = function(event) {
    location.href = "general.html";
    }

// Assignation des valeurs de base
let ingredientA = document.getElementsByName('ingredientA')[0];
let ingredientB = document.getElementsByName('ingredientB')[0];
let ingredientC = document.getElementsByName('ingredientC')[0];
let totalBudget = document.getElementById('totalBudget').value;
let prodButton = document.getElementById('prodButton');

// Fonction qui calcule le nombre maximal de produits qu'on peut fabriquer
function calculateProd() {
  let costA = ingredientA.checked ? parseInt(ingredientA.value) : 0;
  let costB = ingredientB.checked ? parseInt(ingredientB.value) : 0;
  let costC = ingredientC.checked ? parseInt(ingredientC.value) : 0;
  let maxProducts = Math.min(Math.floor(totalBudget / (costA + costB + costC)));
  possibleProd.textContent = maxProducts;
}

prodButton.addEventListener('click', function() {
  totalBudget = document.getElementById('totalBudget').value;
  calculateProd();
});