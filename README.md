# ZenonSphere Theme System

A comprehensive, modular CSS theme system with light and dark mode support, featuring a beautiful color palette and extensive component library.

## 🌟 Features

- **Modular Architecture**: Separate CSS files for base styles, light theme, and dark theme
- **CSS Custom Properties**: Easy theming with CSS variables
- **Automatic Theme Detection**: Respects user's system preferences
- **Local Storage Persistence**: Remembers user's theme choice
- **Smooth Transitions**: Elegant animations between theme changes
- **Comprehensive Components**: Buttons, forms, cards, tables, alerts, and more
- **Responsive Design**: Mobile-first approach with responsive grid system
- **Accessibility**: Keyboard navigation and screen reader support
- **Modern UI**: Clean, professional design with attention to detail

## 🎨 Color Palettes

### Light Mode
- **Background**: `#FFFFFF` (White)
- **Surface**: `#F5F5F5` (Light Grey)
- **Primary Text**: `#1A1A1A` (Almost Black)
- **Secondary Text**: `#555555` (Medium Grey)
- **Border**: `#E0E0E0` (Light Grey Border)
- **Primary Accent**: `#00A6B6` (Teal Blue)
- **Primary Hover**: `#008B99` (Slightly darker teal)
- **Secondary**: `#13455A` (Deep Blue)
- **Disabled**: `#CCCCCC` (Very Light Grey)

### Dark Mode
- **Background**: `#121212` (Near Black)
- **Surface**: `#1E1E1E` (Dark Grey Surface)
- **Primary Text**: `#FFFFFF` (White)
- **Secondary Text**: `#B3B3B3` (Light Grey)
- **Border**: `#333333` (Dark Grey Border)
- **Primary Accent**: `#00A6B6` (Teal Blue)
- **Primary Hover**: `#1BC2CF` (Lighter Teal)
- **Secondary**: `#13455A` (Deep Blue)
- **Disabled**: `#555555` (Dark Grey)

## 📁 File Structure

```
zenonsphere/
├── css/
│   ├── base.css          # Base styles and CSS custom properties
│   ├── light_css         # Light mode specific styles
│   └── dark_css          # Dark mode specific styles
├── js/
│   └── theme-switcher.js # Theme switching functionality
├── index.html            # Demo page
└── README.md            # This file
```

## 🚀 Quick Start

1. **Include CSS files** in your HTML:
```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/light_css">
<link rel="stylesheet" href="css/dark_css">
```

2. **Include JavaScript** for theme switching:
```html
<script src="js/theme-switcher.js"></script>
```

3. **Use CSS classes** in your HTML:
```html
<button class="btn btn-primary">Primary Button</button>
<div class="card">Card content</div>
<div class="alert alert-success">Success message</div>
```

## 🎯 Component Library

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-disabled" disabled>Disabled</button>
```

### Cards
```html
<div class="card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
</div>
```

### Forms
```html
<div class="form-group">
    <label class="form-label">Email Address</label>
    <input type="email" class="form-input" placeholder="Enter your email">
</div>
```

### Alerts
```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
<div class="alert alert-info">Info message</div>
```

### Badges
```html
<span class="badge">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
```

### Tables
```html
<table class="table">
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

### Progress Bars
```html
<div class="progress">
    <div class="progress-bar" style="width: 75%"></div>
</div>
```

### Loading Spinner
```html
<div class="spinner"></div>
```

### Grid System
```html
<div class="grid grid-2">
    <div class="card">Grid Item 1</div>
    <div class="card">Grid Item 2</div>
</div>
```

## 🎨 Customization

### CSS Custom Properties

The theme system uses CSS custom properties for easy customization:

```css
:root {
    --background: #FFFFFF;
    --surface: #F5F5F5;
    --primary-text: #1A1A1A;
    --secondary-text: #555555;
    --border: #E0E0E0;
    --primary-accent: #00A6B6;
    --primary-hover: #008B99;
    --secondary: #13455A;
    --disabled: #CCCCCC;
}
```

### Adding Custom Colors

To add custom colors, extend the CSS custom properties:

```css
:root {
    /* Existing properties... */
    --custom-color: #FF6B6B;
    --custom-color-hover: #FF5252;
}

[data-theme="dark"] {
    /* Existing properties... */
    --custom-color: #FF8A80;
    --custom-color-hover: #FF6B6B;
}
```

### Creating Custom Components

```css
.custom-component {
    background-color: var(--surface);
    color: var(--primary-text);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    transition: all var(--transition-fast);
}

.custom-component:hover {
    background-color: var(--background);
    border-color: var(--primary-accent);
}
```

## 🔧 JavaScript API

### Theme Switcher

The theme switcher provides a simple API for programmatic theme control:

```javascript
// Get current theme
const currentTheme = window.themeSwitcher.getCurrentTheme();

// Check if dark mode is active
const isDark = window.themeSwitcher.isDarkMode();

// Switch themes
window.themeSwitcher.setTheme('dark');
window.themeSwitcher.toggleTheme();

// Listen for theme changes
document.addEventListener('themeChanged', (event) => {
    console.log('Theme changed to:', event.detail.theme);
});
```

### Theme Utilities

```javascript
// Get CSS variable value
const bgColor = window.ThemeUtils.getCSSVariable('--background');

// Set CSS variable value
window.ThemeUtils.setCSSVariable('--custom-color', '#FF6B6B');

// Create theme-aware element
const element = window.ThemeUtils.createThemeElement('div', 'custom-class', 'Content');
```

## 📱 Responsive Design

The theme system includes responsive breakpoints and mobile-first design:

- **Mobile**: Default styles (no media query)
- **Tablet**: `@media (min-width: 768px)`
- **Desktop**: `@media (min-width: 1024px)`

### Grid System

```html
<!-- 2 columns on desktop, 1 on mobile -->
<div class="grid grid-2">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<!-- 3 columns on desktop, 1 on mobile -->
<div class="grid grid-3">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

## ♿ Accessibility

The theme system includes several accessibility features:

- **High Contrast**: Ensures sufficient color contrast ratios
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Reduced Motion**: Respects user's motion preferences
- **Keyboard Navigation**: Full keyboard accessibility

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Custom Properties**: Supported in all modern browsers
- **Grid Layout**: Supported in all modern browsers
- **Flexbox**: Supported in all modern browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ for beautiful, accessible web experiences** 