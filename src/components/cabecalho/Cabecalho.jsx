import './cabecalho.css'
import logoImg from '../../assets/img/horizonte-reparos-logo.png'

export default function Cabecalho ({className, children}) {
    return (
        <div className={className}>
            <header className='cabecalho'>
                <a href='/'><img className='logo-cabecalho' src= {logoImg} alt="Logo Horizonte Reparos"/></a>
                <h1 className="titulo-cabecalho">{children}</h1>
                <div></div>
            </header>
        </div>
    )
}