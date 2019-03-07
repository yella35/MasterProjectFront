import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

    static readonly IS_USER_LOGGED_IN = 'isUserLoggedIn';
    BASE_URL = 'http://localhost:3000'

    private isUserLoggedIn = new BehaviorSubject<boolean>(AuthentificationService.isLoggedIn());
    isUserLoggedInObs = this.isUserLoggedIn.asObservable();

    static isLoggedIn = (): boolean => {
        return localStorage.getItem(AuthentificationService.IS_USER_LOGGED_IN) === 'true';
    };

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    login(username: string, password: string){
        return this.http.post(`${this.BASE_URL}/login`, {username: username, password: password});
    }



    logout = (): Observable<boolean> => {
        this.cookieService.delete('SID')
        return this.http.get('http://localhost:3000/logout')
            .map(res => res as any);
    }


    activeSession = (): any => {
        const obs = this.http.get(
            'http://localhost:3000/activeSession'
        ).map((res) => {
            console.log(res)
            this.cookieService.set('SID', res['SID'])
            return true
        });
        obs.subscribe(
            this.setActiveSession
        );

        return obs;
    }

    setActiveSession = (loggedIn: boolean): void => {
        const b = loggedIn ? 'true' : 'false';
        this.isUserLoggedIn.next(loggedIn);
        localStorage.setItem(AuthentificationService.IS_USER_LOGGED_IN, b);
    }
}
