import React, { use } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Tododisplay from "./components/Tododisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoitems, setTodoItems] = useState([]);
  const handlenewItem = (Itemname, Itemduedate) => {
    let newItems = [...todoitems, { name: Itemname, dueDate: Itemduedate }];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <AppName />
      <AddTodo onNewItem={handlenewItem} />
      <Tododisplay clickDeleteItem={handleDeleteItem} todoitems={todoitems} />
    </>
  );
}

export default App;
