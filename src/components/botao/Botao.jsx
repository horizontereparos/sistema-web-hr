import './botao.css'

export default function Botao ({className, children, onClick}) {
    return <button className={className} onClick={onClick}>{children}</button>
}