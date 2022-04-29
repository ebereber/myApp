import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Category() {
  return (
	  <Container>
		  <Title>Productos</Title>
		  <Content>
			  <ListLinks>
				  <Link to="/colgantes">
				  <TextLink>Colgantes</TextLink>
				  </Link>
				  <Link to="/veladores">
				  <TextLink>Veladores</TextLink>
				  </Link>
			  </ListLinks>
		  </Content>
	  </Container>

	
  )
}

export default Category;

const Container = styled.aside`
	grid-row: 1/10;
    display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
   
` ;
const Title = styled.h3`
	  display: inline-block;
`;
const Content = styled.div`
	 grid-row: 3/6;
`;

const ListLinks = styled.div`
	width: 100%;
    position: relative;
  display: flex;
  flex-direction: column;
 	
`;

const TextLink = styled.p`
line-height: 30px;
    margin-right: 20px;
`;