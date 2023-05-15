import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { decrement, increment } from './../features/counter/counterSlice'
const Counter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     <div className={classes.value}>{count}</div>
      <div>
        <button  onClick={() => dispatch(increment())}>Increment</button>
        {/* <button onClick={increment}>+10</button> */}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
    </main>
  );
};
 
export default Counter;