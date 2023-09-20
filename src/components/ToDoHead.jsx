import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: #fff;
	background-color: ${(props) => props.bgc};
	border: 1px solid ${(props) => props.bgc};
	border-radius: 10px 10px 0 0;
`;

const Title = styled.h1`
	height: 100px;
	font-size: 30px;
	line-height: 100px;
`;

const DateTime = styled.p`
	font-size: 16px;
	text-align: right;
`;

const Time = styled.time`
	display: block;
`;
const Day = styled.span`
	display: block;
	margin-top: 8px;
`;

const date = new Date();
const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
const day = weekDay[date.getDay()];

const ToDoHead = ({ children }) => {
	return (
		<Header bgc={`#04833d`}>
			<Title>{children}</Title>
			<DateTime>
				<Time>{today}</Time>
				<Day>{day}요일</Day>
			</DateTime>
		</Header>
	);
};

export default ToDoHead;
