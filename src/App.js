// App.js
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./components/Reducer";
import TodoApp from "./components/TodoApp";

const store = createStore(Reducer);

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
