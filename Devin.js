const button = document.querySelector("#valider");
const MAX = 100;
let message = document.querySelector("#message");
let compteur = 0;
let nombre = Math.floor(Math.random() * MAX +1);
let partie_finie = false;

function reset(){
    compteur = 0;
    nombre = Math.floor(Math.random() * MAX +1);
    document.querySelector("#input").value = "";
    message.innerHTML = "";
    button.textContent= "Essayer";
    partie_finie = false;
}


button.addEventListener("click", () => {
    //Bouton rejouer
    if (partie_finie){
        reset();
    }
    //Bouton Essayer
    else{
        message.visible = false;
        message.style.color = 'black';
        compteur += 1;
        message.innerHTML = '[' + compteur + '] ';
        let essai = document.querySelector("#input").value;
        //On teste si la valeur entrée est un nombre
        if (isNaN(essai) || Object.keys(essai).length === 0){
            message.innerHTML += "Veuillez entrer un nombre entier";
            compteur -= 1;
        }
        else{
            essai = Number(essai);
            //Cas où c'est bien un nombre entier
            if (Number.isInteger(essai)){
                //tester si c'est la bonne valeur
                if (essai === nombre){
                    message.style.color = "green";
                    message.innerHTML += "C'est gagné ! Le nombre mystère était bien " + nombre;
                    button.textContent= "Rejouer ?";
                    partie_finie = true;
                }
                //si faux ==> tester si c'était le sixième coup
                else if (compteur === 6) {
                    message.style.color = "red";
                    message.innerHTML += "C'est perdu ! Le nombre mystère était " + nombre;
                    button.textContent= "Rejouer ?";
                    partie_finie = true;
                }
                //si faux ==> tester si c'est plus grand ou plus petit
                else {
                    message.style.color = "blue";
                    if (essai > nombre)
                        message.innerHTML += "C'est moins";
                    else
                        message.innerHTML += "C'est plus";
                }
                
            }
            //Cas si ce n'est pas un entier
            else{
                message.innerHTML += "Veuillez entrer un nombre entier";
                compteur -= 1;
            }
        }
        message.visible = true;
    }
});
