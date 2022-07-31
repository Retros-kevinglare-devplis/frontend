import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetroComponent } from './retro.component';

const routes: Routes = [
  {
    path: '',
    component: RetroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetroRoutingModule {}
