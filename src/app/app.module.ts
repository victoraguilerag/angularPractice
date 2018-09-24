import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CharacterComponent } from './shared/character/character.component';
import { HeaderComponent } from './shared/header/header.component';
import { DetailsComponent } from './pages/details/details.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { DashboardDynamicComponent } from './pages/dashboard-dynamic/dashboard-dynamic.component'

// Services
import { CharactersService } from './core/characters.service';
import { DynamicService } from './dynamic/dynamic.service';

// Router
import { RouterModule, Routes } from '@angular/router';

// Directive
import { DynamicDirective } from './dynamic/dynamic.directive'

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'dynamic', component: DashboardDynamicComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HeaderComponent,
    DetailsComponent,
    DashboardComponent,
    DashboardDynamicComponent,
    DynamicDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //debuggin purposes only
    )
  ],
  entryComponents: [ CharacterComponent ],
  providers: [
    CharactersService,
    DynamicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
