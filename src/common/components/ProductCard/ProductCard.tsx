import React from 'react';
import styles from './ProductCard.module.scss';
import {FavoriteIconButton} from '../FavoriteIconButton/FavoriteIconButton';
import ReactImageMagnify from 'react-image-magnify';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

type ProductItemPropsType = {
    img: string
    name: string
    price: number
    like: boolean
    zoomImg?: boolean,
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
                                zoomImg,
                                img,
                                name,
                                price,
                                like
                            }: ProductItemPropsType) => {

    const favoriteItemComponentFinale = `${classNameItemComponent} ${styles.ItemComponent}`

    return <div className={favoriteItemComponentFinale}>
        {zoomImg ?
            <div className={classNameImg}>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: name,
                        isFluidWidth: true,
                        src: `https://testbackend.nc-one.com${img}`
                    },
                    largeImage: {
                        src: `https://testbackend.nc-one.com${img}`,
                        width: 1000,
                        height: 1000,
                    }
                }} />
                <div className={styles.zoomIconBox}>
                    <ZoomInIcon className={styles.zoomIcon}/>
                </div>
            </div>
            :
            <img
                src={`https://testbackend.nc-one.com${img}`}
                alt={name}
                onClick={onClickImg}
                className={classNameImg}
            />
        }
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