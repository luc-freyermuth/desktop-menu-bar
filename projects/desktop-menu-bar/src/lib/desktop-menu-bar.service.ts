import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { DesktopMenuBarComponent } from '../lib/desktop-menu-bar/desktop-menu-bar.component';
import { DesktopMenuBarItem } from '../interfaces/desktop-menu-bar-item.interface';

@Injectable({
    providedIn: 'root'
})
export class DesktopMenuBarService {
    menuComponentInstance: DesktopMenuBarComponent = null;
    menuItems: DesktopMenuBarItem[] = null;

    constructor(
      private _applicationRef: ApplicationRef,
      private _resolver: ComponentFactoryResolver,
      private _injector: Injector
    ) {}

    setMenuBarItems(items: DesktopMenuBarItem[]) {
        this.menuItems = items;
        this.updateMenuBarItemsInComponent();
    }

    updateMenuBarItemsInComponent() {
        if (this.menuComponentInstance) {
            this.menuComponentInstance.items = this.menuItems;
        }
    }

    showMenuBar() {
      const componentFactory = this._resolver.resolveComponentFactory(DesktopMenuBarComponent);
      const componentRef = componentFactory.create(this._injector);
      this._applicationRef.attachView(componentRef.hostView);
      this.moveToDocumentBody(componentRef);

      this.menuComponentInstance = componentRef.instance;
      this.updateMenuBarItemsInComponent();
    }

    public moveToElement<T>(componentRef: ComponentRef<T>, element: Element): void {
      element.insertBefore(componentRef.location.nativeElement, element.firstChild);
    }

    // Moves the component to the document body.
    public moveToDocumentBody<T>(componentRef: ComponentRef<T>): void {
      this.moveToElement(componentRef, document.querySelector('body')!);
  }
}
