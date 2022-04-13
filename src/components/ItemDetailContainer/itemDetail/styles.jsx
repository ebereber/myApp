
import { Link } from "react-router-dom";
import styled from "styled-components"
import { b, space } from "../../../styles/Variables";

/* export const Content = styled.div`
  height: 100vh;
display: flex;
flex-direction: column;
margin-bottom: ${space.md};
@media ${b.md}{
	flex-direction: row;
}
` */
export const Left = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 
`
export const ProductImg = styled.img`
width: 100%;
object-fit: contain;
@media ${b.md}{
	width: 80%;

}
`
export const Right = styled.div`
 width: 100%;
 color: ${({theme}) => theme.text};
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${space.lg} 0 ;
  @media ${b.md}{
	  margin: 0;
  }
`

export const DetailContainer = styled.div`
width: 100%;
padding: ${space.lg};
@media ${b.md}{
	width: 70%;
}

`
export const ProductCategory = styled.span`
text-transform: uppercase;
  color: #495057;
  font-size: 14px;
` 

export const ProductName = styled.h1`
margin-top: ${space.lg};
`

export const ProductDetail = styled.p`
  letter-spacing: 1.5px;
  margin-top: ${space.lg};
  width: 100%;
  font-size: 14px;

`

export const ProductPrice = styled.h2`
  font-size: 18px;
 margin-top: ${space.lg};
`

export const Buttons = styled.div`
display: flex;
width: 100%;
`
/* export const Btn = styled(Link)`

    width: 40%;
    text-decoration: none;
    min-width: 150px;
    padding: 1rem 1rem;
    background-color: #000;
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    transition: .3s;
    margin-right: 5%;
    margin-top: 10px;
    transition: all 450ms ease;
  :hover {
    background: rgb(46, 46, 46);
    color: white;
  }
`
 */