
export default function SizeOptions({ setValue }:{ setValue:(val: string) => void }) {

    const handleSelect = (value: string) => {
        setValue(value)
    };

    const data = [
        { text: "S", value: "small" },
        { text: "M", value: "medium" },
        { text: "L", value: "large" },
        { text: "XL", value: "extra" },
    ]

    return (
        <div className="grid grid-cols-4 w-fit h-fit gap-3">
            {
                data.map((e,i) => (
                    <span className="flex h-12 w-14 text-xl rounded-xs border overflow-hidden 
                                     has-checked:border-0 has-checked:bg-zinc-950 
                                     has-checked:text-zinc-300 has-checked:scale-110 
                                     transition-transform duration-200">
                        <label htmlFor={`box-${e.text}`} className="flex items-center justify-center h-full w-full">
                            { e.text }
                        </label>
                        <input  key={i} 
                                id={ `box-${e.text}` }
                                value={e.value}
                                type="radio" 
                                name="sizing"
                                onChange={ () => handleSelect(e.value) }
                                className="hidden" />
                    </span>
                ))
            }
        </div>
    )
}