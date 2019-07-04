import React from 'react';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';
import { fetchPosts, deletePost } from '../actions';

class Post extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const post = this.props.post ? (
                                    <PostDetail
                                        post={this.props.post}
                                        deletePost={this.props.deletePost}
                                        history={this.props.history}
                                    />
                                    ) : (<div className="center">Loading post...</div>)
        
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.post_id);
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(Post);