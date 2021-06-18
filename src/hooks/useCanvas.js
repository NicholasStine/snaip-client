import { useRef, useState, useEffect } from 'react';

export const canvasWidth = window.innerWidth * .3;
export const canvasHeight = window.innerHeight * .3;

export function draw(ctx, count) {
    for (let i = 0; i < count; i++) { 
        console.log('Drawing ', i);
        ctx.fillStyle = 'white';
        ctx.fillRect(Math.random() * (canvasWidth), Math.random() * (canvasHeight), 3, 3);

    }
}

export function useCanvas() {
    const canvasRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        draw(ctx, count);
    });

    return [ count, setCount, canvasRef, canvasWidth, canvasHeight ];
}