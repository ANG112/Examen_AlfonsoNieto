import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './views/favorites/favorites.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: '**', component: AppComponent},
    {path: 'favorites', component: FavoritesComponent}
];
