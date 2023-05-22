import { Button, TextField } from "@mui/material";
import { useState } from "react";

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
    <div>
      <h1>task page</h1>
      <TextField
        label="enter task"
        value={data}
        variant="filled"
        onChange={(e) => setData(e.target.value)}
      />
      {isVisible ? (
        <Button variant="contained" onClick={clickHandler}>
          Submit
        </Button>
      ) : (
        <Button variant="contained" onClick={clickHandler}>
          Enter
        </Button>
      )}
      <div>
        {task.map((ele, index) => (
          <span key={index}>
            {ele.todo}
            <Button onClick={() => deleteTodo(index)}>Delete</Button>
            <Button onClick={() => UpdateTodo(index)}>Update</Button>
          </span>
        ))}
      </div>
    </div>
  );
}
