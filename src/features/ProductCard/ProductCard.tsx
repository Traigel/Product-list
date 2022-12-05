import {useParams} from "react-router-dom";
import React, {useEffect} from 'react';
import {productsAPI} from '../../api';
import {dispatch, setProductCard, useStoreState} from '../../state';
import styles from '../ProductList/ProductItem/ProductItem.module.scss';

export const ProductCard = () => {

    const params = useParams();

    const productCard = useStoreState('productCard')

    useEffect(() => {
        if (params.id) {
            productsAPI.getOneProduct(+params.id)
                .then((res) => {
                    dispatch(setProductCard(res.data))
                })
        }

    }, [])

    return <>
        {productCard &&
            <div className={styles.box}>
                <img src={`https://testbackend.nc-one.com${productCard.src}`} alt={productCard.name}
                     className={styles.img}/>
                <div>{productCard.name}</div>
                <div>{productCard.price}</div>
            </div>
        }
    </>
}