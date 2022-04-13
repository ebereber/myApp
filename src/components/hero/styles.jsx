import styled from "styled-components";
import { b, fontSizes, space } from "../../styles/Variables";


export const Heading = styled.h2`
	text-align: start;
	margin-bottom: ${space.sm};
`

export const Text = styled.span`
	margin-bottom: ${space.sm};
	text-align: justify;
 /*  @media ${b.sm}{
    font-size: ${fontSizes.sm};
  } */
`;

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
    width: 100%;
    height: 300px;
    justify-content: center;
`
;
export const Left = styled.div`
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #050A10;

`;
export const BannerInfo = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 90%;
@media ${b.md}{
  width: 80%
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
`

export const Right = styled.div`
width: 30%;
height: 100%;
	
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


