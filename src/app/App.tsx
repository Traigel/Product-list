import React, { useEffect} from 'react';
import styles from './App.module.css';
import {dispatch, setProducts, useStoreState} from '../state';
import {productsAPI, RootProductType} from '../api';
import {FixedSizeGrid as Grid, GridChildComponentProps} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {COLUMN_COUNT} from '../common/constants';

function App() {
    console.log('App component')

    useEffect(() => {
        productsAPI.getAllProducts()
            .then((res) => {
                dispatch(setProducts(res.data))
            })
    }, [])

    const products = useStoreState('products')

    return (
        <div className={styles.app}>
            <div className={styles.favorites}>
                <AutoSizer>
                    {({height, width}) => {
                        console.log('11111', height, width)
                        return <div>Hello</div>
                    }}
                </AutoSizer>
            </div>
            {products &&
                <AutoSizer>
                    {({ height, width }) => (
                        <Grid
                            className={styles.list}
                            itemData={products}
                            columnCount={COLUMN_COUNT}
                            rowCount={Math.ceil(products.length / COLUMN_COUNT)}
                            columnWidth={262}
                            rowHeight={350}
                            height={height}
                            width={width / 4 * 3}
                        >
                            {({ columnIndex, rowIndex, style, data }: GridChildComponentProps<RootProductType[]>) => {
                                const index = rowIndex * COLUMN_COUNT + columnIndex
                                return <div style={style}>
                                    {data[index] &&
                                        <div className={styles.box}>
                                            <img src={`https://testbackend.nc-one.com${data[index].src}`} alt={data[index].name} className={styles.img} />
                                            <div>{data[index].name}</div>
                                            <div>{data[index].price}</div>
                                        </div>
                                    }
                                </div>
                            }}
                        </Grid>
                    )}
                </AutoSizer>
            }


        </div>
    );
}

export default App;