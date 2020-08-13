import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./maindoc/maindoc.module').then(m => m.MaindocModule)
  }
  // ,
  // {
  //   path: '',
  //   loadChildren: () => import('./autocompletedoc/autocompletedoc.module').then(m => m.AutocompletedocModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
