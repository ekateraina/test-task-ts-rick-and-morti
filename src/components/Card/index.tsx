import React, {MouseEvent} from 'react'
import {useDispatch} from 'react-redux'
import { addFavAC } from '../../redux/ActionCreators'
import { CardProps } from '../../Types'
import styles from './Card.module.scss'

const Card:React.FC<CardProps> = ({data: {id, name, image, gender, status, isFav}}) => {
    const dispatch = useDispatch()

    const addFavsHandler = (event:MouseEvent<HTMLButtonElement>) => {
        dispatch(addFavAC(id))
    }

    return(
        <div className={styles.card}>
            <h4>{name}</h4>
            <img src={image} alt={name}/>
            <p>{gender}</p>
            <p>{status}</p>
            <button onClick={addFavsHandler} disabled={isFav}>add to favs</button>
        </div>
    )
}

export default Card