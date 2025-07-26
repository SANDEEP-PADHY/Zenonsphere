// Theme Switcher JavaScript
// Handles theme switching between light and dark modes

class ThemeSwitcher {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }
 
  init() {
    // Set initial theme
    this.setTheme(this.theme);
    
    // Create theme toggle button if it doesn't exist (only if no header toggle)
    if (!document.querySelector('.theme-toggle-header')) {
      this.createThemeToggle();
    }
    
    // Listen for system theme changes
    this.listenForSystemTheme();
  }

  setTheme(theme) {
    this.theme = theme;
    
    // Update data-theme attribute
    document.documentElement.setAttribute('data-theme', theme);
    
    // Store in localStorage
    localStorage.setItem('theme', theme);
    
    // Update theme toggle button
    this.updateThemeToggle();
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  createThemeToggle() {
    // Check if toggle already exists
    if (document.querySelector('.theme-toggle')) {
      return;
    }

    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle theme');
    toggle.setAttribute('title', 'Toggle theme');
    
    // Add icon
    toggle.innerHTML = this.getThemeIcon();
    
    // Add click event
    toggle.addEventListener('click', () => this.toggleTheme());
    
    // Add to body
    document.body.appendChild(toggle);
  }

  updateThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.innerHTML = this.getThemeIcon();
      toggle.setAttribute('title', `Switch to ${this.theme === 'light' ? 'dark' : 'light'} mode`);
    }
  }

  getThemeIcon() {
    if (this.theme === 'light') {
      return `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      `;
    } else {
      return `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      `;
    }
  }

  listenForSystemTheme() {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    
    // Initial check
    handleChange(mediaQuery);
  }

  // Get current theme
  getCurrentTheme() {
    return this.theme;
  }

  // Check if dark mode is active
  isDarkMode() {
    return this.theme === 'dark';
  }

  // Check if light mode is active
  isLightMode() {
    return this.theme === 'light';
  }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.themeSwitcher = new ThemeSwitcher();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeSwitcher;
}

// Utility functions for theme-aware components
window.ThemeUtils = {
  // Get CSS custom property value
  getCSSVariable(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  },

  // Set CSS custom property value
  setCSSVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
  },

  // Add theme-aware class
  addThemeClass(element, className) {
    const theme = window.themeSwitcher?.getCurrentTheme() || 'light';
    element.classList.add(`${className}-${theme}`);
  },

  // Remove theme-aware class
  removeThemeClass(element, className) {
    const theme = window.themeSwitcher?.getCurrentTheme() || 'light';
    element.classList.remove(`${className}-${theme}`);
  },

  // Create theme-aware element
  createThemeElement(tag, className, content) {
    const element = document.createElement(tag);
    element.className = className;
    if (content) {
      element.textContent = content;
    }
    return element;
  }
};

// Auto-initialize if script is loaded after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.themeSwitcher) {
      window.themeSwitcher = new ThemeSwitcher();
    }
  });
} else {
  if (!window.themeSwitcher) {
    window.themeSwitcher = new ThemeSwitcher();
  }
} 