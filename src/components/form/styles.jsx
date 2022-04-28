import styled from "styled-components";
import { b, space, } from "../../styles/Variables";

export const SForm = styled.form`
    width: 100%;
    height: 100%;
    padding: ${space.sm} ${space.lg};
    color:${({theme}) => theme.text};
    
`
export const FormBox = styled.div`
    display: grid;
    margin-top: 2rem;
    gap: 1rem;
    @media ${b.lg}{
        grid-template-columns: 2fr 1fr ;
    }
    
`
export const Line = styled.div`
    border: solid 1px ;
margin-top: .5rem;
`
export const LeftSection = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem),1fr)); */
    gap: 1rem;
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
`

export const ErrorMessage = styled.span`
    color: rgb(255, 72, 72);
      font-size: 15px;
`