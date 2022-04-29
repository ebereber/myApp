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
    text-align: center;
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 12rem),1fr));
    gap: 2rem 5rem;
	padding: 0;
    transition: 0.3s ease padding;
	@media ${b.sm}{
		padding: ${space.md};
	}
	@media ${b.md}{
		padding: ${space.xl};
	}`;
	
    export const GridItems = styled.div`
    
    `
    