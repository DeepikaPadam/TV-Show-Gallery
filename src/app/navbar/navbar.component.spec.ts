import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { DisplayDetailsComponent } from '../display-details/display-details.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'details',
            component: DisplayDetailsComponent
          }
        ]),
      ],
      declarations: [
        NavbarComponent ,
        DisplayDetailsComponent
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to details component with query params', () => {
    const name = 'test';
    const router = {
      navigate: jasmine.createSpy('search')
    };
    router.navigate(['details'], {queryParams: {name}});
    expect(router.navigate).toHaveBeenCalledWith(['details'], {queryParams: {name}});
  });

});
