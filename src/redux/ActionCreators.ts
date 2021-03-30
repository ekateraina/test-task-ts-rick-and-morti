import axios, { AxiosResponse } from 'axios'
import {Dispatch} from 'redux'
import { Character, CharacterAction} from "../Types"
import { CharacterActionTypes } from './ActionTypes'

export const fetchGetCharacters = (params:{page?:string,gender?:string,status?:string,name?:string}) => {
    return async(dispatch: Dispatch<CharacterAction>) => {
        try {
        let response:AxiosResponse
        if(params.status){
            response = await axios.get(`https://rickandmortyapi.com/api/character/?status=${params.status}`)
        }else if(params.gender){
            response = await axios.get(`https://rickandmortyapi.com/api/character/?gender=${params.gender}`)
        }else if(params.name){
            response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${params.name}`)
        }else{
            response = await axios.get(`${params.page}`)
        }
        const {results, info} = response.data
        const favs = JSON.parse(localStorage.getItem('favs')||'[]')
        let newResults:Character[]
        if(favs.favoriteCharacters.length){
            newResults = (results as Character[]).map(char=>{
                if(favs.favoriteCharacters.includes(char.id)){
                    char.isFav = true
                }
                return char
            })
            }else{
            newResults = (results as Character[]).map(char=>{return{...char, isFav:false}})
        }
            dispatch({type: CharacterActionTypes.GET_CHARACTERS, payload: {results:newResults, info}})
        } catch (error) {
            console.log(error)
        }
    }
}

export const addFavAC = (character:number) => {
    return async(dispatch: Dispatch<CharacterAction>) => {
        try {
            dispatch({type: CharacterActionTypes.ADD_TO_FAVORITES, payload: character})
        } catch (error) {
            console.log(error)
        }
    }
}

export const clearFavAC = () => {
    return async(dispatch: Dispatch<CharacterAction>) => {
        try {
            dispatch({type: CharacterActionTypes.CLEAR_FAVORITES})
        } catch (error) {
            console.log(error)
        }
    }
} 