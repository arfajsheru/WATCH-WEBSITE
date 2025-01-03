import { createContext } from "react";
import React from "react";
import { collectionTypes } from "../data/collectiondata";
export const ShopContext = createContext();


const shopContextProvider = ({children}) => {
    const value = {
        collectionTypes,
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default shopContextProvider;