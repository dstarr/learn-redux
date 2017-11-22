import React from 'react';
import { incrementCount } from "../actions/incrementCount";


export default class AppContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.store.getState()
        }
    }

    componentDiDMount = () => {
        this.props.store.subscribe(this.storeChanged);
    };

    storeChanged = () => {
      this.setState({
          count: this.props.store.getState()
      });

    };

    handleClick = (event) => {
        let action = incrementCount();
        this.props.store.dispatch(action);
        console.log('Action dispatched: ' + action.type);

    };


    render = () => {
        return (
          <div>
              <p> Count: {this.state.count} </p>
              <button onClick={this.handleClick}>Increment</button>
          </div>
        );
    }

}



