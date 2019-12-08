import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './pages/main-page/main-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full'},
  { path: 'weather', component: MainPageComponent },

  { path: '**', redirectTo: '/weather' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
