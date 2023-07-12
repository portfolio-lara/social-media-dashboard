export interface CardProps {
    key: number;
    platform: string;
    handle?: string;
    metric?: string;
    total: any;
    change: number;
  }

  export interface AccountWidgetProps {
    platform: string;
    accountName?: string;
  }

  export interface ThemeSwitcherProps {
    theme: string;
    onThemeChange: () => void;
  }