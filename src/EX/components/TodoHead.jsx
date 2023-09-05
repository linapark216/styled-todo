import React from 'react';
import { styled } from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	background-color: ${(props) => props.bgc};
	border-radius: 20px 20px 0 0;
`;

const Title = styled.h1`
	height: 100px;
	font-size: 30px;
	line-height: 100px;
`;

const TodoHead = () => {
	return (
		<Header bgc={'#3c429b'}>
			<Title>오늘할일</Title>
			<p>2023년 08월 30일 수요일</p>
		</Header>
	);
};

export default TodoHead;
