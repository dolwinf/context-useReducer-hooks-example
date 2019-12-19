import React, { useContext, useReducer } from "react";
import axios from "axios";
import Context from "./context";
import reducer from "./reducer";

function App() {
  const handleClick = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then(data => dispatch({ type: "JOKE", payload: data.data.value }));
  };
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Hey! We just fetched a chuck noris joke:
      <button onClick={handleClick}>Get Joke</button>
      {state.joke}
    </div>
  );
}

export default App;
