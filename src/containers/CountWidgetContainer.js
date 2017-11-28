import React from 'react';
import {incrementCount, decrementCount} from "../actions/countActions";
import CountWidget from "../components/CountWidget";
import Jumbotron from "react-bootstrap/es/Jumbotron";

class CountWidgetContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidMount = () => {
        console.log('componentDidMount')
        this.props.store.subscribe(this.storeChanged);
    };

    storeChanged = () => {
        this.setState({
            count: this.props.store.getState()
        });

    };

    handlePlusClick = (event) => {
        let action = incrementCount();
        this.props.store.dispatch(action);
    };

    handleMinusClick = (event) => {
        let action = decrementCount();
        this.props.store.dispatch(action);
    };

    render = () => {

        return (
            <Jumbotron>
                <CountWidget count={this.state.count}
                             handleIncrementClick={this.handlePlusClick}
                             handleDecrementClick={this.handleMinusClick} />
            </Jumbotron>
    )};
}

export default CountWidgetContainer;