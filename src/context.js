import React, {useState, useEffect} from "react";

const Context = React.createContext();

export default function ContextProvider({ children }) {

    function getSize(){
        return window.innerWidth <= 992 ? window.innerWidth / 32 : 992 / 32;
    }
    const [size, setSize] = useState(getSize());
    const [user, setUser] = useState(getSize());
    const [showAdd, setShowAdd] = useState(false);

    useEffect(()=>{
        setSize(getSize());
    },[]);


    window.addEventListener('resize', () =>{
        setSize(getSize());
    });

    return (
        <Context.Provider value={{ size, user, setUser, showAdd, setShowAdd }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };