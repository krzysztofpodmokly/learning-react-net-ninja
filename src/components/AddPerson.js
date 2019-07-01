import React from 'react';

class AddPerson extends React.Component {
    state = {
        name: '',
        age: '',
        lastName: ''
    }

    textInput = React.createRef();

    focus() {
        this.textInput.current.focus();
    }

    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onButtonSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
        this.setState({
            name: '',
            age: '',
            lastName: ''
        });
        this.focus();
    }
    

    render() {
        return (
            <form onSubmit={this.onButtonSubmit} className="ui form">
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" ref={this.textInput} placeholder="First Name" id="name" value={this.state.name} onChange={this.handleInput} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" id="lastName" value={this.state.lastName} onChange={this.handleInput} />
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="text" name="last-name" placeholder="Age" id="age" value={this.state.age} onChange={this.handleInput} />
                </div>
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        )
    }
}

export default AddPerson;