function calcularMedia(botao) {
   const linha = botao.closest("tr");
//    console.log(linha);

    const nota1 = Number(linha.querySelector(".nota_1").value);
    const nota2 = Number(linha.querySelector(".nota_2").value);
    // console.log(nota1 + nota2);

    const media = (nota1 + nota2) / 2;
    //  console.log(media);

    const colunaMedia = linha.querySelector(".media");
    colunaMedia.textContent = media.toFixed(2);
    
    // const status = media >= 7 ? "Aprovado" : "Reprovado";

    let badge = "";
    if (media >= 7) {
        badge = '<span class="badge text-bg-success">Aprovado</span>';
    } else {
        badge = '<span class="badge text-bg-danger">Reprovado</span>';
    }

    const colunaStatus = linha.querySelector(".status");
    // colunaStatus.textContent = status;
    colunaStatus.innerHTML = badge;
}