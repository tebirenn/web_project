import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MoviesComponent } from './films/movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginComponent } from './login/login.component';
import { CartoonsComponent } from './films/cartoons/cartoons.component';
import { TvseriesComponent } from './films/tvseries/tvseries.component';
import { AnimseriesComponent } from './films/animseries/animseries.component';
import { DoramasComponent } from './films/doramas/doramas.component';
import { MylistComponent } from './films/mylist/mylist.component';

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
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    TopBarComponent,
    MoviesComponent,
    MovieDetailsComponent,
    LoginComponent,
    CartoonsComponent,
    TvseriesComponent,
    AnimseriesComponent,
    DoramasComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
