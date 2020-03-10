import { Component, OnInit, Input } from '@angular/core';
import { DesktopMenuBarItem } from '../../interfaces/desktop-menu-bar-item.interface';

@Component({
    selector: 'desktop-menu-bar',
    templateUrl: 'desktop-menu-bar.component.html',
    styleUrls: ['desktop-menu-bar.component.scss']
})
export class DesktopMenuBarComponent implements OnInit {
    @Input() items: DesktopMenuBarItem[] = [];

    constructor() {}

    ngOnInit(): void {}
}
