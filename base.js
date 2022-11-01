


let score = [];

function addScore(score, name,nbTry)
{
    score.push(name,nbTry)
}

function getScore(score)
{
    let name = prompt("Entrez le nom du joueur dont vous voulez voir le score : ")
    if (score.indexOf(name) != -1)
import nbTour from './level.js'

console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number

let attempt = 0

let level
let nbTourMax

while (nbTourMax == undefined) 
{
    console.log("Merci de n'écrire que 1, 2 ou 3")
    level = prompt("Choisir un niveau (1:Facile 2:Moyen 3:Difficile")
    nbTourMax = nbTour(level)
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


import { config } from './config.js';

let max_attempt = config.max_attempt
let max_name_length = config.max_name_length
let max_score_saved = config.max_score_saved

while(number != nb && score<nbTourMax)
{
    string = prompt("Entrez un nombre entre 1 et 99")
    number = parseInt(string)
    while(isNaN(number) || number < 1 || number > 99 )
    {
        console.log("Ecrire uniquement un nombre entre 1 et 99")
        string = prompt("Entrez un nombre entre 1 et 99")
        number = parseInt(string)
    }
    if( number < nb)
    {
        console.log("le nombre que vous cherchez est plus grand")
    }
    else if( number > nb)

    {
        console.log(score[score.indexOf(name)], score[score.indexOf(name)+1])
    }

    else
    {
        console.log("Le joueur n'existe pas")
    }
}

function reset_score (score)
{
    score = [];

}

 function run()
 {   
     let continuer = true
     while(continuer)
     {
     console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
     let nb = Math.floor(Math.random() * 99) + 1;
     console.log(nb)
     let string
     let number
     let nbTry = 1

     while(number != nb)// quand le nombre est trouvé on demande le nom du joueur et on l'ajoute dans un tableau

     {
         string = prompt("Entrez un nombre entre 1 et 99")
         number = parseInt(string)
         if( number < nb)
         {
             console.log("le nombre que vous cherchez est plus grand")
             nbTry++
         }

         else if( number > nb)
         {
             console.log("le nombre que vous cherchez est plus petit")
             nbTry++
         }

         else 
         {
             console.log("Bravo vous avez gagné")
             let name = prompt("Entrez votre nom")
             addScore(score,name,nbTry)
             getScore(score)
             console.log(score)
             let confirm = prompt("Voulez vous rejouer ? (oui/non)")
             if(confirm == "non")
             {
                 continuer = false
             }
         } 
 }


  attempt++
}

if(number == nb)
{
          let player_name = prompt("Bravo ! Entrez votre nom :")

        while (player_name.length > max_name_length)
        {
            player_name = prompt("Votre nom est trop long, veuillez en choisir un plus court")
        }
        console.log("Bravo " + player_name + " vous avez gagné en " + attempt + " coups")
        createFile();
        positonScore();

}
 }
run();

if(attempt == nbTourMax)
{
    console.log("Perdu !! Le nombre de tour est dépassé")
    console.log("Vous deviez trouver le nombre " + nb)
}
