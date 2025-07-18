import { Minus, Plus } from "lucide-react";

export default function QuantityOptions({ value, setValue }:{ value: number, setValue: (val: number) => void }){

    const handleIncrement = () => { 
        if ( value >= 99) { return };
        setValue( value + 1);
    }
    const handleDecrement = () => { 
        if ( value <= 0) { return };
        setValue( value - 1);
    }
    return (
        <div className="grid grid-cols-3 w-42 h-12 text-xl border rounded-xs">
            <button title="decrement" type="button" onClick={ handleDecrement } className="group flex items-center justify-center h-full w-full hover:bg-zinc-200 transition-colors">
                <Minus className="size-4 group-hover:scale-125 transition-transform" />
            </button>
            <div className="flex items-center justify-center">{ value }</div>
            <button title="increment" type="button" onClick={ handleIncrement } className="group flex items-center justify-center h-full w-full hover:bg-zinc-200 transition-colors">
                <Plus className="size-4 group-hover:scale-125 transition-transform" />
            </button>
        </div>
    )
}