import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes =
[
    {
         path: '',
         redirectTo: 'search',
         pathMatch: 'full'
    },
    {  
    path: "about",
    component: AboutComponent
    },
    {
        path: "search",
        component: SearchComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)