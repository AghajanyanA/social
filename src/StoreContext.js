import React from "react"


export let StoreContext = React.createContext(null)

export const Provider = (props) => {
    console.log(props, 'sda')
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>

}
