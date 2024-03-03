import TaskAction from "./Tasks/TaskAction";
import Tasklist from "./Tasks/Tasklist";

const TaskContainer = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <TaskAction />
            </div>
          </div>
          <div className="overflow-auto">
            <Tasklist />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskContainer;
