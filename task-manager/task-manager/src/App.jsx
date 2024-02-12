import Sidebar from "./components/Sidebar";
import Task from "./components/task";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">

      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <Sidebar></Sidebar>
      <Task />
    </main>
  );
}

export default App;
