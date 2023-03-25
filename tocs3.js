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

let totalBudget = document.getElementById('totalBudget').value;
let prodButton = document.getElementById('prodButton');

// Fonction qui calcule le nombre maximal de produits qu'on peut fabriquer
function calculateProd() {
  let costA = ingredientA.checked ? parseInt(ingredientA.value) : 0;
  let costB = ingredientB.checked ? parseInt(ingredientB.value) : 0;
  let costC = ingredientC.checked ? parseInt(ingredientC.value) : 0;
  let costD = ingredientD.checked ? parseInt(ingredientD.value) : 0;
  let costE = ingredientE.checked ? parseInt(ingredientE.value) : 0;
  let costF = ingredientF.checked ? parseInt(ingredientF.value) : 0;
  let costG = ingredientG.checked ? parseInt(ingredientG.value) : 0;
  let costH = ingredientH.checked ? parseInt(ingredientH.value) : 0;
  let costI = ingredientI.checked ? parseInt(ingredientI.value) : 0;
  let costJ = ingredientJ.checked ? parseInt(ingredientJ.value) : 0;
  let costK = ingredientK.checked ? parseInt(ingredientK.value) : 0;
  let costL = ingredientL.checked ? parseInt(ingredientL.value) : 0;
  let costM = ingredientM.checked ? parseInt(ingredientM.value) : 0;
  let costN = ingredientN.checked ? parseInt(ingredientN.value) : 0;
  let costO = ingredientO.checked ? parseInt(ingredientO.value) : 0;
  let costP = ingredientP.checked ? parseInt(ingredientP.value) : 0;
  let costQ = ingredientQ.checked ? parseInt(ingredientQ.value) : 0;
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