import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    aliginItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, index, onChange }) {
  console.log("todo", todo);

  const {removeTodo} = useContext(Context)
  const classes = [];

  if(todo.completed){
      classes.push('done')
  }

  return (
    <li style={styles.li}>
      <span className={classes.join('')}>
        <input
          type="checkbox"
          style={styles.input}
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <strong>{index + 1}.</strong>
        &nbsp;
        {todo.title}{" "}
      </span>
      <button className="rm" onClick={() => removeTodo(todo.id)}> X </button>
    </li>
  );
}

// валидация поля
// приходящий праметр должен быть объектом
// индекс должен быть числом
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
