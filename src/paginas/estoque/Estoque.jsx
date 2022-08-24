import Cabecalho from "../../components/cabecalho/Cabecalho";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { deletarProduto, getProdutos } from "../../config/collection";
import './estoque.css'


export default function Estoque(){
    
    const [produtos, setProdutos] = useState([])
    const [busca, setBusca] = useState('')
    const navegate = useNavigate()

    useEffect(() => {
       async function buscarProdutos(){
           const result = await getProdutos()
            setProdutos(result)
       } buscarProdutos()
    }, [])

    const filtroBusca = busca.length > 0 
        ? produtos.filter(item => (item.nome.includes(busca.trim())))
        : produtos??[]
        console.log(busca)

    function onClickEditar(id){
        navegate(`/editar/${id}`)
    }

    return(
        <div>
            <Cabecalho>Estoque</Cabecalho>
            <form className="formulario-busca">
                <label className='label-busca' htmlFor="busca">Busca:</label>
                <input className="input-busca" 
                    type="text" 
                    name="busca"
                    onChange={(ev) => setBusca(ev.target.value)}
                    value={busca}
                    />
            </form>

            <div className="estoque">
                <ul className="estoque-lista">
                    <div className="cabecalho-lista">
                        <li className="item-cabecalho">Produto</li>
                        <li className="item-cabecalho">Valor</li>
                        <li className="item-cabecalho">Quantidade</li>
                        <li className="item-cabecalho">Funções</li>
                    </div>
                    {filtroBusca.map(produto => {
                        return(
                            <div className="lista" key={produto.id}>
                                
                                <div className="div-lista">
                                    <li className="item-lista">{produto.nome}</li>
                                    <li className="item-lista">R$ {produto.valor}</li>
                                    <li className="item-lista">{produto.quantidade}</li>
                                    <div className="div-botao-estoque">
                                        <button className="botao-item" onClick={() => deletarProduto(produto.id)}>Excluir</button>
                                        <button className="botao-item" onClick={() => onClickEditar(produto.id)}>Editar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}