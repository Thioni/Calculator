let indexNav = document.getElementById("indexNav");

indexNav.onclick = function(event) {
    location.href = "index.html";
    }

// Assignation des valeurs de base
let costA = document.getElementById('costA').value;
let costB = document.getElementById('costB').value;
let costC = document.getElementById('costC').value;
let totalBudget = document.getElementById('totalBudget').value;
let prodButton = document.getElementById('prodButton');

// Calcul du nombre maximal de produits que l'on peut fabriquer 
//(chaque produit utilise pour l'instant 1 seule unité de chaque ingrédient)
function calculateProd() {
    let maxProducts = Math.min(Math.floor(totalBudget / (parseInt(costA) + parseInt(costB) + parseInt(costC))));
    console.log(costA)
    console.log(costB)
    console.log(costC)
    console.log(totalBudget)
    console.log(maxProducts)
    possibleProd.textContent = maxProducts
}

prodButton.addEventListener('click', function() {
    costA = document.getElementById('costA').value;
    costB = document.getElementById('costB').value;
    costC = document.getElementById('costC').value;
    totalBudget = document.getElementById('totalBudget').value;
    calculateProd();
  });