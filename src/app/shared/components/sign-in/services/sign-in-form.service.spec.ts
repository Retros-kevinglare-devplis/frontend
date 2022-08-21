import { TestBed } from '@angular/core/testing';

import { SignInFormService } from './sign-in-form.service';

describe('SignInFormService', () => {
  let service: SignInFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
