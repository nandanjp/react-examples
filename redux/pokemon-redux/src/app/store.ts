import { configureStore } from "@reduxjs/toolkit";
import { pokemonApiReducer } from "@/features/pokemon/pokemon-api-slice";

export const store = configureStore({
    reducer: {
        [pokemonApiReducer.reducerPath]: pokemonApiReducer.reducer
    },
    middleware(getDefaultMiddleware)
    {
        return getDefaultMiddleware().concat(pokemonApiReducer.middleware);
    }
});

export type AppDispath = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;