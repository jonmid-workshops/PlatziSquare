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
    stringButton:string = null;
    styleButton:string = null;

    constructor(private lugaresService:LugaresService, private router:Router, private route:ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        // console.log(this.route.snapshot.queryParams['action']);
        // console.log(this.route.snapshot.queryParams['reference']);

        if (this.id != 'new') {
            // ACTUALIZAR REGISTRO
            this.styleButton = "fa fa-pencil";
            this.stringButton = "Actualizar lugar";
            lugaresService.getLugar(this.id).valueChanges().subscribe(lugar => {
                this.lugar = lugar;
            });
        } else {
            // CREAR REGISTRO
            this.styleButton = "fa fa-floppy-o";
            this.stringButton = "Guardar lugar";
        }
    }

    ngOnInit() { }

    guardarLugar() {
        if (this.id != 'new') {
            // ACTUALIZAR REGISTRO
            this.lugaresService.guardarLugar(this.lugar);
        } else {
            // CREAR REGISTRO
            this.lugar.lat = 0;
            this.lugar.lng = 0;
            this.lugar.id = Date.now();
            this.lugaresService.guardarLugar(this.lugar);
        }
        this.router.navigate(['']);
    }
}