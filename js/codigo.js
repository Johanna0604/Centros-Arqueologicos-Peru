//CAMBIO DE COLOR AL TITULO


function color(){
    //formato: RGB(a,b,c)
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);

    document.querySelector("#titulo").style.color="rgb("+a+","+b+","+c+")";
    //setTimeout("color()",1500); //1500ms = 1.5 seg

}

//color();
//otra forma de llamar a la funcion
//document.body.setAttribute("onload","color()");
//otra forma de llamar a la funcion
setInterval(color, 1500); //no usar setTimeou cuando uso este


//CARRUSEL DE IMAGENES CON DESVANECIMIENTO

function desvanecer(){
    document.querySelector("#baner").style.opacity=0;
    document.querySelector("#baner").style.transition="all 3s";
    setTimeout("carrusel()",2000);
}

var i = 1;
function carrusel(){
    i++;
    if(i>7) i = 1;
    document.querySelector("#baner").setAttribute("src","../imagenes/baner/baner" + i + ".jpg");
    document.querySelector("#baner").style.opacity=1;
    document.querySelector("#baner").style.transition="all 3s";
    setTimeout("desvanecer()",2000);
}

desvanecer();
//carrusel();


//PARA REDES SOCIALES

function social(n){
    switch(n){
        case 0: window.open("http://www.facebook.com");break;
        case 1: window.open("http://www.twitter.com");break;
        case 2: window.open("http://www.instagram.com");break;

    }
}

//PARA LOS CENTROS CULTURALES (CAMBIO DE IMAGEN)
function menu(n){
    if(n==1){
        document.querySelector("#img-lugar").src="../imagenes/articulos/caral.jpg";
        document.querySelector("#tit").innerHTML="Caral";

    }
    else if(n==2){
        document.querySelector("#img-lugar").src="../imagenes/articulos/chanchan.jpg";
        document.querySelector("#tit").innerHTML="Chan Chan";
    }
    else if(n==3){
        document.querySelector("#img-lugar").src="../imagenes/articulos/chullpas.jpg";
        document.querySelector("#tit").innerHTML="Chullpas";
    }
    else if(n==4){
        document.querySelector("#img-lugar").src="../imagenes/articulos/kuelap.jpg";
        document.querySelector("#tit").innerHTML="Kuelap";
    }
    else if(n==5){
        document.querySelector("#img-lugar").src="../imagenes/articulos/sipan.jpg";
        document.querySelector("#tit").innerHTML="Sipan";
    }
     else if(n==0){
        document.querySelector("#img-lugar").src="../imagenes/articulos/mp.jpg";
        document.querySelector("#tit").innerHTML="Centros Turísticos";
    }
    
}


