import styled from "styled-components";
import { b, zIndex } from "../../styles/Variables";




export const ModalWrapper=styled.div`
    
   width: 300px;
   height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    
    position: relative; 
    z-index: ${zIndex.modal};
    background: #fff;
    display: flex;
    flex-direction: column;
    @media ${b.md}{
        flex-direction: row;
        width: 500px;
   height: 300px;
    }
    
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const ModalImage=styled.img`
    width: 100%;
    height: 100%;
`;
export const RightSection = styled.div`
    
`
export const ModalButton=styled.button`
    cursor: pointer;
    position: absolute;
   right: 0;
   top: 0;
   margin: 3px 3px 0 0;
   background-color: transparent;
   border: none;
   color:#fff;
   outline: none;
   transition: transform .2s;
   &:hover{
    transform: scale(1.2)
   }
   @media ${b.md}{
       color:#000
   }
`;

export const Info=styled.div`
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
margin-left: 15px;
margin-right: 15px;



`;

export const Title=styled.h3`
margin-bottom: 16px;
font-size: 16px;
    
`;
export const Pa=styled.p`
margin-bottom: 5px;
font-size: 14px;

`;
