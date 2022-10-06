import { createContext, PropsWithChildren, useState } from "react";

interface User {
  id: number;
  name: string;
  stack: string;
}

type userProfile = {
  data: User[];
  setData: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UserContext = createContext<userProfile | null>(null);

export const GlobalUser: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<User[]>([
    {
      id: 1,
      name: "Peter",
      stack: "React",
    },
    {
      id: 2,
      name: "Gidi",
      stack: "Node",
    },
    {
      id: 3,
      name: "John",
      stack: "Dev Fest",
    },
  ]);

  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};
