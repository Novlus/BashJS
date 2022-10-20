

/*class Score
{
    constructor(name, nb , score)
    {
        this.name = name
        this.nb = nb
        this.score = score
        
    }

    //création d'un tableau de score et ajout du score du joueur
    //affichage du tableau de score
    addScore()
    {
        //creer une liste vide
        let score = [];
        (this.name, this.nb)
        score.push(this.name, this.nb)
        this.score = score
    }

    /*resetScore()
    {
       let reset_score = [];
       this.score = reset_score
    }*/

    //get score with name of player
    /*getScore()
    {
        let name = prompt("Entrez le nom du joueur dont vous voulez voir le score : ")
        if (this.score.indexOf(name) != -1)
        {
            console.log(this.score[this.score.indexOf(name)], this.score[this.score.indexOf(name)+1])
        }
        else
        {
            console.log("Le joueur n'existe pas")
        }
    }
}*/

let score = [];

function addScore(score, name,nbTry)
{
    score.push(name,nbTry)
}

function getScore(score)
{
    let name = prompt("Entrez le nom du joueur dont vous voulez voir le score : ")
    if (score.indexOf(name) != -1)
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
     let nbTry = 0

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

}
 }
run();

