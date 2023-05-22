import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./TaskPage.module.css";

const btnStyle = {
  backgroundColor: "#1928d2",
  color: "white",
  width: "7rem",
  border: "1px solid white",
  "&:hover": {
    backgroundColor: "#5a1c63",
  },
};

export default function TaskPage() {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [taskId, setTaskId] = useState(null);

  const clickHandler = () => {
    if (data === "") {
      alert("Fill the Task");
    } else if (data !== "" && isVisible === true) {
      setTask(
        task.map((element, index) => {
          if (index === taskId) {
            return { ...element, todo: data };
          } else {
            return element;
          }
        })
      );
      setData("");
      setIsVisible(false);
    } else {
      setTask([...task, { todo: data }]);
      setData("");
    }
  };

  function deleteTodo(index) {
    setTask(task.filter((elem, id) => id != index));
  }

  const UpdateTodo = (id) => {
    const update = task.find((elem, index) => index === id);
    setData(update.todo);
    setIsVisible(true);
    setTaskId(id);
  };

  return (
    <div className={styles.container}>
      <h1>Task page</h1>
      <span className={styles.container1}>
        <TextField
          sx={{ border: "1px solid", backgroundColor: "white" }}
          label="enter task"
          value={data}
          variant="filled"
          onChange={(e) => setData(e.target.value)}
        />
        {isVisible ? (
          <Button onClick={clickHandler} sx={btnStyle}>
            Submit
          </Button>
        ) : (
          <Button onClick={clickHandler} sx={btnStyle}>
            Enter
          </Button>
        )}
      </span>
      <div className={task.length === 0 ? styles.div_todo : styles.container2}>
        {task.map((ele, index) => (
          <span key={index} className={styles.inner_div}>
            {ele.todo}
            <span className={styles.buttons}>
              <Button onClick={() => deleteTodo(index)} sx={btnStyle}>
                Delete
              </Button>
              <Button onClick={() => UpdateTodo(index)} sx={btnStyle}>
                Update
              </Button>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
