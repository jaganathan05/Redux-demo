import classes from './Counter.module.css';
import { useSelector ,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};
const Incrementhandler = ()=>{
dispatch({type:'increment'})
}
const DecrementHandler = ()=>{
  dispatch({type:'decrement'})
}
const Incrementhandler5 = ()=>{
  dispatch({type:'incrementby5'})
  }
  const DecrementHandler5 = ()=>{
    dispatch({type:'decrementby5'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={Incrementhandler}>increment</button>
        <button onClick={DecrementHandler}>decrement</button>
      </div>
      <div>
        <button onClick={Incrementhandler5}>incrementby5</button>
        <button onClick={DecrementHandler5}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
