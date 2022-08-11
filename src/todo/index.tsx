import React, { FC, useState } from "react";
import TodoInputBar from "./todoInputBar";
import { Container } from "@mui/system";
import { Snackbar, Alert, AlertColor, Stack } from "@mui/material";
import TodoItem, { TodoProp } from "./todoItem";
import "./style.css";
interface Tip {
  msg?: string;
  isOpen: boolean;
  severity: AlertColor;
}

// Todo组件，下方包括输入组件，TodoList组件
const Todo = () => {
  const [todos, setTodos] = useState<TodoProp[]>([]);
  const [operationTip, setOperationTip] = useState<Tip>({
    isOpen: false,
    severity: "success",
  });

  // 添加todo
  const handleAddTodo = (newTodo: string) => {
    let tip: Tip = {
      msg: "add todo success!",
      severity: "success",
      isOpen: true,
    };
    if (!!newTodo) {
      const newTodoItem: TodoProp = {
        todo: newTodo,
        id: new Date().getTime(),
        done: false,
      };
      setTodos([newTodoItem, ...todos]);
    } else {
      tip.msg = "add todo failed!";
      tip.severity = "warning";
    }

    setOperationTip(tip);
  };
  // todo更新 包括text和done
  const handleUpdateTodo = (todo: TodoProp) => {
    setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
    setOperationTip({
      isOpen: true,
      msg: "edit todo success!",
      severity: "success",
    });
  };
  // 删除todo
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
    setOperationTip({
      isOpen: true,
      msg: "delete todo success!",
      severity: "success",
    });
  };

  // 添加成功与失败的提示框
  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOperationTip({ ...operationTip, isOpen: false });
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 0x1212a1,
      }}
    >
      <TodoInputBar addTodoEvent={handleAddTodo}></TodoInputBar>
      <Stack spacing={2}>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
            key={todo.id}
          />
        ))}
      </Stack>
      <Snackbar
        open={operationTip.isOpen}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={operationTip.severity}
          sx={{ width: "100%" }}
        >
          {operationTip.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Todo;
