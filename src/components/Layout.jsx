import 'core-js/es/array'
import React from 'react'
import { data_list } from '../posts'
import Card from './Card.jsx'

function PinterestLayout() {
    return (
        <div className="pin_container">

            {
                data_list.map((object) => (
                    <Card size={object.size} img={object.img} title={object.title} username={object.user} icon={object.reaction} likes={object.likes} />
                ))
            }
        </div>

    )
}

export default PinterestLayout
