 import 'core-js/es/array';
import React from 'react';

import Card from './Card.jsx';

function PinterestLayout() {


    return (
        <div className='pin_container'>
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            <Card size={rand()} />
            

        </div>
    )
}

function rand(){

    let size = ["small", "medium","large"]
    let randSize = size[Math.floor(Math.random() * size.length)];
    
    return  randSize
}

export default PinterestLayout;