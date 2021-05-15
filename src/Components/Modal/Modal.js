import React, {useRef, useEffect, useContext, useState} from 'react';
import gsap from 'gsap';

import {Context} from '../../context';

import './Modal.scss';

export default function Modal() {

    const {setShowAdd} = useContext(Context);

    const [animation, setAnimation] = useState(false);

    let elRef = useRef(null);

    useEffect(() => {
        gsap.to(elRef, {
            duration: 0.5,
            scaleX: 1,
            y: 0,
            ease: "power3.inOut"
        });
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(animation){
            gsap.to(elRef, {
                duration: 0.5,
                scaleX: 1.2,
                y: '100%',
                ease: "power3.inOut"
            });

            let timout = setTimeout(() => {
                setShowAdd(false);
            }, 800);

            return () => {
                clearTimeout(timout);
            }
        }
    // eslint-disable-next-line
    }, [animation])

    return (
        <div className="modal" ref={el => (elRef = el)}>
            <h1>MODAL</h1>
            <button onClick={() => setAnimation(true)}>Click</button>
        </div>
    )
}
