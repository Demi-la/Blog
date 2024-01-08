import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Oluwademilade ",
  },
  {
    id: "2",
    name: "Oluwaseun",
  },
  {
    id: "3",
    name: "Adedoyin",
  },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{

    }
});
export const selectUsers = (state) => state.users;
export default usersSlice.reducer
