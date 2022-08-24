import Botao from "../../components/botao/Botao";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import './homepage.css'
import logoGrande from '../../assets/img/horizonte-reparos-logo.png'

export default function Homepage() {
    return(
        <div>
            <div className="pagina-inicial">
                <Cabecalho>Pagina inicial</Cabecalho>
                <div className="lista-botoes">
                    <a href="/vendas" ><Botao> Vendas</Botao></a>
                    <a href="/caixa"><Botao>Caixa</Botao></a>
                    <a href="/estoque"><Botao>Estoque</Botao></a>
                    <a href="/cadastro"><Botao>Cadastro</Botao></a>
                </div>
                <img className="logo-grande-pagina-inicial" src={logoGrande} alt="Logo Horizonte Reparos" />
            </div>
            

        </div>
    )
}