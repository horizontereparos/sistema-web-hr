import { useState } from "react";
import Botao from "../../components/botao/Botao";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import './cadastro.css'
import { addDoc } from "firebase/firestore";
import { produtosCollectionRef } from "../../config/collection";
import { recarregarPagina } from "../../components/functions/functions";


export default function Cadastro() {

    const [nome, setNome] = useState("")
    const [valor, setValor] = useState()
    const [quantidade, setQuantidade] = useState()

    async function cadastrarProduto(){
        const produto = await addDoc(produtosCollectionRef, {nome, valor, quantidade})
        alert('Produto cadastrado com sucesso!')
        recarregarPagina()
    }

    return (
        <div>
            <Cabecalho className='cabecalho-cadastro'>Cadastro de produtos</Cabecalho>
            <form className="formulario-cadastro">
                <div className="div-input-cadastro">
                    <label className="label-cadastro" htmlFor="nome">Nome</label>
                    <input 
                        className="input-cadastro" 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome (e.target.value)} 
                        name="nome" 
                        placeholder="Nome do Produto" 
                    />
                </div>

                <div className="div-input-cadastro">
                    <label className="label-cadastro" htmlFor="valor">Valor</label>
                    <input 
                        className="input-cadastro" 
                        type="number" 
                        value={valor} 
                        onChange={(e) => setValor(e.target.value)}
                        name="valor" 
                        placeholder="Valor"
                    />
                </div>

                <div className="div-input-cadastro">
                    <label className="label-cadastro" htmlFor="quantidade">Quantidade</label>
                    <input 
                        className="input-cadastro" 
                        type="number" 
                        value={quantidade} 
                        onChange={(e) => setQuantidade(e.target.value)} 
                        name="quantidade" 
                        placeholder="Quantidade"
                    />
                </div>


            </form>
                <Botao className={"botao-cadastro"} onClick={cadastrarProduto}>Cadastrar</Botao>
        </div>
    )
}