import React ,{createContext, useState, useContext, ReactNode}from "react";


interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
const Search = createContext<SearchContextProps|undefined>(undefined)
export const SearchContext: React.FC<{ children: ReactNode }> = ({children}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
      <Search.Provider value={{ searchTerm, setSearchTerm }}>
        {children}
      </Search.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(Search);
    if (context === undefined) {
      throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
  };
