import Contenttask from "./Contenttask.jsx";

export default function Newtask({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <Contenttask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not have tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map(
            (
              task // Fixed the mapping of tasks
            ) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span> {/* Fixed accessing task properties */}
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
}
