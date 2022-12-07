import styles from './ProductItem.module.scss';
import React, {CSSProperties} from 'react';
import {useNavigate} from 'react-router-dom';
import {dispatch, ProductType, setProductLike} from '../../../state';
import {FavoriteIconButton} from '../../../common/components';

type ProductCardPropsType = {
    item: ProductType
    style: CSSProperties
}

export const ProductListItem = ({item, style}: ProductCardPropsType) => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        // navigate(`/product/${item.id}`)
    }

    const onClickButtonHandler = () => {
        dispatch(setProductLike(item.id, !item.like))
    }

    return <div style={style} onClick={onClickHandler}>
        <div className={styles.itemComponent}>
            <img src={`https://testbackend.nc-one.com${item.src}`} alt={item.name} className={styles.img}/>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.priceBox}>
                <div className={styles.price}>$ {item.price}</div>
                <FavoriteIconButton onClick={onClickButtonHandler} isActive={item.like}/>
            </div>
        </div>

    </div>
}