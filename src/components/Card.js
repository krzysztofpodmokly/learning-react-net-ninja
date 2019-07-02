import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

const Card = ({post}) => {
    return (
        <div className="post card">
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
                <Link to={'/' + post.id}>
                    <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export default Card;