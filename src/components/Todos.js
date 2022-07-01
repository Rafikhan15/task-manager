import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import style from "./todos.module.css";

const Todos = (props) => {
  const [tasks, setTasks] = useState([]);
  const [Refresh, setRefresh] = React.useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/task')
      .then(res => res.json())
      .then(data => setTasks(data));
    setRefresh(!Refresh);
  }, [tasks])

  return (
    <section className={style.todos}>
      {/* {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))} */}

      {
        tasks.map(task => <Todo
          key={task._id}
          task={task}
        >
        </Todo>)
      }

    </section>
  );
};

export default Todos;
