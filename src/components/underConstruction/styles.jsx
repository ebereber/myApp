import styled from 'styled-components'
import Button from '../button'
import { RiToolsFill } from 'react-icons/ri'
import { fontSizes } from '../../styles/Variables'

export const SContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`
export const Headline = styled.h2`
  font-size: ${fontSizes.xl};
`
export const SButton = styled(Button)``
export const ToolIcon = styled(RiToolsFill)`
  font-size: 2rem;
  margin-top: 1rem;
`
