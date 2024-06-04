const form = document.getElementById("form-atividade");
let linhas = "";
let linhasFoot = "";
const imgAprovado = '<img src="./imagens/aprovado.png" alt="emoji celebrando">';
const imgReprovado =
  '<img src="./imagens/reprovado.png" alt="emoji decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
let notaMinima;

do{
  const input = prompt('Digite a média de acordo com sua instituição');
  notaMinima = Number(input);
}
while(isNaN(notaMinima) || !Number.isInteger(notaMinima));


form.addEventListener("submit", (e) => {
  e.preventDefault();
    adicionaLinha();
    atualizaLinha();
    notaFinal();
    adicionaLinhafoot();
  
});

const adicionaLinha = () => {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const notaAtividade = document.getElementById("nota-atividade");
  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`Atividade ${inputNomeAtividade.value} ja foi inserida`)
  }
  else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(notaAtividade.value));
  
    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value}</td>`;
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;
  
    linhas += linha;
  }
  inputNomeAtividade.value = "";
  notaAtividade.value = "";
};

const atualizaLinha = () => {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
};

const notaFinal = () => {
  somaDasnotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasnotas += notas[i];
  }

  const media = somaDasnotas / notas.length;
  return media;
};

const adicionaLinhafoot = () => {
  const media = notaFinal();
  document.getElementById("media-final-valor").innerHTML = Math.round(media);
  document.getElementById("media-final-resultado").innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;
    
};

