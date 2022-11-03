import { max_attempt_facile, max_attempt_moyen, max_attempt_difficile, max_name_length, max_score_saved } from "./config.mjs"

function setDifficulty(level) {
    if (level == 1) {
        return max_attempt_facile
    }
    else if (level == 2) {
        return max_attempt_moyen
    }
    else if (level == 3) {
        return max_attempt_difficile
    }
}

function addScore(score, name, nbTry) {
    score.push(name, nbTry)
}

// créer et enregistrer le score dans un fichier
function createFile() {
    let fs = require('fs')
    fs.writeFile('score.txt', 'score', function (err) {
        if (err) throw err;
        console.log('Fichier créé !');
    });
    fs.writeline(attempt);
    fs.writeline(" --- ");
    fs.writeline(player_name);
    fs.writeline('\n');
}

// afficher la position du joueur
function positonScore() {
    let fs = require('fs')
    fs.readFile('score.txt', 'utf8', function (err, data) {
        if (err) throw err;
        const tri = data.sort();
        console.log(tri);
    });
}

function getScore(score) {
    let name = prompt("Entrez le nom du joueur dont vous voulez voir le score : ")
    if (score.indexOf(name) != -1) {
        console.log(score[score.indexOf(name)], score[score.indexOf(name) + 1])
    }
    else {
        console.log("Le joueur n'existe pas")
    }
}

function reset_score(score) {
    score = [];

}

function run() {
    console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
    let nb = Math.floor(Math.random() * 99) + 1;
    console.log(nb)
    let number
    let attempt = 0
    let max_attempt

    console.log("Merci de n'écrire que 1, 2 ou 3")
    //level EventListener
    let checkbox = document.querySelectorAll("input[type=radio]");
    for (let check of checkbox) {
        check.addEventListener('change', function () {
            if (this.checked) {
                console.log(this.value);
                max_attempt = setDifficulty(this.value)
                document.getElementById("niveau").style.display = "none";
                document.getElementById("choix").style.display = "block";
            }
        });
    }
    document.getElementById("valider-choix").addEventListener("click", function () {
        number = document.getElementById("number").value

        if (number == nb) {
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "none";
            document.getElementById("gagne").style.display = "block";
            document.getElementById("choix").style.display = "none";
            document.getElementById("fin").style.display = "block";
        }
        else if (attempt >= max_attempt - 1) {
            console.log("Vous avez perdu !")
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "none";
            document.getElementById("choix").style.display = "none";
            document.getElementById("perdu").style.display = "block";
        }
        else if (number > nb) {
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "block";
        }
        else if (number < nb) {
            document.getElementById("moins").style.display = "none";
            document.getElementById("plus").style.display = "block";
        }
        else {
            console.log("????")
        }
        attempt++
        console.log("Il y a: " + attempt + " tentatives");
        console.log(number)

    })

    document.getElementById("valider-nom").addEventListener("click", function () {
        let player_name = document.getElementById("player").value
        console.log(max_name_length)
        console.log(player_name.length)
        if (player_name.length > max_name_length) {
            document.getElementById("nom-invalid").style.display = "block";
        } else {
            document.getElementById("nom-invalid").style.display = "none";
            document.getElementById("nom-valid").innerHTML = "<p>Bravo " + player_name + " ! Vous avez gagné en " + attempt + " tentatives !</p>";
            document.getElementById("nom-valid").style.display = "block";
            document.getElementById("fin").style.display = "none";
            document.getElementById("gagne").style.display = "none";
        }
    })

        /*createFile();
        positonScore();*/
   // }

}

run();
