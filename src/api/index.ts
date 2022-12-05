import axios from "axios";

const instance = axios.create({
    baseURL: 'https://testbackend.nc-one.com/',
})

export const productsAPI = {
    getAllProducts() {
        return instance.get<RootProductType[]>('image')
    },
    getOneProduct(id: number) {
        return instance.get<RootProductType>('image', {
            params: {id}
        })
    }
}

// types
export type RootProductType = {
	id: number;
	name: string;
	price: number;
	src: string;
}