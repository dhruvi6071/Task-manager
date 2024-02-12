import Input from "./Input.jsx";
import { useRef } from "react";

export default function Task({label, textarea, ...props}) {
    const title = useRef();
    const description = useRef();
    const duedate = useRef();

    return (
        <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Close</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <Input ref={title} label="Title"/>
        <Input ref={description} label="Description" textarea/>
        <Input ref={duedate} label="Due Date"/>
        </div>
    );
}