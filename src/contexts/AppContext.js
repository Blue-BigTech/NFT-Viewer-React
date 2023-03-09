import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [nfts, setNfts] = useState([]);
  const [alchemy, setAlchemy] = useState(null);

  return (
    <AppContext.Provider 
      value={{
        nfts,
        setNfts,
        alchemy,
        setAlchemy
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);