import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import "../ItemListContainer/ItemListContainer.css"
import { Banner, BannerContainer, BannerInfo, Button, Heading, Image, Left, Right, SImg, Text } from "./styles";

function Hero() {
    
  return (
    <BannerContainer>
      <Banner>
        <Left>
          <BannerInfo>
            
			<Heading>Mi Smart LED Desk Lamp Pro</Heading>
			<Text>
			La nueva lámpara de escritorio que presenta una apariencia simple.
              Admite una variedad de cambios de iluminación. Ángulo de luz
              ajustable, igual que la temperatura del color y el brillo, que
              brindan una mejor experiencia de iluminación.
			</Text>
            <Button>
              Cómo funciona?
              <BiRightArrowAlt />
            </Button>
          </BannerInfo>
        </Left>

        <Right>
          <Image>
            <SImg
              src='https://www.darklightdesign.com/Media/6897/Seed-Design-Damo-D-Table-Lamp-1.jpg?anchor=center&mode=crop&width=1060&height=1060&rnd=131876945980000000'
              alt=''
            />
          </Image>
        </Right>
      </Banner>
    </BannerContainer>
  )
}

export default Hero;

