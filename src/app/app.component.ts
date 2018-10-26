import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = 'My first AGM project';
    lat:number = 4.6560663;
    lng:number = -74.0595918;
    color: string;

    lugares:any = [
        {id: 1, name: 'Floreria la gardenia'},
        {id: 2, name: 'Donas la pasadita'},
        {id: 3, name: 'Veterinaria Huellitas Felices'},
        {id: 4, name: 'Hotel la gracia'}
    ];
}