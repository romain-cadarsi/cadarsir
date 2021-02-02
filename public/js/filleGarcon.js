let pseudo1 = document.getElementsByClassName("pseudo")[0];
let pseudo2 = document.getElementsByClassName("pseudo")[1];
let pseudo3 = document.getElementsByClassName("pseudo")[2];
let pseudo4 = document.getElementsByClassName("pseudo")[3];
let score1 = document.getElementsByClassName("score")[0];
let score2 = document.getElementsByClassName("score")[1];
let score3 = document.getElementsByClassName("score")[2];
let score4 = document.getElementsByClassName("score")[3];
let pret1 = document.getElementsByClassName("pret")[0];
let pret2 = document.getElementsByClassName("pret")[1];
let pret3 = document.getElementsByClassName("pret")[2];
let pret4 = document.getElementsByClassName("pret")[3];
let choosenPseudo1 = document.getElementsByClassName("choosenPseudo")[0];
let choosenPseudo2 = document.getElementsByClassName("choosenPseudo")[1];
let choosenPseudo3 = document.getElementsByClassName("choosenPseudo")[2];
let choosenPseudo4 = document.getElementsByClassName("choosenPseudo")[3];
let nonconnecte1 = document.getElementsByClassName("nonconnecte")[0];
let nonconnecte2 = document.getElementsByClassName("nonconnecte")[1];
let nonconnecte3 = document.getElementsByClassName("nonconnecte")[2];
let nonconnecte4 = document.getElementsByClassName("nonconnecte")[3];
let connecte1 = document.getElementsByClassName("connecte")[0];
let connecte2 = document.getElementsByClassName("connecte")[1];
let connecte3 = document.getElementsByClassName("connecte")[2];
let connecte4 = document.getElementsByClassName("connecte")[3];
let joueurs = ['','','',''];
let ngrok = "b5b94618.ngrok.io";
let prets = ['non','non','non','non'];
let roundConfirm = ['non','non','non','non'];
let start = document.getElementById('start');
let parent = document.getElementById('parent');
let jeu = document.getElementById('jeu');
let lettre = document.getElementById('lettre');
let inputTab = [document.getElementById('fille'),
document.getElementById('garcon'),
document.getElementById('villepays'),
document.getElementById('fruit'),
document.getElementById('legume'),
document.getElementById('fleur'),
document.getElementById('objet'),
document.getElementById('metier'),
document.getElementById('animal'),
document.getElementById('couleur'),
]
let monTab = ['Reponse1','Reponse2','Reponse3','Reponse4','Reponse5','Reponse6','Reponse7','Reponse8','Reponse9','Reponse10'];
let monConfirm = document.getElementById('monConfirm');
let x;
let nom1 = document.getElementById('nom1');
let nom2 = document.getElementById('nom2');
let nom3 = document.getElementById('nom3');
let nom4 = document.getElementById('nom4');
let reponse1 = document.getElementById('reponse1');
let reponse2 = document.getElementById('reponse2');
let reponse3 = document.getElementById('reponse3');
let reponse4 = document.getElementById('reponse4');
let rowReponses =  document.getElementById('rowReponses');
let compteurReponse = 0;
let roundCompteur = 1;




//---------------------------Outils-----------------------//
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkPlayer() {
	var player = getCookie("joueur");
	if (player != "") {
		attributePlace(player,getCookie('pseudo'));
		alertConnect(player,getCookie('pseudo'));
	} else {

	}
}

function alreadyConnected(){
	if(getCookie("joueur") !== ""){
		return true;
	}
	else{
		return false;
	}
}

