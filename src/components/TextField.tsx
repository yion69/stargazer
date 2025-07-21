import clsx from "clsx"
import { Eye, EyeClosed } from "lucide-react"
import React, { forwardRef, useState } from "react"

export type TextFieldType = 'text' | 'password'
type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    title: string;
    type?: TextFieldType;
    className?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ title, type, className, ...props }, ref) => {
        const [isVisible, setIsVisible] = useState<boolean>(false);
        const isPassword = type === 'password';
        const inputType = isPassword && isVisible ? 'text' : type;

        const handleIsVisible = () => setIsVisible( (prev) => !prev );

        return (
            <div className={ clsx( 
                "relative flex h-12 w-fullcursor-pointer",
                "bg-zinc-50 border border-zinc-300 rounded-xs font-inter text-base",
                "has-focus:border-2 has-focus:border-zinc-400 has-disabled:border-zinc-400 has-disabled:text-zinc-400 has-disabled:pointer-events-none", 
                className 
            ) }>
                
                <input  ref={ ref }
                        title={ title }
                        type={ inputType } 
                        id="input-element"
                        {...props}
                        className="w-full h-full px-4 border-none outline-none focus:ring-0" />
                
                {
                    type == 'password' && (
                        <button type="button" onClick={ handleIsVisible } className="relative top-0 right-4">
                        {
                            isVisible ? <Eye /> : <EyeClosed />
                        }
                        </button>
                    )
                }
            </div>
        )
    }
)

TextField.displayName = "TextField";

export default TextField;