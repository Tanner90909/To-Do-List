import React from "react"


export default function Input(props){
    // on "enter" key press, store value in input into todos object array
    let enterKey = (e) => {
    if (e.key === "Enter") {
        let inputText = e.target.value;
        props.setTodos(todo => [...todo, inputText])
        e.target.value = "";
    }
}
    return(
    <>
        <h1>To-Do List</h1>
        <div className="input-group input-group-lg, mt-5">
            <input placeholder="Enter to-do here" onKeyDown={enterKey} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
    </>
    )
}
