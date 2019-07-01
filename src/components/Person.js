import React from 'react';

class Person extends React.Component {

    onPersonRemove = () => {
        this.props.deletePerson(this.props.person.id);
    }

    render() {
        const { name, lastName } = this.props.person;
        return (
            <div className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="description">{lastName}</div>
                </div>
                <button onClick={() => this.onPersonRemove()}className="ui primary button">Discard</button>
            </div>
        )
    }
}

export default Person;