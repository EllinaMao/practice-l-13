import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../../features/task/taskSlice.jsx";
import { InputTask } from "./InputTask";

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
    };
    dispatch(addTask(newTask));
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <section>
      <h2>Список задач (Redux)</h2>

      <InputTask onAdd={handleAddTask} />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Task;
