import React from 'react';
import PropTypes from 'prop-types';
import PeopleContainer from "./containers/PeopleContainer";
import PlacesContainer from "./containers/PlacesContainer";
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';


const App = (props) => {

    // <PlacesContainer store={this.props.store}/>
    // <PeopleContainer store={this.props.store}/>

    return (
        <Router>
            <div align={'center'}>

                <Header/>
                <Route path={'/'} component={Home} exact={true} />
                <Route path={'/people'} render={() => {
                    return <PeopleContainer store={props.store} />
                }} />
                <Route path={'/places'} render={() => {
                    return <PlacesContainer store={props.store} />
                }} />


            </div>
        </Router>
    );
}


App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;




