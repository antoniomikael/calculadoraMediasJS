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
const inputNomeAtividade = document.getElementById("nome-atividade");
const notaMinima = prompt('Digite a média de acordo com sua instituição');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validaNome()) {
    alert('Atividade ja foi Inserida');
  }
  else{
    adicionaLinha();
    atualizaLinha();
    notaFinal();
    adicionaLinhafoot();
  }
});

const adicionaLinha = () => {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const notaAtividade = document.getElementById("nota-atividade");
  atividades.push(inputNomeAtividade.value);
  notas.push(parseFloat(notaAtividade.value));

  let linha = `<tr>`;
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${notaAtividade.value}</td>`;
  linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
  linha += `</tr>`;

  linhas += linha;
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

  const medias = somaDasnotas / notas.length;
  return medias;
};

const adicionaLinhafoot = () => {
  const media = notaFinal();
  document.getElementById("media-final-valor").innerHTML = media;
  document.getElementById("media-final-resultado").innerHTML =
    media >= notaMinima ? spanAprovado : spanReprovado;
};

const validaNome = () => {
  for (let i = 0; i < atividades.length; i++) {
    if (inputNomeAtividade.value === atividades[i]) {
       return true      
    }
    else{
        return false;
    }
  }

};
