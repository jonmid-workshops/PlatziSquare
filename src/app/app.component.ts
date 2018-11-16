import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    loggedIn = false;
    loggedEmail:any = null;
    title:string = 'PlatziSquare';
    
    constructor(private autorizacionService:AutorizacionService) {
        autorizacionService.isLogged().subscribe((result) => {
            if (result && result.uid) {
                this.loggedIn = true;
                this.loggedEmail = this.autorizacionService.getUser().currentUser.email;
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