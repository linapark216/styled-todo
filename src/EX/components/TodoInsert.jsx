import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

const Form = styled.form`
	position: absolute;
	left: 0;
	bottom: 0;
	z-index: 500;
	width: 100%;
	padding: 20px;
	box-sizing: border-box;

	> input {
		background: none;
		outline: none;
		width: 100%;
		height: 50px;
		font-size: 16px;
		text-indent: 10px;
		background-color: #fff;
		border: 1px solid #ccc;
	}
`;

const TodoInsert = ({ fnAdd }) => {
	const [plan, setPlan] = useState('');

	return (
		/* 
			onSubmit 이벤트가 일어나면 페이지가 새로고침 되므로 
			preventDefault()를 적용한다. 
			할일 목록을 작성해 제출 한 뒤 인풋박스에 내용이 남아있지
			않도록 처리하기 위해서는 setPlan('') 적용
		*/
		<Form
			onSubmit={(evt) => {
				evt.preventDefault();
				fnAdd(plan);
				setPlan('');
			}}
		>
			<input
				type="text"
				id="plan"
				autoComplete="off"
				value={plan}
				onChange={(evt) => {
					setPlan(evt.target.value);
				}}
			/>
		</Form>
	);
};

export default TodoInsert;
