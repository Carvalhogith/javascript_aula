const API_URL = "https://6a5fe634b1933e9d25fcc879.mockapi.io/produtos";

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
                <td>${produto.id}</td>
                <td>${produto.produto}</td>
                <td>${produto.preco}</td>
                <td>${produto.quantidade}</td>
                <td>${calcularTotal(produto.preco, produto.quantidade)}</td>
                <td>
                    <button class="btn btn-danger" onclick="apagarProduto(${produto.id})">
                    Remover
                    </button>
                    <button class="btn btn-primary" onclick="atualizarProduto(${produto.id})">
                    Atualizar
                    </button>
                </td>
            </tr>
    
        `;
  }
  const tdBody = document.querySelector("#table_produtos tbody");
  tdBody.innerHTML = html;
}
function calcularTotal(preco, quantidade) {
  const resultado = Number(preco) * Number(quantidade);
  return resultado.toFixed(2);
}

async function apagarProduto(id) {
  if (!confirm("Tem certeza que deseja apagar este produto?")) {
    return;

  }

  const url = `${API_URL}/${id}`;
  try {
    await fetch(url, {
      method: "DELETE",
    });
    buscarProdutos();
  } catch (error) {
    console.error(error);
    alert("Erro ao apagar produto: " + error);
  } finally {
    buscarProdutos();
  }
}

async function criarProduto() {

}

async function atualizarProduto(id) {}

buscarProdutos();
