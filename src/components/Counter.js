import { useSelector, useDispatch }from 'react-redux';

import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
    //함수를 실행해야 객체가 만들어짐
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//리덕스 스토어에 있는 데이터를 사용하려면 우선 react-redux에서 useSelector라는 리액트 훅을 가져와야 함
//useSelector, useStore
//클래스형 컴포넌트를 사용하는 경우 대신 사용할 수 있는 connect 함수가 있음. 이 함수는 클래스형 컴포넌트를 스토어에 연결하기 위한 wrapper로 사용할 수 있음

//useSelector를 호출하고 함수를 전달해야 함
//useSelector를 사용하면 리액트 리덕스는 이 컴포넌트에 리덕스 스토어의 구독을 자동으로 설정함
//리덕스 스토어에서 데이터가 변경될 때마다 자동으로 최신의 상태를 수신하게 됨

//useDispatch로 리덕스 스토어에 action을 전달함
//const dispatch = useDispatch();
//어떤 argument도 전달하지 않으나 dispatch 함수는 호출할 수 있는 함수로 리덕스 스토어에 대한 작업을 전달함
