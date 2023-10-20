import React, { useState } from "react";

export default function Table({ todos, removeTodo, complete }) {
  const [completedView, setCompletedView] = useState(false);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>To-Do's</th>
          </tr>
        </thead>
        <tbody>
{/* conditional rendering */}
          {!completedView
            ? todos.map((todo, i) => (
                <tr key={Date.now() + i}>
                  <td>
                    <div className="row">
                      <div className="col-6">{todo}</div>
                      <div className="col-6">
                        <button
                          className="rounded-pill btn btn-info btn-sm"
                          onClick={() => removeTodo(todo)}
                        >
                          Complete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            : complete.map((todo, i) => (
                <tr key={Date.now() + i}>
                  <td>
                    <div className="row">
                      <div className="col-6">{todo}</div>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <button
        className="rounded-pill btn btn-info btn-sm"
        onClick={() => setCompletedView(!completedView)}
      >
        {!completedView ? <span>Show completed</span> : <span>Show active</span>}
      </button>
    </>
  );
}
