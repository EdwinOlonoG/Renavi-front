import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DateService {
    
    constructor() {}

    public date = new Date();

    now() {
        return this.date;
    }
}