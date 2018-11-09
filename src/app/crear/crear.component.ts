import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
    id:any = null;
    lugar:any = {};

    constructor(private lugaresService:LugaresService, private router:Router, private route:ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        // console.log(this.route.snapshot.queryParams['action']);
        // console.log(this.route.snapshot.queryParams['reference']);

        if (this.id != 'new') {
            // ACTUALIZAR REGISTRO
            this.lugar = lugaresService.getLugar(this.id);
            console.log('jajajajaja');
            console.log(lugaresService.getLugar(this.id));
        } else {
            // CREAR REGISTRO
        }
    }

    ngOnInit() { }

    guardarLugar() {
        let direccion = this.lugar.calle+','+this.lugar.ciudad+','+this.lugar.pais;
        this.lugaresService.obtenerGeoData(direccion);

        this.lugar.lat = 0;
        this.lugar.lng = 0;
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        this.router.navigate([''])
    }
}