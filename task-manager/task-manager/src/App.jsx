import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import Task from "./components/Task.jsx";
import Noselection from "./components/NoSelection.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  //Saving the entered data in raw format
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random;
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  
  function handleDeleteTask(id) { // Added 'id' parameter
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  
  function handleNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelect(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  // Finding an element by ID using JavaScript
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // console.log(projectState);
  //Saving the entered data in raw format

  // Main logic to get new task when we click on Add button.
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddtask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      task={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <Task onAdd={handleAddProject} onCancel={handleCancelNewProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <Noselection onStartAddProject={handleNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <Sidebar
        onStartAddProject={handleNewProject}
        projects={projectState.projects}
        onSelect={handleSelect}
      ></Sidebar>
      {content}
    </main>
  );
}

export default App;
