import React from 'react';
<<<<<<< HEAD
import PeopleList from './PeopleList';
import AddPerson from './AddPerson';
import '../styles/App.css';

class App extends React.Component {
    state = {
        people: [
            {name: 'John', age: 30, lastName: 'Doe', id: 1},
            {name: 'Maria', age: 25, lastName: 'Lazarsky', id: 2},
            {name: 'Anna', age: 31, lastName: 'Bungalow', id: 3}
        ]
    }

    addPerson = (person) => {
        person.id = Math.random();
        this.setState({
             people: [ ...this.state.people, person]
        })
    }

    deletePerson = (id) => {
        this.setState({
            people: this.state.people.filter(person => person.id !== id)
        });
=======
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
>>>>>>> 2d9e1a9169b848df2079082a6e26abf27189e367
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="ui container content-box">
                <AddPerson addPerson={this.addPerson} />
                <div className="ui container segment">
                    <PeopleList people={this.state.people} deletePerson={this.deletePerson} />
                </div>
            </div>
        )
=======
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
>>>>>>> 2d9e1a9169b848df2079082a6e26abf27189e367
    }
}

export default App;