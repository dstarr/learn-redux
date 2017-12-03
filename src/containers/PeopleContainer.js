import React from 'react';
import Jumbotron from "react-bootstrap/es/Jumbotron";
import {Table} from "react-bootstrap";
import Person from "../components/Person";

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: props.store.getState().people
        }
    }

    onHandleDelete = (id) => {
        // delete the person passed back
    };


    render = () => {

        const style = {
            backgroundColor: 'green',
            margin: 20,
            padding: 20
        };

        let people = this.state.people.map((person, index) => (
            <Person id={person.id}
                    key={index}
                    first={person.firstName}
                    last={person.lastName}
                    occupation={person.occupation}
                    handleDelete={this.onHandleDelete}
            />

        ));


        return (
            <Jumbotron style={style}>
                <Table striped={true} responsive={true} bordered={true}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>&nbsp;</th>
                    </tr>
                    {people}
                    </thead>
                </Table>
            </Jumbotron>
        );
    }
}

export default PeopleContainer;