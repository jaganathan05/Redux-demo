import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthstate = { isAuthenticated : false}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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
    decrementby5(state){
        state.counter = state.counter -5
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const AuthticationSlice = createSlice({
    name:'authentication',
    initialState: initialAuthstate ,
    reducers :{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }

    }

})

const store = configureStore({
  reducer:{ counter : counterSlice.reducer , Auth : AuthticationSlice.reducer } 
});

export const counterActions = counterSlice.actions;
export const Authactions = AuthticationSlice.actions;

export default store;