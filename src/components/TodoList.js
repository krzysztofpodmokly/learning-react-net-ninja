import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const todoList = props.todos.length ? props.todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            addTodo={props.addTodo}
          />
        );
    }) : <p className="center">You have no todo's left!</p>

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default TodoList;