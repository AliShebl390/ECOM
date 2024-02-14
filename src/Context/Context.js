import React, { createContext, useState } from "react";

export let CounterContext = createContext();

export function CounterContextProvider({ children }) {
    let [count, setCount] = useState(0);

    function changeCounter() {
        setCount((Math.random() * 100).toFixed());
    }

    return (
        <CounterContext.Provider value={{ count, changeCounter }}>
            {children}
        </CounterContext.Provider>
    );
}
