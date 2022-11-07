import { max_attempt_facile, max_attempt_moyen, max_attempt_difficile, max_name_length, max_score_saved } from "./config.mjs"

function setDifficulty(level) {
    if (level == 1) {
        return max_attempt_facile
    }
    else if (level == 2) {
        return max_attempt_moyen
    }
    else if (level == 3) {
        return max_attempt_difficile
    }
}

function ouiNon(param) {
    if (param == "o") {
        return true;
    }
    else if (param == "n") {
        return false;
    }
}
if(sessionStorage.getItem("score") == null) 
{
    let score = {Sarah:3,Damien:10,Alain:15} ;
}
else
{
    console.log(sessionStorage);
    let score = sessionStorage;
}

function addScore(score, name, nbTry) {
    console.log(sessionStorage)
    console.log(score)
    sessionStorage.setItem(name ,nbTry);
    console.log(sessionStorage)
    console.log(score)
    
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

function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        if(cls == 'key')
        {
            return '<span class="' + cls + '">' + match + '</span>';
        }
        return '<span class="' + cls + '">' + match + '</span> <br>';
    });
}


function getScore(score) {
    document.getElementById("score").style.display = "none";
    document.getElementById("joueurScore").style.display = "block";
    document.getElementById("valider-score2").addEventListener("click", function () {
        let name ="";
        name = document.getElementById("score-reponse2").value;
        String(name);
        console.log(name)
        console.log(sessionStorage.getItem(name))

        document.getElementById("scoreJoueur").style.display = "block";
        if (sessionStorage.getItem(name) != null) {
            document.getElementById("scoreJoueur").innerHTML += "<p>" + name +": "+sessionStorage.getItem(name) +  "</p>"
            document.getElementById("joueurScore").style.display = "none";
        }
        else {
            document.getElementById("scoreJoueur").innerHTML += "Le joueur n'existe pas"
            document.getElementById("joueurScore").style.display = "none";
        }
        document.getElementById("tousScore").style.display = "block";
        document.getElementById("tousScore").innerHTML = "<p>Voulez vous voir le tableau des scores ? (O/N) : </p>  <input type='text' id='choixTousScore' name ='choixTousScore' placeholder='(O/N)'> <input type='button' id='valider-tousScore' value='Valider'>";
        document.getElementById("valider-tousScore").addEventListener("click", function () {
        let answer2 = document.getElementById("choixTousScore").value
        if (answer2 == "o" || answer2 == "O")
        {
            getAllScore(score)
        }})
    })
    
}


function getAllScore(score) {
    document.getElementById("nom-valid").style.display = "none";
    document.getElementById("scoreJoueur").style.display = "none";
    document.getElementById("tousScore").innerHTML = "Voici les scores : " + syntaxHighlight(sessionStorage);
    console.log(score)

    document.getElementById("viderTableauScore").style.display = "block";
                document.getElementById("viderTableauScore").innerHTML = "<p>Voulez vous vider le tableau des scores ? (o/n)</p> <input type='text' id='choixViderScore2' name ='choixViderScore2' placeholder='(O/N)'> <input type='button' id='valider-reset2' value='Valider'>";
                document.getElementById("valider-reset2").addEventListener("click", function () {
                let answer2 = document.getElementById("choixViderScore2").value
                if (answer2 == "o" || answer2 == "O")
                {
                    document.getElementById("tousScore").style.display = "none";
                    reset_score()
                    document.getElementById("viderTableauScore").innerHTML = "<p>Le tableau des scores a était vidé</p>";
                }})
}

function reset_score() {
    sessionStorage.clear();
}




/*function saveScore(score, name) {
    let tabName = []
    if(localStorage.getItem('name') != null) {
    tabName = localStorage.getItem('name');
    }
    let tabScore = []
    if(localStorage.getItem('score') != null){
        tabScore = localStorage.getItem('score');
    }
    
    for (let i = 0; i < tabScore.length; i++) {
        tabScore.push(tabScore[i], tabScore[i + 1]);
    }
    for (let i = 0; i < tabName.length; i++) {
        tabName.push(tabName[i], tabName[i + 1]);
    }

    tabScore.push(score);
    tabName.push(name);

    console.log(name)
    localStorage.setItem(score, name);
    console.log(localStorage.getItem('name'));
}*/

