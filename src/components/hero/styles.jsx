import styled from 'styled-components'
import { b, fontSizes, space } from '../../styles/Variables'
import Button from '../button'

export const BannerContainer = styled.div`
  grid-column: 1;
  grid-row: 1/2;
  width: 100%;
  color: #fff;
  @media ${b.sm} {
    grid-column: 1/-1;
  }
`
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  justify-content: center;
  @media ${b.sm} {
    flex-direction: row;
    height: 300px;
  }
`
export const Left = styled.div`
  width: 100%;
  height: 40%;
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #050a10;
  @media ${b.sm} {
    width: 70%;
    order: 1;
    height: 100%;
  }
`

export const Heading = styled.h2`
  text-align: start;
  margin-bottom: ${space.sm};
`

export const Text = styled.span`
  margin-bottom: ${space.sm};
  text-align: justify;
  font-size: ${fontSizes.sm};
  @media ${b.md} {
    font-size: ${fontSizes.md};
  }
`

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;

  @media ${b.sm} {
    width: 80%;
    margin: auto;
  }
`
export const SButton = styled(Button)`
  background-color: #000;
  border: 1px solid #fff;
  margin-top: 0;
  @media ${b.md} {
    margin-top: 1rem;
  }
  :hover {
    background-color: #000;
  }
`
export const Right = styled.div`
  width: 100%;
  height: 60%;
  order: 1;
  min-width: 200px;
  @media ${b.sm} {
    width: 30%;
    height: 100%;
    order: 2;
  }
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
`

export const SImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  @media ${b.sm} {
    justify-content: flex-start;
    margin-top: 0;
  }
`
