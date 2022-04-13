import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { b, space } from '../../../styles/Variables'



const Dropdown = ({ tree, onSelectCallback }) => {
	
  return (
	<SDropdown onSelectCallback={onSelectCallback} >
		{tree.map((treeItem, index) =>(
			<DropItem key={index} onClick={onSelectCallback}>
				<SLink to={treeItem.link}>
				{treeItem.label}
				</SLink>
				</DropItem>
		))}
	</SDropdown>
  )
}

export default Dropdown 


const SDropdown = styled.div`
background: ${({theme}) => theme.bg};
top: ${space.headerHeight};
white-space: nowrap;
padding: ${space.sm};
display: flex;
flex-direction: column;
@media ${b.md}{
	min-width: 300%;
	position: absolute;
}
`

const DropItem = styled.div`
padding: ${space.sm};
`
const SLink = styled(Link)`
text-decoration: none;
color: inherit;
:hover {
	color: ${({theme}) => theme.primary};
}
`

const SNavLabelContainer = styled.div`
`
/* {link && (
	<SNavLink to={link}>{label}</SNavLink>
)}
{link && (
	<SNavLabelContainer to={link}>{label}</SNavLabelContainer>
)}
 */

/* 
const TreeItem = ({label, link, children}) =>{
	const[isOpen, setIsOpen] = useState(false)

	return(
		<STreeItem>
			<h2>{label}</h2>
		</STreeItem>

	)

}

const Dropdown = ({ tree }) => {
	
	const createTree = (branch) => {
		<TreeItem label={branch.label} link={branch.link} >
			{branch?.branches.map((branch, index) =>
			<Fragment key={index}>{createTree(branch)}</Fragment>)}
		</TreeItem>

	}

  return (
	<SDropdown>
		{tree.map((branch, index) =>(
			<Fragment key={index}>{createTree(branch)} </Fragment>
		))}
	</SDropdown>
  )
} */