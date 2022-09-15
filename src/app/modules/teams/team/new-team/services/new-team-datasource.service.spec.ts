import { TestBed } from '@angular/core/testing';

import { NewTeamDatasourceService } from './new-team-datasource.service';

describe('NewTeamDatasourceService', () => {
  let service: NewTeamDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTeamDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