//let affScore = localStorage.getItem('score', 'name');
function run() {
    console.log("Vous allez devoir trouver 1 nombre aléatoire entre 1 et 99: \n-----------------")
    let nb = Math.floor(Math.random() * 99) + 1;
    console.log(nb)
    let number
    let attempt = 0
    let max_attempt


    let checkbox = document.querySelectorAll("input[name=level]");
    for (let check of checkbox) {
        check.addEventListener('change', function () {
            if (this.checked) {
                console.log(this.value);
                max_attempt = setDifficulty(this.value)
                document.getElementById("niveau").style.display = "none";
                document.getElementById("choix").style.display = "block";
            }
        });
    }
    document.getElementById("valider-choix").addEventListener("click", function () {
        number = document.getElementById("number").value

        if (number == nb) {
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "none";
            document.getElementById("gagne").style.display = "block";
            document.getElementById("choix").style.display = "none";
            document.getElementById("fin").style.display = "block";
        }
        else if (attempt >= max_attempt - 1) {
            console.log("Vous avez perdu !")
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "none";
            document.getElementById("choix").style.display = "none";
            document.getElementById("perdu").style.display = "block";
        }


        else if (number > nb) {
            document.getElementById("plus").style.display = "none";
            document.getElementById("moins").style.display = "block";
            document.getElementById("moins").innerHTML = "<br>nombre d'essais restant: " + (max_attempt - attempt - 1);

        }
        else if (number < nb) {
            document.getElementById("moins").style.display = "none";
            document.getElementById("plus").style.display = "block";
            document.getElementById("plus").innerHTML = "<br>nombre d'essais restant: " + (max_attempt - attempt - 1);
        }
        else {
            console.log("????")
        }
        attempt++
        console.log("Il y a: " + attempt + " tentatives");
        console.log(number)

    })

    document.getElementById("valider-nom").addEventListener("click", function () {
        let player_name = document.getElementById("player").value
        console.log(max_name_length)
        console.log(player_name.length)
        if (player_name.length > max_name_length) {
            document.getElementById("nom-invalid").style.display = "block";
        } else {
            document.getElementById("nom-invalid").style.display = "none";
            document.getElementById("nom-valid").innerHTML = "<p>Bravo " + player_name + " ! Vous avez gagné en " + attempt + " tentatives !</p>"
            document.getElementById("fin").style.display = "none";
            document.getElementById("gagne").style.display = "none";
            //saveScore(attempt,player_name)
            if (score.length ==  max_score_saved*2)
            {
                document.getElementById("ScorePlein").style.display = "block";
                document.getElementById("ScorePlein").innerHTML = "<p>Le tableau des scores est plein, veuillez vider le tableau des scores pour en ajouter de nouveaux<br>Voulez vous vider le tableau des scores ? (o/n)</p> <input type='text' id='choixViderScore' name ='choixViderScore' placeholder='(O/N)'> <input type='button' id='valider-reset' value='Valider'>";
                document.getElementById("valider-reset").addEventListener("click", function () {
                let answer2 = document.getElementById("choixViderScore").value
                if (answer2 == "o" || answer2 == "O")
                {
                    reset_score()
                    document.getElementById("ScorePlein").innerHTML = "<p>Le tableau des scores a été vidé</p>";
                }})
            }
            else
                {
                document.getElementById("nom-valid").style.display = "block";
                document.getElementById("score").style.display = "block";
                addScore(score, player_name, attempt)
                let checkbox2 = document.querySelectorAll("input[name=choix-oui-non]");
                let answer
                for (let check of checkbox2) {
                    check.addEventListener('change', function () {
                        if (this.checked) {
                            console.log(this.value);
                            answer = ouiNon(this.value)
                            document.getElementById("score").style.display = "none";
                            if (answer == true) {
                                getScore(score)

                            }
                            else {

                                
                            }

                        }
                    });
                }
        

        }

    }})

        
    }



    /* else{
         
 
         console.log("Voulez vous connaitre le tableau des scores ? (o/n)\n")
         answer = prompt()
         if (answer == "o" || answer == "O")
         {
             getAllScore(score)
         }
 
         console.log("Voulez vous videz le tableau des scores ? (o/n)\n")
         answer = prompt()
         if (answer == "o" || answer == "O")
         {
             score = reset_score(score)
             console.log("Le tableau des scores a été vidé")
             console.log(score)
         }
 
         /*createFile();
         positonScore();*/
    /*createFile();
    positonScore();*/
    // }*/



run();
