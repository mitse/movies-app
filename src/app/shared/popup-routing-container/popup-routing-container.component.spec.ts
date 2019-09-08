import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRoutingContainerComponent } from './popup-routing-container.component';

describe('PopupRoutingContainerComponent', () => {
  let component: PopupRoutingContainerComponent;
  let fixture: ComponentFixture<PopupRoutingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRoutingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRoutingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
