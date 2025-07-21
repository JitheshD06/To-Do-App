function TodoItem({ todoitem, tododate, clickDeleteItem }) {
  return (
    <>
      <div className="container items-container">
        <div className="row todorow">
          <div className="col-6">{todoitem}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger todobutton"
              onClick={() => clickDeleteItem(todoitem)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
