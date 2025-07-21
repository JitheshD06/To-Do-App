import TodoItem from "./Todoitems";
import styles from "./Tododisplay.module.css";
function Tododisplay({ todoitems ,clickDeleteItem}) {
  return (
    <>
      {todoitems.map((item) => (
        <TodoItem
          className={styles.itemsContainer}
          key={item.name}
          todoitem={item.name}
          tododate={item.dueDate}
          clickDeleteItem ={clickDeleteItem}
        />
      ))}
    </>
  );
}

export default Tododisplay;
