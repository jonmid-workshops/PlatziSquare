import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacionService {
    constructor(private angularFireAuth:AngularFireAuth, private router:Router) {
        this.isLogged();
    }

    public login = (email, password) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                alert('usuario autenticado con exito');
                console.log(response);
                this.router.navigate(['lugares']);
            })
            .catch((error) => {
                alert('Un error ha ocurrido');
                console.log(error);
            });
    }

    public register = (email, password) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                alert('usuario registrado con exito');
                console.log(response);
                this.router.navigate(['lugares']);
            })
            .catch((error) => {
                alert('Un error ha ocurrido');
                console.log(error);
            });
    }

    public isLogged(){
        return this.angularFireAuth.authState;
    }

    public signOff(){
        this.angularFireAuth.auth.signOut();
        this.router.navigate(['login']);
    }

    public getUser(){
        return this.angularFireAuth.auth;
    }
}