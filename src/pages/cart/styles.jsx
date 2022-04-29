import styled from "styled-components";

export const CartContainer = styled.div`
    padding: 2rem;
    height: 100vh;
    position: relative;
`

export const BtnPurchase = styled.button`
    display: block;
    float: right;
    width: 28%;
    padding: 1rem 1rem;
    background-color: #000;
    cursor: pointer;
    outline: none;
    border: none;
    color: #fff;
    transition: .3s;
    margin-right: 5%;
    margin-top: 10px;
    margin-bottom: 30px;
    transition: all 450ms ease;
    :hover{
        background-color: rgb(46, 45, 45);
        }
    `