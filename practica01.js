//----> VARIABLES <----

var nombre = "Dani";

//declarar una variable
var edad;

//inicializar variable
edad = 23;

edad

//variables más complejas
var elementos = ["computadora", "celular"];

var persona = {
    nombre: "Dani", 
    Edad: 23
}

persona;



//----> FUNCIONES <---

//Funciones Declarativas

function miFuncion() {
    return 3;
} 

miFuncion();

//Funciones de Expresión

var miFuncion = function(a,b) {
    return a + b;
}
miFuncion();

// ----> SCOPE <----

/*SCOPE GLOBAL*/
var nombre = "Dani";

/*SCOPE LOCAL*/
function fun() {
    var apellido = "Rodriguez";
    return nombre + "" + apellido
}

fun(); //Dani Rodriguez
/*
pero si yo llamo a la variable apellido que es local, no me la arrojara el navegador:
*/
console.log(apellido) // apellido is not defined

