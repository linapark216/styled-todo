import React from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 600px;
	background-color: #eee;
	box-sizing: border-box;
	border: 1px solid #3c429b;
`;
const TodoBody = ({ children }) => {
	return <Section>{children}</Section>;
};

export default TodoBody;
