import { useState } from "react";
<<<<<<< HEAD
import type { TipoUsuarioGit } from "../../types/types";




export default function Home() {
    document.title = "Home";

    const[usuarios, setUsuarios] = useState<TipoUsuarioGit[]>([]);
=======

import type { TipoUsuarioGit } from "../../types/types";

export default function Home() {
    document.title = "Home";

    const[usuarios,setUsuarios] = useState<TipoUsuarioGit[]>([]);
>>>>>>> 41fddf075f0dabe3a92e543d28375aeceb21383e

    return (
        <main>
            <h2>Home</h2>
<<<<<<< HEAD
        </main>
    )
}


// export default function Home() {


//     //Exemplo de destructuring
//     const estojo = {
//         nome: "Estojo",
//         cor: "Azul",
//         tamanho: 10
//     }
//     //Acessando os dados do objeto de forma direta
//     console.log(estojo.nome);
//     console.log(estojo.cor);
//     console.log(estojo.tamanho);

//     //Desestrurando o objeto DESTRCUTURING
//     const { nome, cor, tamanho } = estojo;
//     console.log(nome);
//     console.log(cor);
//     console.log(tamanho);

//     return (
//         <main>
//             <h2>Home</h2>
//             <div>
//                 <h3>Estojo</h3>
//                 <p>Nome: {estojo.nome}</p>
//                 <p>Cor: {cor}</p>
//                 <p>Tamanho: {tamanho}</p>
//             </div>


//         </main>
//     )
// } 
=======
            
        </main>
    )
} 

//Exemplo de destructuring
//const estojo = {
//    nome: "Estojo",
//    cor: "Azul",
//    tamanho: 10
//}
//Acessando os dados do objeto de forma direta
//console.log(estojo.nome);
//console.log(estojo.cor);
//console.log(estojo.tamanho);

//Desestrurando o objeto DESTRCUTURING
//const { nome, cor, tamanho } = estojo;
//console.log(nome);
//console.log(cor);
//console.log(tamanho);

//return (
//    <main>
//        <h2>Home</h2>
//        <div>
//            <h3>Estojo</h3>
//            <p>Nome: {estojo.nome}</p>
//            <p>Cor: {cor}</p>
//           <p>Tamanho: {tamanho}</p>
//        </div>
//
//
//    </main>
//)
>>>>>>> 41fddf075f0dabe3a92e543d28375aeceb21383e
