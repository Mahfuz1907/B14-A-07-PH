'use client'

import { ProductsPromiseTypes } from "@/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"


interface ProductsContextTypes{
    products: ProductsPromiseTypes[],
    setProducts: Dispatch<SetStateAction<ProductsPromiseTypes[]>>
}

export const ProductsContext = createContext<ProductsContextTypes | null>(null)

const ProductsProvider = ({children, initialProducts}:{children:ReactNode, initialProducts:ProductsPromiseTypes[]}) => {
    const [products, setProducts] = useState<ProductsPromiseTypes[]>(initialProducts)

    const sharedData = {
        products,
        setProducts
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