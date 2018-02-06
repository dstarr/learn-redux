import React from 'react';
import AddPlace from "../components/AddPlace";
import * as actions from '../actions/placeActions'

class AddPlaceContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: this.props.store.getState().people
        }

    };

    componentDidMount = () => {
        this.props.store.subscribe(this.storeChanged);
    };

    render = () => {

        return (
            <AddPlace handleAddPlace={this.handleAddPlace}/>
        );
    };

    storeChanged = () => {
        this.setState({
            people: this.props.store.getState().people
        });
    };

    handleAddPlace = (placeName) => {
        const action = actions.addPlace(placeName);
        this.props.store.dispatch(action);
    };
}

export default AddPlaceContainer;