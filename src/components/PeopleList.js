import React from 'react';
import Person from './Person';

class PeopleList extends React.Component {
    render() {
        const renderedList = this.props.people
            .filter(person => person.age > 25)
            .map(person => <Person key={person.id} person={person} deletePerson={this.props.deletePerson} />)

        return (
            <div className="ui relaxed divided list">
                {renderedList.length ? renderedList : 'No items'}
            </div>
        )
    }
}

export default PeopleList;