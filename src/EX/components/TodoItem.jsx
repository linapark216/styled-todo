import React from 'react';
import { css, styled } from 'styled-components';

const Item = styled.li`
	display: flex;
	align-items: center;
	padding: 20px;
	color: #222;
	border-bottom: 1px solid #aaa;

	&:hover {
		background-color: #fd8787;
		cursor: pointer;
	}
	${(props) =>
		props.done === 'true' &&
		css`
			background-color: #555;
			> h2 {
				text-decoration: line-through;
			}
		`}
`;

const Title = styled.h2`
	flex: 1 1 0;
	order: 200;
	text-indent: 15px;
`;

const Input = styled.input`
	order: 100;
`;

const Button = styled.button`
	order: 300;
	padding: 5px 8px;
	background-color: #ccc;
	border: none;
	box-shadow: 1px 3px 3px grey;
`;
const TodoItem = ({ todo, fnCheck, fnDel }) => {
	const { id, title, done } = todo;

	return (
		<Item
			done={`${done}`}
			onClick={() => {
				fnCheck(id);
			}}
		>
			<Title>{title}</Title>
			<Input
				type="checkbox"
				checked={done}
				onChange={() => {
					fnCheck(id);
				}}
			/>
			<Button
				onClick={() => {
					fnDel(id);
				}}
			>
				삭제
			</Button>
		</Item>
	);
};

export default TodoItem;
