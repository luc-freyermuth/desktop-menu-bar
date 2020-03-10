import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopMenuBarComponent } from './desktop-menu-bar.component';

describe('DesktopMenuBarComponent', () => {
    let component: DesktopMenuBarComponent;
    let fixture: ComponentFixture<DesktopMenuBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DesktopMenuBarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DesktopMenuBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
