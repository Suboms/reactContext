import React from 'react'
import { createContext } from 'react'

const { Provider } = createContext("")

const AppContext = ({ children }) => {
    const greeting = "Hello World"
    return (
        <>
            <div>
                <Provider value={{ greeting }}>
                    {children}
                </Provider>
            </div>
        </>


    )
}

export default AppContext
 