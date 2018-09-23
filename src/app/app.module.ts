import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CharacterComponent } from './shared/character/character.component';
import { HeaderComponent } from './shared/header/header.component';

//Services
import { CharactersService } from './core/characters.service';
import { DetailsComponent } from './pages/details/details.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

//Router
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HeaderComponent,
    DetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //debuggin purposes only
    )
  ],
  providers: [
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
