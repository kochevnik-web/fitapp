import React, {useEffect, useState, useRef} from 'react';

import './WiveEffect.scss';

function WiveClick({cords}) {

    const [status, setStatus] = useState(true);

    useEffect(() => {
        if(status) {
            setTimeout(() => {
                setStatus(false);
            }, 1800);
        }
    // eslint-disable-next-line
    }, []);

    return (
        <>
            {status &&  <div style={cords} className="wive-effect-child"></div>}
        </>
    )
}

export default function WiveEffect({children}) {

    const [animate, setAnimate] = useState([]);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const refElem = useRef(null);

    useEffect(() =>{
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setTop(refElem.current?.getBoundingClientRect().top + scrollTop);
        setLeft(refElem.current?.getBoundingClientRect().left);
    }, []);

    return (
        <div
            className="wive-effect"
            onClick={(e) => setAnimate([...animate, {left: e.pageX - left, top: e.pageY - top}])}
            ref={refElem}
        >
            {children}
            {animate.length ?
                animate.map((el, indx) => {
                    return(<WiveClick key={indx} cords={el}/>);
                })
                : null
            }
        </div>
    )
}
