import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from './core/constants/router-path.enum';

const routes: Routes = [
  {
    path: `${RouterPath.Retros}/:id`,
    loadChildren: () =>
      import('./modules/retros/retros.module').then((module) => module.RetrosModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
