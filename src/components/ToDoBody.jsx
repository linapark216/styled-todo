import React from 'react';
import { styled } from 'styled-components';

const Section = styled.section`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 600px;
	box-sizing: border-box;
	border: 1px solid #04833d;
`;

const ToDoBody = ({ children }) => {
	return <Section>{children}</Section>;
};

export default ToDoBody;
