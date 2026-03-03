import { useRecoilState } from "recoil";
import { filterAtom } from "../atoms/filterAtom";

export function Filter() {
  const [filter, setFilter] = useRecoilState(filterAtom);

  return (
    <div>
      <button onClick={() => setFilter("all")}>
        Todas
      </button>

      <button onClick={() => setFilter("completed")}>
        Concluídas
      </button>

      <button onClick={() => setFilter("pending")}>
        Pendentes
      </button>
    </div>
  );
}