import styled from "styled-components";




export const ModalWrapper=styled.div`
    width: 550px;
    height: 300px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    display: flex;
    position: relative; 
    z-index: 67;
    background: #fff;
    
`;
export const ModalImage=styled.img`
    width: 100%;
    height: 100%;
  
 
`;
export const ModalButton=styled.button`
    cursor: pointer;
    position: absolute;
   right: 0;
   top: 0;
   margin: 3px 3px 0 0;
   background-color: transparent;
   border: none;
   outline: none;
   transition: transform .2s;
   &:hover{
    transform: scale(1.2)
   }
`;

export const Info=styled.div`
width: 100%;
grid-column: 2/3;
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
