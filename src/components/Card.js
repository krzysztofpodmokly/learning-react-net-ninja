import React from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

const Card = ({title, body, id}) => {
    return (
        <div className="post card">
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
                <Link to={'/' + id}>
                    <span className="card-title red-text">{title}</span>
                </Link>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card;