import React from "react"
import { useState, useEffect } from "react"
export default function Table(todo){

    return(
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>To-Do's</th>
            </tr>
        </thead>
        <tbody>
            {/* {todoData.map((item) => (
                <tr>
                    <td>
                        {item}
                    </td>
                </tr>
            )
            )} */}
        </tbody>
    </table>
    </>
    )
}