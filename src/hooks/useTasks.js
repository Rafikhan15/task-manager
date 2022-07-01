import { useEffect, useState } from "react";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://red-marks-53727.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);
    return [tasks, setTasks]
}

export default useTasks;