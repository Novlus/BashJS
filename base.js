console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number
let score = 0;

// nom du joueur
function getname() {
    let username = prompt("Quel est votre nom ?");
    return username;
}

// créer et enregistrer le score dans un fichier
function createFile() {
    let fs = require('fs')
    fs.writeFile('score.txt', 'score', function (err) {
        if (err) throw err;
        console.log('Fichier créé !');
    });
    fs.writeline(score);
    fs.writeline(" --- ");
    fs.writeline(username);
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

while(number != nb)
{
    string = prompt("Entrez un nombre entre 1 et 99")
    number = parseInt(string)
    if( number < nb)
    {
        console.log("le nombre que vous cherchez est plus grand")
        score ++;
    }

    else if( number > nb)
    {
        console.log("le nombre que vous cherchez est plus petit")
        score ++;
    }

    else 
    {
        console.log("Bravo vous avez gagné")
        score ++;
        console.log("Votre score est de " + score)
        getname();
        createFile();
        positonScore();
    }
}

