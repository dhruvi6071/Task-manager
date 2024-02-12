import Input from "./Input.jsx";

export default function Task({label, textarea, ...props}) {
    return (
        <>
        <menu>
            <li><button>Close</button></li>
            <li><button>Save</button></li>
        </menu>
        <Input label="Title"/>
        <Input label="Description" textarea/>
        <Input label="Due Date"/>
        </>
    );
}