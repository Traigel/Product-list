import React from 'react';
import styles from './FavoriteIconButton.module.scss'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


type FavoriteIconButtonPropsType = {
    classNameButton?: string
    classNameIcon?: string
    onClick?: () => void
    isActive?: boolean
}

export const FavoriteIconButton = ({
                                       classNameButton,
                                       onClick,
                                       classNameIcon,
                                       isActive
                                   }: FavoriteIconButtonPropsType) => {

    const classNameButtonFinale = `${classNameButton} ${styles.button}`
    const classNameIconFinale = `${classNameIcon} ${isActive ? styles.active : styles.disabled}`

    return <IconButton className={classNameButtonFinale} onClick={onClick}>
        <FavoriteIcon className={classNameIconFinale}/>
    </IconButton>
}