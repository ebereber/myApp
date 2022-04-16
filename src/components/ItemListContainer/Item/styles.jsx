import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { b, fontSizes, space } from '../../../styles/Variables';

export const CardContainer = styled.div`
height: 100%;
width: 100%;
min-width: 100px;
  color: ${({ theme }) => theme.text};
  position: relative;
  font-size: ${fontSizes.sm};
  margin-bottom: ${space.xl};
  @media ${b.md}{
	  height: 300px;
  }
`
export const Card = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(1);
  &:hover{
    transform: scale(1.01);
  }
`

export const SLink = styled(Link)`
	 text-decoration: none;
    color: inherit;
`


export const STitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

export const SHeading = styled.h3`
	
`
export const SPrice = styled.span`
	
`;
export const ProductImg = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`