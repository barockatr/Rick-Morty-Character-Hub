import { ADD_FAV, REMOVE_FAV, SET_FAVS } from "./action-types";
import { favoritesAPI } from "../api/api";

export function setFavs(favorites) {
    return {
        type: SET_FAVS,
        payload: favorites
    };
}

export function fetchFavs() {
    return async (dispatch) => {
        try {
            const { data } = await favoritesAPI.getAll();
            dispatch(setFavs(data));
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    };
}

export function addFav(character) {
    return async (dispatch) => {
        try {
            await favoritesAPI.add({
                characterId: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                origin: character.origin?.name || character.origin,
                image: character.image,
                type: character.type || ''
            });
            dispatch({ type: ADD_FAV, payload: character });
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };
}

export function removeFav(id) {
    return async (dispatch) => {
        try {
            await favoritesAPI.remove(id);
            dispatch({ type: REMOVE_FAV, payload: id });
        } catch (error) {
            console.error('Error removing favorite:', error);
        }
    };
}
