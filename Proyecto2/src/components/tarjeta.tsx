import './tarjeta.css'

type TarjetaProps = {
  nombre: string
  apellido: string
  profesion: string
  imagen: string
}

function Tarjeta({ nombre, apellido, profesion, imagen }: TarjetaProps) {
  const nombreCompleto = `${nombre} ${apellido}`

  return (
    <article className="tarjeta">
      <img className="tarjeta__imagen" src={imagen} alt={`Retrato de ${nombreCompleto}`} />

      <div className="tarjeta__info">
        <h1 className="tarjeta__nombre">{nombreCompleto}</h1>
        <p className="tarjeta__profesion">{profesion}</p>
      </div>
    </article>
  )
}

export default Tarjeta
