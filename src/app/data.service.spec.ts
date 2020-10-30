import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  let httpMock: HttpTestingController;
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ DataService ]
    });

    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get all shows', () => {
    const response = { test: 'test'};
    service.getShowsList().subscribe((res) => {
      expect(res).toBe(response);
    });
    const request = httpMock.expectOne('http://api.tvmaze.com/shows');
    expect(request.request.method).toEqual('GET');
    request.flush(response);
    httpMock.verify();
  });
  it('Should get show details', () => {
    const response = { test: 'test'};
    service.getShowDetails('test').subscribe((res) => {
      expect(res).toBe(response);
    });
    const request = httpMock.expectOne('http://api.tvmaze.com/singlesearch/shows?q=test');
    expect(request.request.method).toEqual('GET');
    request.flush(response);
    httpMock.verify();
  });
});
