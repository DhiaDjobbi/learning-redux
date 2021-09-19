import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>
      <h2>isLogged: {isLogged + ""}</h2>
    </div>
  );
}

export default App;
