import React from 'react';
import People from "../components/People";
import Jumbotron from "react-bootstrap/es/Jumbotron";
import * as actions from '../actions/personActions'

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.store.getState()
        }
    }

    render = () => {

        const style = {
            backgroundColor: 'red',
            margin: 20,
            padding: 20
        };


        return (
            <Jumbotron style={style}>
                <People/>
            </Jumbotron>
        );
    }
}

export default PeopleContainer;