import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action.type";
//import all the files

const Reducer = (state, action) => {
  //I use arrow function and create a function name Reducer
  switch (
    action.type //In switch we pass action.type and type e.g ADD_TODO and action which we want to perform
  ) {
    case ADD_TODO:
      return [
        ...state, //here we load previouse state and then add new todo
        {
          id: action.payload.id,
          todo: action.payload.todo, //action is word which indicated we can the value and you can use payload or directly change value and this action get there value from handle functions which we created in TodoApp file
        },
      ];

    case UPDATE_TODO:
      return state.map((task) => {
        //here we array method to print list
        if (task.id === action.id) {
          //first we find the click edited button task id in our task list if we found then update it otherwise , nothing changes
          return {
            ...task,
            todo: action.todo,
          };
        }
        return task;
      });

    case DELETE_TODO:
      return state.filter((task) => task.id !== action.id); // here we just use filter method to check click button task id is found in list then remove it from list.
    default:
      return state;
  }
};

export default Reducer;
