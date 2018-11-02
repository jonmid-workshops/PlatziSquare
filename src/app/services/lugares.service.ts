import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class LugaresService {

    lugares:any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Floreria la gardenia', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, name: 'Donas la pasadita', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, name: 'Veterinaria Huellitas Felices', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, name: 'Sushi Suhiroll', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, name: 'Hotel la gracia', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, name: 'Zapateria el Clavo', description: 'Descripcion de este negocio. Mas adelante tendremos mas informacion.'}
    ];
    
    constructor (private http: HttpClient, private afDB:AngularFireDatabase) {
        // 
    }

    getSeeschweiler(): Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    public getLugares() {
        return this.lugares;
    }

    public buscarLugar(id) {
        return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
    }

    public guardarLugar(lugar){
        // console.log(lugar);
        // this.afDB.database.ref('lugares/1').set(lugar);
        this.afDB.list('lugares').push(lugar).then(_ => {
            // this.memory = {}
            console.log('success')
        })
    }
}