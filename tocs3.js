let indexNav = document.getElementById("indexNav");

indexNav.onclick = function(event) {
    location.href = "general.html";
    }

// Assignation des valeurs de base

let ingredientA = document.querySelector('#ingredientA');
let ingredientB = document.querySelector('#ingredientB');
let ingredientC = document.querySelector('#ingredientC');
let ingredientD = document.querySelector('#ingredientD');
let ingredientE = document.querySelector('#ingredientE');
let ingredientF = document.querySelector('#ingredientF');
let ingredientG = document.querySelector('#ingredientG');
let ingredientH = document.querySelector('#ingredientH');
let ingredientI = document.querySelector('#ingredientI');
let ingredientJ = document.querySelector('#ingredientJ');
let ingredientK = document.querySelector('#ingredientK');
let ingredientL = document.querySelector('#ingredientL');
let ingredientM = document.querySelector('#ingredientM');
let ingredientN = document.querySelector('#ingredientN');
let ingredientO = document.querySelector('#ingredientO');
let ingredientP = document.querySelector('#ingredientP');
let ingredientQ = document.querySelector('#ingredientQ');

const ingredients = {
  freshEgg: 40,
  freshMilk: 40,
  matureCheese: 40,
  freshHerb: 40,
  crispOnion: 40,
  flakyPotato: 40,
  starberry: 80,
  acerbicTomato: 200,
  honeySyrup: 20,
  coarseRockSalt: 20,
  assortedGrains: 100,
  healthyLiquor: 100,
  // Note pour moi même:
  // Les ingrédients suivant ne peuvent être achetés, ce sont tous des drops
  // Sachant que c'est un jeu vieux de 6 ans qui ne risque pas d'être patché
  // A voir si il y a interet à garder ces variables...
  beastFlesh: 0,
  chitinousShell: 0,
  clearGelatin: 0,
  globbyFat: 0,
  heartyPowder: 0
};

let totalBudget = document.getElementById('totalBudget').value;
let prodButton = document.getElementById('prodButton');

// Fonction qui calcule le nombre maximal de produits qu'on peut fabriquer

const calculateProd = () => {
  let costA = ingredientA.checked ? ingredients.freshEgg : 0;
  let costB = ingredientB.checked ? ingredients.freshMilk : 0;
  let costC = ingredientC.checked ? ingredients.matureCheese : 0;
  let costD = ingredientD.checked ? ingredients.freshHerb : 0;
  let costE = ingredientE.checked ? ingredients.crispOnion : 0;
  let costF = ingredientF.checked ? ingredients.flakyPotato : 0;
  let costG = ingredientG.checked ? ingredients.starberry : 0;
  let costH = ingredientH.checked ? ingredients.acerbicTomato : 0;
  let costI = ingredientI.checked ? ingredients.honeySyrup : 0;
  let costJ = ingredientJ.checked ? ingredients.coarseRockSalt : 0;
  let costK = ingredientK.checked ? ingredients.assortedGrains : 0;
  let costL = ingredientL.checked ? ingredients.healthyLiquor : 0;
  // Même remarque que plus haut
  let costM = 0;
  let costN = 0;
  let costO = 0;
  let costP = 0;
  let costQ = 0;
  let maxProducts = Math.min(Math.floor(totalBudget / 
  (costA + costB + costC + costD + costE + costF 
    + costG + costH + costI + costJ + costK + costL 
    + costM + costN + costO + costP + costQ)));
  possibleProd.textContent = maxProducts;
}

prodButton.addEventListener('click', function() {
  totalBudget = document.getElementById('totalBudget').value;
  calculateProd();
});

// Menu déroulant pour choisir directement une recette

const recipeCosts = {
  recipe1: ingredients.matureCheese+ingredients.flakyPotato+ingredients.coarseRockSalt,
  recipe2: 1,
  recipe3: 1,
  recipe4: 1,
  recipe5: 1,
  recipe6: 1,
  recipe7: 1,
  recipe8: 1,
  recipe9: 1,
  recipe10: 1,
  recipe11: 1,
  recipe12: 1,
  recipe13: 1,
  recipe14: 1,
  recipe15: 1,
  recipe16: 1,
  recipe17: 1,
  recipe18: 1,
  recipe19: 1,
  recipe20: 1,
  recipe21: 1,
  recipe22: 1
};

let recipeSelect = document.getElementById('recipeSelect');
let unitsInput = document.getElementById('units');
let recipeButton = document.getElementById('recipeButton');
let totalCost = document.getElementById('totalCost');

const calculateCost = () => {
  let recipe = recipeSelect.value;
  let cost = recipeCosts[recipe];
  let units = parseInt(unitsInput.value);
  let productionCost = cost * units;
  totalCost.textContent = productionCost;
}

recipeButton.addEventListener('click', function() {
  calculateCost();
});