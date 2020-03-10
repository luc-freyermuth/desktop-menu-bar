import { TestBed } from '@angular/core/testing';

import { DesktopMenuBarService } from './desktop-menu-bar.service';

describe('DesktopMenuBarService', () => {
    let service: DesktopMenuBarService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DesktopMenuBarService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
