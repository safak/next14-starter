'use client'
import React from 'react';
const Error = ({ statusCode }) => {
    return (
        <div>
            <h1>Error {statusCode}</h1>
            <p>Oops! Something went wrong.</p>
        </div>
    );
};

export default Error;