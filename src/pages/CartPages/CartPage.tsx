import { useEffect } from "react"
import { useCart } from "../../utils/useCart"

export default function Cart() {

    const cart = useCart()
    useEffect(() => {
        cart.get_cart()
    },[])

    return (
        <div className="flex flex-col w-screen h-auto gap-10 min-h-[50dvh] py-10">
            <div className="flex w-full h-fit gap-4 text-xl">
                <h1 className="font-semibold">Shopping Cart</h1>
                <h2>Item in Cart [0]</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full h-auto">
            {
                [...Array(10)].map(() => (
                    <div className="w-full h-20 border"></div>
                ))
            }
            </div>
            <div className="w-full h-auto">
                <div className="w-full h-[1px] bg-zinc-950"></div>
                <div className="flex items-start justify-between w-full h-fit py-4 text-2xl">
                    <p className="text-base">
                        By continuing, I declare that I have read and accept the Purchase Conditions and understand Zara's Privacy and Cookie Policy.
                    </p>
                    <div className="flex items-center justify-end w-fit h-full px-10">
                        <p className="flex gap-4">TOTAL <span>$ 42.5</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}