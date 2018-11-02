import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    id:number = 0;
    lugar:any = {};

    constructor(private route:ActivatedRoute, private lugaresServices:LugaresService) {
        this.id = this.route.snapshot.params['id'];
        this.lugar = lugaresServices.buscarLugar(this.id);

        // console.log(this.route.snapshot.queryParams['action']);
        // console.log(this.route.snapshot.queryParams['reference']);
    }

    ngOnInit() { }
}