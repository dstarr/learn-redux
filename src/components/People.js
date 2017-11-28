import React from 'react';
import {Table} from 'react-bootstrap'

class People extends React.Component {

    constructor(props) {
        super(...props);

    }

    render = () => {

        return (

            <div>


                <Table striped={true} responsive={true} bordered={true}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>Main Character</th>
                    </tr>

                    </thead>
                </Table>
            </div>


        );
    }
}


export default People