import { createSlice} from '@reduxjs/toolkit';

const initialAuthstate = { isAuthenticated : false}

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
export const Authactions = AuthticationSlice.actions;

export default AuthticationSlice.reducer;