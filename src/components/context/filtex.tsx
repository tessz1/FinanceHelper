import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FilterContextType = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

type FilterProviderProps = {
  children: ReactNode
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)


export const FilterProvider = ({children}: FilterProviderProps) => {
    const [activeFilter, setActiveFilter] = useState("Все")

    return (
        <FilterContext.Provider value={{ activeFilter, setActiveFilter}}>
        {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext)
    if(!context) throw new Error("useFilter")
        return context
}