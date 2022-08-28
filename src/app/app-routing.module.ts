import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from './core/constants/router-path.enum';
import { IsAuth } from './shared/guards/is-auth.service';
import { IsNotAuth } from './shared/guards/is-not-auth.service';

const routes: Routes = [
  {
    path: `${RouterPath.Teams}`,
    canActivate: [IsAuth],
    loadChildren: () => import('./modules/teams/teams.module').then((module) => module.TeamsModule),
  },
  {
    path: `${RouterPath.Retros}/:id`,
    canActivate: [IsAuth],
    loadChildren: () => import('./modules/retro/retro.module').then((module) => module.RetroModule),
  },
  {
    path: RouterPath.SignIn,
    canActivate: [IsNotAuth],
    loadChildren: () =>
      import('./shared/components/sign-in/sign-in.module').then((module) => module.SignInModule),
  },
  {
    path: RouterPath.SignUp,
    canActivate: [IsNotAuth],
    loadChildren: () =>
      import('./shared/components/sign-up/sign-up.module').then((module) => module.SignUpModule),
  },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
