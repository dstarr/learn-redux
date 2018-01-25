import React from 'react';
import PropTypes from 'prop-types';
import PeopleContainer from "./PeopleContainer";
import PlacesContainer from "./PlacesContainer";


const AppContainer = (props) => {

    // <PlacesContainer store={this.props.store}/>
    // <PeopleContainer store={this.props.store}/>

    return (
        <div align={'center'}>
            <PeopleContainer store={props.store}/>
            <PlacesContainer store={props.store}/>

        </div>
    );
}


AppContainer.propTypes = {
    store: PropTypes.object.isRequired
};

export default AppContainer;




