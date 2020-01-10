let joueur;


let GameManager = {
   setGameStart: function(classType) {
    this.resetJoueur(classType);
    this.CheckPoint_1();
   },
   resetJoueur: function(classType) { // permet de creer le classe
    switch (classType) {
        case "Chevalier":
            joueur = new gameur(classType, 120, 0, 150, 30, 90);
            break;
        case "Assasin":
            joueur = new gameur(classType, 50, 0, 120, 90, 30);
            break;
        case "Archere":
            joueur = new gameur(classType, 90, 0, 90, 80, 70);
            break;
        case "Mage":
            joueur = new gameur(classType, 70, 200, 180, 60, 0);
            break;
    }
    let getInterface = document.querySelector(".interface"); // permet de generer tout les stats des personnage en 1 fois
    getInterface.innerHTML = '<img src="assets/img/Joueur/' + 
    classType +'.png" class="img-avatar"><div><h3>'+ classType
     + '</h3><p>Vie: '+ joueur.health +'</p><p>Mana: '+ joueur.mana +
     '</p><p>Force: '+ joueur.strength  +'</p><p>Agilite: '+ joueur.agility
     +'</p><p>defence: '+ joueur.defence +'</p></div>';
    
   },
   CheckPoint_1: function() {
    document.getElementById('main').style.display = "block";
    let text_1 = document.getElementById("text_1");
    text_1.innerHTML = `Vous vous reveillez au millieu d'une piece qui vous est inconnu, vous trouver sur votre droite un autel et sur votre gauche une vielle porte rouillé <button type="button" id="btn_suiv" name="button" class="btn_suivant" >Suivant</button> `;
    document.getElementById('btn_suiv').addEventListener("click", function() {
        document.getElementById('main').style.display = "none";
        main.innerHTML = "";
        choix1();
    });
    
   }
}

 function choix1() {
    let text_2 = document.getElementById('text_2'); // choix autel
    document.getElementById('c1').style.display = "block"; // fait apparaitre le texte de c1
    text_2.innerHTML = `Que voulez vous faire ? <button type="button" id="btn1" name="button" class="btn_choice">Prier a l'autel</button><button type="button" id="btn2" name="button" class="btn_choice">Inspecter la porte</button>`;
    
    document.getElementById('btn1').addEventListener("click", function() {
        document.getElementById('text_2').style.display = "none"; //fait disparraitre le text_2
        document.getElementById('text_3').style.display = "block"; //fait apparaitre le text_3
        let text_3 = document.getElementById('text_3');
        text_3.innerHTML = `Vous priez a l'autel en esperant que quelqu'un/quelque chose vous reponde <button id="btn_suiv2" type="button" name="button" class="btn_suivant">Suivant</button>`;
        document.getElementById('btn_suiv2').addEventListener("click", function() {
            document.getElementById('text_3').style.display = "none";
        document.getElementById('text_4').style.display = "block";
            text_4.innerHTML = `Au moment ou vous relevez la tete vous apercevez dans les au-dessus de vous ressentez une aura divin vous approcher <button id="btn_suiv3" type="button" name="button" class="btn_suivant">Suivant</button> `;
            content.innerHTML = `<img src="assets/img/pnj/Archange.png"  class="img-avatar">`;
            document.getElementById('btn_suiv3').addEventListener("click", function() {
                document.getElementById('text_4').style.display = "block";
                text_4.innerHTML = `bonjour mon enfant, je me presente de suis Suryâl et je ne te demanderais qu'une seul chose de me faire confiance et de prendre ma main  <button type="button" id="btn3" name="button" class="btn_choice">Prendre la main </button><button type="button" id="btn4" name="button" class="btn_choice">Refuser</button> `;
                document.getElementById('btn3').addEventListener("click", function() {
                    document.getElementsByTagName("body")[0].innerHTML = "<img src='assets/img/ecran/victoire.png'>"
                    c1.innerHTML = "";

            
                    });
            document.getElementById('btn4').addEventListener("click", function() {
                    document.getElementById('text_4').style.display = "none";
                    document.getElementById('text_6').style.display = "block";
                    text_6.innerHTML = `Ah bon ? tu ne veux donc pas de mon aide, fort bien dans ce cas la je t'emmene vers un personne qui pourra t'éclairer sur la situation <button id="btn_suiv4" type="button" name="button" class="btn_suivant">Suivant</button>`;
                document.getElementById('btn_suiv4').addEventListener("click", function() {
                    c1.innerHTML = "";
                    choix2();
                });
                });
                });
            });
        });
    document.getElementById('btn2').addEventListener("click", function() { // choix porte
        document.getElementById('text_2').style.display = "none";
        document.getElementById('text_7').style.display = "block";
        text_7.innerHTML = `Au moment ou vous toucher la porte pour l'inspecter elle tombe sur le sol soulevant un grand nuage de poussiere <button id="btn_suiv4" type="button" name="button" class="btn_suivant">Suivant</button>`;
            document.getElementById('btn_suiv4').addEventListener("click", function() {
                c1.innerHTML = "";
                choix2();
            });
        });
}

