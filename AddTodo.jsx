import { useState } from "react";

function AddTodo({ onNewItem }) {
  let [itemName, setItemName] = useState("");
  let [itemDueDate, setItemDueDate] = useState("");

  let handleTodoName = (event) => {
    setItemName(event.target.value);
  };

  let handleTodoDate = (event) => {
    setItemDueDate(event.target.value);
  };

  let handleAddButton = () => {
    onNewItem(itemName, itemDueDate);
    setItemName("");
    setItemDueDate("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row todorow">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={itemName}
              onChange={handleTodoName}
            />
          </div>
          <div className="col-4">
            <input type="date" value={itemDueDate} onChange={handleTodoDate} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success Addbutton"
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
