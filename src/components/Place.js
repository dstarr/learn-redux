import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'


let Person = ({id, index, name, handleDelete}) => {

    return (
        <tr key={index}>
            <td>{id}</td>
            <td>{name}</td>
            <td><Button onClick={e => handleDelete(e, id)}>Delete</Button></td>
        </tr>
    )
};


Person.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Person;





