import React from 'react';
import PropTypes from 'prop-types';

let Person = ({id, index, name, handleDelete}) => {

    return (
        <tr key={index}>
            <td>{id}</td>
            <td>{name}</td>
            <td><button onClick={handleDelete(id)}>Delete</button></td>
        </tr>
    )
};


Person.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Person;





