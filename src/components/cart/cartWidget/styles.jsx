import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { b, space } from '../../../styles/Variables'

export const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${space.md};
  cursor: pointer;
  @media ${b.md} {
    margin-left: ${space.xl};
  }
`

export const CartIcon = styled.div`
  font-size: 1.5rem;
`

export const TotalItems = styled.div`
  background: ${({ theme }) => theme.text};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${({ theme }) => theme.text3};
  display: flex;
  justify-content: center;
  align-items: center;
`
