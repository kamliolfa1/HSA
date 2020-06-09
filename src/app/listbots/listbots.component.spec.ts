import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbotsComponent } from './listbots.component';

describe('ListbotsComponent', () => {
  let component: ListbotsComponent;
  let fixture: ComponentFixture<ListbotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
