import {InitialStateType, reducer, setPage, setProductCard, setProductLike, setProductList} from './index';
import {RootProductType} from '../api';

let state: InitialStateType
let productList: RootProductType[]
let productCard: RootProductType

beforeEach(() => {
    state = {
        page: null,
        productList: [
            {
                id: 5,
                name: 'bread',
                src: '',
                price: 10,
                like: false
            }
        ],
        productCard: null,
        FavoritesProducts: []
    }
    productCard = {
        id: 1,
        name: 'milk',
        src: '',
        price: 4
    }
    productList = [
        productCard,
        productCard
    ]
})

test('set page', () => {
    const reducerTest = reducer(state, setPage('productList'))
    expect(reducerTest.page).not.toBe(null)
    expect(reducerTest.page).toBe('productList')
})

test('set product list', () => {
    const reducerTest = reducer(state, setProductList(productList))
    expect(reducerTest.productList?.length).toBe(2)
})

test('set product like', () => {
    const reducerTest = reducer(state, setProductLike(5, true))
    expect(reducerTest.FavoritesProducts.length).toBe(1)
    expect(reducerTest.FavoritesProducts[0].like).toBe(true)
    expect(reducerTest.productList[0].like).toBe(true)
})

test('set product card', () => {
    const reducerTest = reducer(state, setProductCard(productCard))
    expect(reducerTest.productCard).not.toBe(null)
    expect(reducerTest.productCard?.name).toBe('milk')
})