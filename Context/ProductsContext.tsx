'use client'

import { ProductsPromiseTypes } from "@/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"


interface ProductsContextTypes{
    products: ProductsPromiseTypes[],
    setProducts: Dispatch<SetStateAction<ProductsPromiseTypes[]>>,
    sortBy: string,
    setSortBy: Dispatch<SetStateAction<string>>
}

export const ProductsContext = createContext<ProductsContextTypes>({
  products: [],
  setProducts: () => {},
  sortBy: 'default',
  setSortBy: () => {},
});

const ProductsProvider = ({children, initialProducts}:{children:ReactNode, initialProducts:ProductsPromiseTypes[]}) => {
    const [products, setProducts] = useState<ProductsPromiseTypes[]>(initialProducts)
    const [sortBy, setSortBy] = useState<string>('default')

    const sharedData = {
        products,
        setProducts,
        sortBy,
        setSortBy
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