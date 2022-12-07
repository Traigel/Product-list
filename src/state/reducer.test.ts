import {InitialStateType, reducer, setProductCard, setProductList} from './index';
import {RootProductType} from '../api';

let state: InitialStateType
let productList: RootProductType[]
let productCard: RootProductType

beforeEach(() => {
    state = {
        page: null,
        productList: [],
        productCard: null,
        FavoritesProducts: []
    }
    productCard = {
        id: 1,
        name: 'milk',
        src: '',
        price: 2
    }
    productList = [
        productCard,
        productCard
    ]
})

test('set product list', () => {
    const reducerTest = reducer(state, setProductList(productList))
    expect(reducerTest.productList).not.toBe(null)
    expect(reducerTest.productList?.length).toBe(2)
})

test('set product card', () => {
    const reducerTest = reducer(state, setProductCard(productCard))
    expect(reducerTest.productCard).not.toBe(null)
    expect(reducerTest.productCard?.name).toBe('milk')
})

// test('set product card', () => {
//     const reducerTest = reducer(state, setFavoritesProducts(productCard))
//     expect(reducerTest.FavoritesProducts.length).toBe(1)
// })