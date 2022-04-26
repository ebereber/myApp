import styled from 'styled-components'
import { b, btnReset, fontSizes, space } from '../../styles/Variables'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border-top: 1px solid ${({ theme }) => theme.text};
  
`

export const SFooter = styled.footer`
  width: 100%;
  height: 100%;
  bottom: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: ${space.xl} 0 5px 0;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  @media ${b.md} {
    max-width: calc(100% - 80px);

  }
`

//NEWSLETTER

export const FooterNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${space.xl};
`

export const FooterHeadline = styled.h4`
  font-size: ${fontSizes.lg};
  margin-bottom: ${space.md};
`

export const NewsletterForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  @media ${b.md} {
    flex-direction: row;
  }
`
export const SInput = styled.input`
  padding: ${space.sm} ${space.md};

  margin-bottom: ${space.md};
  &:focus {
    outline: 0;
  }
  @media ${b.md} {
    margin-right: ${space.sm};
    margin-bottom: 0;
    width: 300px;
  }
`
export const SButton = styled.button`
  ${btnReset}
  cursor: pointer;
  padding: ${space.sm} ${space.md};
  border: 1px solid white;
`
//CONTENT

export const FooterContent = styled.div`
  display: grid;
  font-size: ${fontSizes.sm};
  min-height: 20vh;
  width: 100%;
  grid-template-columns: 1fr;
  gap: ${space.md};
  text-align: center;
  margin-bottom: ${space.xl};
  @media ${b.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const SBox = styled.div`
width: 100%;
display: flex;
justify-content: center;
@media ${b.sm}{
  justify-content: center;
  
}
`
export const FooterContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`
export const FooterContentHeadline = styled.h3`
margin-bottom: ${space.md};
`
export const SUl = styled.ul`
`
export const SLi = styled.li`
margin-bottom: ${space.sm};
`
export const SLink = styled(Link)`
text-decoration:none;
color: inherit;
transition: color .2s ease;
&:hover{
	opacity: .5;
}
`

//BASEFOOTER
export const Logo = styled.h3`
  text-align: start;
`

export const BaseFooter = styled.div`
font-size: ${fontSizes.xs};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
 
  
  border-top: 1px solid ${({ theme }) => theme.text};
`

export const FooterYear = styled.span`
 padding: ${space.sm};`
export const Socials = styled.div``
