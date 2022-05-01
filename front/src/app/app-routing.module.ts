import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';

import { MoviesComponent } from './films/movies/movies.component';
import { DoramasComponent } from './films/doramas/doramas.component';
import { CartoonsComponent } from './films/cartoons/cartoons.component';
import { AnimseriesComponent } from './films/animseries/animseries.component';
import { TvseriesComponent } from './films/tvseries/tvseries.component';
import { MylistComponent } from './films/mylist/mylist.component';

const routes: Routes = [
    {path: 'account', component: AccountComponent},
    {path: 'home', component: HomeComponent },
    {path: 'top-bar', component: TopBarComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'account', pathMatch: 'full'},

    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: MovieDetailsComponent},
    {path: 'doramas', component: DoramasComponent},
    {path: 'doramas/:id', component: MovieDetailsComponent},
    {path: 'cartoons', component: CartoonsComponent},
    {path: 'cartoons/:id', component: MovieDetailsComponent},
    {path: 'animseries', component: AnimseriesComponent},
    {path: 'animseries/:id', component: MovieDetailsComponent},
    {path: 'tvseries', component: TvseriesComponent},
    {path: 'tvseries/:id', component: MovieDetailsComponent},
    {path: 'mylist', component: MylistComponent},
    {path: 'mylist/:id', component: MovieDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
