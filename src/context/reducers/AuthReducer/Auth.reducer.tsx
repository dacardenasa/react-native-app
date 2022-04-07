import {IAuthState} from '@context/index';

type AuthAction = {type: 'signIn'} | {type: 'changeFavIcon'; payload: string};

export const authReducer = (
  state: IAuthState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLogeddin: true, username: 'Diego Cardenas'};
    case 'changeFavIcon':
      return {...state, iconName: action.payload};
    default:
      return state;
  }
};
