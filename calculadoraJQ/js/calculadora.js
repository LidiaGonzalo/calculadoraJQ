$(function() { //$(function())es lo mismo que ("document").ready(function ()
  //SALUDO 
  //$("#h1").html(function(){saludo()});
  //vaciar pantalla
  /*$("#pantalla").on("click",function(){
      $("#pantalla").val("");
    });*/
  $('#pantalla').on('click', function(){vaciar()});//vaciar pantalla
  //NÚMEROS
  $('#uno').on('click', function(){ numero('1')});
  $('#dos').on('click', function(){ numero('2')});
  $('#tres').on('click', function(){ numero('3')});
  $('#cuatro').on('click', function(){ numero('4')});
  $('#cinco').on('click', function(){ numero('5')});
  $('#seis').on('click', function(){ numero('6')});
  $('#siete').on('click', function(){ numero('7')});
  $('#ocho').on('click', function(){ numero('8')});
  $('#nueve').on('click', function(){ numero('9')});
  $('#cero').on('click', function(){ numero('0')});
  //TECLAS ESPECIALES 
  $('#coma').on('click', function(){ coma()});
  $('#retroceso').on('click', function(){ retroceso()});
  $('#c').on('click', function(){ vaciar()});
  //OPERACIONES CON UN NÚMERO
  $('#cuadrado').on('click', function(){ cuadrado()});
  $('#inverso').on('click', function(){ inverso()});
  $('#factorial').on('click', function(){ factorial()});
  $('#raiz').on('click', function(){ raiz()});
  $('#parteEntera').on('click', function(){ parteEntera()});
  $('#potenciaDos').on('click', function(){ potenciaDos()});
  //OPERACIONES CON DOS NÚMEROS
  $('#igual').on('click', function(){ calcular()});
  $('#suma').on('click', function(){ sumar()});
  $('#resta').on('click', function(){ restar(),signoNegativo(),vaciar()});
  $('#por').on('click', function(){ multiplicar()});
  $('#division').on('click', function(){ dividir()});
  $('#elevado').on('click', function(){ x_elevado_y()});
  //OPERACIONES CON N OPERANDOS
  $('#sumatorio').on('click', function(){ sumatorio()});
  $('#productorio').on('click', function(){ productorio()});
  
  
function saludo(){
  var fecha = new Date(), msj , acum=0, operacion="", negativo, x;//variables locales y funcionan para todas las funciones??
 
  if      (fecha.getHours() < 7)  { 
    msj = "Buenas noches , bienvenido/a a la calculadora de Lidia";
  }
  else if (fecha.getHours() < 12) { 
    msj = "Buenos días, bienvenido/a a la calculadora de Lidia";
  }
  else if (fecha.getHours() < 21) { 
    msj = "Buenas tardes , bienvenido/a a la calculadora de Lidia";
  }
  else                            { 
    msj = "Buenas noches , bienvenido/a a la calculadora de Lidia";
  }

  $("#h1").html(msj);//document.getElementById("h1").innerHTML    = msj;
}
  function vaciar(){
   pantalla.value="";
  }
  /*function iniciar(){
    //pantalla=document.getElementById("pantalla");
    pantalla=$("#pantalla");//¿por qué funciona la variable pantalla,si no llamo a iniciar() en ningún lado??
    saludo();
  }*/
  //teclas en pantalla
  function numero(num){
  
   pantalla.value=pantalla.value+num;
   
  }
//OPERACIONES ESPECIALES
   function coma(){
    var decimal=pantalla.value +".";

    pantalla.value=decimal;

  }
    
  function retroceso(){

    var numCifras=pantalla.value.length;
    var string=pantalla.value.toString();//convertir a cadena el número de la pantalla
    var retroceso=string.substring(0,numCifras-1);
    pantalla.value=retroceso;
  }
  //OPERACIONES CON UN NÚMERO
  function cuadrado(){
  
  pantalla.value=pantalla.value*pantalla.value;
  
  }
  function inverso(){
    
    pantalla.value=1/(pantalla.value);
  }
  function factorial(){
    var res=1;
    var factorial=pantalla.value;
    while(factorial !=0){
      res=res*factorial;
      factorial--;
    }
    pantalla.value=res;
  }
  function raiz(){
    pantalla.value=Math.sqrt(pantalla.value);
  }
  function parteEntera(){
      var numero=+pantalla.value;
      if(numero==+pantalla.value){//los números positivos redondeo por abajo
        pantalla.value=Math.floor(numero);
      }else if(numero==-pantalla.value){
        pantalla.value=-Math.ceil(numero);//números negativos redondeo para arriba
      }
      
  }
  function potenciaDos(){
      var n=pantalla.value;
      var res=Math.pow(2,n);
      pantalla.value=res;

    }
  
  //OPERACIONES CON DOS NÚMEROS
  function sumar(){
    operacion="+";
    acum=pantalla.value;
    vaciar();
  }
  function restar(){    
    operacion="-";    
    acum=pantalla.value;
    
  }

  function signoNegativo(){  
    negativo="-"+pantalla.value;
    pantalla.value=negativo;

  }
  function multiplicar(){
    operacion="x";
    acum=pantalla.value;
    vaciar();
  }
  function dividir(){
    operacion="&#247;";
    acum=pantalla.value;
    vaciar();
  }
  function x_elevado_y(){
    operacion="^";
    x=pantalla.value;
    vaciar();
  }
  //OPERACIONES CON N OPERANDOS
  function sumatorio() {
    acum=0;
    var lista = pantalla.value.split(".");
      for (var i=0; i<lista.length; i++){
        acum =acum+ (+lista[i]);//(+lista[i])->este "+" convierte el string a number
      }
    pantalla.value = acum;
  }
  function productorio() {
    acum=1;
    var lista = pantalla.value.split(".");
      for (var i=0; i<lista.length; i++){
        acum =acum* (+lista[i]);//(+lista[i])->este "+" convierte el string a number
      }
    pantalla.value = acum;
  }

  function calcular(){
    
    switch(operacion){
      
      case "+":
      //pantalla.value= acum + pantalla.value; suma strings, no valores-> ej: 20+5=205;
      pantalla.value= +acum + +pantalla.value;
      break;
      case "-":
      pantalla.value= +acum - +pantalla.value;
      break;
      case "x":
      pantalla.value= +acum * +pantalla.value;
      break;
      case "&#247;":
      pantalla.value= +acum / +pantalla.value;
      break;
      case "^" :
      pantalla.value=Math.pow(x,pantalla.value);
      break;
    }
   
  }
});
