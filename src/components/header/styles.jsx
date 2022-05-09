import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { b, space, zIndex } from '../../styles/Variables'
import { FiX, FiMenu } from 'react-icons/fi'

export const btnReset = css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  padding: 0;
`

export const HeaderHeight = styled.div`
  height: ${space.headerHeight};
`
export const HeaderSticky = styled.div`
  height: ${space.headerHeight};
  position: sticky;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.bg};
  z-index: ${zIndex.sticky};
  box-shadow: 0 4px 10px #00000014;
`

export const SHeader = styled.header`
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  transition: 0.3s ease padding;
  padding: 0 ${space.md};
  align-items: center;
  @media ${b.lg} {
    padding: 0 ${space.xl};
  }
  /*  > div {
	flex: 1 1 auto;
} */
`

export const Left = styled.div`
  flex: 1 1 auto;
`

//RIGHT

export const Right = styled.div`
  display: none;
  @media ${b.md} {
    display: block;
  }
`
export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 40px;
`
export const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100px;
  display: none;
  @media ${b.md} {
    display: block;
  }
`

export const MenuToggleButton = styled.button`
  ${btnReset}
  width: 32px;
  position: relative;
  z-index: 100;
  @media ${b.md} {
    display: none;
  }
`

export const iconStyles = css`
  display: block;
  width: 100%;
  height: 100%;
`

export const MenuIcon = styled(FiMenu)`
  ${iconStyles}
`
export const CloseMenuIcon = styled(FiX)`
  ${iconStyles}
`

//Menu

export const Menu = styled.div`
  position: fixed;
  top: ${space.headerHeight};
  left: 100%;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: calc(100% - ${space.headerHeight});
  background: ${({ theme }) => theme.bg};
  z-index: ${zIndex.sticky};
  transition: 0.5s ease left;
  padding: ${space.lg};
  @media ${b.md} {
    display: none;
  }
`

export const ThemeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  margin-right: ${space.md};
  cursor: pointer;
  transform: scale(1);
  :hover {
    transform: scale(1.1);
  }
`
