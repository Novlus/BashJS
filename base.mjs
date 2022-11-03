import { max_attempt_facile, max_attempt_moyen, max_attempt_difficile, max_name_length, max_score_saved } from "./config.mjs"

let score = [];

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
    let string
    let number

    let attempt = 0

    let level
    let max_attempt

    while (max_attempt == undefined) {
        console.log("Merci de n'écrire que 1, 2 ou 3")
        level = prompt("Choisir un niveau (1:Facile 2:Moyen 3:Difficile)")

        if (level == 1) {
            max_attempt = max_attempt_facile
        }
        else if (level == 2) {
            max_attempt = max_attempt_moyen
        }
        else if (level == 3) {
            max_attempt = max_attempt_difficile
        }
    }

    while (number != nb && attempt < max_attempt) {
        string = prompt("Entrez un nombre entre 1 et 99")
        number = parseInt(string)
        while (isNaN(number) || number < 1 || number > 99) {
            console.log("Ecrire uniquement un nombre entre 1 et 99")
            string = prompt("Entrez un nombre entre 1 et 99")
            number = parseInt(string)
        }
        if (number < nb) {
            console.log("le nombre que vous cherchez est plus grand")
            attempt++
        }
        else if (number > nb) {
            console.log("le nombre que vous cherchez est plus petit")
            attempt++
        }
    }

    attempt++

    if (attempt >= max_attempt) {
        console.log("Perdu !! Le nombre de tour est dépassé")
        console.log("Vous deviez trouver le nombre " + nb)
    }

    else if (number == nb) {
        let player_name = prompt("Bravo ! Entrez votre nom :")

        while (player_name.length > max_name_length) {
            player_name = prompt("Votre nom est trop long, veuillez en choisir un plus court")
        }
        console.log("Bravo " + player_name + " vous avez gagné en " + attempt + " coups")
        if (score.length == max_score_saved * 2) {
            console.log("Le tableau des scores est plein, veuillez en vider le tableau des scores pour en ajouter de nouveaux\nVoulez vous vider le tableau des scores ? (o/n)")
            let answer = prompt()
            if (answer == "o" || answer == "O") {
                reset_score(score)
            }
        }
        else {
            addScore(score, player_name, attempt)
            console.log("Voulez vous connaitre le score de quelqu'un ? (o/n)\n")
            let answer = prompt()
            if (answer == "o" || answer == "O") {
                getScore(score)
            }

            console.log("Voulez vous videz le tableau des scores ? (o/n)\n")
            answer = prompt()
            if (answer == "o" || answer == "O") {
                reset_score(score)
            }

            /*createFile();
            positonScore();*/
        }

    }




}

run();
