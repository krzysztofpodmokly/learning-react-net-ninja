import React from 'react';

class AddTodo extends React.Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddTodo;