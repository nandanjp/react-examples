import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostFormValues, PostReactionType } from "./postSchema";
import { sub } from "date-fns";
import axios from "axios";


const initialState: PostFormValues[] = [
    {
        id: "1",
        title: "Learning Redux Toolkit",
        content: "I've heard good things about redux toolkit",
        date: sub(new Date(), { minutes: 10 }),
        reactions: {
            coffee: 0,
            heart: 0,
            rocket: 0,
            thumbsUp: 0,
            wow: 0
        }
    },
    {
        id: "2",
        title: "Learning Redux Toolkit",
        content: "I've heard good things about redux toolkit",
        date: sub(new Date(), { minutes: 20 }),
        reactions: {
            coffee: 0,
            heart: 0,
            rocket: 0,
            thumbsUp: 0,
            wow: 0
        }
    },
    {
        id: "3",
        title: "Learning Redux Toolkit",
        content: "I've heard good things about redux toolkit",
        date: sub(new Date(), { minutes: 5 }),
        reactions: {
            coffee: 0,
            heart: 0,
            rocket: 0,
            thumbsUp: 0,
            wow: 0
        }
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action: PayloadAction<PostFormValues>)
        {
            const { id, title, content, user, date, reactions } = action.payload;

            if (id && title && content)
            {
                state.push({
                    id,
                    title,
                    content,
                    user: user ? user : "",
                    date,
                    reactions
                });
            }
        },
        reactionAdded(state, action: PayloadAction<PostReactionType>)
        {
            const { postId, reaction } = action.payload;
            const existingPost: PostFormValues | undefined = state.find(post => post.id === postId);
            if (existingPost)
            {
                (Object.keys(existingPost.reactions) as Array<keyof typeof existingPost.reactions>).forEach(key =>
                {
                    if (key === reaction)
                    {
                        existingPost.reactions[key]++;
                    }
                });
            }
        }
    },
});

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
