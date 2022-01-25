const escolhas = document.getElementById('selecaoPrincipal');
const selecionadoCesar = document.getElementById('entradaCesar')
const InputNumber = document.getElementById('numeroEntradaCesar');
const codificarRadio = document.getElementById('codificar');
const decodificarRadio = document.getElementById('decodificar');
const btnCodificar = document.getElementById('codificarMensagem')
const btnDecodificar = document.getElementById('decodificarMensagem');
const btnVoltar = document.getElementById('voltaTudo');
const paragrafoCodificado = document.getElementById('paragrafoCodificado');
const textoCaixa = document.getElementById('caixa-texto');
const caixaFinal = document.getElementById('caixaResultadoTexto');


//função que mostra uma caixa oculta após seleção de César.
escolhas.addEventListener('click', function(){
  
    if(escolhas.value === 'cesar'){
      selecionadoCesar.style.display = "flex";
    }else{
      selecionadoCesar.style.display = "none";
    }
});

// Caixas adicionando botões  para input\\
codificarRadio.addEventListener('click', function(){
  
    if(codificarRadio.checked){
      document.getElementById("caixa-texto").placeholder = "Digite o texto para codificar";
      btnCodificar.style.display = 'flex';
      btnDecodificar.style.display = 'none';
    }
    else{
      caixaFinal.style.display = "none";
    }
});
decodificarRadio.addEventListener('click', function(){
  
    if(decodificarRadio.checked){
      document.getElementById("caixa-texto").placeholder = "Digite o texto para decodificar";
      btnDecodificar.style.display = 'flex';
      btnCodificar.style.display = "none";
    }
    else{
      caixaFinal.style.display = "none";
    }
});



// Criando validação para aceitar apenas letras codificando\\

btnCodificar.addEventListener('click',function valida_nome() {
  var filtraNome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
  if (!filtraNome.test(document.getElementById("caixa-texto").value)) {
      document.getElementById("caixa-texto").value = '';
      document.getElementById("caixa-texto").placeholder = "Digite apenas letras";
      document.getElementById("caixa-texto").style.borderColor = "#ff0000";
      document.getElementById("caixa-texto").style.outline = "#ff0000";
      document.getElementById("caixa-texto").focus();
      document.getElementById("caixa-texto").onkeydown = function keydown_nome() {
          document.getElementById("caixa-texto").placeholder = "";
          document.getElementById("caixa-texto").style.borderColor = "#999999";
          document.getElementById("caixa-texto").style.outline = null;
      }
      return false;
  } 
  else if (codificarRadio.checked && escolhas.value === 'cesar'){
    decodificarRadio.disabled = true;
    btnCodificar.style.display = 'none';
    btnVoltar.style.display = 'flex';
    paragrafoCodificado.style.display = 'flex';
    textoCaixa.style.display = 'none';
    caixaFinal.style.display = 'flex';
    caixaFinal.innerHTML = codifica(textoCaixa.value, Number(InputNumber.value));
  } 
  else if (codificarRadio.checked && escolhas.value ==='base64'){
    decodificarRadio.disabled = true;
    btnCodificar.style.display = 'none';
    btnVoltar.style.display = 'flex';
    paragrafoCodificado.style.display = 'flex';
    textoCaixa.style.display = 'none';
    caixaFinal.style.display = 'flex';
    caixaFinal.innerHTML = codBase64(textoCaixa.value);
  }else{
    caixaFinal.style.display = 'none';
  }
  return true;
});

// Criando validação para aceitar apenas letras decodificando\\

btnDecodificar.addEventListener('click',function valida_nome() {
  var filtraNome = /^([a-zA-Zà-úÀ-Ú]|\s+)+$/;
  if (!filtraNome.test(document.getElementById("caixa-texto").value)) {
      document.getElementById("caixa-texto").value = '';
      document.getElementById("caixa-texto").placeholder = "Digite apenas letras";
      document.getElementById("caixa-texto").style.borderColor = "#ff0000";
      document.getElementById("caixa-texto").style.outline = "#ff0000";
      document.getElementById("caixa-texto").focus();
      document.getElementById("caixa-texto").onkeydown = function keydown_nome() {
        document.getElementById("caixa-texto").placeholder = "";
        document.getElementById("caixa-texto").style.borderColor = "#999999";
        document.getElementById("caixa-texto").style.outline = null;
      }
      return false;
  } 
  else if (decodificarRadio.checked && escolhas.value === 'cesar'){
    codificarRadio.disabled = true;
    btnDecodificar.style.display = 'none';
    btnVoltar.style.display = 'flex';
    paragrafoCodificado.style.display = 'flex';
    textoCaixa.style.display = 'none';
    caixaFinal.style.display = 'flex';
    caixaFinal.innerHTML = codifica(textoCaixa.value, Number(InputNumber.value));
  } 
  else if (decodificarRadio.checked && escolhas.value ==='base64'){
    codificarRadio.disabled = true;
    btnDecodificar.style.display = 'none';
    btnVoltar.style.display = 'flex';
    paragrafoCodificado.style.display = 'flex';
    textoCaixa.style.display = 'none';
    caixaFinal.style.display = 'flex';
    caixaFinal.innerHTML = codBase64(textoCaixa.value);
  }else{
    caixaFinal.style.display = 'none';
  }
  return true;
});


// Voltar ao início \\

btnVoltar.addEventListener('click', function(){

})

// ********************************************* \\
 

// função que codifica em Cesar;

const codifica = (texto, incremento) => {

    let codificado = "", code;
    for (let i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
        code = (((texto.charCodeAt(i) - 65) + incremento) % 26) + 65;
      }
      else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
        code = (((texto.charCodeAt(i) - 97) + incremento) % 26) + 97;
      }
      else if (texto.charCodeAt(i) === 32) {
        code = 32;
      }
      codificado += String.fromCharCode(code);
    }
    return codificado.toLowerCase();
}

// Função que decodifica;
const decodificaCesar = (texto, incremento) => {

    let decodificado = "", decode;
    for (let i = 0; i < texto.length; i++) {
      if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
        decode = (((texto.charCodeAt(i) - 90) - incremento) % 26) + 90;
      }
      else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
        decode = (((texto.charCodeAt(i) - 122) - incremento) % 26) + 122;
      }
      else if (texto.charCodeAt(i) === 32) {
        decode = 32;
      }
  
      decodificado += String.fromCharCode(decode);
    }
    return decodificado.toLowerCase();
  }
  


  // codificando na base 64;

  function codBase64(texto) {
    return btoa(texto);
  }
  
  //decodificando base64;
  function decodBase64(texto) {
    return atob(texto);
  }