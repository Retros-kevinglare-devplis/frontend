import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetrosComponent } from './retros.component';

const routes: Routes = [
  {
    path: '',
    component: RetrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetrosRoutingModule {}
