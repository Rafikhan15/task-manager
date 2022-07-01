import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./newtodo.module.css";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { title, description } = todo;
  const { register, handleSubmit } = useForm();
  const [Refresh, setRefresh] = React.useState(false);


  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const onSubmit = data => {
    console.log(data);
    const url = `https://red-marks-53727.herokuapp.com/task`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setRefresh(!Refresh);
      })
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input

          {...register("title", { required: true, maxLength: 40 })}
          className="text-red-400"
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="description">Description: </label>
        <textarea
          {...register("description")}
          className="text-red-400"
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
