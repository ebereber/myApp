import styled from 'styled-components'

export const Btn = styled.button`
  width: 50%;
  text-decoration: none;
  min-width: 150px;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.button};
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: 0.3s;
  margin-right: 1rem;
  margin-top: 1rem;
  transition: all 450ms ease;

  :hover {
    background: rgb(46, 46, 46);
    color: white;
  }
`
