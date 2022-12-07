import React from 'react';
import styles from './app.module.scss';
import {Navigate, Route, Routes} from 'react-router-dom';
import {ProductList} from '../features/ProductList/ProductList';
import {ProductCard} from '../features/ProductCard/ProductCard';
import {FavoritesProductsList} from '../features/FavoritesProductsList/FavoritesProductsList';
import {Header} from '../features/Header/Header';

function App() {

    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.main}>
                <FavoritesProductsList/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/productList'}/>}/>
                    <Route path={'/productList'} element={<ProductList/>}/>
                    <Route path={'/product/:id'} element={<ProductCard/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;