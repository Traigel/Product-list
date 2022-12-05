import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeGrid as Grid, GridChildComponentProps} from 'react-window';
import styles from './ProductList.module.scss';
import {COLUMN_COUNT} from '../../common/constants';
import {productsAPI, RootProductType} from '../../api';
import React, {useEffect} from 'react';
import {dispatch, setProductList, useStoreState} from '../../state';
import {ProductItem} from './ProductItem/ProductItem';

export const ProductList = () => {

    const productList = useStoreState('productList')

    useEffect(() => {
        productsAPI.getAllProducts()
            .then((res) => {
                dispatch(setProductList(res.data))
            })
    }, [])

    return <>
        {productList &&
            <AutoSizer>
                {({height, width}) => (
                    <Grid
                        className={styles.list}
                        itemData={productList}
                        columnCount={COLUMN_COUNT}
                        rowCount={Math.ceil(productList.length / COLUMN_COUNT)}
                        columnWidth={262}
                        rowHeight={350}
                        height={height}
                        width={width / 4 * 3}
                    >
                        {({columnIndex, rowIndex, style, data}: GridChildComponentProps<RootProductType[]>) => {
                            const index = rowIndex * COLUMN_COUNT + columnIndex
                            return <ProductItem item={data[index]} style={style}/>
                        }}
                    </Grid>
                )}
            </AutoSizer>
        }
    </>
}