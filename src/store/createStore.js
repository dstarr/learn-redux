function createStore(reducer, intialState) {
    let state = initialState;
    let subscribers = [];


    function getState() {
        return state;
    }

    function subscribe(cb) {
        suscribers.push(cb)
    }

    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(sub => { sub()} );
    }

    return { getState, subscribe, dispatch }
}


