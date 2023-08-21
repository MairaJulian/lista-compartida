import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/UserSlice";
import { authApi } from "../services/AuthenticationService";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore ({
    reducer: {
        user: userReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware) //investigar (no se que hace)
})

// setupListeners(store.dispatch) //investigar (no se que hace)