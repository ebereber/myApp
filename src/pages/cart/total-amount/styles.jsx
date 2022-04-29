import styled from "styled-components";
import Button from "../../../components/button";
import { b } from "../../../styles/Variables";

export const Checkout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    color: ${({ theme }) => theme.text};
    margin-right: 5%;
    margin-top: 1rem;
   `
export const SBox = styled.div`
width: 100%;
@media ${b.md}{
  flex-direction: column;
width: 32%;
}
`

   export const Total = styled.div`
    display: flex;
  justify-content: space-between;
    ;
   `
   
   export const Subtotal = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: inherit;
   `

   export const UnitsItems = styled.div`
    font-size: 10px;
    font-weight: 500;
    color: inherit;
    line-height: 10px;
    display: flex;
    margin-top: .5rem;
   `
   export const Units = styled.span `
       display: inline-block;
       margin-left: 10px;
   `
   export const TotalCheckAmount = styled.span`
    font-size: 24px;
    font-weight: 900;
    color: ${({ theme }) => theme.text};;
   `

export const ButtonCheckout = styled(Button)`
width:100% ;
`