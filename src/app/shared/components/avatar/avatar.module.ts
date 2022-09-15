import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { FirstLetterPipe } from '../../pipes/first-letter.pipe';

@NgModule({
  declarations: [AvatarComponent, FirstLetterPipe],
  exports: [AvatarComponent],
  imports: [CommonModule],
})
export class AvatarModule {}
