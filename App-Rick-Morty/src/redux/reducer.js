import { ADD_FAV, REMOVE_FAV, SET_FAVS } from "./action-types";

const initialState = {
    myFavorites: [],
    user: ""
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case SET_FAVS:
            return { ...state, myFavorites: payload };

        case ADD_FAV:
            const alreadyExists = state.myFavorites.some(fav => fav.id === payload.id);
            if (alreadyExists) return state;
            return { ...state, myFavorites: [...state.myFavorites, payload] };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== Number(payload))
            };

        default:
            return { ...state };
    }
}