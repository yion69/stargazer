import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react"

export interface Option<T> {
    label: string,
    value: T
}
interface DropdownProps<T> {
    value: T,
    handleChange: (value:T) => void,
    options: Option<T>[],
    className?: string
}

export default function Dropdown<T>({ value, handleChange, options, className }:DropdownProps<T>) {
    
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const handleDropdown = () => {

        if (isOpen) { setIsOpen(false) } else { setIsOpen(true) };
        
    }
    const handleOnClick = (value: T) => {
        handleChange(value)
        handleDropdown();
    }

    const handleClickOutOfBound = (e:MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutOfBound);
        return () => document.removeEventListener("mousedown", handleClickOutOfBound);
    },[])

    return(
        <div ref={ dropdownRef } className={clsx("relative min-w-40 h-full z-30", className)}>
            <button type="button" onClick={ handleDropdown } className="flex items-center justify-between w-full h-full px-2">
                { options.find((e) => e.value === value)?.label ?? "Select..." }

                {
                    isOpen ? 
                        <IconChevronUp stroke={1} size={24} className="transition-all duration-300" /> :
                        <IconChevronDown stroke={1} size={24} className="transition-all duration-300" /> 
                }
            </button>
            {
                isOpen && <div className="dropdown absolute top-10 -left-16 w-full min-w-56 h-auto bg-background border border-zinc-400 rounded-sm">
                    <ul className="w-full h-full flex flex-col">
                        {options.map((item,index) => (
                            <li key={ index } 
                                onClick={ () => handleOnClick(item.value) }
                                className="flex items-center justify-start w-full h-full px-4 py-2 text-zinc-800  hover:bg-zinc-200 transition duration-200">{ item.label }</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}