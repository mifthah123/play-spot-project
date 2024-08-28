import { createContext } from "react";

const StoreContext = createContext({
    items: [],
    addDataHandler: () => { }
})

export default StoreContext