import {useDispatch} from 'react-redux'
import { useTypedSelector } from '../../Hooks'
import { clearFavAC } from '../../redux/ActionCreators'
import Filter from '../Filter'
import Search from '../Search'
import styles from './Navbar.module.scss'

const Navbar:React.FC = () => {
  
    const {favorites} = useTypedSelector(state=>state)
    const dispatch = useDispatch()

    const clearFavsHandler = () => {
        dispatch(clearFavAC())
    }

    return(
        <div className={styles.container}>
            <Search />
            <Filter />
            <span>{favorites?.length} favs</span>
           <button onClick={clearFavsHandler}>clear favorites</button>
        </div>
    )
}

export default Navbar