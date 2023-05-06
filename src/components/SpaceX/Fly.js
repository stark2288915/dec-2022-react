import React from 'react';

const Fly = ({arg}) => {
    return (
        <div>
            {
                JSON.stringify(arg)
            }
            <hr/>
        </div>
    );
};

export default Fly;