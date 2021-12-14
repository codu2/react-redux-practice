import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    //name과 식별자를 지정해야 함
    name: 'counter',
    //initialState 초기 상태를 지정해야 함
    initialState: initialCounterState,
    //reducers를 지정해야 함 - 모든 리듀서 중 해당 상태의 슬라이스가 필요로 하는 리듀서
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
    //이 함수들은 자동으로 최신 state를 수신함
    //리덕스 툴킷과 createSlice 함수를 사용할 때는 실수로 기존 상태를 조작할 수 없음.  
    //자동으로 기존 상태를 복제하고 새로운 상태 객체를 생성하므로 여기서는 state를 변형할 수 있음.
    //따라서 리덕스 툴킷을 사용하면 아래처럼 반복되는 사본을 수동으로 만들 필요가 없고 변경되지 않는 코드를 유지해야 할 필요가 없음
    //대신 변경하려는 코드만 변경하면 됨

    //리덕스 툴킷을 사용하면 추가 페이로드와 데이터가 있는 작업을 수신하는 리듀서를 만들 수 있음
    //action에 연결된 데이터가 필요하다면 action을 사용할 수 있음
    //첫번째, 두번째 리듀서에서는 굳이 받을 필요가 없었던 것
});

//그렇다면 어떻게 slice를 사용하고, 어떻게 slice에 action을 알릴까
//createSlice는 각기 다른 리듀서에 대한 고유의 action 식별자를 자동으로 생성해줌
//따라서 counterSlice.actions. 로 액세스 할 수 있음
//createSlice 함수의 리듀서 영역 내 함수의 이름들과 같은 식별자를 생성함
//아래에서 create.actions를 export함

/*
const counterReducer = (state = initialCounterState, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
        //이 객체는 기존 상태와 병합되는 것이 아닌 기존 상태 위에 덮어씌워짐
        //만약 showCounter를 따로 정의하지 않는다면 undefined 즉 정의되지 않은 값이 되고, 이 값은 false로 처리됨
        //따라서 상태를 업데이트 할 때는 항상 모든 상태를 설정해줘야 함
        //절대로 기존 상태를 변경해서는 안되며 항상 새로운 상태 객체를 반환하여 재정의해야 함
    }

    if(action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducer);
*/

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;