import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { PostApiResponse, PostReactionType, PostValues, PostsValues } from "./posts-types";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (): Promise<PostApiResponse[]> =>
{
    const { data }: { data: PostApiResponse[]; } = await axios.get(POSTS_URL);
    return data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost): Promise<PostApiResponse> =>
{
    const { data }: { data: PostApiResponse; } = await axios.post(POSTS_URL, initialPost);
    return data;
});

const initialState: PostsValues = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: ""
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action: PayloadAction<PostValues>)
        {
            const { id, title, content, date, userId, reactions } = action.payload;
            state.posts.push({ id, title, content, date, userId, reactions });
        },
        reactionAdded(state, action: PayloadAction<{ reaction: PostReactionType, postId: string; }>)
        {
            const { reaction, postId } = action.payload;

            const post: PostValues | undefined = state.posts.find(post => post.id === postId);

            if (post)
            {
                Object.keys(post.reactions).forEach(react =>
                {
                    if (react == reaction)
                    {
                        post.reactions[react]++;
                    }
                });
            }
        }
    },
    extraReducers(builder)
    {
        builder
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .addCase(fetchPosts.pending, (state, _) =>
            {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostApiResponse[]>) =>
            {
                state.status = 'succeeded';
                // Adding date and reactions
                let min = 1;
                const loadedPosts = action.payload.map(post =>
                {
                    const newPost: PostValues = {
                        id: post.id,
                        userId: Number(post.userId) || Number(nanoid()),
                        title: post.title,
                        content: post.body,
                        date: sub(new Date(), { minutes: min++ }).toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    };
                    return newPost;
                });

                // Add any fetched posts to the array
                state.posts = state.posts.concat(loadedPosts);
            })
            .addCase(fetchPosts.rejected, (state, action) =>
            {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewPost.fulfilled, (state, action: PayloadAction<PostApiResponse>) =>
            {
                // Fix for API post IDs:
                // Creating sortedPosts & assigning the id 
                // would be not be needed if the fake API 
                // returned accurate new post IDs
                const sortedPosts = state.posts.sort((a, b) =>
                {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                });
                const { userId, title, body } = action.payload;

                const newPost: PostValues = {
                    id: (Number(sortedPosts[sortedPosts.length - 1].id) + 1).toString(),
                    userId: Number(userId),
                    date: (new Date()).toISOString(),
                    title: title,
                    content: body,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                };

                state.posts.push(newPost);
            })
            .addCase(addNewPost.rejected, (state, action) =>
            {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;