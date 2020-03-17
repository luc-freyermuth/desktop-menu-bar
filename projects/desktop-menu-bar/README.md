# DesktopMenuBar

This angular module allows you to add a desktop-like menu bar in your Angular app.

## Installation

### Install the package

`npm install --save desktop-menu-bar`

### Import it in your module

```typescript
@NgModule({
  imports: [
    DesktopMenuBarModule
  ]
})
export class MyModule { }
```
## Use it !

### Create an array representing your menu in your component

```typescript
import { DesktopMenuBarService } from 'desktop-menu-bar';

...
constructor(
  private menuBarService: DesktopMenuBarService
) {}

ngOnInit() {
  // Set up the menu items
  this.menuBarService.setMenuBarItems([
    {
      text: 'File',
      children: [
        {
          text: 'Save',
          action: () => { ... }
        }
      ]
    },
    {
      text: 'Edit',
      children: [
        {
          text: 'Go back',
          action: () => { ... }
        },
        {
          text: 'Go forward',
          action: () => { ... }
        }
      ]
    },
    {
      text: 'Help',
      action: () => { ... }
    }
  ]);

  // Displays the bar at the top of the page (as the first child of the body)
  this.menuBarService.showMenuBar();
}
```
