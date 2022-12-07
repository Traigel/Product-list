import AutoSizer from 'react-virtualized-auto-sizer';
import {FixedSizeGrid as Grid, GridChildComponentProps} from 'react-window';
import styles from './ProductList.module.scss';
import {COLUMN_COUNT} from '../../common/constants';
import React from 'react';
import {ProductType, useStoreState} from '../../state';
import {ProductListItem} from './ProductItem/ProductListItem';
import {windowSizeUtil} from '../../common/utils';

export const ProductList = () => {

    const productList = useStoreState('productList')

    return <div className={styles.productListComponent}>
        {productList.length ?
            <AutoSizer>
                {({height, width}) => {

                    const {columnWidth, rowHeight} = windowSizeUtil(width)

                    return <Grid
                        className={styles.grid}
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
                                {data[index] &&
                                    <ProductListItem key={data[index].id} item={data[index]} style={style}/>}
                            </>
                        }}
                    </Grid>
                }}
            </AutoSizer>
            : <div></div>}
    </div>
}