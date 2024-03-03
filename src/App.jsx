import { useState } from "react";
import { TaskContext } from "./context";
import Home from "./pages/Home";
import { getTaskList } from "./data/tasks.js";
function App() {
  const tasklist = getTaskList();
  const [tasks, setTasks] = useState(tasklist);
  return (
    <>
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <Home />
      </TaskContext.Provider>
    </>
  );
}

export default App;
