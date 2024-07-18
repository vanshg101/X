import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            const post = {
                id: nanoid(),
                text: action.payload
            };
            state.posts.push(post);
        },
        removePost: (state) => {
            state.posts = [];
        },
    }
});

export const { setPosts, addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