function checkAllReady(){
	for(let i = 0; i<4 ; i++){
		if(prets[i] !== 'oui'){
			return false;
		}
	}
	return true;
}
function checkAllConfirm(){
	for(let i = 0; i<4 ; i++){
		if(roundConfirm[i] !== 'oui'){
			return false;
		}
	}
	return true;
}
function cestMonBoutton(player){
	if(getCookie('joueur') === player){
		return true;
	}
	else {return false;}
}
function checkForConnectedPlayer(){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/checkConnectedPlayer';
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.addEventListener('load',function(){
		let players = JSON.parse(requete.responseText);
		for(let i = 0 ; i<4 ; i++){
			if(players[i][0] == 0){}
				else{
					attributePlace("J"+(i+1) , players[i][1]);
				}
			}
		});
	requete.send(null);
}
function hideStart(){
	start.style.cssText = "opacity : 0";
	setTimeout(function(){ start.style.cssText = "display :none"; parent.style.cssText = "display : none"}, 500);
}
function showStart(){
	start.style.cssText = "opacity : 100%; display:table-cell";
	parent.style.cssText = "opacity : 100%; display:table";
}
function hideJeu(){
	jeu.style.cssText = "display:none";
}
function showJeu(){
	jeu.style.cssText = "display:block;opacity : 0%";
	jeu.style.cssText = "opacity : 100%";

}

const eventSource = new EventSource('https://'+ngrok+'/.well-known/mercure?topic=' + encodeURIComponent('http://cadarsir.fr/game/1'));
eventSource.onmessage = event => {
	useNews(JSON.parse(event.data));
}
function poidsLettre(lettre){
  let res = 0;
  switch(lettre){
    case 'A' : 
    res = 1;break;
    case 'B' : 
    res = 1;break;
    case 'C' : 
    res = 1;break;
    case 'D' : 
    res = 1;break;
    case 'E' : 
    res = 1;break;
    case 'F' : 
    res = 2;break;
    case 'G' : 
    res = 1;break;
    case 'H' : 
    res = 2;break;
    case 'I' : 
    res = J;break;
    case 'K' : 
    res = 2;break;
    case 'L' : 
    res = 1;break;
    case 'M' : 
    res = 1;break;
    case 'N' : 
    res = 1;break;
    case 'O' : 
    res = 2;break;
    case 'P' : 
    res = 1;break;
    case 'Q' : 
    res = 1;break;
    case 'R' : 
    res = 1;break;
    case 'S' : 
    res = 1;break;
    case 'T' : 
    res = 2;break;
    case 'U' : 
    res = 2;break;
    case 'V' : 
    res = 1;break;
    case 'W' : 
    res = 3;break;
    case 'X' : 
    res = 4;break;
    case 'Y' : 
    res = 3;break;
    case 'Z' : 
    res = 5;break;
  }
  return res;
}
//----------------------Mise en place----------------------//
function attributePlace(player,pseudo){
	let nouveaunom;
	switch(player){
		case 'J1' : 
		pseudo1.innerHTML = pseudo;
		score1.innerHTML = 0;
		nonconnecte1.classList.add('hide');
		connecte1.classList.remove('hide');
		joueurs[0] = pseudo;
		if(nom1.children[0].classList.length === 1 ){
			nouveaunom = document.createElement("div");
			nouveaunom.innerHTML = pseudo;
			nouveaunom.classList.add('nom');
      nouveaunom.classList.add('classalacon');
      nom1.insertBefore(nouveaunom,nom1.childNodes[0]);
    }
    break;
    case 'J2' : 
    pseudo2.innerHTML = pseudo;
    score2.innerHTML = 0;
    nonconnecte2.classList.add('hide');
    connecte2.classList.remove('hide');
    joueurs[1] = pseudo;
    if(nom2.children[0].classList.length === 1 ){
     nouveaunom = document.createElement("div");
     nouveaunom.innerHTML = pseudo;
     nouveaunom.classList.add('nom');
     nouveaunom.classList.add('classalacon');
     nom2.insertBefore(nouveaunom,nom2.childNodes[0]);
   }
   break;
   case 'J3' : 
   pseudo3.innerHTML = pseudo;
   score3.innerHTML = 0;
   nonconnecte3.classList.add('hide');
   connecte3.classList.remove('hide');
   joueurs[2] = pseudo;
   if(nom3.children[0].classList.length === 1 ){
     nouveaunom = document.createElement("div");
     nouveaunom.innerHTML = pseudo;
     nouveaunom.classList.add('nom');
     nouveaunom.classList.add('classalacon');
     nom3.insertBefore(nouveaunom,nom3.childNodes[0]);
   }
   break;
   case 'J4' : 
   pseudo4.innerHTML = pseudo;
   score4.innerHTML = 0;
   nonconnecte4.classList.add('hide');
   connecte4.classList.remove('hide');
   joueurs[3] = pseudo;
   if(nom4.children[0].classList.length === 1 ){
     nouveaunom = document.createElement("div");
     nouveaunom.innerHTML = pseudo;
     nouveaunom.classList.add('nom');
     nouveaunom.classList.add('classalacon');
     nom4.insertBefore(nouveaunom,nom4.childNodes[0]);
   }
   break;
 }
}

