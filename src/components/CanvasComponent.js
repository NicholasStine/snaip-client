import React from 'react';
import { useCanvas } from '../hooks/useCanvas';
import './styles.css';

const CanvasComponent = () => {
    const [ count, setCount, canvasRef, canvasHeight, canvasWidth ] = useCanvas();
    
    const onCanvasClick = (e) => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <main className="canvas main">
            <canvas 
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}  
                onClick={onCanvasClick}  
            />
        </main>
    );
}

export default CanvasComponent;