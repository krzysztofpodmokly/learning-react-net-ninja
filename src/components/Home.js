import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        console.log('HOME => ', this.props)
        const { posts } = this.props.posts;
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);