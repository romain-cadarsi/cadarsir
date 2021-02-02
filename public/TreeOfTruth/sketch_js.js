let height;
let weight;
let reducerate = 0.666;
let refposx;
let refposy;
let rightElements = 0;
let leftElements = 0;
let strokecolors;
let choosencolor = 'blue';
let pinkcolor =  [[245, 191, 239],[227, 148, 218],[255, 122, 215],[209, 117, 181],[252, 227, 252]];
let bluecolor =  [[191, 218, 245],[148, 197, 227],[122, 195, 255],[117, 158, 209],[227, 234, 252]];
let contrastcolors =[[[255,255,255],[0,0,0]],[[0,0,0],[255,255,255]]];
let contrastvalue = 0;


//Return 1 or -1
function personnalRandom(){
  let res;
  let rand = Math.random();
  if(rand>0.5){res = 1;}
  else{ res = -1;}
  return res;
}

function randomStroke(choosencolor){
  if(choosencolor === 'pink'){
    strokecolors = pinkcolor;
  }
  else if(choosencolor === 'blue'){
    strokecolors = bluecolor;
  }
  let rand = round(Math.random()*4);
return strokecolors[rand];
}

//return a Random Angle for branches
function personnalAngle(){
  let res = Math.random()* Math.PI*0.66 * personnalRandom();
  return res;
}

//Function a developper pour faire l'animation des lignes
/**function animline(debut,fin){
  let actualposx = debut.x;
  let actualposy = debut.y;
  let distx = (fin.x - debut.x)/10;
  let disty = (fin.y - debut.y)/10;
    for(let i =1;i<10;i++ ) {
        line(actualposx,actualposy,distx*i,disty*i);
        actualposx = distx*i;
        actualposy = disty*i;
    }
}
let refposx;
let refposy;

**/

class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class Branch{
  constructor(debut,fin){
    this.debut = debut;
    this.fin = fin;
    //animline(debut,fin);
    line(debut.x,debut.y,fin.x,fin.y);
  }
   
  branchit(max,len,i,sw){
    if(max == i){
      stroke(randomStroke(choosencolor));
      strokeWeight(6);
      point(this.fin.x,this.fin.y);
    }
    else{
    for(let j = 0; j<round((Math.random()*5)+3); j++){
       stroke(contrastcolors[contrastvalue][1]);
      strokeWeight(sw-1);
       refposx = this.fin.x;
       refposy = this.fin.y;
       let b = new Branch(new Point(refposx,refposy),new Point(refposx+sin(personnalAngle())*(len*reducerate),refposy-cos(personnalAngle())*(len*reducerate)));
       setTimeout(function(){ b.branchit(max,len*reducerate,i+1,sw-1); }, 300);
    }
    noLoop();
    }
  }  
}

function setup() {
  height = windowHeight;
  weight = windowWidth;
  createCanvas(weight,height);
}



function draw() {
  choosencolor = document.getElementById('color').value;
  contrastvalue = document.getElementById('contrast').value;
  let nbrec = document.getElementById('myRange').value;
  background(contrastcolors[contrastvalue][0]);
  translate(weight/2,height);
  strokeWeight(10);
  stroke(contrastcolors[contrastvalue][1]);
  let tronc = new Branch(new Point(0,0),new Point(0,-height/3));
  tronc.branchit(nbrec,height/3,1,nbrec);
}

function reload() {
  loop();
}
