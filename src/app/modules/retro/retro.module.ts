import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetroComponent } from './retro.component';
import { RetroRoutingModule } from './retro-routing.module';

@NgModule({
  declarations: [RetroComponent],
  imports: [CommonModule, RetroRoutingModule],
})
export class RetroModule {}
