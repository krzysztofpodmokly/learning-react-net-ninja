import React from 'react';
import axios from 'axios';
import Card from './Card';

class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({
            posts: response.data.slice(0, 10)
        })
    }

    render() {
        const { posts } = this.state;
        console.log(posts)
        const postList = posts.length ? posts.map(({id, body, title}) => {
            return <Card title={title} body={body} id={id} key={id}/>
        }) : (<div className="center">No posts yet</div>)
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;