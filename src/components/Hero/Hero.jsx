import React from 'react'
import "./Hero.css"
import {BiRightArrowAlt} from "react-icons/bi"

function Hero() {
    return (
        <div className='hero-container'>
            <div className="hero-left">
                <div className="det-info">
            <h1 className='titulo'>Mi Smart LED  Desk Lamp Pro</h1>
            <p className='p-detalle'>La nueva lámpara de escritorio que presenta una apariencia simple. Admite una variedad de cambios de iluminación. Ángulo de luz ajustable, igual que la temperatura del color y el brillo, que brindan una mejor experiencia de iluminación.</p>
             <button className='btn-info'>
                <p className='p-info'>Cómo funciona? </p>  
                <BiRightArrowAlt className='arrow'/>
               </button>
               </div>
            </div>
            
            <div className="hero-rigth">
                
                    <img src="https://homekitnews.com/wp-content/uploads/2019/01/Mi-desk-lamp-pro-fi.jpg" alt="" />
                
            </div>
           
        </div>
    )
}

export default Hero
