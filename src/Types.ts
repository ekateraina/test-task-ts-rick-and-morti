import {CharacterActionTypes} from './redux/ActionTypes'
import { reducer } from './redux/Reducer'


export type Character = {
    id: number,
    name: string,
    image: string,
    gender: string,
    status: string,
    isFav: boolean 
}

// card props
export type CardProps = {
    data: Character
}

// character state type
export type CharactersState = {
    characters: Character[] | [],
    prev: string | null,
    next: string | null,
    favorites: number[] | [],
}

// reducer action type
export type GetCharacterAction = {
    type: CharacterActionTypes.GET_CHARACTERS,
    payload: {results: Character[], info: {prev: string | null, next: string | null}}
}

export type AddToFavoritesAction = {
    type: CharacterActionTypes.ADD_TO_FAVORITES,
    payload: number
}

export type ClearFavoritesAction = {
    type: CharacterActionTypes.CLEAR_FAVORITES
}

export type FilterByStatusAction = {
    type: CharacterActionTypes.FILTER_BY_STATUS,
    payload: Character[]
}

export type CharacterAction = GetCharacterAction | AddToFavoritesAction | ClearFavoritesAction | FilterByStatusAction

// reducer type for typed hooks
export type RootState = ReturnType<typeof reducer>
