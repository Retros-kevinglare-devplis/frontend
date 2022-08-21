import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from './core/constants/router-path.enum';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: `${RouterPath.Retros}/:id`,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/retro/retro.module').then((module) => module.RetroModule),
  },
  {
    path: RouterPath.SignIn,
    loadChildren: () =>
      import('./shared/components/sign-in/sign-in.module').then((module) => module.SignInModule),
  },
  {
    path: RouterPath.SignUp,
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
