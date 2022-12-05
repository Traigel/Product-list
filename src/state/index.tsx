import { createStore  } from 'react-hooks-global-state';
import {RootProductType} from '../api';

const initialState = {
    products: null as RootProductType[] | null
}

const reducer = (state: InitialStateType, action: SetCounterType): InitialStateType => {
    switch (action.type) {
        case 'SET-PRODUCTS': return { ...state, products: action.data };
        default: return state;
    }
};

export const setProducts = (data: RootProductType[]) => ({type: 'SET-PRODUCTS', data})

type SetCounterType = ReturnType<typeof setProducts>
type InitialStateType = typeof initialState



export const {dispatch, useStoreState } = createStore (reducer, initialState)