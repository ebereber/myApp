import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FiChevronDown} from "react-icons/fi"
import { b, fontSizes, space } from '../../../styles/Variables'
	
export const SNav = styled.nav`
width: auto;
padding: ${space.md};
background: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text };

@media ${b.md}{
	display: flex;
	padding: 0;
	height: 100%;
	background: none;
	justify-content: flex-end;
}
	
`
export const SNavLinkContainer = styled.div`
	user-select: none;
	position: relative;
	:not(:last-of-type){
		margin-bottom: ${space.md};
	}
	@media ${b.md}{
		display: flex;
		align-items: center;
		:not(:last-of-type){
		margin-bottom: 0;
		margin-right: ${space.md};
	}
	}
`
export const SLink = styled(Link)`
text-decoration: none;
color: inherit;
:hover {
	color: ${({theme}) => theme.primary};
}
	
`
export const SNavLabelContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer ;
`;

export const SNavLabel = styled.span`
color:${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)}
	
`;

export const ArrowContainer = styled.div`
svg {
	color: ${({isOpen , theme}) => (!isOpen ? "inherit" : theme.primary)};
	transform: ${({isOpen}) => (!isOpen ? "rotate(-90deg)" : "none")};
}


`;
export const ArrowIcon = styled(FiChevronDown)`
display: block;
margin: 4px;
font-size: ${fontSizes.md};
	
`;