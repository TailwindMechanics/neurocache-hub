//path: src\app\components\generic\react\ImageOverlay.tsx

"use client"
import React, { useEffect, useState } from 'react';


const ImageOverlay: React.FC<{ image: string }> = ({ image }) => {
    const layers = 5;
    const [overlayOpacity, setOverlayOpacity] = useState(1);

    const toggleOverlay = (event: KeyboardEvent) => {
        if (event.key === 'o' || event.key === 'O') {
            setOverlayOpacity((overlayOpacity % layers) + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', toggleOverlay);

        return () => {
            window.removeEventListener('keydown', toggleOverlay);
        }
    }, [overlayOpacity]);


    if (overlayOpacity < 2) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'auto 100%',
            opacity: 1 / (overlayOpacity - 1),
            zIndex: 5,
        }} />
    );    
};

export default ImageOverlay;