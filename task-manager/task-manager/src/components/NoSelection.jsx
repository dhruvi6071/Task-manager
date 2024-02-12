import noProjectImg from "../assets/no-projects.png";

export default function Noselection({onAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty class list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project to get started</p>
      <p mt-8>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onAddProject}>
          Create Project
        </button>
      </p>
    </div>
  );
}
