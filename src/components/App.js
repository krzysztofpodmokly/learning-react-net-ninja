import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import ProjectDetails from './projects/ProjectDetails';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';
=======
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';
>>>>>>> upstream/master
import '../styles/index.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
<<<<<<< HEAD
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
=======
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/:post_id" component={Post} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
>>>>>>> upstream/master
    }
}

export default App;