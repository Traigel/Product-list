import {RootProductType} from '../../../api';
import styles from './ProductItem.module.scss';
import React, {CSSProperties} from 'react';
import {useNavigate} from 'react-router-dom';

type ProductCardPropsType = {
    item: RootProductType
    style: CSSProperties
}

export const ProductItem = ({item, style}: ProductCardPropsType) => {

    const navigate = useNavigate()

    const onClickHandler = () => navigate(`/product/${item.id}`)

    return <div style={style} onClick={onClickHandler}>
        {item &&
            <div className={styles.box}>
                <img src={`https://testbackend.nc-one.com${item.src}`} alt={item.name} className={styles.img}/>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
        }
    </div>
}