import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopMenuBarComponent } from './desktop-menu-bar/desktop-menu-bar.component';
import { DesktopMenuBarVerticalComponent } from './desktop-menu-bar-vertical/desktop-menu-bar-vertical.component';

@NgModule({
    declarations: [DesktopMenuBarComponent, DesktopMenuBarVerticalComponent],
    imports: [CommonModule],
    exports: [DesktopMenuBarComponent]
})
export class DesktopMenuBarModule {}
