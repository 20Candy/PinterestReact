import React from 'react'
import pinterest from '../images/logo.png'
import user from '../images/user.png'
import mensaje from '../images/msg.png'
import busqueda from '../images/search.png'
import notificacion from '../images/bell.png'
import arrow from '../images/arrow.png'

function Bar() {
    return (
        <div className="header">
            <div className="headerLeft">
                <img src={pinterest} />
                <h3 className="focusBlack">Inicio</h3>
                <h3 className="focusWhite">Hoy</h3>
            </div>

            <div className="headerMid">
                <img src={busqueda} />
                <input type="text" placeholder="Buscar" />

            </div>

            <div className="headerRight">
                <img src={notificacion} />
                <img src={mensaje} />
                <img src={user} />
                <img src={arrow} />
            </div>
        </div>
    )
}
export default Bar
