import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class RegistrationService {

    private baseUrl = 'http://localhost:9998';
    private fudUrl = '/api/v1/fud';
    constructor (private http: HttpClient) {}

    createFud(request: any) {
        return this.http.post(this.baseUrl + this.fudUrl, request);
    }

}