import React, { FunctionComponent, useEffect, useState, } from "react";
import reducer from "./reducer";
import initialState from "./initialState";
import store from "./store";

import StoreProvider from "../StoreProvider";

export const PandemicProvider: FunctionComponent = ({ children }) => {

    const [initialStateResolved, setInitialStateResolved] = useState(undefined);
    useEffect(() => {
        (async () => {
            const state = await initialState()
            setInitialStateResolved(state)
        })()
    }, [])


    return initialStateResolved
        ? <StoreProvider
            displayName={"Pandemic Store"}
            reducer={reducer}
            initialState={initialStateResolved}
            store={store}
        >
            {children}
        </StoreProvider>
        : null
}

export default PandemicProvider;