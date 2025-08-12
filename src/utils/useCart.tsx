import { createContext, useContext, useState, type ReactNode } from "react"

type CartContext = {
    cart: CartProduct[] | null
    get_cart: () => void
    add_item_to_cart: ({ product_id, product_quantity }:{ product_id: string, product_quantity: number}) => void
    remove_item_from_cart: ({ product_id }:{ product_id: string }) => void
}

interface CartProduct {
    id: number | undefined;
    created_at: string | undefined;
    product_id: string | undefined;
    product_quantity: number;
    product_status: string; 
    user_id: string | undefined;
}

interface CartResponse {
    body: CartProduct[]
    message: string
}

export const CartContext = createContext<CartContext | null>(null)

export default function CartProvider({ children }:{ children:ReactNode }) {

    const [cart, setCart] = useState<CartProduct[] | null>(null)

    const get_cart = async () => {
        
        const response = await fetch('http://localhost:5000/user/cart',{
            credentials: 'include',
            method: 'GET'
        })
        
        if(!response.ok) {
            throw new Error("ERROR AT FETCHING CART")
        }
        
        const data = await response.json() as CartResponse
        const body = data.body
        const filteredList = body.filter((item) => item.product_status === 'cart') as CartProduct[]

        setCart(filteredList)

        console.log(filteredList)
    }

    const add_item_to_cart = ({ product_id, product_quantity }:{ product_id: string, product_quantity: number }) => {       
        setCart( prev => {
            const newItem: CartProduct = {
                id: undefined,
                created_at: undefined,
                product_id,
                product_quantity,
                product_status: 'cart',
                user_id: undefined
            }
            
            if(!prev){
                return [newItem]
            }

            return [...prev, newItem]
        })
    }

    const remove_item_from_cart = ({ product_id }: { product_id:string }) => {
        setCart( prev => {
            if(!prev){ return null }

            const updateCart = prev.filter((item) => item.product_id === product_id)

            return updateCart
        })
    }

    return (
        <CartContext.Provider value={{ cart, get_cart, add_item_to_cart, remove_item_from_cart }}>
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) { throw new Error('useCart must be used within CartProvider')}
    return context
}
