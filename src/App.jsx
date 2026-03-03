import { RecoilRoot } from "recoil";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Filter } from "./components/Filter";

function App() {
  return (
    <RecoilRoot>
      <h1>Lista de Tarefas</h1>
      <TaskForm />
      <Filter />
      <TaskList />
    </RecoilRoot>
  );
}

export default App;