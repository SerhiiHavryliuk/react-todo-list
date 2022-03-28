import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    color: "red",
    margin: 10,
  },
};

// props - это входной параметр который позволяет принимать свойтва
function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.OnTogle}
          ></TodoItem>
        );
      })}
      {/* <TodoItem> </TodoItem>
            <TodoItem/> */}
    </ul>
  );
}

// валидация, определяем свойства проптайпс, будет передаваться объект
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  OnTogle: PropTypes.func.isRequired
};
export default TodoList;
