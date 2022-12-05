import React from 'react';
import styles from './App.module.css';
import AutoSizer from "react-virtualized-auto-sizer";
import {Navigate, Route, Routes} from 'react-router-dom';
import {ProductList} from '../features/ProductList/ProductList';
import {ProductCard} from '../features/ProductCard/ProductCard';

function App() {

    return (
        <div className={styles.app}>
            <div className={styles.favorites}>
                <AutoSizer>
                    {({height, width}) => {
                        return <div>Hello</div>
                    }}
                </AutoSizer>
            </div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/productList'}/>}/>
                <Route path={'/productList'} element={<ProductList/>}/>
                <Route path={'/product/:id'} element={<ProductCard/>}/>
            </Routes>

        </div>
    );
}

export default App;