import React from 'react';
import axios from 'axios';
import PostDetail from './PostDetail';

class Post extends React.Component {
    state = {
        post: null
    }

    componentDidMount() {
        // console.log(this.props);
        this.getPost();
    }

    getPost = async () => {
        let id = this.props.match.params.post_id;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        this.setState({
            post: response.data
        });
    }

    render() {

        const post = this.state.post ? (<PostDetail post={this.state.post} />) : (<div className="center">Loading post...</div>)

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post;