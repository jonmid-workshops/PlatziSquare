import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
    declarations: [
        AppComponent,
        ResaltarDirective,
        HighlightDirective,
        ContarClicksDirective
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBFJQZ1JaabtXjyRoJ9r-YIOtQp9vLzS14'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }