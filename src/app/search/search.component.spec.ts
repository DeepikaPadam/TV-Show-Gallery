import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DisplayDetailsComponent} from '../display-details/display-details.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: 'details',
            component: DisplayDetailsComponent
          }
        ]),
      ],
      declarations: [
        SearchComponent,
        DisplayDetailsComponent
      ]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });
});
