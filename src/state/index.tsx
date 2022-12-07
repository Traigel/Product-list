import {createStore} from 'react-hooks-global-state';
import {RootProductType} from '../api';

const initialState = {
    productList: [] as ProductType[],
    productCard: null as ProductType | null,
    FavoritesProducts: [] as ProductType[],
}

export const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'PRODUCT/SET-PRODUCT-LIST':
            return {...state, productList: action.data.map(el => ({...el, like: false}))};
        case 'PRODUCT/SET-PRODUCT-LIKE':
            const favoriteProduct = state.productList.find(el => el.id === action.productID)
            return {
                ...state,
                productList: state.productList?.map(el => el.id === action.productID ? {...el, like: action.like} : el),
                FavoritesProducts: action.like
                    ? [...state.FavoritesProducts, {...favoriteProduct, like: true} as ProductType]
                    : state.FavoritesProducts.filter(el => el.id !== action.productID)
            }
        // case 'SET-PRODUCT-CARD':
        //     return {...state, productCard: action.data }
        // case 'SET-FAVORITES-PRODUCTS':
        //     return {...state, FavoritesProductsList: [...state.FavoritesProductsList, action.data]}
        default:
            return state;
    }
};

// actions
export const setProductList = (data: RootProductType[]) => ({type: 'PRODUCT/SET-PRODUCT-LIST', data} as const)

export const setProductLike = (productID: number, like: boolean) => ({
    type: 'PRODUCT/SET-PRODUCT-LIKE',
    productID,
    like
} as const)

export const setProductCard = (data: RootProductType) => ({type: 'SET-PRODUCT-CARD', data} as const)

export const setFavoritesProducts = (data: RootProductType) => ({type: 'SET-FAVORITES-PRODUCTS', data} as const)

// createStore
export const {dispatch, useStoreState} = createStore<InitialStateType, ActionType>(reducer, initialState)

// types
export type InitialStateType = typeof initialState

export type ProductType = RootProductType & {
    like: boolean
}

type ActionType =
    | ReturnType<typeof setProductList>
    | ReturnType<typeof setProductLike>
    | ReturnType<typeof setProductCard>
    | ReturnType<typeof setFavoritesProducts>