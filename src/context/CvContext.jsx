import { createContext } from "react";
import { useState } from "react";
export const CvContext = createContext()

export function CvProvider ({children}) {
        const [download,SetDownloaded] = useState({
            code:41,
            message: 'Descargando..'
        })
    

        return <CvContext.Provider value={{
            download,
            SetDownloaded
        }}>
            {children}
        </CvContext.Provider>
   
}