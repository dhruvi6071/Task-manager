import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Task from "./components/task";
import Noselection from "./components/NoSelection";

function App() {
   //Saving the entered data in raw format 
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectState);
  //Saving the entered data in raw format 

  // Main logic to get new task when we click on Add button.
  let content;
  if (projectState.selectedProject === null) {
    content = <Task onAdd={handleAddProject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <Noselection onAddProject={handleNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <Sidebar onAddProject={handleNewProject}></Sidebar>
      {content}
    </main>
  );
}

export default App;
