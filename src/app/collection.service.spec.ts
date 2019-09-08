import { TestBed } from '@angular/core/testing';

import { CollectionService } from './collections/collection.serviceervice';

describe('CollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollectionService = TestBed.get(CollectionService);
    expect(service).toBeTruthy();
  });
});
