import React from 'react';
import TodoHead from './components/TodoHead';
import Section from './components/TodoBody';
import TodoList from './components/TodoList';
import { createGlobalStyle, styled } from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';
import TodoInsert from './components/TodoInsert';

const GlobalStyle = createGlobalStyle`
    *{margin: 0;padding: 0;}
    ul,ol,li{list-style:none;}
    .sr-only{position: absolute;left:-9999px}
    button{cursor: pointer;}
    body{font-size: 12px;}
`;

const TodoContainer = styled.div`
	position: relative;
	width: 400px;
	margin: 30px auto;
`;

const initialData = [
	{ id: 1, title: '리액트 복습 뿌셔', done: false },
	{ id: 2, title: '이불 빨래', done: false },
	{ id: 3, title: '포폴 작업할 쇼핑몰 선정하기', done: false },
];
const App = () => {
	const [todos, setTodos] = useState(initialData);
	const nextId = useRef(3);
	//추가함수
	/* */
	const fnAdd = (plan) => {
		nextId.current++;

		setTodos((prevtodos) => {
			return [...prevtodos, { id: nextId.current, title: plan, done: false }];
		});
	};

	//삭제함수
	/* 
        todos(initialData)에서 삭제를 클릭한 아이템과 id값이
        일치하지 않는 아이템만 필터링해서 렌더링한다.
    */
	const fnDel = (id) => {
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	//체크함수
	/* 
            todos(initialData) 객체의 배열 안에서
            todo.id 각 객체 내의 id 값을 비교해 
            id 값이 같지 않으면 그대로 렌더링 하고
            같으면 객체의 done값을 바꾸어 렌더링 한다.      
        */
	const fnCheck = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => (todo.id !== id ? todo : { ...todo, done: !todo.done }));
		});
	};
	return (
		<TodoContainer>
			<GlobalStyle />
			<TodoHead></TodoHead>
			<Section>
				<TodoList todos={todos} fnCheck={fnCheck} fnDel={fnDel}></TodoList>
				<TodoInsert fnAdd={fnAdd}></TodoInsert>
			</Section>
		</TodoContainer>
	);
};

export default App;
