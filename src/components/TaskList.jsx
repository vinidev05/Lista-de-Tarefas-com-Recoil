import { useRecoilState, useRecoilValue } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";
import { filteredTasksSelector } from "../selectors/filteredTasksSelector";

export function TaskList() {
  const [tasks, setTasks] = useRecoilState(tasksAtom);
  const filteredTasks = useRecoilValue(filteredTasksSelector);

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <ul>
      {filteredTasks.map(task => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.text}
          </span>
          <button onClick={() => toggleTask(task.id)}>✔</button>
          <button onClick={() => removeTask(task.id)}>🗑</button>
        </li>
      ))}
    </ul>
  );
}