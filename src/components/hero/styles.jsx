import styled from "styled-components";
import { b, fontSizes, space } from "../../styles/Variables";

export const BannerContainer = styled.div`
grid-column: 1;
grid-row: 1/2;
width: 100%;
color: #fff;
@media ${b.sm}{
  grid-column: 1/-1;
  

}	

`;
export const Banner=styled.div`
	display: flex;
	flex-direction: column;
    width: 100%;
    height: 700px;
    justify-content: center;
	@media ${b.sm}{
		flex-direction: row;
		height: 300px;
	}
`;
export const Left = styled.div`
width: 100%;
height: 40%;
order: 2;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #050A10;
@media ${b.sm}{
	width: 70%;
	order:1;
	height: 100%;
}
`;

export const Heading = styled.h2`
	text-align: start;
	margin-bottom: ${space.sm};
`

export const Text = styled.span`
	margin-bottom: ${space.sm};
	text-align: justify;
	font-size: ${fontSizes.sm};
   @media ${b.md}{
	font-size:${fontSizes.md}
   
  } 
`;


;

export const BannerInfo = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 90%;

@media ${b.sm}{
  width: 80%;
  margin: auto;

}

	
`;
/* const Title = styled.h1`
text-align: justify;
margin-bottom: 16px;
	
`; */

export const Button = styled.button`
	min-width:112px ;
	max-width: 220px;
	color: #fff;;
	background: #050A10;
	border: 1px solid white;
	outline: none;
	padding: .8rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transform: scaleX(1);
	
	:hover{
		transform: scale(1.01);
	}
	@media ${b.sm}{
		
	}
`

export const Right = styled.div`
width: 100%;
height: 60%;
order: 1;
min-width: 200px;
@media ${b.sm}{
	width: 30%;
	height: 100%;
	order: 2;
}
	
`;
export const Image = styled.div`
width: 100%;
height: 100%;
`

export const SImg = styled.img `
width: 100%;
height: 100%;
object-fit: cover;
`;

export const BoxBtn = styled.div`
display: flex;
justify-content: center;
margin-top: .5rem;
@media ${b.sm}{
	justify-content: flex-start;
	margin-top: 0;
}
`
