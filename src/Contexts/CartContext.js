import useAlert from "@/Hooks/useAlert";
import usePrice from "@/Hooks/usePrice";
import { useDisclosure } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react"
import { CartProvider, useCart } from "react-use-cart";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        addItem,
        cartTotal,
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const price = usePrice()

    const {success} = useAlert('top-right')

    useEffect(() => {
        console.log('Crart Items', items)
    }, [items])

    const addToCart = (item) => {
        addItem({...item, price: price(item).amount})
        success('Item added to cart', '')
        onOpen()
    }

    return <CartContext.Provider value={{
        addToCart,
        emptyCart,
        updateItemQuantity,
        items,
        removeItem,
        totalUniqueItems,
        cartTotal,
        isEmpty,
        isOpen,
        onOpen,
        onClose
    }}>

        {children}

    </CartContext.Provider>
}

export default CartContextProvider