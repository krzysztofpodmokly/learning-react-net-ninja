import React from 'react';
<<<<<<< HEAD
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';
import '../styles/index.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
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

export default App;