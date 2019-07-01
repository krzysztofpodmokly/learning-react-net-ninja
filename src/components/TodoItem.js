import React from 'react';

const TodoItem = (props) => {
    

    return (
      <div className="collection-item">
        <span onClick={() => props.deleteTodo(props.todo.id)}>
          {props.todo.content}
        </span>
      </div>
    );
}

export default TodoItem