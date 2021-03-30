import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { useTypedSelector } from '../../Hooks'
import { fetchGetCharacters } from '../../redux/ActionCreators'
import { Character } from '../../Types'
import Card from '../Card'
import styles from './List.module.scss'

const List:React.FC = () => {

    const {characters, prev, next} = useTypedSelector(state=>state)
    const dispatch = useDispatch()

    useEffect(() => {
        
       dispatch(fetchGetCharacters({page:'https://rickandmortyapi.com/api/character'}))
    }, [dispatch])

    return(
        <div className={styles.container}>
        <div className={styles.list}>
            {characters.length?(characters as Character[]).map(character => <Card key={character.id} data={character} />)
            :<h2>Loading...</h2>}
        </div>
        <div>
       {prev&&<button onClick={()=>dispatch(fetchGetCharacters({page:prev}))}>prev</button>}
       {next&&<button onClick={()=>dispatch(fetchGetCharacters({page:next}))}>next</button>}
        </div>
        </div>
    )
}

export default List