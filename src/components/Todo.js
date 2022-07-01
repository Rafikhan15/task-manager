import React from "react";
import useTasks from "../hooks/useTasks";
import style from "./todo.module.css";

const Todo = ({ task }) => {
  const { title, description } = task;
  console.log(description);

  // const [services, setServices] = useServices();
  const [tasks, setTasks] = useTasks();
  const [Refresh, setRefresh] = React.useState(false);


  /* const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  }; */

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/task/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = tasks.filter(task => task._id !== id);
          setTasks(remaining);
          setRefresh(!Refresh);
        })
    }
    // console.log(tasks);
  }




  return (
    <article className={style.todo}>
      <div className="px-5">
        <h3 className="text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => handleDelete(task._id)}
        >
          X
        </button>
      </div>
    </article>
  );
};

export default Todo;
