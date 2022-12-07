import {useParams} from "react-router-dom";
import React, {useEffect} from 'react';
import styles from './Product.module.scss';
import {productsAPI} from '../../api';
import {dispatch, setProductCard, setProductLike, useStoreState} from '../../state';
import {ProductCard} from "../../common/components";

export const Product = () => {

    const params = useParams();

    const productCard = useStoreState('productCard')

    useEffect(() => {
        if (params.id) {
            productsAPI.getOneProduct(+params.id)
                .then((res) => {
                    dispatch(setProductCard(res.data))
                })
        }

    }, [params.id])

    const onClickButtonHandler = () => {
        if (productCard) dispatch(setProductLike(productCard.id, !productCard.like))
    }

    return <div className={styles.productComponent}>
        {productCard &&
            <ProductCard
                img={productCard.src}
                name={productCard.name}
                price={productCard.price}
                like={productCard.like}
                onClickButton={onClickButtonHandler}
                classNameImg={styles.img}
                classNameTextName={styles.name}
                classNamePrice={styles.price}
                classNameButton={styles.button}
                classNameIcon={styles.icon}
            />
        }
    </div>
}