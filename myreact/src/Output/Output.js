import React from 'react';

const userOutput = (props) =>{
    return(
    <div>
        <p>User name is : {props.username}</p>
        <p>this is over written</p>
    </div>
    );
};

export default userOutput;