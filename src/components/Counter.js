import { counterActions } from '../Store';
import classes from './Counter.module.css';
import { useSelector ,useDispatch } from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {

    dispatch(counterActions.toggleCounter())
  };

  const Incrementhandler = ()=>{
      dispatch(counterActions.increment())
    }

  const DecrementHandler = ()=>{
      dispatch(counterActions.decrement())
    }


  const  Incrementhandler2 = ()=>{
      dispatch(counterActions.increase(2))
  }

  const DecrementHandler5 = ()=>{
    dispatch(counterActions.decrementby5())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={Incrementhandler}>increment</button>
        <button onClick={DecrementHandler}>decrement</button>
      </div>
      <div>
        <button onClick={Incrementhandler2}>incrementby2</button>
        <button onClick={DecrementHandler5}>decrementby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
