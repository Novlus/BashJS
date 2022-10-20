import nbTour from './level.js'

console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number
let score = 0

let level
let tour

while (isNaN(tour) && tour!=1 && tour!=2 && tour!= 3) 
{
    console.log("Merci de n'écrire que 1, 2 ou 3")
    level = prompt("Choisir un niveau (1:Facile 2:Moyen 3:Difficile")
    tour = nbTour(level)
}


while(number != nb && score<tour)
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
        console.log("le nombre que vous cherchez est plus petit")
    }

    score+=1
}

if(number == nb)
{
    console.log("Bravo vous avez gagné en " + score + " coups")
}

if(score == tour)
{
    console.log("Perdu !! Le nombre de tour est dépassé")
    console.log("Vous deviez trouver le nombre " + nb)
}

    // else 
    // {
    //     console.log("Bravo vous avez gagné")
    // }
//let isNumber = 0
/*if (NaN(number) == true) { // C'est bien un nombre
    isNumber =0;}
else{
    isNumber =1;
}
while(isNumber == 0)
{
    string = prompt("Entrez un nombre entre 1 et 99")
    number = parseInt(string)
}*/

