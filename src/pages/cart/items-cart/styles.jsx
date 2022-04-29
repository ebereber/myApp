import styled from "styled-components";
import {FiTrash2} from "react-icons/fi"
import { b } from "../../../styles/Variables";

export const Product = styled.div` 
width: 100%;
display: flex;
margin-bottom: 1rem;

@media ${b.md}{
width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  flex-direction: row;
}
 
`
export const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    @media ${b.md}{
        flex-direction: row;
        width: 20%;
    }
`
export const SBox = styled.div`
display: flex;
flex-direction: column;
width: 60%;
     @media ${b.md}{
        flex-direction: row;
        width: 80%;
        display: flex;
        align-items: center;
    } 
`
export const ProductDetalTwo = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
margin-top: 1rem;
@media ${b.md}{
    justify-content: space-between;
    width: 70%;
}
    
`

export const ImgProduct = styled.img`
width: 80%;
@media ${b.md}{
    width: 60%;
    margin: 10px 0 10px 0;
}
`
export const TitleDetail = styled.div`
    width: 100%;
    @media ${b.md}{
        width: 30%;
       
    }
`
export const TitleItem = styled.h4`
    font-size: 16px;
    padding-top: 5px;
    color: ${({ theme }) => theme.text};
`
export const SubTitleItem = styled.span`
    line-height: 10px;
    font-size: 10px;
    color: ${({ theme }) => theme.text};
`

export const ItemQuantity = styled.span`
font-size: 16px;
color: ${({ theme }) => theme.text};
`
export const Amount = styled.span`
font-size: 16px;
color: ${({ theme }) => theme.text};
`

export const RemoveItem = styled.div `
  display: flex;
  color: ${({ theme }) => theme.text};
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
    cursor: pointer;
:hover{
    opacity: 0.6;
}
`

export const TrashBtn = styled(FiTrash2)`
    font-size: 1.2rem;
    cursor: pointer;
`