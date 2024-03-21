import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions } from '../action-type';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';

export const authFeatureKey = 'auth';

export interface AuthState {
  user : User
}



export const initialAuthState : AuthState = {
  user: undefined
}


export const  authReducer = createReducer(
  initialAuthState,
  on( AuthActions.login, (state, action) => {
    return {
      user : action.user
    }
  }),

  on(AuthActions.logout, (state, action) => {
    return{
      user: undefined
    }
  })
);

