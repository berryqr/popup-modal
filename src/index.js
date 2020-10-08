import React, { createContext, useContext, useState } from "react";
import PopupModalRender from './PopupModalRender';


export const PopupModal = () => {
  return <PopupModalRender />
}


// This creates a context that will give us a Provider.
export const PopupModalContext = createContext();

export const PopupModalProvider = ({ children }) => {
  
  const [state, setState] = useState({
    message : '',
    display : false,
    type    : '' // simple, progress, alert
  });

  // Send changes down the component chain.
  return (
    <PopupModalContext.Provider value={{
      data : state,
      modal : {
        message: (msg) => {
          setState({ ...state, message: msg, display : true,  type : 'simple' });
        },
        progress: (msg) => {
          setState({ ...state, message: msg, display : true,  type : 'progress' });
        },

        alert: (msg) => {
          setState({ ...state, message: msg, display : true,  type : 'alert' });
        },

        hide: () => {
          setState({ ...state, message: '',  display : false, type : '' });
        }
      }
    }}>
      {children}
    </PopupModalContext.Provider>
  );
};

export const usePopupModal = () => {
  return useContext(PopupModalContext);
}


