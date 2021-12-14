//import { createStore } from 'redux';
import { configureStore }from '@reduxjs/toolkit';
//createSlice, createReducer

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

/*
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});
*/

//이를 통해 slice에 설정된 reducer에 액세스 할 수 있음 - const store = createStore(counterSlice.reducer)
//여러 slice를 가질 경우 많은 .reducer를 액세스 해줘야 하는데 이때 createStore과 함께 combineReducers를 사용할 수 있으며
//@reduxjs/toolkit에서는 createSlice와 함께 configureStore 함수를 사용할 수 있음
//configureStore 함수는 createStore 함수처럼 스토어를 생성하지만 이후에 여러 리듀서를 하나의 리듀서로 병합하기가 더 쉬움
//configureStore 함수에는 리듀서 함수가 아닌 객체를 전달함

//큰 규모의 어플리케이션에 여러 개의 slice가 있는 경우 
//reducer: {  } 처럼 reducer 키의 값을 객체로 전달해 줄 수 있음
//reducer: { counter: counterSlice.reducer, (여러 slice의 리듀서 입력) }
//개별 리듀서는 자동으로 병합되어서 하나의 주요 리듀서가 됨

//export const counterActions = counterSlice.actions;
//export const authActions = authSlice.actions;

export default store;