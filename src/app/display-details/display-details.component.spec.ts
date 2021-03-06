import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { DisplayDetailsComponent } from './display-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import { DataService } from '../data.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('DisplayDetailsComponent', () => {
  let component: DisplayDetailsComponent;
  let fixture: ComponentFixture<DisplayDetailsComponent>;
  let service: DataService;
  let details = {
    "id":1,
    "url":"http://www.tvmaze.com/shows/1/under-the-dome",
    "name":"Under the Dome",
    "type":"Scripted",
    "language":"English",
    "genres":[
      "Drama",
      "Science-Fiction",
      "Thriller"
    ],
    "status":"Ended",
    "runtime":60,
    "premiered":"2013-06-24",
    "officialSite":"http://www.cbs.com/shows/under-the-dome/",
    "schedule":{
      "time":"22:00",
      "days":[
        "Thursday"
      ]
    },
    "rating":{
      "average":6.5
    },
    "weight":97,
    "network":{
      "id":2,
      "name":"CBS",
      "country":{
        "name":"United States",
        "code":"US",
        "timezone":"America/New_York"
      }
    },
    "webChannel":null,
    "externals":{
      "tvrage":25988,
      "thetvdb":264492,
      "imdb":"tt1553656"
    },
    "image":{
      "medium":"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      "original":"http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    "summary":"<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    "updated":1573667713,
    "_links":{
      "self":{
        "href":"http://api.tvmaze.com/shows/1"
      },
      "previousepisode":{
        "href":"http://api.tvmaze.com/episodes/185054"
      }
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ DisplayDetailsComponent ],
      providers: [
        DataService,
        {provide: ActivatedRoute,
          useValue: {
            queryParams: of({name: 'test'}),
          },
        }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(DataService);
  });

  it('should create details component', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribe query params', () => {
    expect(component.showName).toEqual('test');
  });
  it('Should get show details',() =>  {
    let spy = spyOn(service, 'getShowDetails').and.callThrough();    ;
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('test');
    service.getShowDetails('test').subscribe((res) => {
      expect(res).toBe(details);
    });
  });

});
