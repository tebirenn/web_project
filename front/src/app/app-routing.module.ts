import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'account', component: AccountComponent},
    {path: 'home', component: HomeComponent },
    {path: 'top-bar', component: TopBarComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'about/:id', component: MovieDetailsComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'account', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
