// import { Injectable } from "@angular/core";
// import { CanActivate } from "@angular/router";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthState } from "./reducers";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";



export const canActivateAdmin: CanActivateFn = (
  route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> => {
   const store = inject(Store<AuthState>);
   const router = inject(Router);
  return store.pipe(
    select(isLoggedIn),
    tap(loggedIn => {
      if(!loggedIn){
        router.navigateByUrl('/login')
      }
    })
  )
};
