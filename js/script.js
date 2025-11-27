var tituloPagina = document.getElementById("titulo-pagina");
tituloPagina.textContent = "Monica  Nutrição";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var contador = 0; contador <= 4; contador++);{
  
var tdPeso = pacientes[contador].querySelector(".info-peso");
  var peso = tdPeso.textContent;

var tdAltura = pacientes[contador].querySelector(".info-altura");
  var altura = tdAltura.textContent;

var tdGordura = pacientes[contador].querySelector(".info-gordura");
  var gordura = tdGordura.textContent;

  var tdIMC = pacientes[contador].querySelector(".info-imc");
  var imc = tdIMC.textContent;


  }




function calculaImc(peso, altura){
var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
  
}






//var nome = document.getElementById("nome");
//nome.textContent = "Manu";

//var altura = document.getElementById("altura");
//altura.textContent = "1.65m";
//var gordura = document.getElementById("gordura");
//gordura.textContent = "5%";
//var imc = document.getElementById("imc");
//imc.textContent = "21.7";

//var CelulaPeso = document.getElementById("peso");
//var peso = CelulaPeso.textContent;

//if (peso < 0  ) {
 // CelulaPeso.textContent = "Peso inválido ";
//}