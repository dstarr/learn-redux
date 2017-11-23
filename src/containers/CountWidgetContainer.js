import React from 'react';
import {incrementCount, decrementCount} from "../actions/countActions";
import CountWidget from "../components/CountWidget";

export default class CountWidgetContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.store.getState()
        }
    }

    componentDidMount = () => {
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
        return <CountWidget count={this.state.count}
                            handleIncrementClick={this.handlePlusClick}
                            handleDecrementClick={this.handleMinusClick}
        />
    }
}