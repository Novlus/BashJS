

class Score
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

    resetScore()
    {
       let reset_score = [];
       this.score = reset_score
    }

    //get score with name of player
    getScore()
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
}
  class Game{
        constructor()
        {
        this.run()
        }

        run()
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
                    let score = new Score(name, nbTry, []);
                    score.addScore()
                    score.getScore()
                    console.log(score.score)
                    let confirm = prompt("Voulez vous rejouer ? (oui/non)")
                    if(confirm == "non")
                    {
                        continuer = false
                    }
                } 
        }
    
    }
    }
 }



let game = new Game()

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


//run()

//affiche le contenu d'un fichier texte

/*function score()
{
    let fs = require('fs')
    let data = fs.readFileSync('hightscore.txt', 'utf8')
    console.log(data)

    document.getElementById('inputfile')
    .addEventListener('change', function() {
      
    var fr=new FileReader();
    fr.onload=function(){
        document.getElementById('output')
                .textContent=fr.result;
    }
      
    fr.readAsText(this.files[0]);
})

score()
}

const fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
   if (err) throw err;
   console.log(data.toString());
});*/
