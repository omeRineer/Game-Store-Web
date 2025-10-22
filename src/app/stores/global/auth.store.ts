import { Injectable, signal } from "@angular/core";
import { LocalStorageKeys } from "../../models/common/enums/localStorageKeys";

@Injectable({ providedIn: 'root' })
export class AuthStore{
    private _isAuth = signal<boolean>(this.hasToken())
    isAuth = this._isAuth.asReadonly();

    private hasToken(): boolean{
        return !!localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
    }

    login(token:string){
        localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, token);
        this._isAuth.set(true)
    }

    logout(){
        localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
        this._isAuth.set(false)
    }
}