import styled from "styled-components";
import{GiShoppingCart} from "react-icons/gi"

export const EmptyCartContainer  = styled.div`
    width: 100%;
	height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.text}
`;

export const Alert = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    font-size: 1rem;
    margin-top: 30px;
`;

export const EmptyCartIcon = styled(GiShoppingCart)`
    font-size: 4rem
`;

export const SubtitleCart = styled.p`
    font-size: .7rem;
    margin-top: 10px;
`

