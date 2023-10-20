import React from "react"

export default function Table(props){
    
    let todoData = [...props.todo];
    let completeData = [];

    function removeTodo (item, setTodo){
        for (let i = 0; i < todoData.length; i++){
            if (item === todoData[i]){
                completeData.push(todoData[i])
                todoData.splice(i, 1);
                props.setTodo(todoData); 
                console.log(todoData)
                console.log(completeData)
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
                    <td>
                        <div className="row">
                            <div className="col-6">
                                {item}
                            </div>
                            <div className="col-6">
                                <button className="rounded-pill, btn btn-info btn-sm" onClick={() => removeTodo(item)}>Complete</button>
                            </div>
                        </div>
                    </td>
                </tr>
            )
            )}
        </tbody>
    </table>
    </>
    )
}