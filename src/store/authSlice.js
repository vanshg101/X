import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("auth");
        if (serializedState === null) {
            return {
                status: false,
                userData: null,
            };
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state from localStorage:", e);
        return {
            status: false,
            userData: null,
        };
    }
};

const initialState = loadState();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            // Save state to localStorage
            localStorage.setItem("auth", JSON.stringify(state));
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            // Remove state from localStorage
            localStorage.removeItem("auth");
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
