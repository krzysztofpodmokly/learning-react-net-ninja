import React from 'react';
import { connect } from 'react-redux';
import PostDetail from './PostDetail';

class Post extends React.Component {
    render() {
        console.log('POST => ', this.props);
        const post = this.props.post ? (<PostDetail post={this.props.post} deletePost={this.props.deletePost} history={this.props.history}/>) : (<div className="center">Loading post...</div>)

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
        post: state.posts.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);