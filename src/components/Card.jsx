import React from 'react';

function Card(props) {
    const size = props.size

    return (
        <div className={'card '.concat(size)}>
        </div>
    )
}

export default Card;