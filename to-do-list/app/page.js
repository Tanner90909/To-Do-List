"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Table from './components/table'
import Input from './components/input'
import styles from './styles.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

const [todo, setTodo] = useState("");

useEffect(() => {
localStorage.setItem("todo", JSON.stringify(todo))
console.log(todo)
},
[todo]);

  return (
    <main className={styles.main}>
      {/* main container */}
      <div className="container mt-5">
        <div className='row'>
          <div className='col-12 text-center'>
            {/* title and input element */}
            <Input 
            todo = {todo}
            setTodo = {setTodo}
            />
            {/* table */}
            <Table />
          </div>
        </div>
      </div>
    </main>
  )
}
