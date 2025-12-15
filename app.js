
let historique = [];
const form = document.getElementById("calc-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let a = document.getElementById("nombreA").value;
    let b = document.getElementById("nombreB").value;
    let op = document.getElementById("operation").value;

    let erreur = document.getElementById("erreur");
    let resultatAffichage = document.getElementById("resultat");

    erreur.textContent = "";
    resultatAffichage.textContent = "";

    
    if (a === "" || b === "") {
        erreur.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    a = parseFloat(a);
    b = parseFloat(b);

    if (op === "/" && b === 0) {
        erreur.textContent = "Division par zéro interdite.";
        return;
    }

    
    let resultat;
    switch (op) {
        case "+": resultat = a + b; break;
        case "-": resultat = a - b; break;
        case "*": resultat = a * b; break;
        case "/": resultat = a / b; break;
    }

    resultatAffichage.textContent = "Résultat : " + resultat;

   
    let operationTexte = `${a} ${op} ${b} = ${resultat}`;
    historique.push(operationTexte);

    afficherHistorique();
});


function afficherHistorique() {
    let ul = document.getElementById("historique");
    ul.innerHTML = "";

    historique.forEach(op => {
        let li = document.createElement("li");
        li.textContent = op;
        ul.appendChild(li);
    });
}
