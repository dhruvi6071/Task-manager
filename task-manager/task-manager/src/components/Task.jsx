import { useRef } from "react";
import Input from "./Input.jsx";

export default function Task({onAdd}) {
    //Saving the entered data in raw format 
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = title.current.value;
        const enteredDuedate = title.current.value;

        //Validation...

        onAdd({
            title: enteredTitle,
            description : enteredDescription,
            duedate : enteredDuedate,
        })

    }
  //Saving the entered data in raw format 
  
  return (
        <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" >Close</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
        </menu>
        <Input type="text" ref={title} label="Title"/>
        <Input ref={description} label="Description" textarea/>
        <Input type="date" ref={duedate} label="Due Date"/>
        </div>
    );
}