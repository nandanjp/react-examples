import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "@/features/users/users-slice";
import postsReducer from "@/features/posts/posts-slice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;