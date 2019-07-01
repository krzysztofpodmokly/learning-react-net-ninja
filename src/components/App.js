import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends React.Component {
    state = {
        todos: [
            {id: 1, content: 'buy milk'},
            {id: 2, content: 'play pubg'}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: todos
        });
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        this.setState({
            todos: [ ...this.state.todos, todo]
        })
    }

    render() {
        return (
          <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <TodoList
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
            />
            <AddTodo 
                addTodo={this.addTodo}
            />
          </div>
        );
    }
}

export default App;