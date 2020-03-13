import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {By} from "@angular/platform-browser";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, NavigationComponent, JumbotronComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a navigation component with a title "License Plate Store" ', () => {
    expect(getTextContent('app-navigation .navbar-brand')).toBe('License Plate Store');
  });

  it('should display a jumbotron component with proper title and description ', () => {
    expect(getTextContent('app-jumbotron h1')).toBe('Welcome to our store');
    expect(getTextContent('app-jumbotron p')).toBe('Browse our collection of license plates');
  });

  function getTextContent(selector: string): string {
    return fixture.debugElement.query(By.css(selector)).nativeElement.textContent;
  }
});


