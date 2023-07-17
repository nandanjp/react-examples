import { createSlice } from "@reduxjs/toolkit";
import { UsersFormValues } from "./usersSchema";


const initialState: UsersFormValues[] = [
    { id: "0", name: "Dude Lebowski" },
    { id: "1", name: "Neil Young" },
    { id: "2", name: "Dave Gray" },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});


// export const {} = usersSlice.actions;
export default usersSlice.reducer;