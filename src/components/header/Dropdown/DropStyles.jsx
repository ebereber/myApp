import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { b, space } from '../../../styles/Variables'

export const SDropdown = styled.div`
background: ${({theme}) => theme.bg};
top: 44px;
white-space: nowrap;
padding: ${space.sm};
display: flex;
flex-direction: column;
@media ${b.md}{
	min-width: 300%;
	position: absolute;
}
`

export const DropItem = styled.div`
padding: ${space.sm};
`
export const SLink = styled(Link)`
text-decoration: none;
color: inherit;
:hover {
	color: ${({theme}) => theme.primary};
}
`