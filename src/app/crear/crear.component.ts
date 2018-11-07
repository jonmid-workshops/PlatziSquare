import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
    lugar:any = {};

    constructor(private lugaresService:LugaresService, private router:Router) { }

    ngOnInit() { }

    guardarLugar() {
        this.lugar.id = Date.now();
        this.lugaresService.guardarLugar(this.lugar);
        // alert('Negocio guardado con éxito!');
        // this.lugar = {};
        this.router.navigate([''])
    }
}