function useNews(data){
	if(data.joueurConnect === 'true'){
		attributePlace(data.joueur,data.pseudo);
	}
	else if(data.startGame === 'true'){
		startGame();
	}
	else if(data.pret === 'true'){
		mettrePret(data.joueur);
		if(checkAllReady()){
			showStart();
		}
		else{
			hideStart();
		} 
	}
	else if(data.round === 'true'){
		confirmRound(data.joueur);
		if(checkAllConfirm()){
      hideJeu();
      showRowReponses();
      lancerCompareReponse();
    }
  }
  else if(data.lettreAlert === 'true'){
    chooseLettre(data.lettre);
  }
  else if(data.reponseBool === 'true'){
    setReponse(data.joueur,data.reponse);
    setTimeout(function(){compareReponse();}, 3000);
  }
  else if(data.startRoundAlert ==='true'){
    startGame();
  }
}
function confirmRound(joueur){
	if(getCookie("joueur") === joueur){
		if(monConfirm.classList[1] === 'ready'){
			monConfirm.classList.remove('ready');
		}
		else{
			monConfirm.classList.add('ready');
		} 
	}
	switch(joueur){
		case "J1" : 
		if(roundConfirm[0] === 'oui'){
			roundConfirm[0] = 'non';
		}
		else{
			roundConfirm[0] = 'oui';
		}
		break;
		case "J2" : 
		if(roundConfirm[1] === 'oui'){
			roundConfirm[1] = 'non';
		}
		else{
			roundConfirm[1] = 'oui';
		}
		break;
		case "J3" : 
		if(roundConfirm[2] === 'oui'){
			roundConfirm[2] = 'non';
		}
		else{
			roundConfirm[2] = 'oui';
		}
		break;
		case "J4" : 
		if(roundConfirm[3] === 'oui'){
			roundConfirm[3] = 'non';
		}
		else{
			roundConfirm[3] = 'oui';
		}
		break;   
	}
}
function mettrePret(joueur){
	switch(joueur){
		case "J1" : 
		if(pret1.classList[1] === 'ready'){
			prets[0] = 'non';
			pret1.classList.remove('ready');pret1.classList.add('notready');
		}
		else{
			prets[0] = 'oui';
			pret1.classList.remove('notready');pret1.classList.add('ready');
		}
		break;
		case "J2" : 
		if(pret2.classList[1] === 'ready'){
			prets[1] = 'non';
			pret2.classList.remove('ready');pret2.classList.add('notready');
		}
		else{
			prets[1] = 'oui';
			pret2.classList.remove('notready');pret2.classList.add('ready');
		}
		break;
		case "J3" : 
		if(pret3.classList[1] === 'ready'){
			prets[2] = 'non';
			pret3.classList.remove('ready');pret3.classList.add('notready');
		}
		else{
			prets[2] = 'oui';
			pret3.classList.remove('notready');pret3.classList.add('ready');
		}
		break;
		case "J4" : 
		if(pret4.classList[1] === 'ready'){
			prets[3] = 'non';
			pret4.classList.remove('ready');pret4.classList.add('notready');
		}
		else{
			prets[3] = 'oui';
			pret4.classList.remove('notready');pret4.classList.add('ready');
		}
		break;   
	}
}
//-----------------------------------XML-----------------------------//


function alertConnect(joueur,pseudo){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/playerConnect?joueur=';
	url += joueur + "&pseudo=" + pseudo;
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.send(null);
}
function alertPret(joueur){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/playerPret?joueur=' + joueur;
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.send(null);
}
function wipeGame(){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/wipeGame';
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.addEventListener('load',function(){

	});
	requete.send(null);
	deleteCookies();
}
function alertConfirmRound(){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/playerConfirmRound?joueur=' + getCookie('joueur');
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.send(null);
}

