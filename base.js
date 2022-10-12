console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
let nb = Math.floor(Math.random() * 99) + 1;
console.log(nb)
let string
let number

while(number != nb)
{
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

