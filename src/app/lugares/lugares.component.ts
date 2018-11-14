import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css'],
})
export class LugaresComponent implements OnInit {
    lat:number = 4.6560663;
    lng:number = -74.0595918;
    color: string;
    lugares = null;

    constructor(private lugaresServices:LugaresService) {
        lugaresServices.getLugares().subscribe((result) => {
            this.lugares = result;
        }, (error) => {
            console.log('Error de conexion');
        });
    }
    ngOnInit() { }
}
