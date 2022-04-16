import { DropItem, SDropdown, SLink } from "./DropStyles"

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