function choix2() { // choix parole ou attaque
    let text_8 = document.getElementById('text_8');
        document.getElementById('c2').style.display = "block";
            text_8.innerHTML = `Vous marcher pendant quelque kilometre et finiser par vous perdre à travers se labyrinth, mais une etrange porte attire votre regard vous finisez par entrer dans la piece et trouver en face de vous une femme au teint pâle? <br> Que faite vous ? </br><button type="button" id="btn4" name="button" class="btn_choice">Lui adresse la parole </button><button type="button" id="btn5" name="button" class="btn_choice">L'attaquer tant qu'elle est de dos </button>`;
        document.getElementById('btn4').addEventListener("click", function() { // choix parole
            document.getElementById('text_8').style.display = "none";
            document.getElementById('text_10').style.display = "block"
            text_10.innerHTML = `Vous vous approchez sereinement de la dame et attirer son attention avec legere tape sur l'epaule <button id="btn_suiv6" type="button" name="button" class="btn_suivant">Suivant</button>`;
        document.getElementById('btn_suiv6').addEventListener("click", function() {
            document.getElementById('text_10').style.display = "none";
            document.getElementById('text_11').style.display = "block"
            text_11.innerHTML = `Bonjour, jeune aventurier maitenant que vous m'avez trouver je peux repondre à vos question <br>Vous vous trouvez actuellement dans le donjon du roi des glace, qui a etait enfermer ici il y a 1000 ans</br><br>cela fait donc 1000 ans qu'il attend que quelqu'un passe a proximite de lui pour l'affronter</br> <button id="btn_suiv7" type="button" name="button" class="btn_suivant">Suivant</button>`;
            content.innerHTML = `<img src="assets/img/pnj/Dame_pale.png"  class="img-avatar">`;
        document.getElementById('btn_suiv7').addEventListener("click", function() { // potion 
            document.getElementById('text_11').style.display = "none";
            document.getElementById('text_12').style.display = "block";
            text_12.innerHTML = `Pour vous aider dans votre quete de liberter, je vous donne cette potion d'invisibilité fait attention ses effets sont limité <br>bonne chance</br> <button id="btn_suiv8" type="button" name="button" class="btn_suivant">Suivant</button>`;
            content.innerHTML = `<img src="assets/img/item/Potion.png"  class="img-avatar">`;
            document.getElementById('btn_suiv8').addEventListener("click", function() {
            c2.innerHTML = "";
            choix3();
        });
        });
        });
        });
        document.getElementById('btn5').addEventListener("click", function() { // choix attaque
            document.getElementById('text_8').style.display = "none";
            document.getElementById('text_9').style.display = "block";
            text_9.innerHTML = `Vous vous approchez discretement de la personne et lui assener un coup dans le dos, malheuresement il s'agisait d'un pnj indispensable vous perde donc toute chance de vous echapper !<button id="btn_suiv5" type="button" name="button" class="btn_suivant">Suivant</button>`;
            document.getElementById('btn_suiv5').addEventListener("click", function() {
            document.getElementsByTagName("body")[0].innerHTML = "<img src='assets/img/ecran/lose.png'>";
            });
        });
        
}
function choix3() { //choix boire ou non 
    let text_13 = document.getElementById('text_13');
            document.getElementById('c3').style.display = "block";
            text_13.innerHTML = `Des le moment où vous penetrer dans la salle du trône vous senter l'aire se glacer et en levant les yeux vous apercevez la silhouette d'un géant emprisonné dans la glace face a vous, ainsi que la sortie juste derriere lui <button id="btn_suiv9" type="button" name="button" class="btn_suivant">Suivant</button> `;
            content.innerHTML = `<img src="assets/img/pnj/Seigneur.png"  class="img-avatar">`;
        document.getElementById('btn_suiv9').addEventListener("click", function() { 
            document.getElementById('text_13').style.display = "none";
            document.getElementById('text_14').style.display = "block";
            text_14.innerHTML = `A ce moment la vous prenez la potion dans votre poche, mais hésiter a la boire en pesant qu'il s'agit peut etre d'un piege <br> Que voulais vous faire</br><button type="button" id="btn6" name="button" class="btn_choice">Boire la potion et passer</button><button type="button" id="btn7" name="button" class="btn_choice">Ne pas la boire et passer</button>`;
        document.getElementById('btn6').addEventListener("click", function() { // choix boire
            document.getElementById('text_14').style.display = "none";
            document.getElementById('text_15').style.display = "block";
            text_15.innerHTML = `La potion a bien l'effet escompter et vous rend invisible <br> vous passer a coté du géant sans souci et réussisé à vous echapper</br><button id="btn_suiv10" type="button" name="button" class="btn_suivant">Suivant</button>`;
            content.innerHTML = `<img src="assets/img/porte.png"  class="img-avatar">`;
            document.getElementById('btn_suiv10').addEventListener("click", function() {
                document.getElementsByTagName("body")[0].innerHTML = "<img src='assets/img/ecran/victoire.png'>";

            });
            });
                document.getElementById('btn7').addEventListener("click", function() { // choix ne pas boire
                    document.getElementById('text_14').style.display = "none";
                    document.getElementById('text_16').style.display = "block";
                    text_16.innerHTML = `En passant a cote du géant, vous le reveiller et vous le voyez se lever en pointant son epée vers vous <br> Est-ce vous qui oser me defier, vous me sembler trop faible pour m'affronter</br> </br><button id="btn_suiv11" type="button" name="button" class="btn_suivant">Suivant</button>`;
                    content.innerHTML = `<img src="assets/img/ennemi/Seigneur.png"  class="img-avatar">`;
                document.getElementById('btn_suiv11').addEventListener("click", function() { 
                    document.getElementById('text_16').style.display = "none";
                    document.getElementById('text_17').style.display = "block";
                    text_17.innerHTML = `Maudisser votre propre faiblesse de ne pas avoir la force de m'affronter <br>Et maudisser le destin de vous avoir mit sur ma route</br><br>A se moment là le géant vous lance un rayon qui vous gele instantanément</br> <button id="btn_suiv12" type="button" name="button" class="btn_suivant">Suivant</button>`;
                    content.innerHTML = `<img src="assets/img/glace.png"  class="img-avatar">`;
                    document.getElementById('btn_suiv12').addEventListener("click", function() {
                        document.getElementsByTagName("body")[0].innerHTML = "<img src='assets/img/ecran/lose.png'>";
        });
    });
});
});     
}   