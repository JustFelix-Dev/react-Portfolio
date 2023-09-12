import React, { createContext, useState, ReactNode, useCallback } from "react";

interface RouteContextValue {
  pageType: string;
  setPageType: (type: string) => void;
  handlePageType: (page: string) => void; 
}

export const RouteContext = createContext<RouteContextValue | null>(null);


interface RouteContextProviderProps {
  children: ReactNode;
}

export const RouteContextProvider: React.FC<RouteContextProviderProps> = ({
  children,
}) => {
  const [pageType, setPageType] = useState<string>('home');

   const handlePageType = useCallback((page:string)=>{
               setPageType(page)
   },[])

  return (
    <RouteContext.Provider value={{ pageType, setPageType,handlePageType }}>
      {children}
    </RouteContext.Provider>
  );
};
