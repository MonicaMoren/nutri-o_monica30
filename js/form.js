var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event){
event.preventDefault();                                
 var form = document.querySelector('#form-adiciona');                               
//Extrair os dados do formulario
  var paciente = obtemPacienteDoFormulario(form);

  //Criando a linha e as celulas da tabela do novo paciente
  var pacienteTr = montaTr(paciente);
});

function obtemPacienteDoFormulario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(){}
