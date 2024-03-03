import { useReducer } from "react";
import { TaskContext } from "./context";
import Home from "./pages/Home";
import { TaskReducer, initialState } from "./reducers/TaskReducer.js";
function App() {
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        <Home />
      </TaskContext.Provider>
    </>
  );
}

export default App;
