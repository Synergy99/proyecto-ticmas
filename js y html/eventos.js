/**
document.getElementById(id ="boton").onclick = function(){
    console.log("estamos capuraando nuestro primer evento");
    document.getElementById(id ="p1").innerHTML = "hola javaScript!!"
}
*/


document.addEventListener('click',function(){
    console.log('hola mundo desde eventlistener');
    document.getElementById(id ="p1").innerHTML = "hola javaScript!!"
})

document.getElementById(id = "color").addEventListener('click',function(){
    document.body.style.backgroundColor = "black"
})

document.getElementById(id = "color_default").addEventListener('click',function(){
    document.body.style.backgroundColor = "white"
})

document.getElementById(id = "ocultar").addEventListener('click',function(){
    document.getElementById("p1").style.display = "none"
})

