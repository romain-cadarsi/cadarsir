function ouvrirParametres(){
  document.getElementById("parametres").classList.remove('closed');
  document.getElementById("parametres").classList.add('open');
   document.getElementById('actionParametres').style.color = "black";
  openGear();
}

function fermerParametres(){
  document.getElementById("parametres").classList.remove('open');
  document.getElementById("parametres").classList.add('closed');
  txt = 'rgb(' + choosencolor[0][0] + ',' + choosencolor[0][1] + ',' + choosencolor[0][2] + ',1)';
   document.getElementById('actionParametres').style.color = txt;
  closeGear();
}

function changePrimaryColor(){
  let txt = 'rgb(' + choosencolor[0][0] + ',' + choosencolor[0][1] + ',' + choosencolor[0][2] + ',0.8)';
  document.getElementById('parametres').style.backgroundColor = txt;
  txt = 'rgb(' + choosencolor[0][0] + ',' + choosencolor[0][1] + ',' + choosencolor[0][2] + ',1)';
  document.getElementById('actionParametres').style.color = txt;
}

function closeGear(){
document.getElementById('openParametres').style.display = "flex";
document.getElementById('closeParametres').style.display = "none";
}
 function openGear(){
   document.getElementById('openParametres').style.display = "none";
   document.getElementById('closeParametres').style.display = "flex";
}

fermerParametres();
document.getElementById('openParametres').addEventListener("click",ouvrirParametres);
document.getElementById('closeParametres').addEventListener("click",fermerParametres);
