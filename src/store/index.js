//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

//export const INCREMENT = 'increment';

const initialCounterState = { counter: 0, showCounter: true };
//const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    //initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});
//counterSlice.action.toggleCounter()
//returns an action object of this shape:
//{ type: 'some auto-generated unique identifier' }

const initialAuthState = {
    isAuthenticated: true
};
// const store = configureStore({
//     reducer: {counter: counterSlice.reducer}
// });
const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
const store = configureStore({
    reducer: { counter: counterSlice.reducer,
                auth: authSlice.reducer 
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;