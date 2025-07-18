import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import type { ReactNode } from "react";

export default function Button({
    type = 'button',
    size = 'md',
    color = 'primary',
    loading = false,
    children,
    className,
    onClickFunc,
    onSubmitFunc
}:{
    type: 'submit' | 'button' | 'reset',
    size: 'icon' | 'sm' | 'md' | 'lg' | 'full',
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'outline',
    loading?: boolean,
    children?: ReactNode,
    className?: string,
    onClickFunc?: <T> (parameter?:T) => void,
    onSubmitFunc?: <T> (parameter?:T) => void,
}) {

    const buttonSize = () => {
        switch (size) {
            case 'icon': return "w-13 h-13 min-w-13 min-h-13 max-w-13 max-h-13 p-0 flex items-center justify-center truncate"
            case 'sm': return "min-w-24"
            case 'md': return "min-w-40"
            case 'lg': return "min-w-52"
            case 'full': return "w-full"
            default: return
        }
    }

    const buttonColor = () => {
        switch (color) {
            case 'primary': return "bg-zinc-50 border-zinc-300 hover:bg-zinc-100"
            case 'secondary': return "bg-zinc-900 text-zinc-200 hover:bg-zinc-700"
            case 'success': return "bg-green-400 text-zinc-50 border-green-600 hover:bg-green-500"
            case 'danger': return "bg-rose-600 text-zinc-50 border-rose-700 hover:bg-rose-500"
            case 'outline': return "bg-zinc-50 border-zinc-900"
            default: return
        }
    }

    return (
        <button type={ type } 
                disabled = { loading }
                onClick={ onClickFunc ?? (() => {}) }
                onSubmit={ onSubmitFunc ?? (() => {}) }
                className={ clsx(
                    "relative w-fit h-13 px-4 flex items-center justify-center",
                    "text-lg border rounded-xs font-mono cursor-pointer",
                    "transition duration-200 active:scale-90", 
                    className, 
                    loading && "cursor-not-allowed opacity-80 pointer-events-none",
                    buttonSize(),
                    buttonColor()
                ) } >
                    
                    {
                        loading &&
                        <span className={clsx(
                            "absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center", 
                            buttonColor()
                        )}>
                            
                            <LoaderCircle aria-busy={ loading }
                                          aria-disabled={ loading }
                                          className="animate-spin transition-opacity duration-200" />
                        
                        </span>
                    }
                    
                    { children }
        </button>
    )
}