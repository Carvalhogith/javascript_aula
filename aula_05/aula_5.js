const API_URL = "https://6a557800e49d9eb2cc55c2ea.mockapi.io/produtos";
async function buscarProdutos() {
    try {
        const resposta = await fetch(API_URL);
        const produtos = await resposta.json();
        
        popularTabela(produtos);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }

}

function popularTabela(produtos) {
    let html = "";
    for (const produto of produtos) {
        html += `
            <tr>
                td></td>
                td></td>
                td></td>
                td></td>
                td></td>
                td></td>
            </tr>
        `;
    }
    document.querySelector("tbody").innerHTML = html;
}

function popularTabela(preco, quantidade) {}

buscarProdutos();
