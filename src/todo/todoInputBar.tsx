import React, { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface IProp {
  addTodoEvent: (newTodo: string) => void;
}

const TodoInputBar: FC<IProp> = (props) => {
  const { addTodoEvent } = props;
  const [todoInput, setTodoInput] = useState("");
  // 处理input输入变化
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.target.value);
  };

  // 提交todo
  const handleSubmitTodo = () => {
    addTodoEvent(todoInput);
    setTodoInput("");
  };

  return (
    <Box>
      <TextField
        label="add todo!"
        variant="outlined"
        autoComplete="off"
        value={todoInput}
        onChange={handleInput}
      ></TextField>
      <Button variant="contained" onClick={handleSubmitTodo}>
        add todo
      </Button>
    </Box>
  );
};

export default TodoInputBar;
