import styled from "styled-components";
import {FiTrash2} from "react-icons/fi"

export const Productli = styled.li` 

  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

export const ImgProduct = styled.img`
    width: 15%;
    margin: 10px 0 10px 0;
`
export const TitleDetail = styled.div`
    height: 100%;
    width: 30%;
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
    transition:0.4s;
:hover{
    opacity: 0.6;
}
`

export const TrashBtn = styled(FiTrash2)`
    font-size: 1.2rem;
    cursor: pointer;
    transition:0.4s;
`