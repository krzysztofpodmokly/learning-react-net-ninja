import React from 'react';

class PostDetail extends React.Component {
    handleClick = () => {
        console.log('POST DETAIL => ', this.props)
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        )
    }
}



export default PostDetail;