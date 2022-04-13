import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { b, fontSizes, space } from '../../../styles/Variables';

export const CardContainer = styled.div`
height: auto;
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
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
	top: 0;
	left: 0;
    background: rgba(19, 18, 18, 0.2);
    transition: 0.3s;
    opacity: 0;
  }
  &:hover::before{
	  opacity: 1;
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