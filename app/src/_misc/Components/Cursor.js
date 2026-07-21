import { useEffect, useState } from "react";
import './Cursor.css';

const Cursor = () => {
    const [position, setPositon] = useState({ x: 0, y:0 });

    useEffect(() => {
       const handleMouseMove = (event) => {
        setPositon({
            x: event.clientX,
            y: event.clientY,
        });
    }; 

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    }; 
}, []);

    return (
        <>
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }} />
            
        <div
            className="custom-cursor-before"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }} />
        </>
    );
};

export default Cursor;