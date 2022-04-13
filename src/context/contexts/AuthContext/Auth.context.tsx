import React, {createContext, useReducer} from 'react';
import {authReducer} from '@context/index';

export interface IAuthState {
  isLogeddin: boolean;
  username?: string;
  iconName?: string;
}

/* Initial State */
export const authInitialState: IAuthState = {
  isLogeddin: false,
  username: undefined,
  iconName: undefined,
};

/* CreateContext Interface */
export interface IAuthContextProps {
  authState: IAuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}

/* Create Context */
export const AuthContext = createContext({} as IAuthContextProps);

/* Component to handle authState */

export const AuthProvider = ({children}: {children: any}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => dispatch({type: 'signIn'});
  const signOut = () => dispatch({type: 'signOut'});
  const changeFavoriteIcon = (iconName: string) =>
    dispatch({type: 'changeFavIcon', payload: iconName});
  const changeUsername = (username: string) =>
    dispatch({type: 'changeUsername', payload: username});
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        changeFavoriteIcon,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
