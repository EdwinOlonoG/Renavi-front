import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FUDComponent } from './fud/fud.component';

const routes: Routes = [
  { path: 'registro-fud', component: FUDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
