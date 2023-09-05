import React from 'react';
import { css, styled } from 'styled-components';

const Item = styled.li`
	display: flex;
	align-items: center;
	padding: 20px;
	color: #333;
	border-bottom: 1px solid #ddd;

	&:hover {
		background-color: #fd8787;
		cursor: pointer;
	}
`;

const Title = styled.h2`
	flex: 1 1 0;
	order: 200;
	text-indent: 15px;

	${(props) =>
		props.done === 'true' &&
		css`
			text-decoration: line-through;
		`}
`;

const Input = styled.input`
	order: 100;
`;
const Button = styled.button`
	order: 300;
	padding: 5px 8px;
`;

const ToDoItem = ({ todo, fnDel, fnChk }) => {
	const { id, title, done } = todo;

	return (
		<Item>
			<Title
				// done={done ? 'true' : 'false'} => 논리
				done={`${done}`}
				onClick={() => {
					fnChk(id);
				}}
			>
				{title}
			</Title>
			<Input
				type="checkbox"
				checked={done}
				onChange={() => {
					fnChk(id);
				}}
			/>
			<Button
				onClick={() => {
					fnDel(id);
				}}
			>
				{/*   !!!! 주의 !!!!!
					onClick={fnDel(id)} 이라고 작성하면 
					버튼을 클릭했을 때가 아니라 
					페이지를 로드 할 때 마다 함수를 호출한다 */}
				삭제
			</Button>
		</Item>
	);
};

export default ToDoItem;
