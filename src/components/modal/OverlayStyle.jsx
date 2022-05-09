import styled from 'styled-components'
import { zIndex } from '../../styles/Variables'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: ${zIndex.banner};
  display: flex;
  justify-content: center;
  align-content: center;
`
