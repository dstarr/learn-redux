import React from 'react';

let CountWidget = ({count, handleIncrementClick, handleDecrementClick}) => (
    <div>
        <p> Count: {count} </p>
        <button onClick={handleIncrementClick}>Increment</button>
        <button onClick={handleDecrementClick}>Decrement</button>
    </div>
);

export default CountWidget;