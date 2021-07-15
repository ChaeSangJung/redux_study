import React from "react";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import CallExample from "./Components/CallExample";

const App = () => {
  return (
    <div>
      <Counter />
      <hr/>
      <Todo />
      <hr/>
      <CallExample />
    </div>
  )
}

export default App;
