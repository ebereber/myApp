import styled from "styled-components";
import { b, fontSizes, space, } from "../../styles/Variables";
import Button from "../button";

export const SForm = styled.form`
    width: 100%;
    height: 100%;
    padding: ${space.sm} ${space.lg};
    color:${({theme}) => theme.text};
    font-size: ${fontSizes.xs};
    
`
export const FormBox = styled.div`
    display: grid;
    margin-top: 2rem;
    gap: 1rem;
    @media ${b.lg}{
        grid-template-columns: 2fr 1.5fr ;
    }
    
`
export const Line = styled.div`
    border: solid 1px ;
margin-top: .5rem;
`
export const LeftSection = styled.div`
    
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem),1fr)); */
    gap: 1.5rem;
`
export const RightSection = styled.div`
width: 100%;
`

export const Label = styled.label`
    
`
export const Input = styled.input`
    width: 100%;
        height: 40px;
          padding: 0.3rem 1rem;
          background-color: rgba(230, 230, 230, 0.6);
          
          margin-top: 20px;
          outline: none;
          border: 2px solid rgba(0, 0,0,0);
          transition: .3s;
  
      :hover{
          background-color: rgba(0, 0, 0, 0.1);
      }
     :focus{
          background-color: #fff;
          border: 2px solid rgba(5, 4, 4, 0.1);
      }
`

export const Headline = styled.h2`
    font-size: 1.4rem;
    grid-column: 1/-1;
    margin-bottom:3rem;
`

export const ErrorMessage = styled.span`
    color: rgb(255, 72, 72);
    font-size: ${fontSizes.xs};
`

export const TotalDetailContainer = styled.div`
    display: flex;
    margin: 2rem 0 2rem;
   justify-content: space-between;
   @media ${b.md}{
       justify-content: flex-end;
   }
`
export const Row =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Column = styled.div`
display: flex;
flex-direction: column;
width: 20%;
`
export const UnitsRow =styled.div`
    display: flex;
    align-items: center;
    
`
export const TotalTitle = styled.h3`
    margin-right: 1rem;
`


export const Amount = styled.span`
    font-weight: bold;
    font-size: 2rem;
    
`

export const UnitsText = styled.span`
    margin-left: .5rem;
    font-size: .8rem;
`
export const SubmitButton = styled.button`
width:100%;
text-decoration: none;
min-width: 150px;
padding: 1rem 1rem;
background-color: ${({theme}) => theme.button};
cursor: pointer;
outline: none;
border: none;
color: #fff;
transition: .3s;
margin-right: 1rem;
margin-top: 1rem;
transition: all 450ms ease;

:hover {
  background:  rgb(46, 46, 46);
  color: white;
}
`
