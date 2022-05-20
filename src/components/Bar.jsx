import React from 'react';
import pinterest from './img/logo.png';
import user from './img/user.png';
import mensaje from './img/msg.png';
import busqueda from './img/search.png';
import notificacion from './img/bell.png';

function PinterestLayout() {

    return(
        <div className="header">
            <div className="headerLeft">
                <img src={pinterest} />
                <h3 className="focusBlack">Home</h3>
                <h3 className="focusWhite">Today</h3>
            </div>

            <div className="headerMid">
                <img src={busqueda} />
                <input type="text" placeholder="Search"/>
                
            </div>

            <div className="headerRight">
                <img src={notificacion} />
                <img src={mensaje} />
                <img src={user} />
            </div>
        </div>
    )

}