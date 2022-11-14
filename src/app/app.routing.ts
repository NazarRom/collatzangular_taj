import {Routes,RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { CollatzComponent } from './components/collatz/collatz.component';
//definimos un array de objetos routes

const appRoutes: Routes = [
    {path:"collatz/:numero", component: CollatzComponent}

]
 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)