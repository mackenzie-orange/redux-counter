import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
           return state - 1;
        default:
            return state;
    }
};

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button className="bigChange" onClick={() => { onIncrement(); onIncrement(); }}>++</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button className="bigChange" onClick={() => { onDecrement(); onDecrement(); }}>--</button>
    </div>
);

const store = createStore(counter);

const increment = () => {
    store.dispatch({
        type: INCREMENT
    })
};

const decrement = () => {
    store.dispatch({
        type: DECREMENT
    })
};

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={increment}
            onDecrement={decrement}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);

render();
