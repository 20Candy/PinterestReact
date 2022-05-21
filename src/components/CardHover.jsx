import React from 'react'
import share from '../images/share.png'
import dots from '../images/dots.png'

function OnHover(props) {
    const { size } = props

    console.log(size)

    return (
        <div className={'Hover '.concat(size)}>
            <h1 className="perfil">Perfil</h1>
            <h1 className="guardar">Guardar</h1>
            <img className="share" src={share} />
            <img src={dots} />

        </div>
    )
}

export default OnHover
