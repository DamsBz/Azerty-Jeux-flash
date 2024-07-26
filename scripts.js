const motApllication = "Bonjour";
let motUtilisateur = prompt("Entrez un mot :" + motApllication);
if (motUtilisateur === motApllication) {
  console.log("Bravo");
} else {
  console.log("Vous avez faites une erreur de frappe");
}
console.log(motUtilisateur);

switch (motUtilisateur) {
  case motApllication:
    console.log("Bravo");
    break;
  case "Gredin":
    console.log("Otez!");
    break;
  case "Salaud":
    console.log("Mécréant");
    break;
  case "Vilain":
    console.log("T'es pas gentil");
    break;
  default:
    console.log("Vous aves fait une erreur de frapper");
}
let motTapeOk = true;
if (motTapeOk) {
  console.log("Bravo,vous avez correctment tapé le mot");
} else {
  consolelog("Echec, le mot n'est pas corect");
}

function afficherResultat(score, nbMotsProposes) {
  console.log("Votre score est de " + score + " sur " + nbMotsProposes);
}
function choisirPhrasesOuMots() {
  let choix = prompt(
    "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
  );
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt(
      "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
    );
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  let score = 0;
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let score = 0;
  let nbMotsProposes = 0;
  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = lancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }
  afficherResultat(score, nbMotsProposes);
}

btnValiderMot.addEventListener("click", () => {
  if (inputEcriture.value === listeProposition[i]) {
    score++;
  }
  i++;
  afficherResultat(score, i);
  inputEcriture.value = "";
  if (listeProposition[i] === undefined) {
    afficherProposition("Le jeu est fini");
    // On désactive le bouton valider
    btnValiderMot.disabled = true;
    // On désactive les boutons radios
    for (
      let indexBtnRadio = 0;
      indexBtnRadio < listeBtnRadio.length;
      indexBtnRadio++
    ) {
      listeBtnRadio[indexBtnRadio].disabled = true;
    }
  } else {
    afficherProposition(listeProposition[i]);
  }
});

for (let index = 0; index < listeBtnRadio.length; index++) {
  listeBtnRadio[index].addEventListener("change", (event) => {
    // Si c'est le premier élément qui a été modifié, alors nous voulons
    // jouer avec la listeMots.
    if (event.target.value === "1") {
      listeProposition = listeMots;
    } else {
      // Sinon nous voulons jouer avec la liste des phrases
      listeProposition = listePhrases;
    }
    // Et on modifie l'affichage en direct.
    afficherProposition(listeProposition[i]);
  });
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let scoreEmail = `${score} / ${i}`;
  gererFormulaire(scoreEmail);
});

afficherResultat(score, i);

let listeh2 = document.querySelectorAll("h2");
console.log(listeh2);
for (let i = 0; i < listeh2.length; i++) {
  console.log(listeh2[i]);
}
