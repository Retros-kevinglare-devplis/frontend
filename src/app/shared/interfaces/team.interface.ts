import { FormControl } from '@angular/forms';

export interface ITeam {
  title: string;
  description: string | null;
  imageURL: string | null;
}

export interface ITeamForm {
  title: FormControl<string | null>;
}
