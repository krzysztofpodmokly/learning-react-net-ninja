import React from 'react';
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
    }

    render() {
        return (
            <div className="ui container content-box">
                <AddPerson addPerson={this.addPerson} />
                <div className="ui container segment">
                    <PeopleList people={this.state.people} deletePerson={this.deletePerson} />
                </div>
            </div>
        )
    }
}

export default App;