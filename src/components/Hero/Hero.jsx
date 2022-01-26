import React from "react";
import "./Hero.css"; 
import { BiRightArrowAlt } from "react-icons/bi";
import "../ItemListContainer/ItemListContainer.css"
function Hero() {
    
  return (
    <div className="conta">
    <div className="hero-container">

      <div className="hero-left">
        <div className="det-info">
          <h1 className="titulo">Mi Smart LED Desk Lamp Pro</h1>
          <p className="p-detalle">
            La nueva lámpara de escritorio que presenta una apariencia simple.
            Admite una variedad de cambios de iluminación. Ángulo de luz
            ajustable, igual que la temperatura del color y el brillo, que
            brindan una mejor experiencia de iluminación.
          </p>
          <button className="btn-info">
            <p className="p-info">Cómo funciona? </p>
            <BiRightArrowAlt className="arrow" />
          </button>
        </div>
      </div>
        

        
        <div className="hero-right">
        <div className="imgheroDiv"> 
         <img className="img-hero"
          src="https://www.darklightdesign.com/Media/6897/Seed-Design-Damo-D-Table-Lamp-1.jpg?anchor=center&mode=crop&width=1060&height=1060&rnd=131876945980000000"
          alt=""
        /> 
</div> 
        </div>
      
    </div>
    </div>
  );
}

export default Hero;
