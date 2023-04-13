import React from 'react';

const FullPostInfo = ({value}) => {
    return (
        <div>
            <div>postId - {value.postId}</div>
            <div>id - {value.id}</div>
            <div>name - {value.name}</div>
            <div>email - {value.email}</div>
            <div>body - {value.body}</div>
        </div>
    );
};

export default FullPostInfo;