import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserValues } from "./users-types";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState: { users: UserValues[]; } = {
    users: []
};


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () =>
{
    const { data }: { data: UserValues[]; } = await axios.get(USERS_URL);
    return data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder)
    {
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserValues[]>) =>
        {
            state.users = state.users.concat(action.payload);
        });
    }
});

export default usersSlice.reducer;