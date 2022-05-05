import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fontSizes } from '../../../styles/Variables'

export const CardContainer = styled.div`
  width: 100%;
  min-width: 100px;
  color: ${({ theme }) => theme.text};
  font-size: ${fontSizes.xs};
`
export const Card = styled.div`
  width: 100%;
  transform: scale(1);
  &:hover {
    transform: scale(1.01);
  }
`

export const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const STitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SHeading = styled.h3``
export const SPrice = styled.span`
  font-weight: bold;
`
export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`
