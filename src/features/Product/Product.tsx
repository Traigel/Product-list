import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from 'react';
import styles from './Product.module.scss';
import {productsAPI} from '../../api';
import {dispatch, setPage, setProductCard, setProductLike, useStoreState} from '../../state';
import {ProductCard} from "../../common/components";

export const Product = () => {

    const params = useParams();
    const navigate = useNavigate()

    const productCard = useStoreState('productCard')

    useEffect(() => {
        dispatch(setPage('product'))
        if (params.id) {
            productsAPI.getOneProduct(+params.id)
                .then((res) => {
                    dispatch(setProductCard(res.data))
                })
        }
        return () => {
            dispatch(setProductCard())
        }
    }, [params.id])

    const onClickButtonHandler = () => {
        if (productCard) dispatch(setProductLike(productCard.id, !productCard.like))
    }

    const onClickBackHandler = () => {
        navigate(`/productList`)
    }

    return <div className={styles.productComponent}>
        <div className={styles.back} onClick={onClickBackHandler}>&larr; Back to product list</div>
        {productCard &&
            <ProductCard
                zoomImg
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