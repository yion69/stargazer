import { Info } from "lucide-react"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import QuantityOptions from "../../components/QuantityOption"
import { useCart } from "../../utils/useCart"

interface MergedCartItem {
    // cart fields
    id: number
    product_id: string
    user_id: string
    created_at: string
    product_quantity: number
    product_status: string

    // product fields
    item_id: string
    item_name: string
    item_price: number
    item_brand: string
    item_rating: number
    item_sold: number
    item_created_at: string
    item_images: string[]
}

export default function Cart() {

    const { cart, get_cart } = useCart()
    const [mergeCart, setMergeCart] = useState<MergedCartItem[]>([])
    const [total, setTotal] = useState()

    const set_up_cart = async () => {
        try {
            const fetchCart = await get_cart()

            if (!fetchCart) { throw new Error }

            const cartIDs = fetchCart.map(item => item.product_id)
            console.log(cartIDs)

            const responseFromProductList = await fetch("http://localhost:5000/api/items/cart-items", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartIDs)
            })

            const data = await responseFromProductList.json()
            const body = data.body

            const merged = fetchCart.map((item, index) => ({
                ...item,
                ...body[index]
            }))

            setMergeCart(merged)

        } catch (err) {
            console.error(err)
            return
        }
    }

    useEffect(() => {
        set_up_cart()
    }, [])

    useEffect(() +)

    return (
        <div className="flex flex-col w-screen h-auto gap-10 min-h-[50dvh] py-10">
            <div className="flex w-full h-fit gap-4 text-xl">
                <h1 className="font-semibold">Shopping Cart</h1>
                <h2>Item in Cart [0]</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full h-auto">
                {
                    mergeCart.map((item) => (
                        <CartItem key={item.id}
                            item_quantity={item.product_quantity}
                            item_name={item.item_name}
                            item_brand={item.item_brand}
                            item_price={item.item_price} />
                    ))
                }
            </div>
            <div className="flex flex-col items-end w-full h-auto">
                <div className="w-full h-[1px] bg-zinc-950"></div>
                <div className="flex items-start justify-between w-full h-fit py-4 text-2xl">
                    <p className="flex w-2/4 gap-1 text-base font-inter">
                        <Info /> By continuing, I declare that I have read and accept the Purchase Conditions and understand Stargazer's Privacy and Cookie Policy.
                    </p>
                    <div className="flex flex-col items-start justify-center w-1/4 h-full text-xl">
                        <p className="w-full flex justify-between gap-4">Tax (VAT) <span>$ 42.5</span></p>
                        <p className="w-full flex justify-between gap-4">Sub Total<span>$ 42.5</span></p>
                        <div className="w-full h-[1px] my-2 bg-zinc-950"></div>
                        <p className="w-full flex justify-between gap-4 text-3xl">TOTAL <span>$ 42.5</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-end w-1/4 h-20">
                    <Button color={"secondary"} size={"full"}>
                        Order
                    </Button>
                </div>
            </div>
        </div>
    )
}

function CartItem({
    item_name,
    item_quantity,
    item_brand,
    item_price
}: {
    item_name: string,
    item_quantity: number,
    item_brand: string,
    item_price: number
}) {

    const [quantity, setQuantity] = useState<number>(item_quantity)

    return (
        <div className="flex w-full h-52 border-2 border-zinc-200 bg-zinc-100 px-4 py-6">
            <div className="w-1/6 h-full bg-zinc-200"></div>
            <div className="flex flex-col justify-center w-3/6 h-full px-4">
                <h1 className="text-4xl">{item_name}</h1>
                <p className="text-2xl">{item_brand}</p>
                <div className="flex w-fit h-fit mt-auto gap-10 text-lg">
                    <h2>
                        Color:
                        <span> Black</span>
                    </h2>
                    <h2>
                        Size:
                        <span> XL</span>
                    </h2>
                </div>
            </div>
            <div className="flex items-start justify-center w-1/6 h-full text-4xl">
                <h1 className="flex">$ {item_price}</h1>
            </div>
            <div className="flex flex-col items-center justify-start w-1/6 h-full">
                <QuantityOptions value={quantity} setValue={setQuantity} />
            </div>
        </div>
    )
}