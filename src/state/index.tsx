import {createStore} from 'react-hooks-global-state';
import {RootProductType} from '../api';

const initialState = {
    productList: null as RootProductType[] | null,
    productCard: null as RootProductType | null,
    FavoritesProducts: [] as RootProductType[],
}

export const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-PRODUCT-LIST':
            return {...state, productList: action.data};
        case 'SET-PRODUCT-CARD':
            return {...state, productCard: action.data }
        case 'SET-FAVORITES-PRODUCTS':
            return {...state, FavoritesProducts: [...state.FavoritesProducts, action.data]}
        default:
            return state;
    }
};

// actions
export const setProductList = (data: RootProductType[]) => ({type: 'SET-PRODUCT-LIST', data} as const)
export const setProductCard = (data: RootProductType) => ({type: 'SET-PRODUCT-CARD', data} as const)
export const setFavoritesProducts = (data: RootProductType) => ({type: 'SET-FAVORITES-PRODUCTS', data} as const)

export const {dispatch, useStoreState} = createStore<InitialStateType, ActionType>(reducer, initialState)

// types
export type InitialStateType = typeof initialState
type ActionType =
    | ReturnType<typeof setProductList>
    | ReturnType<typeof setProductCard>
    | ReturnType<typeof setFavoritesProducts>