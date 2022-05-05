import styled from 'styled-components'
import { b, space } from '../../../styles/Variables'

export const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const ProductImg = styled.img`
  width: 100%;
  object-fit: contain;
  max-width: 500px;
  min-width: 350px;
  @media ${b.sm} {
    width: 100%;
  }
  @media ${b.md} {
    width: 100%;
  }
`
export const Right = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${space.lg} 0;
  @media ${b.md} {
    margin: 0;
  }
`

export const DetailContainer = styled.div`
  width: 100%;
  padding: ${space.lg};
  display: flex;
  flex-direction: column;
`
export const ProductCategory = styled.span`
  text-transform: uppercase;
  color: #495057;
  font-size: 14px;
`

export const ProductName = styled.h1`
  margin-top: ${space.lg};
`

export const ProductDetail = styled.p`
  letter-spacing: 1.5px;
  margin-top: ${space.lg};
  width: 100%;
  font-size: 14px;
`

export const ProductPrice = styled.h2`
  font-size: 18px;
  margin-top: ${space.lg};
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media ${b.md} {
    justify-content: flex-start;
  }
`
export const SBoxBtn = styled.div`
  display: flex;
  justify-content: center;
  @media ${b.md} {
    justify-content: flex-start;
  }
`