function envoyerReponse(question,reponse){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/envoyerReponse?joueur=' + getCookie('joueur') + '&question=' + question +"&reponse=" + reponse;
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.send(null);
}
function alertConfirmStartGame(){
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/startGame';
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
  requete.send(null);
}
function alertLettre(){
  let url = 'https://cadarsir.fr/index.php/FilleGarcon/chooseLettre?lettre=' + randomLetter();
  let requete = new XMLHttpRequest();
  requete.open('GET', url, true);
  requete.send(null);
}
function alertConfirmStartRound(round){
  let url = 'https://cadarsir.fr/index.php/FilleGarcon/startRound?round='+round;
  let requete = new XMLHttpRequest();
  requete.open('GET', url, true);
  requete.send(null);
}



//----------------------------Cookies-------------------------------//

function deleteCookies(){
	document.cookie = "joueur=; expires=Mon, 02 Oct 2000 01:00:00 GMT; path=index.php";
	document.cookie = "pseudo=; expires=Mon, 02 Oct 2000 01:00:00 GMT; path=index.php";
}

function giveMasterCookie(){
	document.cookie = 'master=true';
}
function giveCookieConnect(joueur,pseudo){
	document.cookie = 'joueur='+joueur;
	document.cookie = 'pseudo='+pseudo;
	let url = 'https://cadarsir.fr/index.php/FilleGarcon/addPlayer?joueur=' + joueur + "&pseudo=" + pseudo;
	let requete = new XMLHttpRequest();
	requete.open('GET', url, true);
	requete.send(null);
}

//------------------------------Jeu----------------------------//
function startGame(){
  if(roundCompteur < 6){
   hideStart();
   hideRowReponses();
   showJeu();
   blackReponse();
   resetColorTimer();
   compteurReponse = 0;
   roundConfirm = ['non','non','non','non'];
   if(monConfirm.classList[1] === 'ready'){
    monConfirm.classList.remove('ready');
  }


  if(getCookie('joueur') == 'J1'){
    alertLettre();
  }
  setTimeout(function(){startTimer()}, 2000);
}
else{
  
}
}

function lancerCompareReponse(){
	envoyerReponse(compteurReponse,monTab[compteurReponse]);
	
	console.log(compteurReponse);
	compteurReponse +=1 ;
	setTimeout(function(){ blackReponse(); envoyerReponse(compteurReponse,monTab[compteurReponse]);
		
		console.log(compteurReponse);
		compteurReponse +=1 ;
		setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
			
			console.log(compteurReponse);
			compteurReponse +=1 ;
			setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
				
				console.log(compteurReponse);
				compteurReponse +=1 ;
				setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
					
					console.log(compteurReponse);
					compteurReponse +=1 ;
					setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
						
						console.log(compteurReponse);
						compteurReponse +=1 ;
						setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
							
							console.log(compteurReponse);
							compteurReponse +=1 ;
							setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
								
								console.log(compteurReponse);
								compteurReponse +=1 ;
								setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
									
									console.log(compteurReponse);
									compteurReponse +=1 ;
									setTimeout(function(){ blackReponse();envoyerReponse(compteurReponse,monTab[compteurReponse]);
										
										console.log(compteurReponse);
										compteurReponse +=1 ;
                    roundCompteur += 1;
                    setTimeout(function(){if(getCookie('joueur') === "J1"){alertConfirmStartRound(roundCompteur);}}, 6000);
                  }, 6000);
								}, 6000);
							}, 6000);
						}, 6000);
					}, 6000);
				}, 6000);
			}, 6000);
		}, 6000);
	}, 6000);
}
function compareReponse(){
  let donnerPoints = ['oui','oui','oui','oui'];
  greenReponse(reponse1,reponse2);
  greenReponse(reponse3,reponse4);
  if(reponse1.innerHTML == reponse2.innerHTML){
    donnerPoints[0] = "non";
    donnerPoints[1] = "non";
    redReponse(reponse1,reponse2);
  }
  if(reponse2.innerHTML == reponse3.innerHTML){
    donnerPoints[1] = "non";
    donnerPoints[2] = "non";
    redReponse(reponse2,reponse3);
  }
  if(reponse3.innerHTML == reponse4.innerHTML){
    donnerPoints[2] = "non";
    donnerPoints[3] = "non";
    redReponse(reponse3,reponse4);
  }
  if(reponse1.innerHTML == reponse3.innerHTML){
    donnerPoints[0] = "non";
    donnerPoints[2] = "non";
    redReponse(reponse1,reponse3);
  }
  if(reponse1.innerHTML == reponse4.innerHTML){
    donnerPoints[0] = "non";
    donnerPoints[3] = "non";
    redReponse(reponse1,reponse4);
  }
  if(reponse2.innerHTML == reponse4.innerHTML){
    donnerPoints[1] = "non";
    donnerPoints[3] = "non";
    redReponse(reponse2,reponse4);
  }

  for(let i = 0 ; i<4 ; i++){
    if(donnerPoints[i] == 'oui'){
      if( i == 0){
        givePoints(score1,lettre.innerHTML);
      }
      else if(i == 1){
        givePoints(score2,lettre.innerHTML);
      }
      else if(i == 2){
        givePoints(score3,lettre.innerHTML);
      }
      else if(i == 3){
        givePoints(score4,lettre.innerHTML);
      }
    }
  }
}

