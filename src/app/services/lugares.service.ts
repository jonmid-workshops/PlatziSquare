import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LugaresService {
    
    constructor (private http: HttpClient) {}

    getSeeschweiler(): Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}