let height,
  weight,
  refposx,
  refposy,
  strokecolors,
  nbBranches,
  details;

let reducerate = 0.666; //facteur de reduction des sous branches
let rightElements = 0;
let leftElements = 0;
let branches = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] ;
let defaultbranches = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] ;
let choosencolor = 'blue';
let pinkcolor =  [[245, 191, 239],[227, 148, 218],[255, 122, 215],[209, 117, 181],[252, 227, 252]];
let bluecolor =  [[191, 218, 245],[148, 197, 227],[122, 195, 255],[117, 158, 209],[227, 234, 252]];
let contrastcolors =[[['white'],['black']],[['black'],['white']]];
let contrastvalue = 0;
let points = [];
let leaves = [];
let d = new Date();
let step = 0;
let leavesdisplayed = 0;
let leavesanim = 0;
let count = 0;
let finish = 0;
let fallingleaves = []; 
//Return 1 or -1
function personnalRandom(){
  let res;
  let rand = Math.random();
  if(rand>0.5){res = 1;}
  else{ res = -1;}
  return res;
}
function changeColor(){
  if(choosencolor === 'pinkcolor'){
    choosencolor = pinkcolor;
  }
  else if(choosencolor === 'bluecolor'){
    choosencolor = bluecolor;
  }
}
//retourne une couleur aléatoire dans choosen color
function randomStroke(){
  let rand = round(Math.random()*4);
  return choosencolor[rand];
}


//return a Random Angle for branches
function personnalAngle(){
  let res = Math.random()* Math.PI*0.66 * personnalRandom();
  return res;
}

  //renvoie un 1/details de la droite allant de debut vers la fin de la branche
function getportion(debut,fin){
  let actualposx = debut.x;
  let actualposy = debut.y;
  let distx = (fin.x - debut.x)/details;
  let disty = (fin.y - debut.y)/details;
  return new Point(distx,disty);
}

class Point{
  constructor(x,y,col){
    this.x = x;
    this.y = y;
    this.col = col;
  }
}
class Leaves{
  constructor(x,y,col){
    this.x = x;
    this.y = y;
    this.col = col;
  }
}

class Branch{
  constructor(debut,fin,strokew,strokec,deep){
    push();
    this.debut = debut;
    this.fin = fin;
    if(strokew<1){
      this.strokew = 1;}
      else{
        this.strokew = round(strokew);}
        this.strokec = strokec;
        this.deep = deep;
        this.portion = getportion(debut,fin);
    //animline(debut,fin);
    branches[deep].push(this);
    let copy = Object.assign({},this);
    defaultbranches[deep].push(copy);
    pop();
}

//Fonction recursive, appelée en tout début
/**
max = max recursion
len = longueur normale
i = compteur de recursion
sw = StrokeWeight
deep = compteur de recursion aussi **/
branchit(max,len,i,sw,deep){
  //Si on est arrivé à la limite de recursion, ajouter des feuilles
  if(max == i){
      strokeWeight(10);
      let col = randomStroke(choosencolor);
      leaves.push(new Leaves(this.fin.x,this.fin.y,col));
      
  }
  else{
    //Nb de sous-branches qui peuvent naitre
    for(let j = 0; j<round(Math.random()*5)+nbBranches*1; j++){
      refposx = this.fin.x;
      refposy = this.fin.y;
      let b = new Branch(new Point(refposx,refposy),new Point(refposx+sin(personnalAngle())*(len*reducerate),refposy-cos(personnalAngle())*(len*reducerate)),sw/2,contrastcolors[contrastvalue][1], this.deep+1);
      b.branchit(max,len*reducerate,i+1,sw/2,b.deep);
    }
  }
}  
}

//Renvoie une chance de faire tomber une feuille
function getTinyChance(){
  let rand = Math.random()-0.9999;
  if(rand<0){
    rand = 0;}
    else{rand = 1;}
    return rand;
  }

//Renvoie une variation de x pour les feuilles tombantes
function randomxvariation(){
  let rand = round(Math.random()*4)-2;
  return rand;
}
