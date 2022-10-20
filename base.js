console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number


import { config } from './config.js';

let attempt = config.attempt
let max_attempt = config.max_attempt
let max_name_length = config.max_name_length
let max_score_saved = config.max_score_saved

while(number != nb)
{
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
        attempt++
    }

    else if( number > nb)
    {
        console.log("le nombre que vous cherchez est plus petit")
        attempt++
    }

    else 
    {
        console.log("Bravo vous avez gagné")
    }

}

let player_name = prompt("Entrez votre nom")

while (player_name.length > max_name_length)
{
    player_name = prompt("Votre nom est trop long, veuillez en choisir un plus court")
}
console.log("Bravo " + player_name + " vous avez gagné en " + attempt + " coups")