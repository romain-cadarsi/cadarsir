



//Recrée la simulation obtenue avec des lignes et l'affiche instantanément
function instantrefresh(){
  clear();
  background(contrastcolors[contrastvalue][0]);
  for(let i = 0; i<defaultbranches.length;i++){
    for(let j = 0; j<defaultbranches[i].length;j++){
      if(defaultbranches[i].length>0){
        stroke(defaultbranches[i][j].strokec);
        strokeWeight(defaultbranches[i][j].strokew);
        line(defaultbranches[i][j].debut.x,defaultbranches[i][j].debut.y,defaultbranches[i][j].fin.x,defaultbranches[i][j].fin.y);
      }
    }
  }
  for(let i= 0;i<leaves.length;i++){
    stroke(leaves[i].col);
    strokeWeight(20);
    point(leaves[i].x,leaves[i].y);
  }
}

//avant le dessin
function setup() {
  resetSketch();
}

function dessineligne(branche){
  line(branche.debut.x,branche.debut.y,branche.fin.x,branche.fin.y);
}
//Reinitialisation de toutes les variables, création d'un nouveau tronc et d'un arbre entier
function resetSketch(){
  branches = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] ;
  defaultbranches = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]] ;
  points = [];
  leaves = [];
  leavesdisplayed = 0;
  leavesanim = 0;
  step = 0;
  finish=0;
  height = windowHeight;
  weight = windowWidth;
  createCanvas(weight,height);
  choosencolor = document.getElementById('color').value;
  changeColor();
  contrastvalue = document.getElementById('contrast').value;
  let nbrec = document.getElementById('recursifVar').value;
  details = document.getElementById('detailsVar').value;
  nbBranches = document.getElementById('addBranchesVar').value;
  background(contrastcolors[contrastvalue][0]);
  strokeWeight(10);
  stroke(contrastcolors[contrastvalue][1]);
  let tronc = new Branch(new Point(0,0),new Point(0,-height/3),nbrec*nbrec,contrastcolors[contrastvalue][1], 0);
  branches[0].push(tronc);
  tronc.branchit(nbrec,height/3,1,nbrec*nbrec);
  fallingleaves = [];
  changePrimaryColor();

}


//Faire tomber les feuilles
function leavesfall(){
  //Pour toutes les feuilles, ajouter à fallingleaves si elles sont pretes à tomber
  for(let i= 0;i<leaves.length;i++){
    let rand = getTinyChance();
    if(rand == 1){
      fallingleaves.push(leaves[i]);
    }
  }

  for(let i = 0;i<fallingleaves.length;i++){
    //Si les feuilles sont tombées, les laisser par terre
    if(fallingleaves[i].y>0){
      fallingleaves.splice(i,1);
    }
    //faire tomber les feuilles
    else{
      fallingleaves[i].x += randomxvariation();
      fallingleaves[i].y += 1;
    
    }
  }
}


function animeBranches(branche){
  stroke(branche.strokec);
  strokeWeight(branche.strokew);
  let actual = branche.debut;
  let fin = branche.fin;
  let base = branche.portion;
  //Si on est pas arrivé à la fin, ajouter la variation vers la fin
  if(round(actual.y) != round(fin.y)){
    actual.x += base.x;
    actual.y += base.y;
    return new Point(actual.x,actual.y);
  }
  //Si on est arrivé à la fin, marquer la branche comme faite
  else{
    return new Point(null,null);
  }
}

//Afficher les feuilles avec une animation
function afficherFeuilles(){
  for(let i = 0; i<leaves.length;i++){
    strokeWeight(20);
    setTimeout(function(){ stroke(leaves[i].col);point(leaves[i].x,leaves[i].y); leavesdisplayed+=1;},Math.random()*500);
  }
}

//Fonction de dessin, s'effectue en boucle
function draw() {
  //Initialisation à chaque itération du compteur et de l'emplacement de départ
  count = 0;
  translate(weight/2,height);
  
  // Si finish = 0 alors l'animation n'est pas terminé
  if(finish == 0){
    //Si le rang de branche que l'on regarde est vide, alors on a finis, on affiche les feuilles;
    if(branches[step].length == 0){
      afficherFeuilles();
      finish+=1;
    }
    else{
      for(let i = 0;i<branches[step].length;i++){
     //Si les coordonnées des branches que l'on regarde sont nulles, on y est deja passé avec l'anim, on incremente count
     if(branches[step][i].debut.x == null && branches[step][i].debut.y == null){
       count+=1;
          //Si on a fait l'anim de toutes les branches, on passe au rang superieur de branches
          if(count == branches[step].length){
            step+=1;
          }
        }
        //On affiche l'animation des branches
        else{
          branches[step][i].debut = animeBranches(branches[step][i]);
          point(branches[step][i].debut.x,branches[step][i].debut.y);}
        }
      }
    }
//Si on a finis
else if(finish == 1){
  if(leavesanim == 0){

    if(leavesdisplayed == leaves.length){
      leavesanim+=1;
    }
  }
  else{
  //Si on trouve une feuille qui tombe
  if(fallingleaves.length>0){
    instantrefresh();
  }
  //animation des feuilles
  leavesfall();
}
}
}
//draw end
function keyPressed() {
 if(keyCode == 32){
   resetSketch();
 }
}

function reload() {
  loop();
}
