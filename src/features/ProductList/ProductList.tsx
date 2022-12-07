import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeGrid as Grid, GridChildComponentProps} from 'react-window';
import styles from './ProductList.module.scss';
import {COLUMN_COUNT} from '../../common/constants';
import {productsAPI} from '../../api';
import React, {useEffect} from 'react';
import {dispatch, ProductType, setProductList, useStoreState} from '../../state';
import {ProductListItem} from './ProductItem/ProductListItem';
import {windowSizeUtil} from '../../common/utils';

export const ProductList = () => {

    const productList = useStoreState('productList')

    useEffect(() => {
        productsAPI.getAllProducts()
            .then((res) => {
                dispatch(setProductList(res.data))
            })
    }, [])

    return <div className={styles.productListComponent}>
        {productList.length &&
            <AutoSizer>
                {({height, width}) => {

                    const {columnWidth, rowHeight} = windowSizeUtil(width)

                    return <Grid
                        className={styles.list}
                        itemData={productList}
                        columnCount={COLUMN_COUNT}
                        rowCount={Math.ceil(productList.length / COLUMN_COUNT)}
                        columnWidth={columnWidth}
                        rowHeight={rowHeight}
                        height={height}
                        width={width}
                    >
                        {({columnIndex, rowIndex, style, data}: GridChildComponentProps<ProductType[]>) => {
                            const index = rowIndex * COLUMN_COUNT + columnIndex
                            return <>
                                {data[index] && <ProductListItem item={data[index]} style={style}/>}
                            </>
                        }}
                    </Grid>
                }}
            </AutoSizer>
        }
    </div>
}