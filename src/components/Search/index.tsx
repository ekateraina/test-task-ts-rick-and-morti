import {FormEvent, useRef} from 'react'
import {useDispatch} from 'react-redux'
import { fetchGetCharacters } from '../../redux/ActionCreators'
import styles from './Search.module.scss'

const Search:React.FC = () => {

 const dispatch = useDispatch() 
const input = useRef<HTMLInputElement>(null)

const findByNameHadler = (event:FormEvent) => {
    event.preventDefault()
    dispatch(fetchGetCharacters({name:input.current?.value.toLowerCase()}))
}

    return(
        <form className={styles.form} onSubmit={findByNameHadler}>
            <input ref={input} type="text" placeholder='text name here' required/>
            <button className={styles.button}></button>
        </form>
    )
}

export default Search