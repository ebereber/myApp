import styled from "styled-components"
import { b, space } from "../../styles/Variables";

export const ItemDetailContent = styled.div`
width: 100%;
	height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem,2fr));
    gap: 16px;
	padding: 0;
	margin-bottom: ${space.xl};
	@media ${b.sm}{
		padding: ${space.md};
	}
	@media ${b.md}{
		padding: ${space.xl};
	}
`