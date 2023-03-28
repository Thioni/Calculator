let indexNav = document.getElementById("indexNav");

indexNav.onclick = function(event) {
    location.href = "index.html";
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
  chunkyPotatoSalad: ingredients.matureCheese+ingredients.flakyPotato+ingredients.coarseRockSalt,
  piledOnionRings: ingredients.freshEgg+ingredients.crispOnion+ingredients.assortedGrains
  +ingredients.chitinousShell,
  fluffyChiffonCake: ingredients.freshMilk+ingredients.honeySyrup+ingredients.assortedGrains
  +ingredients.heartyPowder,
  southernPunch: ingredients.starberry+ingredients.acerbicTomato+ingredients.honeySyrup
  +ingredients.clearGelatin,
  heartyWhiteStew: ingredients.freshMilk+ingredients.freshHerb+ingredients.flakyPotato
  +ingredients.coarseRockSalt+ingredients.healthyLiquor+ingredients.beastFlesh,
  juicyHamSandwich: ingredients.matureCheese+ingredients.coarseRockSalt+ingredients.assortedGrains
  +ingredients.beastFlesh,
  freshTomatoNoodles: ingredients.acerbicTomato+ingredients.assortedGrains+ingredients.healthyLiquor
  +ingredients.chitinousShell+ingredients.clearGelatin,
  dragonFriedRice: ingredients.freshHerb+ingredients.crispOnion+ingredients.coarseRockSalt
  +ingredients.assortedGrains+ingredients.globbyFat+ingredients.heartyPowder,
  cafeMacchiato: ingredients.freshHerb+ingredients.assortedGrains+ingredients.globbyFat,
  honeyBagel: ingredients.freshEgg+ingredients.freshMilk+ingredients.starberry
  +ingredients.honeySyrup+ingredients.chitinousShell+ingredients.heartyPowder,
  thickHamburgerSteak: ingredients.freshEgg+ingredients.crispOnion+ingredients.beastFlesh
  +ingredients.chitinousShell,
  colorfulBouillabaisse: ingredients.acerbicTomato+ingredients.healthyLiquor+ingredients.beastFlesh
  +ingredients.chitinousShell+ingredients.globbyFat,
  fishermansPaella: ingredients.matureCheese+ingredients.coarseRockSalt+ingredients.assortedGrains
  +ingredients.beastFlesh+ingredients.heartyPowder,
  purpleHearts: ingredients.starberry+ingredients.honeySyrup+ingredients.healthyLiquor
  +ingredients.clearGelatin+ingredients.heartyPowder,
  heavyMeatPie: ingredients.freshEgg+ingredients.crispOnion+ingredients.flakyPotato
  +ingredients.assortedGrains+ingredients.beastFlesh+ingredients.chitinousShell,
  aquamarineIceCream: ingredients.freshMilk+ingredients.starberry+ingredients.honeySyrup
  +ingredients.clearGelatin+ingredients.globbyFat,
  pastaPeperoncino: ingredients.matureCheese+ingredients.freshHerb+ingredients.coarseRockSalt
  +ingredients.beastFlesh+ingredients.heartyPowder,
  tomatoCurry: ingredients.flakyPotato+ingredients.acerbicTomato+ingredients.healthyLiquor
  +ingredients.beastFlesh+ingredients.globbyFat,
  whiteVelvetShortcake: ingredients.freshMilk+ingredients.starberry+ingredients.honeySyrup
  +ingredients.assortedGrains+ingredients.clearGelatin+ingredients.globbyFat
  +ingredients.heartyPowder,
  croquetteBurger: ingredients.freshEgg+ingredients.matureCheese+ingredients.crispOnion
  +ingredients.flakyPotato+ingredients.assortedGrains+ingredients.beastFlesh
  +ingredients.chitinousShell+ingredients.clearGelatin,
  septettoTea: ingredients.freshHerb+ingredients.starberry+ingredients.honeySyrup
  +ingredients.healthyLiquor+ingredients.chitinousShell+ingredients.clearGelatin
  +ingredients.globbyFat+ingredients.heartyPowder,
  heartyKebab: ingredients.freshHerb+ingredients.acerbicTomato+ingredients.coarseRockSalt
  +ingredients.beastFlesh+ingredients.chitinousShell+ingredients.clearGelatin
  +ingredients.globbyFat+ingredients.heartyPowder
};

let recipeSelect = document.getElementById('recipeSelect');
let unitsInput = document.getElementById('units');
let recipeButton = document.getElementById('recipeButton');
let totalCost = document.getElementById('totalCost');

const calculateCost = () => {
  let recipe = recipeSelect.value;
  let cost = recipeCosts[recipe];
  let units = parseInt(unitsInput.value);
  if (!/^[0-9]+$/.test(unitsInput.value)) {
    alert("Vous devez renseigner des caratères numériques");
    return;
  }
  let productionCost = cost * units;
  totalCost.textContent = productionCost;
}

recipeButton.addEventListener('click', function() {
  calculateCost();
});