import Botao from "../../components/botao/Botao";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import {useParams} from 'react-router-dom'
import { getProduto, editarProduto } from "../../config/collection";
import { useEffect, useState } from "react";


export default function Editar(){
    console.log()
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const params = useParams()
    async function buscarProduto(){
        const produto = await getProduto(params.id)
        setNome(produto.nome)
        setValor(produto.valor)
        setQuantidade(produto.quantidade)
    }

    useEffect(() => {
        buscarProduto()
    }, [])

    function atualizaProduto(){
        // Colocando os valores das inputs em uma variavel só
        const valores = {
            nome,
            valor,
            quantidade
        }
        // Chamando função de editar lá no collection
        editarProduto(params.id, valores)
    }

    return (
        <div>
            <Cabecalho>Editar item</Cabecalho>
            <div className="formulario-cadastro">
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
            </div>
            <Botao className={"botao-cadastro"} onClick={atualizaProduto}>Salvar</Botao>
        </div>
    )
}