import styled from 'styled-components'

export const Header = styled.div`
  margin: auto;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Heading = styled.h2`
  font-size: 20px;
  color: ${({ theme }) => theme.text}; ;
`

export const DeleteCart = styled.h5`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  transition: all 0.15s ease;
  :hover {
    opacity: 0.5;
  }
`
