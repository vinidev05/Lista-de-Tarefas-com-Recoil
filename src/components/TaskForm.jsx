import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";

export function TaskForm() {
  const [text, setText] = useState("");
  const setTasks = useSetRecoilState(tasksAtom);

  function addTask() {
    if (!text.trim()) return;

    setTasks(oldTasks => [
      ...oldTasks,
      { id: Date.now(), text, completed: false }
    ]);

    setText("");
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
    </div>
  );
}