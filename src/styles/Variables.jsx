import { css } from "styled-components";

export const space = {
	headerHeight: "65px",
	sm: "8px",
	md:"16px",
	lg: "32px",
	xl: "48px",
}
export const fontSizes= {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  }

  export const zIndex = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  }

export const b= {
	sm: '(min-width:30em)',
	md: '(min-width:48em)',
	lg: '(min-width:62em)',
	xl: '(min-width:80em)',
	'2xl': '(min-width:96em)',
  }

  export const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;