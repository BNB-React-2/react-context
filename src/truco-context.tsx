import { createContext, useContext, useState } from 'react';

const TrucoContext = createContext<any>(null);
export function TrucoContextProvider({ children }: React.PropsWithChildren) {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  return (
    <TrucoContext.Provider
      value={{
        teamA,
        teamB,
        incrementA: () => setTeamA((value) => value + 1),
        incrementB: () => setTeamB((value) => value + 1),
      }}
    >
      {children}
    </TrucoContext.Provider>
  );
}

export const useTrucoContext = () => useContext(TrucoContext);
