import React, { FunctionComponent, useState, useReducer, Reducer, useEffect } from "react";
import idleTrackingMiddleware, { CHECK_IDLE } from "./idleContextMiddleware";

type StoreProviderProps = {
    displayName: string;
    store: any;
    initialState: any;
    reducer: Reducer<any, any>;
    idleTracking?: boolean
    idleTrackingTimeout?: number
}

export const StoreProvider: FunctionComponent<StoreProviderProps> = ({
    children,
    displayName,
    store: Store,
    initialState,
    reducer,
    idleTracking = false,
    idleTrackingTimeout = 5000
}) => {

    let modifiedReducer = reducer;

    if (idleTracking) {
        modifiedReducer = idleTrackingMiddleware(reducer, idleTrackingTimeout, false, displayName)
    }

    const [state, dispatch] = useReducer(modifiedReducer, initialState)

    useEffect(() => {
        let idleCheckInterval = setInterval(() => {
            dispatch({ type: CHECK_IDLE })
        }, 1000);

        return () => {
            clearInterval(idleCheckInterval)
        }
    }, [])

    Store.displayName = displayName;

    return (<Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>);
}

export default StoreProvider;