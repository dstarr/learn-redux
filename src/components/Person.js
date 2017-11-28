import React from 'react';
import PropTypes from 'prop-types';

let Person = ({id, index, first, last, occupation, handleDelete}) => {

    return (
        <tr key={index}>
            <td>{first} {last}</td>
            <td>{occupation}</td>
            <td><button onClick={handleDelete(id)}>Delete</button></td>
        </tr>
    )
};


Person.PropTypes = {
    id: PropTypes.number.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Person;





