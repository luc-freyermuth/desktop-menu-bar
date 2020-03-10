export interface DesktopMenuBarItem {
  text: string;
  children?: DesktopMenuBarItem[];
  action?: () => void;
}
