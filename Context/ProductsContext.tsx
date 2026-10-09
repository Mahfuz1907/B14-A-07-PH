'use client'

import { ProductsPromiseTypes } from "@/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"


interface ProductsContextTypes{
    products: ProductsPromiseTypes[],
    setProducts: Dispatch<SetStateAction<ProductsPromiseTypes[]>>,
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>,
    password: string,
    setPassword: Dispatch<SetStateAction<string>>
}

export const ProductsContext = createContext<ProductsContextTypes>({
  products: [],
  setProducts: () => {},
  sortBy: 'default',
  setSortBy: () => {},
  password: '',
  setPassword: () => {}
});

const ProductsProvider = ({children, initialProducts}:{children:ReactNode, initialProducts:ProductsPromiseTypes[]}) => {
    const [products, setProducts] = useState<ProductsPromiseTypes[]>(initialProducts)
    const [sortBy, setSortBy] = useState<string>('default')
    const [password, setPassword] = useState<string>('')

    const sharedData = {
        products,
        setProducts,
        sortBy,
        setSortBy,
        password,
        setPassword
    }

    return (
        <ProductsContext.Provider value={sharedData}>
            {children}
        </ProductsContext.Provider>
    );
};


export const useProducts = () => {
    const context = useContext(ProductsContext)
    if(!context){
        throw new Error("useProducts must be used within a ProductsProvider")
    }

    return context
}

export default ProductsProvider;