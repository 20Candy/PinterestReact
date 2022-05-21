import React from 'react'
import user from '../images/userPinterest.png'
import OnHover from './CardHover'

function Card(props) {
    const { size } = props
    const { img } = props
    const { title } = props
    const { username } = props
    const { icon } = props
    const { likes } = props

    return (
        <div className={'card '.concat(size)}>

            <OnHover size={size} />
            <img src={img} alt="hover" />
            <h1>{title}</h1>
            <h2>{username}</h2>
            <img className="user" src={user} alt="user" />
            <img className="icon" src={icon} alt="icon" />
            <h3 className="likes">{likes}</h3>

        </div>
    )
}

export default Card
