# DesktopMenuBar

This angular component allows you to add a desktop-like menu bar in your Angular app.

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
import { DesktopMenuBarItem } from 'desktop-menu-bar';

...

menuItems: DesktopMenuBarItem[] = [
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
];
```

### Use it in your html !

```html
<desktop-menu-bar [items]="menuItems"></desktop-menu-bar>
```
