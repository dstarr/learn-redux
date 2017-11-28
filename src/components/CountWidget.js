import React from 'react';
import PropTypes from 'prop-types';

let CountWidget = ({count, handleIncrementClick, handleDecrementClick}) => {

    return (
        <div>
            <p> Count: {count} </p>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </div>
    )
};


// class CountWidget extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = this.props.state.getState();
//
//     }
//
//     render = () => {
//
//         // <p> Count: {this.props.count} </p>
//
//         return (
//             <div>
//                 <button onClick={this.props.handleIncrementClick}>Increment</button>
//                 <button onClick={this.props.handleDecrementClick}>Decrement</button>
//             </div>
//         );
//     }
// }

// CountWidget.PropTypes = {
//     count: PropTypes.number.isRequired,
//     handleIncrementClick: PropTypes.func.isRequired,
//     handleDecrementClick: PropTypes.func.isRequired
// };

export default CountWidget;