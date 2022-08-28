import { TestBed } from '@angular/core/testing';

import { TeamsDatasourceService } from './teams-datasource.service';

describe('TeamsDatasourceService', () => {
  let service: TeamsDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
