console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number
let attempt = 0;


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


import { config } from './config.js';

let max_attempt = config.max_attempt
let max_name_length = config.max_name_length
let max_score_saved = config.max_score_saved

while(number != nb)
{
    attempt++
    if (attempt == max_attempt)
    { 
        console.log("Vous avez perdu, le nombre était: " + nb)
        break
    }
    string = prompt("Entrez un nombre entre 1 et 99")
    number = parseInt(string)
    if( number < nb)
    {
        console.log("le nombre que vous cherchez est plus grand")
    }

    else if( number > nb)
    {
        console.log("le nombre que vous cherchez est plus petit")
    }

    else 
    {
        console.log("Bravo vous avez gagné")
        let player_name = prompt("Entrez votre nom")

        while (player_name.length > max_name_length)
        {
            player_name = prompt("Votre nom est trop long, veuillez en choisir un plus court")
        }
        console.log("Bravo " + player_name + " vous avez gagné en " + attempt + " coups")
        createFile();
        positonScore();
    }
}

