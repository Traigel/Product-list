import React from 'react';
import styles from './ProductCard.module.scss';
import {FavoriteIconButton} from '../FavoriteIconButton/FavoriteIconButton';

type ProductItemPropsType = {
    img: string
    name: string
    price: number
    like: boolean
    onClickButton?: () => void
    onClickImg?: () => void
    classNameItemComponent?: string
    classNameImg?: string
    classNameTextName?: string
    classNamePrice?: string
    classNameButton?: string
    classNameIcon?: string
}

export const ProductCard = ({
                                classNameItemComponent,
                                classNameImg,
                                classNameTextName,
                                classNamePrice,
                                classNameButton,
                                classNameIcon,
                                onClickButton,
                                onClickImg,
                                img,
                                name,
                                price,
                                like
                            }: ProductItemPropsType) => {

    const favoriteItemComponentFinale = `${classNameItemComponent} ${styles.ItemComponent}`

    return <div className={favoriteItemComponentFinale}>
        <img
            src={`https://testbackend.nc-one.com${img}`}
            alt={name}
            onClick={onClickImg}
            className={classNameImg}
        />
        <div className={styles.infoBox}>
            <div className={classNameTextName}>{name}</div>
            <div className={styles.priceBox}>
                <div className={classNamePrice}>$ {price}</div>
                <FavoriteIconButton
                    onClick={onClickButton}
                    isActive={like}
                    classNameButton={classNameButton}
                    classNameIcon={classNameIcon}
                />
            </div>

        </div>
    </div>
}