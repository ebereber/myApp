import React from 'react'
import useListProducts from '../../hooks/useListProducts'
import {
  Banner,
  BannerContainer,
  BannerInfo,
  BoxBtn,
  Heading,
  Image,
  Left,
  Right,
  SButton,
  SImg,
  Text,
} from './styles'

function Hero() {
  const { products } = useListProducts()
  if (!products.length) return null

  const heroProd = products[2]

  return (
    <BannerContainer>
      <Banner>
        <Left>
          <BannerInfo>
            <Heading> {heroProd.title} </Heading>
            <Text>
              La nueva lámpara que presenta una apariencia simple. Admite una variedad de cambios de
              iluminación. Ángulo de luz ajustable, igual que la temperatura del color y el brillo,
              que brindan una mejor experiencia de iluminación.
            </Text>
            <BoxBtn>
              <SButton to={`/detalle/${heroProd.id}`}>Cómo funciona ?</SButton>
            </BoxBtn>
          </BannerInfo>
        </Left>

        <Right>
          <Image>
            <SImg src={heroProd.pictureUrl} alt="" />
          </Image>
        </Right>
      </Banner>
    </BannerContainer>
  )
}

export default Hero
