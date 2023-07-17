import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "@/features/posts/post-slice";
import usersReducer from "@/features/users/users-slice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;