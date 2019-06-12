import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private datasource: RestDataSource) { }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.datasource.authenticate(user, pass);
    }

    get authenticated(): boolean {
        return this.datasource.auth_token != null; 
    }

    clear() {
        this.datasource.auth_token = null; 
    }
}