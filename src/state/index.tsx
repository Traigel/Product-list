import {createStore} from 'react-hooks-global-state';
import {RootProductType} from '../api';

const initialState = {
    productList: [] as ProductType[],
    productCard: null as ProductType | null,
    FavoritesProducts: [] as ProductType[],
    page: null as PageType | null
}

export const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'PRODUCT/SET-Page':
            return {...state, page: action.page}
        case 'PRODUCT/SET-PRODUCT-LIST':
            return {...state, productList: action.data.map(el => ({...el, like: false}))};
        case 'PRODUCT/SET-PRODUCT-LIKE':
            const favoriteProduct = state.productList.find(el => el.id === action.productID)
            return {
                ...state,
                productList: state.productList?.map(el => el.id === action.productID ? {...el, like: action.like} : el),
                FavoritesProducts: action.like
                    ? [...state.FavoritesProducts, {...favoriteProduct, like: true} as ProductType]
                    : state.FavoritesProducts.filter(el => el.id !== action.productID),
                productCard: state.productCard ? {...state.productCard, like: action.like} : null
            }
        case 'SET-PRODUCT-CARD':
            const product = state.productList.find(el => el.id === action.data?.id)
            return {...state, productCard: action.data ? {...action.data, like: product ? product.like : false} : null}
        default:
            return state;
    }
};

// actions
export const setPage = (page: PageType) => ({type: 'PRODUCT/SET-Page', page} as const)

export const setProductList = (data: RootProductType[]) => ({type: 'PRODUCT/SET-PRODUCT-LIST', data} as const)

export const setProductLike = (productID: number, like: boolean) => ({
    type: 'PRODUCT/SET-PRODUCT-LIKE',
    productID,
    like
} as const)

export const setProductCard = (data?: RootProductType) => ({type: 'SET-PRODUCT-CARD', data} as const)

// createStore
export const {dispatch, useStoreState} = createStore<InitialStateType, ActionType>(reducer, initialState)

// types
export type InitialStateType = typeof initialState

export type ProductType = RootProductType & {
    like: boolean
}

type PageType = 'productList' | 'product'

type ActionType =
    | ReturnType<typeof setPage>
    | ReturnType<typeof setProductList>
    | ReturnType<typeof setProductLike>
    | ReturnType<typeof setProductCard>