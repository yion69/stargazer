import DelimeterText from "../utils/TextDelimeter";

export default function Loading() {
    return (
        <div className='absolute top-0 left-0 z-40 bg-white flex items-start justify-center h-full w-screen'>
            <div className="h-screen w-screen flex items-center justify-center">
                <h1 className='font-romantic text-4xl md:text-6xl lg:text-8xl'>
                    Loading <DelimeterText>...</DelimeterText>
                </h1>
            </div>
    </div>
    )
}