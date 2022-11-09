import { useAppSelector, useAppDispatch } from "redux/hooks";
import { increment, decrement } from "redux/slices/counter";

const CounterTest = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  console.log(state)
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <>
      <h2>Counter example</h2>
      <button onClick={handleIncrement}>INCREMENT ONE</button>
      <button onClick ={handleDecrement}>Decrement by One</button>
    </>
  );
};
export default CounterTest;
