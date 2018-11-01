import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html',
    styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {
    lat:number = 4.6560663;
    lng:number = -74.0595918;
    color: string;

    lugares:any = [
        {id: 1, name: 'Floreria la gardenia'},
        {id: 2, name: 'Donas la pasadita'},
        {id: 3, name: 'Veterinaria Huellitas Felices'},
        {id: 4, name: 'Hotel la gracia'}
    ];

    posts = null;
    constructor(private lugaresServices:LugaresService) {
        lugaresServices.getSeeschweiler().subscribe(
            data => {
                this.posts = data;
                console.log(data);
            }
        );
    }
    ngOnInit() { }
}
