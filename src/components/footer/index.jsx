import React from 'react'
import {
  BaseFooter,
  SFooter,
  FooterContainer,
  FooterContent,
  FooterContentColumn,
  FooterContentHeadline,
  FooterHeadline,
  FooterNewsletter,
  FooterYear,
  Logo,
  NewsletterForm,
  SButton,
  SInput,
  SLi,
  SLink,
  SUl,
  SBox,
} from './styles'

const footertColums = [
  {
    id: 1,
    headline: 'Nosotros',
    links: ['Local', 'Terminos y Condiciones', 'Politicas de Privacidad'],
  },
  {
    id: 2,
    headline: 'Ayuda',
    links: ['Preguntas Frecuentes', 'Envío y Seguimiento', 'Contacto'],
  },
  {
    id: 3,
    headline: 'Seguinos',
    links: ['Instagram'],
  },
]

function Footer() {
  return (
    <FooterContainer>
      <SFooter>
        <FooterNewsletter>
          <FooterHeadline>Suscribite a nuestro newsletter</FooterHeadline>
          <NewsletterForm>
            <SInput type="email" name="email" placeholder="Email" />
            <SButton>Suscribirse</SButton>
          </NewsletterForm>
        </FooterNewsletter>
        <SBox>
          <FooterContent>
            <Logo>Dash Iluminacion</Logo>
            {footertColums.map(({ id, headline, links }) => (
              <FooterContentColumn key={id}>
                <FooterContentHeadline>{headline}</FooterContentHeadline>
                <SUl>
                  {links.map((link, index) => (
                    <SLi key={index + 1}>
                      <SLink to="/">{link}</SLink>
                    </SLi>
                  ))}
                </SUl>
              </FooterContentColumn>
            ))}
          </FooterContent>
        </SBox>
      </SFooter>
      <BaseFooter>
        <FooterYear>Copyright&nbsp;&copy;&nbsp;{new Date().getFullYear()}</FooterYear>
      </BaseFooter>
    </FooterContainer>
  )
}

export default Footer
