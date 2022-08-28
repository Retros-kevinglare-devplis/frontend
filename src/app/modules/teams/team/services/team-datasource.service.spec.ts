import { TestBed } from '@angular/core/testing';

import { TeamDatasourceService } from './team-datasource.service';

describe('TeamDatasourceService', () => {
  let service: TeamDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
