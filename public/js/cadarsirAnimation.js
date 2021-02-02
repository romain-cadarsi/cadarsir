document.getElementsByClassName("nc")[0].addEventListener('mouseenter',function(){
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi R";}, 30);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Ro";}, 60);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Rom";}, 90);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Roma";}, 120);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Romai";}, 150);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Romain";}, 180);
});
document.getElementsByClassName("nc")[0].addEventListener('mouseleave',function(){
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Romain";}, 30);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Romai";}, 60);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Roma";}, 90);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Rom";},120);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi Ro";}, 150);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsi R";}, 180);
    setTimeout(function(){document.getElementById("prenom").innerHTML = "Cadarsir";}, 210);
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items: 1
})