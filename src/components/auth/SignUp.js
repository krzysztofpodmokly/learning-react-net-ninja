import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} autoComplete="off" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} autoComplete="off" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange} autoComplete="off" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.handleChange} autoComplete="off" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);