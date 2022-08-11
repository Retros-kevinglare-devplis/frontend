import { TestBed } from '@angular/core/testing';

import { SignUpDatasourceService } from './sign-up-datasource.service';

describe('SignUpDatasourceService', () => {
  let service: SignUpDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
