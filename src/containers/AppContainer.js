import React from 'react';
import CountWidgetContainer from "./CountWidgetContainer";
import PropTypes from 'prop-types';


class AppContainer extends React.Component {

    render = () => {
        return (
            <div align={'center'}>
                <CountWidgetContainer store={this.props.store}/>
            </div>
        );
    }
}


AppContainer.PropTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;




