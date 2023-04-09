import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({blog}) => {
    const {name, population, flags, cca3} = blog;
    return (
        <div className='post'>
            <img src={flags.png} alt="" />
            <h3>{name.common}</h3>
            <p>Population: {population}</p>
            <p>Details <Link to={`${cca3}`}>{cca3}</Link></p>
        </div>
    );
};

export default Post;