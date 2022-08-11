import React, { FC, useState } from "react";
import { Input, Box, ButtonGroup, Button, Checkbox } from "@mui/material";

export interface TodoProp {
  todo: string;
  id: number;
  done: boolean;
}

export interface IProp extends TodoProp {
  updateTodo: (todo: TodoProp) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: FC<IProp> = (props) => {
  const { todo, updateTodo, id, deleteTodo, done } = props;
  const [inputValue, setInputValue] = useState(todo);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleEditTodo = () => {
    updateTodo({
      done,
      todo: inputValue,
      id,
    });
  };
  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  const handleChangeTodoStatus = () => {
    updateTodo({
      done: !done,
      todo: inputValue,
      id,
    });
  };

  return (
    <div className="todo-item">
      <Checkbox
        checked={done}
        onChange={handleChangeTodoStatus}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Input
        fullWidth={true}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleEditTodo}
      ></Input>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button color="error" onClick={handleDeleteTodo}>
          del
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TodoItem;
