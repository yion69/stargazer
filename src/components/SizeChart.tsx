import clsx from "clsx";

export default function SizeChart({ className }:{ className?: string}) {
    return (
        <div className={clsx(className)}>
            <table className="w-full h-full">
                <tr>
                    <th colSpan={4} className="border text-center">Centimeters</th>
                </tr>
                <tr>
                    <th className="border px-4">Size</th>
                    <th className="border px-4">Bust</th>
                    <th className="border px-4">Waist</th>
                    <th className="border px-4">Length</th>
                </tr>
                <tr>
                    <td className="border px-4">XS</td>
                    <td className="border px-4">72-80</td>
                    <td className="border px-4">52-60</td>
                    <td className="border px-4">33</td>
                </tr>
                <tr>
                    <td className="border px-4">S</td>
                    <td className="border px-4">80-88</td>
                    <td className="border px-4">60-68</td>
                    <td className="border px-4">34</td>
                </tr>
            </table>
        </div>
    )
}