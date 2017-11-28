import {createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvsariant from 'redux-immutable-state-invariant';

// function configureStore(state=initialState) {
//     return createStore(
//         rootReducer,
//         state
//     );
// }

function configureStore() {

    return createStore(rootReducer);
}

export default  configureStore;