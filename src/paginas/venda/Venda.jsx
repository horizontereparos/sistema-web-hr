import alerta from '../../assets/img/alerta-desenvolvimento.png'
import './venda.css'
export default function Venda(){
    return (
        <div className="alerta-desenvolvimento">
            <h1 className='texto-alerta'>Pagina em desenvolvimento</h1>
            <img className='imagem-alerta' src={alerta} />
        </div>
    )
}