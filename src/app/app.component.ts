import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loggedIn = false;
    title:string = 'My first AGM project';
    
    constructor(private autorizacionService:AutorizacionService) {
        autorizacionService.isLogged().subscribe((result) => {
            if (result && result.uid) {
                this.loggedIn = true;
            }else{
                this.loggedIn = false;
            }
        }, (error) => {
            this.loggedIn = false;
        });
    }

    public signOff(){
        this.autorizacionService.signOff();
    }
}