import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../../../../shared/models/team';
import { ITeamForm } from '../../../../shared/interfaces/team.interface';

@Injectable()
export class TeamFormService {
  constructor() {
    this.form = this.create();
  }

  form: FormGroup<ITeamForm>;

  private create(): FormGroup<ITeamForm> {
    return new FormGroup<ITeamForm>({
      title: new FormControl(null, [Validators.required]),
    });
  }

  patch(data: Team): void {
    this.form.patchValue({
      title: data.title,
    });
  }
}
