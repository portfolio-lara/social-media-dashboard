import React from 'react';
import {ThemeSwitcherProps} from '../Dashboard/interfaces';

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, onThemeChange }) => {
  return (

    <div className="theme-switcher flex items-center">
      <p className='mr-2'>Toggle Theme</p>
      <label className="switch">
        <input type="checkbox" checked={theme === 'dark-theme'} onClick={onThemeChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;

/**
 *  <label className="switch">
                        <input type="checkbox"
                            id="color-toggle"
                            onClick={ToggleTheme}
                        />
                        <span className="slider round"></span>
                    </label>
 */
