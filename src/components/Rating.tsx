import { Star, StarHalf } from 'lucide-react'

interface RatingProps {
    rating_count: number,
    rating_units: number
}

export default function Rating({ rating_count, rating_units }:RatingProps) {

    const RatingStar = () => {
        const decimal = rating_count % 1
        if (decimal >= .50) { 
            return <StarHalf  className='size-4 fill-zinc-950' />
        } else {
            return undefined
        }
    }                                                                      
    
    return (
        <div className="flex gap-2 items-center">
            <div className='flex gap-1 '>
                { [...Array(Math.floor(rating_count))].map((i) => (
                    <Star key={i} className='size-4 fill-zinc-950' />
                ))}
                <RatingStar />
            </div>
            <div className='flex gap-2'>
                <p>Rating: { rating_count }</p>
                <p>({ rating_units })</p>
            </div>
        </div>
    )
}