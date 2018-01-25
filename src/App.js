import React from 'react';
import PropTypes from 'prop-types';
import PeopleContainer from "./containers/PeopleContainer";
import PlacesContainer from "./containers/PlacesContainer";
import Header from './components/Header';
import {BrowserRouter as Router} from 'react-router-dom';


const AppContainer = (props) => {

    // <PlacesContainer store={this.props.store}/>
    // <PeopleContainer store={this.props.store}/>

    return (
        <Router>
            <div align={'center'}>

                <Header/>
                <PeopleContainer store={props.store}/>
                <PlacesContainer store={props.store}/>

            </div>
        </Router>
    );
}


AppContainer.propTypes = {
    store: PropTypes.object.isRequired
};

export default AppContainer;




