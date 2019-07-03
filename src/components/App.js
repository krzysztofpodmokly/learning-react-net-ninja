import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';
import '../styles/index.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/project/:id" component={ProjectDetails} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/create" component={CreateProject} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;