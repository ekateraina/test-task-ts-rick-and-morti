import { CharactersState, CharacterAction, Character } from "../Types";
import { CharacterActionTypes } from "./ActionTypes";

const windowState: { favoriteCharacters: number[] | [] } = JSON.parse(localStorage.getItem("favs") || "[]")

let initialState: CharactersState;

if (windowState) {
  initialState = {
    characters: [],
    prev: null,
    next: null,
    favorites: windowState.favoriteCharacters || [],
  };
} else {
  initialState = { characters: [], prev: null, next: null, favorites: [] };
}

export const reducer = (
  state = initialState,
  action: CharacterAction
): CharactersState => {
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload.results,
        prev: action.payload.info.prev,
        next: action.payload.info.next,
      };

    case CharacterActionTypes.ADD_TO_FAVORITES:
      console.log(typeof state.favorites)
      return {
        ...state,
        characters: (state.characters as Character[]).map((char) =>
          char.id === action.payload ? { ...char, isFav: true } : char
        ),
        favorites: [...state.favorites, action.payload],
      };

    case CharacterActionTypes.CLEAR_FAVORITES:
      localStorage.clear();
      return {
        ...state,
        characters: (state.characters as Character[]).map((char) => {

          if ((state.favorites as number[]).includes(char.id)) {
            char.isFav = false;
          }
          return char;
        }),
        favorites: [],
      };

     
    default:
      return state;
  }
};
