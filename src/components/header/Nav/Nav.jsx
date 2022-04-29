import {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FiChevronDown} from "react-icons/fi"
import { b, fontSizes, space } from '../../../styles/Variables'
import Dropdown from '../Dropdown/Dropdown'

const Nav = ({ navLinks, menuTogglerHandler }) => {
const[openDropdown, setOpenDropdown] = useState(null)

const openDropdownHandler = (label) => {
	if(label === openDropdown) return setOpenDropdown (null)
	setOpenDropdown(label)

}

const onSelectCallback = () => {
	if(menuTogglerHandler) menuTogglerHandler()
	setOpenDropdown(null)
}

  return (
    <SNav>
      {navLinks.map(({ label, link, tree }, index) => {
		  const isOpen = openDropdown === label
        return (
          <SNavLinkContainer key={index}>
			  {link &&  <SLink to={link} onClick={()=> onSelectCallback()}>{label}</SLink>}
			  {!link &&
			   <SNavLabelContainer onClick={()=>openDropdownHandler(label)}>
				  <SNavLabel isOpen={isOpen}>
						{label}
				  </SNavLabel>
				  <ArrowContainer isOpen={isOpen}>
					  <ArrowIcon/>
				  </ArrowContainer>
           
				  </SNavLabelContainer>
				  }
				  {isOpen && <Dropdown tree={tree} onSelectCallback={onSelectCallback}/>}
				 
          </SNavLinkContainer>
        )
      })}
    </SNav>
  )
}

export default Nav;

Nav.defaultProps = {
  navLinks: [
	  {
		label: 'Productos',
		link: null,
		tree: [
		  { label: 'Colgantes', link: '/colgantes', branches: null },
		  { label: 'Veladores', link: '/veladores', branches: null },
		],
	  },
    {
      label: 'Nosotros',
      link: '/nosotros',
    },
    {
      label: 'Contacto',
      link: '/contacto',
    },
  ],
}

	
const SNav = styled.nav`
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
const SNavLinkContainer = styled.div`
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
const SLink = styled(Link)`
text-decoration: none;
color: inherit;
:hover {
	color: ${({theme}) => theme.primary};
}
	
`
const SNavLabelContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer ;
`;

const SNavLabel = styled.span`
color:${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)}
	
`;
const ArrowContainer = styled.div`
svg {
	color: ${({isOpen , theme}) => (!isOpen ? "inherit" : theme.primary)};
	transform: ${({isOpen}) => (!isOpen ? "rotate(-90deg)" : "none")};
}


`;
const ArrowIcon = styled(FiChevronDown)`
display: block;
margin: 4px;
font-size: ${fontSizes.md};
	
`;