import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';

export default function CloudinaryImage({ image_id, className }: { image_id: string, className?: string }) {

    const [isLoading, setIsLoading] = useState(true);
    const cld = new Cloudinary({ cloud: { cloudName: 'dlzlsjtnn' } });

    const img = cld
        .image(image_id)
        .format('auto')
        .quality('auto')

    const handleImageLoadEnd = () => { setIsLoading(prev => prev = true) };

    useEffect(() => {

    },[])

    return (
        <>
            {
                isLoading ?? <h1>Loading</h1> 
            }
            <AdvancedImage cldImg={img} className={className} onLoad={handleImageLoadEnd} />
        </>
    );
}