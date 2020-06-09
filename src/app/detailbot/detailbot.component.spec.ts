import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbotComponent } from './detailbot.component';

describe('DetailbotComponent', () => {
  let component: DetailbotComponent;
  let fixture: ComponentFixture<DetailbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
