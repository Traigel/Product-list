import React, {useEffect} from 'react';
import styles from './app.module.scss';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ProductList} from '../features/ProductList/ProductList';
import {Product} from '../features/Product/Product';
import {FavoritesProductsList} from '../features/FavoritesProductsList/FavoritesProductsList';
import {Header} from '../features/Header/Header';
import {productsAPI} from '../api';
import {dispatch, setProductList} from '../state';

function App() {

    useEffect(() => {
        productsAPI.getAllProducts()
            .then((res) => {
                dispatch(setProductList(res.data))
            })
    }, [])

    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.main}>
                <FavoritesProductsList/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/productList'}/>}/>
                    <Route path={'/productList'} element={<ProductList/>}/>
                    <Route path={'/product/:id'} element={<Product/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;