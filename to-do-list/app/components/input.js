import React from "react"


export default function Input(props){
    // on "enter" key press, store value in input into todos object array
    let enterKey = (e) => {
    if (e.key === "Enter") {
        let inputText = e.target.value;
        props.setTodo(
            inputText
            )
        
        e.target.value = "";
    }
}
    return(
    <>
        <h1>To-Do List</h1>
        <input placeholder="Enter text here" className="input, mt-5" onKeyDown={enterKey} />
    </>
    )
}
