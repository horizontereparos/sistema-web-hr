import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { recarregarPagina } from "../components/functions/functions";
import { db } from "./config";

export const produtosCollectionRef = collection(db, 'produtos')


export const getProdutos = async () => {
    const data = await getDocs(produtosCollectionRef)
    return(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
}

//criando função para exclusão de produtos
export async function deletarProduto(id){
    const produtoDoc = doc(db, 'produtos', id)
    await deleteDoc(produtoDoc)
    alert('Produto deletado do estoque!')
    recarregarPagina()
}

// criando função para editar quantidade do produto
/**
 * id: id do documento
 * valores: valores novos
 */
export async function editarProduto(id, valores){
    // pego a referencia do documento no firestore
    const documentRef = doc(produtosCollectionRef, id);

    // Atualizo os valores do documento 
    await setDoc(documentRef, valores);
    alert('Produto editado!')
    window.history.back()
}


export async function getProduto(id){
    const produtosCollectionRef = doc(db, 'produtos', id);
    const docRef = await getDoc(produtosCollectionRef);
    return docRef.data()
}
