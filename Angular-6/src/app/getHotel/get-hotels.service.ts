import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class HoteltestService {
    status2: string;
    constructor(private http: HttpClient) {

    }
    jsonObject: any;
    error: any;
    getData() {
        return this.http.get('http://localhost:3000/sample');
    }
}
