"use client";
import React from "react";
import { useState, useEffect } from "react";
import Table from "./components/table";
import Input from "./components/input";
import styles from "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("text", JSON.stringify(todos));
  // }, [todos]);

  // useEffect(() => {
  //   console.log(complete);
  // }, [complete]);

  function removeTodo(item) {
    const updatedTodos = todos.filter(todo => todo !== item);
    setComplete((completeArray) => [...completeArray, item]);
    setTodos(updatedTodos);
  }

  // function removeTodo(item) {
  //   for (let i = 0; i < todos.length; i++) {
  //     if (item === todos[i]) {
  //       // let completeState = [];
  //       console.log(todos[i]);
  //       setComplete((completeArray) => [completeArray, todos[i]]);
  //       todos.splice(i, 1);
  //       setTodos(todos);
  //       console.log(todos);
  //     }
  //   }
  // }

  return (
    <main className={styles.main}>
      {/* main container */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center">
            {/* title and input element */}
            <Input todos={todos} setTodos={setTodos} />
            {/* table */}
            <Table
              todos={todos}
              complete={complete}
              removeTodo={removeTodo}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
