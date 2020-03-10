import { Component, OnInit, Input } from '@angular/core';
import { DesktopMenuBarItem } from '../../interfaces/desktop-menu-bar-item.interface';

@Component({
    selector: 'desktop-menu-bar-vertical',
    templateUrl: './desktop-menu-bar-vertical.component.html',
    styleUrls: ['./desktop-menu-bar-vertical.component.scss']
})
export class DesktopMenuBarVerticalComponent implements OnInit {
    @Input() items: DesktopMenuBarItem[];

    constructor() {}

    ngOnInit(): void {}
}
