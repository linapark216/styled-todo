import React from 'react';
// import Blocks from './components/Blocks';
import { createGlobalStyle, styled, css } from 'styled-components';
import ToDoHead from './components/ToDoHead';
import ToDoBody from './components/ToDoBody';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import ToDoInsert from './components/ToDoInsert';
import { useRef } from 'react';
import { useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  *{margin: 0;padding: 0;}
  ul,ol,li{list-style:none;}
  .sr-only{position: absolute;left:-9999px;}
  button{cursor: pointer;}
  body{font-size: 12px;}
`;

const ToDoContainer = styled.div`
	position: relative;
	width: 400px;
	margin: 30px auto;
	/* border: 1px solid #ccc; */
`;

const ToDoPlus = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	width: 48px;
	height: 48px;
	color: #fff;
	font-size: 32px;
	background-color: #04833d;
	border-radius: 50%;
	border: none;
	transform: translate(-50%, 50%);
	transition: all 0.2s;

	${(props) =>
		props.active === 'true' &&
		css`
			background-color: #fd8787;
			transform: translate(-50%, 50%) rotate(45deg);
		`}
`;

const initialData = [
	{ id: 1, title: '리액트 복습 완전정복', done: false },
	{ id: 2, title: '방청소 - 물걸레질 포함', done: false },
	{ id: 3, title: '포트폴리오 계획서 작성', done: true },
];
// localStorage.removeItem('todo-list');
const defaultData = JSON.parse(localStorage['todo-list'] || JSON.stringify(initialData));
const App = () => {
	const [todos, setTodos] = useState(defaultData);
	const nextId = useRef(4);

	useEffect(() => {
		localStorage['todo-list'] = JSON.stringify(todos);
	}, [todos]);

	//추가함수
	const fnAdd = (plan) => {
		// alert(plan);
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: nextId.current,
					title: plan,
					done: false,
				},
			];
		});
		nextId.current++;
		// console.log(nextId.current);
	};

	//삭제함수
	const fnDel = (id) => {
		// alert('id=' + id);
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => {
				return todo.id !== id;
			})
		);
	};

	//체크함수
	const fnChk = (id) => {
		// alert('id=' + id);
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => (todo.id !== id ? todo : { ...todo, done: !todo.done }));
		});
	};

	const [active, setActive] = useState('true');
	const $plan = useRef(null);
	return (
		<>
			<GlobalStyle />
			<ToDoContainer>
				<ToDoHead>오늘할일</ToDoHead>
				<ToDoBody>
					<ToDoList todos={todos} fnDel={fnDel} fnChk={fnChk} />
					<ToDoInsert fnAdd={fnAdd} active={active} $plan={$plan} />
				</ToDoBody>
				<ToDoPlus
					active={`${active}`}
					onClick={() => {
						setActive((prev) => !prev);
						$plan.current.focus();
					}}
				>
					+
				</ToDoPlus>
			</ToDoContainer>
		</>
	);
};

export default App;
