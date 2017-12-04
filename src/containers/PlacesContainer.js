import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";
import Place from "../components/Place";
import * as actions from '../actions/placeActions'


class PlacesContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            places: props.store.getState().places
        }
    }

    componentDidMount = () => {
        this.props.store.subscribe(this.storeChanged);
    };

    storeChanged = () => {
        this.setState({
            places: this.props.store.getState().places
        });

    };

    onHandleDelete = (e, id) => {
        let action = actions.deletePlace(id);
        this.props.store.dispatch(action);
    };


    render = () => {

        const style = {
            margin: 20,
            padding: 20

        };

        let places = this.state.places.map((place, index) => (
            <Place id={place.id}
                   key={index}
                   name={place.name}
                   handleDelete={this.onHandleDelete}
            />

        ));


        return (
            <div style={style}>
                <h1>Places</h1>
                <Table striped={true} responsive={true} bordered={true}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                    {places}
                    </thead>
                </Table>
            </div>
        );
    }
}

PlacesContainer.PropTypes = {
    store: PropTypes.object.isRequired
};

export default PlacesContainer;