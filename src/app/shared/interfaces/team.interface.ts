import { FormControl } from '@angular/forms';

export interface ITeam {
  title: string;
}

export interface ITeamForm {
  title: FormControl<string | null>;
}
