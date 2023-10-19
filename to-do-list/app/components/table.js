import React from "react"
import { useState, useEffect } from "react"

export default function Table(props){
    
    let todoData = [...props.todo];

    function removeTodo (item, setTodo){
        // console.log("Im working")
        for (let i = 0; i < todoData.length; i++){
            if (item === todoData[i]){
                console.log(todoData)
                todoData.splice(i, 1); 
                console.log(todoData)
                props.setTodo(todoData); 
            }
            }
        }
    

    return(
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>To-Do's</th>
            </tr>
        </thead>
        <tbody>
            {todoData.map((item, i) => (
                <tr key={Date.now() + i}>
                    <td onClick={() => removeTodo(item)}>
                        {item}
                    </td>
                </tr>
            )
            )}
        </tbody>
    </table>
    </>
    )
}