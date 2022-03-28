// Serhii: example https://www.youtube.com/watch?v=xJZa2_aldDs&t=1s
// import logo from './logo.svg';
// import './App.css';

import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodos";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy milk" },
    { id: 3, completed: false, title: "Buy cheese" },
  ]);
  // let todos = [
  //   { id: 1, completed: false, title: "Купить хлеб" },
  //   { id: 2, completed: false, title: "Купить молоко" },
  //   { id: 3, completed: false, title: "Купить масло" },
  // ];

  // Работа приложения с сервером
  // подгружаем необходимые поля с Fake API (https://jsonplaceholder.typicode.com/)
  // Делаем запрос, когда готово ДОМ дерево
  // useEffect - это хук который посзволяет отследить готовность дом дерева
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=7")
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos);
        setTodos(todos)
      });
  }, []);

  function togleTodo(id) {
    console.log(id);

    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <p className="title"> Todo List</p>

        <AddTodo onCreate={addTodo}></AddTodo>
        {/* Условие 
        если нет туду то выводим альтернативный текст */}
        {/* свойсво todos которое принимает массив todos */}
        {todos.length ? (
          <TodoList todos={todos} OnTogle={togleTodo}></TodoList>
        ) : (
          <p> No todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
