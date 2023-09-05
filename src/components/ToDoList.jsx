import React from 'react';
import { styled } from 'styled-components';
import ToDoItem from './ToDoItem';

const ListContainer = styled.ul`
	/* 
		리스트가 늘어나면 스크롤이 생기도록 처리
		스크롤이 화면에 보이지 않게 하기 위해 
		pos:a & -17px(스크롤사이즈) & w:100%+17px 적용			
	*/
	overflow-y: scroll;
	position: absolute;
	right: -17px;
	width: calc(100% + 17px);
	height: 500px;
	/* background-color: #fc7777; */
`;

const ToDoList = ({ todos, fnDel, fnChk }) => {
	return (
		<ListContainer>
			{todos.map((todo) => (
				<ToDoItem todo={todo} fnDel={fnDel} fnChk={fnChk} key={todo.id} />
			))}
		</ListContainer>
	);
};

export default ToDoList;
