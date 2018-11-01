import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugaresService } from './services/lugares.service';

const appRoutes:Routes = [
    {path: '', component: LugaresComponent},
    {path: 'lugares', component: LugaresComponent},
    {path: 'detalle/:id', component: DetalleComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ResaltarDirective,
        HighlightDirective,
        ContarClicksDirective,
        DetalleComponent,
        LugaresComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBFJQZ1JaabtXjyRoJ9r-YIOtQp9vLzS14'
        })
    ],
    providers: [LugaresService],
    bootstrap: [AppComponent]
})
export class AppModule { }