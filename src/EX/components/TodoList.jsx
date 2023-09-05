import React from 'react';
import { styled } from 'styled-components';
import TodoItem from './TodoItem';

const ListContainer = styled.ul`
	overflow-y: scroll;
	position: absolute;
	right: -17px;
	width: calc(100% + 17px);
	height: 500px;
`;
const TodoList = ({ todos, fnCheck, fnDel }) => {
	return (
		<ListContainer>
			{todos.map((todo) => (
				<TodoItem todo={todo} fnCheck={fnCheck} fnDel={fnDel} key={todos.id} />
			))}
		</ListContainer>
	);
};

export default TodoList;
