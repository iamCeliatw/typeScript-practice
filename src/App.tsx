import React, { FC, createContext } from "react";
import { Person } from "./components/Person";
import { HairColor } from "./enums";
import { AppContextInterface } from "./interfaces";

const AppContext = createContext<AppContextInterface | null>(null);
const App: FC = () => {
  const contextValue = {
    name: "Celia",
    age: 20,
    country: "Taiwan",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <Person
          name="Celia"
          age={20}
          email="tina8899530@gmail.com"
          hairColor={HairColor.Pink}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
