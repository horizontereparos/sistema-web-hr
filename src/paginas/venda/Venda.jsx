import alerta from '../../assets/img/alerta-desenvolvimento.png'
import Cabecalho from '../../components/cabecalho/Cabecalho'
import './venda.css'
export default function Venda(){
    return (
        <div>
            <Cabecalho className='cabecalho-alerta'>Alerta</Cabecalho>
            <div className="alerta-desenvolvimento">
                <h1 className='texto-alerta'>Pagina em desenvolvimento</h1>
                <img className='imagem-alerta' src={alerta} />
            </div>
        </div>
    )
}