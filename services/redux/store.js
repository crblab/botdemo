import { createStore } from 'redux';

const initialState = {
    // avatarUrl: '/images/avatars/bakr_kouhadi.jpg'
    avatarUrl: 'https://socialbotapi.cerebro.host/media/avatar.jpg'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_AVATAR":
            return { ...state, avatarUrl: action.payload.avatarUrl }
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState
);

export default store;