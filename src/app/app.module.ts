import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';

import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';

const appRoutes:Routes = [
    {path: '', component: LugaresComponent},
    {path: 'lugares', component: LugaresComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'crear', component: CrearComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ResaltarDirective,
        HighlightDirective,
        ContarClicksDirective,
        DetalleComponent,
        LugaresComponent,
        ContactoComponent,
        CrearComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBFJQZ1JaabtXjyRoJ9r-YIOtQp9vLzS14'
        })
    ],
    providers: [LugaresService],
    bootstrap: [AppComponent]
})
export class AppModule { }