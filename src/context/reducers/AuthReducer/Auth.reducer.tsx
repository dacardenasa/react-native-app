import {IAuthState, authInitialState} from '@context/index';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'changeUsername'; payload: string}
  | {type: 'signOut'};

export const authReducer = (
  state: IAuthState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLogeddin: true, username: 'Diego Cardenas'};
    case 'changeFavIcon':
      return {...state, iconName: action.payload};
    case 'changeUsername':
      return {...state, username: action.payload};
    case 'signOut':
      return authInitialState;
    default:
      return state;
  }
};
