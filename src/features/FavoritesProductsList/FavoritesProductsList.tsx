import styles from './FavoritesProductsList.module.scss';
import {FixedSizeList as List} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import React from 'react';
import {ProductCard} from '../../common/components';
import {dispatch, setProductLike, useStoreState} from '../../state';
import {useNavigate} from 'react-router-dom';

export const FavoritesProductsList = () => {

    const navigate = useNavigate()

    const favoritesProducts = useStoreState('FavoritesProducts')

    return <div className={styles.favoritesComponent}>
        <div className={styles.favoritesBox}>
            <div className={styles.title}>
                Favorites
            </div>
            <AutoSizer>
                {({height, width}) => (
                    <List
                        className={styles.list}
                        itemData={favoritesProducts}
                        height={height - 135}
                        itemCount={favoritesProducts.length}
                        itemSize={152}
                        width={407}
                    >
                        {({index, style, data}) => {

                            const onClickButtonHandler = () => {
                                dispatch(setProductLike(data[index].id, !data[index].like))
                            }

                            const onClickImgHandler = () => {
                                navigate(`/product/${data[index].id}`)
                            }

                            return <div key={data[index].id} style={style}>
                                <ProductCard
                                    img={data[index].src}
                                    name={data[index].name}
                                    price={data[index].price}
                                    like={data[index].like}
                                    onClickButton={onClickButtonHandler}
                                    onClickImg={onClickImgHandler}
                                    classNameItemComponent={styles.favoriteItemComponent}
                                    classNameImg={styles.img}
                                    classNameTextName={styles.name}
                                    classNamePrice={styles.price}
                                    classNameButton={styles.button}
                                    classNameIcon={styles.icon}
                                />
                            </div>
                        }}
                    </List>
                )}
            </AutoSizer>
        </div>
    </div>
}