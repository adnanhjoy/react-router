import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData()
    const {name, flags} = details[0];
    return (
        <div>
            <h1>Post Details</h1>
            <h1>Name: {name.common }</h1>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default PostDetails;