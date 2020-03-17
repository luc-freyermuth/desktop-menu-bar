import {
    Injectable,
    ApplicationRef,
    ComponentFactoryResolver,
    Injector,
    ComponentRef
} from '@angular/core';
import { DesktopMenuBarComponent } from '../lib/desktop-menu-bar/desktop-menu-bar.component';
import { DesktopMenuBarItem } from '../interfaces/desktop-menu-bar-item.interface';

@Injectable({
    providedIn: 'root'
})
export class DesktopMenuBarService {
    menuComponentRef: ComponentRef<DesktopMenuBarComponent> = null;
    menuItems: DesktopMenuBarItem[] = null;

    constructor(
        private applicationRef: ApplicationRef,
        private resolver: ComponentFactoryResolver,
        private injector: Injector
    ) {}

    setMenuBarItems(items: DesktopMenuBarItem[]) {
        this.menuItems = items;
        this.updateMenuBarItemsInComponent();
    }

    updateMenuBarItemsInComponent() {
        if (this.isMenuBarVisible()) {
            this.menuComponentRef.instance.items = this.menuItems;
        }
    }

    showMenuBar() {
        if (!this.isMenuBarVisible()) {
            const componentFactory = this.resolver.resolveComponentFactory(
                DesktopMenuBarComponent
            );
            this.menuComponentRef = componentFactory.create(this.injector);
            this.applicationRef.attachView(this.menuComponentRef.hostView);
            this.moveToDocumentBody(this.menuComponentRef);

            this.updateMenuBarItemsInComponent();
        }
    }

    hideMenuBar() {
        if (this.isMenuBarVisible()) {
            this.applicationRef.detachView(this.menuComponentRef.hostView);
            this.detachFromDocument(this.menuComponentRef);
            this.menuComponentRef = null;
        }
    }

    isMenuBarVisible(): boolean {
        return !!this.menuComponentRef;
    }

    private moveToElement<T>(componentRef: ComponentRef<T>, element: Element): void {
        element.insertBefore(
            componentRef.location.nativeElement,
            element.firstChild
        );
    }

    private moveToDocumentBody<T>(componentRef: ComponentRef<T>) {
        this.moveToElement(componentRef, document.querySelector('body'));
    }

    private detachFromDocument<T>(componentRef: ComponentRef<T>) {
        const element = componentRef.location.nativeElement as Element;
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }
}