function redReponse(freponse,sreponse){
  freponse.style.cssText = "color : red";
  sreponse.style.cssText = "color : red";
}
function greenReponse(freponse,sreponse){
  freponse.style.cssText = "color : green";
  sreponse.style.cssText = "color : green";
}

function blackReponse(){
  reponse1.style.cssText = "color : black";
  reponse2.style.cssText = "color : black";
  reponse3.style.cssText = "color : black";
  reponse4.style.cssText = "color : black";
}

function givePoints(score , lettre){
  score.innerHTML = (score.innerHTML * 1 ) + poidsLettre(lettre);
}

function showRowReponses(){
	rowReponses.style.cssText = "display : flex; opacity : 0;";
	setTimeout(function(){rowReponses.style.cssText = "display :flex;opacity : 1;"}, 500);
}
function hideRowReponses(){
	rowReponses.style.cssText = "display : none;";
}

function randomLetter() {
	let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let charactersLength = characters.length;
	return characters.charAt(Math.floor(Math.random() * charactersLength));
}

function chooseLettre(lettredonne){
	lettre.style.cssText = "top:0px; opacity: 0%;";
	lettre.innerHTML = lettredonne;
	lettre.style.cssText = "top:35px; opacity: 100%;";
}
function saveTab(){
	for(let i = 0; i<monTab.length;i++){
		monTab[i] = normalizeReponse(inputTab[i].value);
	}
	for(let i = 0; i<monTab.length;i++){
		inputTab[i].value = "";
	}
}
function normalizeReponse(reponse){
  let res = reponse.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let finalres = res.toLowerCase();
  return finalres;
}
function startTimer(){
	var countDownDate = new Date().getTime()+300000;

	x = setInterval(function() {

		var now = new Date().getTime();

		var distance = countDownDate - now;

		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("timer").innerHTML =  minutes + ":" + seconds + " ";
		if(distance <60000){
			criticalTimer();
		}
		if (distance < 0) {
			saveTab();
			arreterTimer();
			alertConfirmRound();
    }
  }, 1000);}
	function criticalTimer(){
		document.getElementById('timer').style.cssText= "color : red;"
	}
  function resetColorTimer(){
    document.getElementById('timer').style.cssText= "color : black;"
  }
  function arreterTimer(){
    clearInterval(x);
  }

  function setReponse(joueur,rep){
    switch(joueur){
     case "J1" : 
     reponse1.innerHTML = rep;
     break;
     case "J2" : 
     reponse2.innerHTML = rep;
     break;
     case "J3" : 
     reponse3.innerHTML = rep;
     break;
     case "J4" : 
     reponse4.innerHTML = rep;
     break;   
   }
 }
 checkPlayer();
 checkForConnectedPlayer();
 hideStart();
 hideJeu();
 hideRowReponses();