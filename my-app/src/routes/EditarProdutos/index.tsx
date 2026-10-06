import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { TipoProduto } from "../../types/types";

export default function EditarProdutos() {
      //Através do destructuring, podemos acessar os dados do objeto e atribuir a variáveis
      //const { } = object
      const { id } = useParams<{id: string}>();

      const [produto, setProduto] = useState<TipoProduto>({ id: "", nome: "", preco: 0, estoque: 0 });

  return (
    <main>
          <h2>Editar Produtos</h2>

        {produto ?
          (<div>
            <p>Nome: {produto.nome}</p>
            <p>Preço: {produto.preco}</p>
          </div>) :
          (<p>Produto não encontrado</p>)
        }

    </main>
  )
}
