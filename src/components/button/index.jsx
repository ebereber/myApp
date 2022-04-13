import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Button({children, to, className}) {
  return (

	<Link to={to}>
                <Btn className={className}>{children}</Btn>
    </Link>
  )
}

export default Button

const Btn = styled.button`
	width: 50%;
	text-decoration: none;
	min-width: 150px;
	padding: 1rem 1rem;
	background-color: #000;
	cursor: pointer;
	outline: none;
	border: none;
	color: #fff;
	transition: .3s;
	margin-right: 1rem;
	margin-top: 1rem;
	transition: all 450ms ease;

  :hover {
	  background: #141516;
	  color: white;
	}
	`