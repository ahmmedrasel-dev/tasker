import { getTaskList } from "../data/tasks";
const initialState = {
  taskData: getTaskList(),
};

function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_TASK":
      break;
    case "UPDATE_TASK":
      break;
    case "DELETE_TASK":
      break;
    default:
      return state;
  }
}

export { initialState, TaskReducer };
