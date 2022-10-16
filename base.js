console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number

let max_attempt = 10
let attempt = 0
let max_name_length = 10
let max_score_saved = 10

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
}

string = prompt("Entrez votre nom")
player_name = parseInt(string)

while (player_name.length > max_name_length)
{
    string = prompt("Votre nom est trop long, veuillez en choisir un plus court")
    player_name = parseInt(string)
}