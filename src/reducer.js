export const initialState = {
    user: null,
    playlists : [],
    playing: false,
    item: null,
    // Remove Token Value when done developing...
    // token: "BQAbHAq04Llm7xL6OLGa7hzjhx0Ov_0pCtVN5xsnb0iPvGoh4-v4wceqy_eIajACssXl88of3FrgjWAlWUuohtgcZ9TDd5B7B9-otqYECUVMiqMGzzp7WMDzMGYDwxF43tJ80nyTQexxd9m1_cewSlqOt_ZqvMbPBMef",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
            
        default: 
            return state;
    }
};

export default reducer;