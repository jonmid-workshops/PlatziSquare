import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    id:number = 0;
    lugar:any = {};
    lugares:any = [
        {id: 1, name: 'Floreria la gardenia'},
        {id: 2, name: 'Donas la pasadita'},
        {id: 3, name: 'Veterinaria Huellitas Felices'},
        {id: 4, name: 'Hotel la gracia'}
    ];
    constructor(private route:ActivatedRoute) {
        this.id = this.route.snapshot.params['id'];
        console.log(this.route.snapshot.queryParams['nom']);
        this.lugar = this.buscarLugar();
    }
    ngOnInit() { }
    buscarLugar(){
        return this.lugares.filter((lugar) => {
            return lugar.id == this.id
        })[0] || null;
    }
}