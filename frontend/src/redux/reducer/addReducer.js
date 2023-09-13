export const flagPostResponseReducer = (state, action) => {
    state.flagStatus = action.payload;
}

export const storedDataReducer = (state, action) => {
    state.chat = [...action.payload.data];
}

