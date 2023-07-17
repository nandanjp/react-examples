import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";

const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () =>
{
    try
    {
        const response = await axios.get(POSTS_URL);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment
        return [...response.data];
    } catch (err)
    {
        console.error(err);
    }
});

const initialState = {
    posts: [],
    status: "idle",
    error: "",
    date: ""
};

const postApiSlice = createSlice({
    name: "post-api",
    initialState,
    reducers: {},
    extraReducers(builder)
    {
        builder
            .addCase(fetchPosts.pending, (state, _) =>
            {
                state.status = "loading";
            })
            .addCase(fetchPosts.fulfilled, (state, action) =>
            {
                state.status = "succeeded";
                let min = 1;
                const loadedPosts = action.payload?.map(post =>
                {
                    post.date = sub(new Date(), { minutes: min++ }).toISIOString();
                    return post;
                });
                state.posts = state.posts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) =>
            {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});