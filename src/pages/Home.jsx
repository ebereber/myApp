import React from 'react'
import styled from 'styled-components'
import Hero from '../components/hero'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { b, space } from '../styles/Variables'

function Home() {
    return (
        <Content>
            <Hero/>
            <ItemListContainer/>
        </Content>
    )
}

export default Home


export const Content = styled.div`
		width: 100%;
	height: 100%;
	font-weight: 600;
    text-align: center;
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem),1fr));
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