import { createContext, useContext, useState } from 'react';
import { UserData } from '../types/Types';

interface GlobalContextContract {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;

  searchQuery: string;
  setSearchQuery: (value: string) => void;

  usersList: UserData[];
  setUsersList: (value: UserData[]) => void;

  selectedUser: UserData;
  setSelectedUser: (value: UserData) => void;

  actualPage: number;
  setActualPage: (value: number) => void;

  totalSearchResults: number;
  setTotalSearchResults: (value: number) => void;
}

interface Props {
  children: JSX.Element;
}

export const GlobalContext = createContext({} as GlobalContextContract);

export default function GlobalContextProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [usersList, setUsersList] = useState<UserData[]>([] as UserData[]);
  const [selectedUser, setSelectedUser] = useState<UserData>({} as UserData);
  const [actualPage, setActualPage] = useState(1);
  const [totalSearchResults, setTotalSearchResults] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        setIsLoading,

        searchQuery,
        setSearchQuery,

        usersList,
        setUsersList,

        selectedUser,
        setSelectedUser,

        actualPage,
        setActualPage,

        totalSearchResults,
        setTotalSearchResults,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}
