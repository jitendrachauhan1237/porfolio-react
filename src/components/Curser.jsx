import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = ({isHover}) => {
    const size = isHover ? 200 : 20
    const circel = useRef();
    const mouse = useRef({
        x: 0,
        y: 0
    });

    const delayedMouse =  useRef({
        x: 0,
        y: 0
    });

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.current = {
            x: clientX,
            y: clientY
        };
        moveCircel(mouse.current.x, mouse.current.y);
    }
    const lerp = (x, y, a) => x * (1 - a) + y * a
    const moveCircel = (x, y) => {
        gsap.set(circel.current, { x, y, xPercent: -50, yPercent: -50 });
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.1),
            y: lerp(y, mouse.current.y, 0.1)
        }
        moveCircel(delayedMouse.current.x, delayedMouse.current.y);
        window.requestAnimationFrame(animate);

    }
 
    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => window.removeEventListener("mousemove", manageMouseMove);
    }, []);

    return (
        <div
            ref={circel}
            className='fixed top-0 left-0 bg-white rounded-full z-50 hidden lg:block mix-blend-difference pointer-events-none'
            style={{
                 width: size,
                 height: size,
                 filter: `blur(${isHover ? 30 : 0}px)`,
                 transition: 'height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out '
                 }}>
        </div>
    )
}

export default Cursor
