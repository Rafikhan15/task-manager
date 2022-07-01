import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import style from "./todos.module.css";
const CompleteTask = () => {
    const [tasks, setTasks] = useState([]);
    const [Refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
        setRefresh(!Refresh);
    }, [tasks])

    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5'>


            {
                tasks.map(task => <Todo
                    key={task._id}
                    task={task}
                >
                </Todo>)
            }

        </section>
    );
}

export default CompleteTask