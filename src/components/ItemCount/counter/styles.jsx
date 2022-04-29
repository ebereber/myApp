import styled, { css } from 'styled-components';
import {FiPlus} from "react-icons/fi"
import {FiMinus} from "react-icons/fi"
import { b } from '../../../styles/Variables';

export const SCounter = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
`

export const SCountNumber = styled.h4`
       font-size: 1rem;
`
 
export const SButtons = styled.div`
     border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 130px;
    height: 35px;
    padding: 3px;
`
const IconStyles = css`
    color: ${({theme}) => theme.text};
    width: 20px;
    height: 20px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    
`

export const Decrement = styled(FiMinus)`
${IconStyles}
    
`
export const Increment = styled(FiPlus)
`
${IconStyles}
`



 export const AddCart = styled.button`
    width: 40%;
    min-width: 150px;
    padding: 1rem 1rem;
    background-color: ${({theme}) => theme.button};
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