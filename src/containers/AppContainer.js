import React from 'react';
import Provider from 'react-redux';

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    render = () => {

        return (

            <Provider store={this.props.store}>

            </Provider>
        );
    }

}



