import { TestBed } from '@angular/core/testing';

import { SignInDatasourceService } from './sign-in-datasource.service';

describe('SignInDatasourceService', () => {
  let service: SignInDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
