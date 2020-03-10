import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMenuBarVerticalComponent } from './desktop-menu-bar-vertical.component';

describe('DesktopMenuBarVerticalComponent', () => {
  let component: DesktopMenuBarVerticalComponent;
  let fixture: ComponentFixture<DesktopMenuBarVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopMenuBarVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopMenuBarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
