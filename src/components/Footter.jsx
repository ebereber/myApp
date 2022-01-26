import React from 'react';
import styled from 'styled-components';

function Footter() {
  return <div>

<FooterContainer>
    <FooterBox>
        <TitleBox>
            <Title>Lemar Electricidad</Title>
        </TitleBox>
        <LinksBox>
            <Links>Nosotros</Links>
            <Links>Contacto</Links>
            <Links>Ubicación</Links>
        </LinksBox>
        <MediaWrapper>
            <Mediar>Insta</Mediar>
            <Mediar>Face</Mediar>
            <Mediar>twit</Mediar>
        </MediaWrapper>
        <CreditsContainer>
            <Credits>2022 Lemar Electricidad. Todos los derechos reservados</Credits>
        </CreditsContainer>

    </FooterBox>
</FooterContainer>

  </div>;
}

export default Footter;


const FooterContainer=styled.div`
 width: 100%;
 height:200px;
 position: absolute;
  bottom: 0;
`;
const FooterBox=styled.div`
    width: 40%;
    height: 50%;
    margin: 0 auto;
`;

const TitleBox=styled.div`
    
`;
const Title=styled.h3`
    
`;
const LinksBox =styled.div`
display: flex;

    
`;
const Links =styled.p`
    
`;

const MediaWrapper=styled.div`
    display: flex;
    `;

const Mediar=styled.div`
   
`
const CreditsContainer=styled.div`
    
`;
const Credits=styled.p`
    
`