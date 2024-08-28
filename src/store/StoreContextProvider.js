import React, { useState } from 'react'
import StoreContext from './StoreContext'

const StoreContextProvider = (props) => {
    const [data, setData] = useState([])

    const addDataHandler = (value) => {
        setData([value])
        if (data.length === 0) {
            setData([value])
        } else {
            setData([...data, value])
        }


    }
    const storeContext = {
        items: data,
        addDataHandler: addDataHandler
    }
    return (
        <StoreContext.Provider value={storeContext}>{props.children}</StoreContext.Provider>
    )
}

export default StoreContextProvider