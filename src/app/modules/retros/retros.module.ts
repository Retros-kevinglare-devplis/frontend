import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetrosComponent } from './retros.component';
import { RetrosRoutingModule } from './retros-routing.module';

@NgModule({
  declarations: [RetrosComponent],
  imports: [CommonModule, RetrosRoutingModule],
})
export class RetrosModule {}
