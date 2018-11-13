import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class LugaresService {
    
    constructor (private http: HttpClient, private db:AngularFireDatabase) { }

    public getLugares() {        
        return this.db.list('lugares').valueChanges();
    }

    public getLugar(id){
        return this.db.object('lugares/'+id);
    }

    public buscarLugar(id) {
        // return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
    }

    public guardarLugar(lugar){
        this.db.database.ref('lugares/'+lugar.id).set(lugar);
    }

    public obtenerGeoData(direccion){
        // http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
        // return this.http.get('https://jsonplaceholder.typicode.com/posts');
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
}