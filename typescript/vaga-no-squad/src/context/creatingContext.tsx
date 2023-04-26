import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

type ContextType = {
    creatingPlayer: boolean,
    setCreatingPlayer: Dispatch<SetStateAction<boolean>>
} | null;

export const CreatingContext = createContext<ContextType>(null)

export const CreatingProvider = ({ children }: { children: ReactNode }) => {
    const [creatingPlayer, setCreatingPlayer] = useState(false)

    return(
        <CreatingContext.Provider value={{creatingPlayer, setCreatingPlayer}}>
            {children}
        </CreatingContext.Provider>
    )
}