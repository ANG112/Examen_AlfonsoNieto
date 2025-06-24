import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent,
        children: [ 
        {path: 'favoritos', component: FavoritesComponent
      },
        ]
    },
    {path: '**', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
   
];
