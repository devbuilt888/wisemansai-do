# 📁 Assets Directory Guide

This guide explains where to place your images and how to use them in your React application.

## 📂 Folder Structure

```
src/assets/
├── images/
│   ├── logos/          # Company logos, branding images
│   ├── technologies/   # Technology icons (React, Node.js, etc.)
│   └── icons/          # Service icons, UI elements
└── README.md          # This guide
```

## 🎯 Where to Place Your Images

### 📍 **src/assets/images/logos/**
**Use for:** Company logos, brand assets
- `wiseway-logo.png` - Main company logo
- `wiseway-logo-white.png` - White version for dark backgrounds
- Various favicon files (apple-icon-*.png, android-icon-*.png, favicon-*.png, ms-icon-*.png) - Browser and app icons for different devices and sizes

**Supported formats:** PNG, JPG, SVG (recommended for logos)

### 📍 **src/assets/images/technologies/**
**Use for:** Technology stack icons and logos
- `react-logo.png`
- `nodejs-logo.png`
- `excel-logo.png`
- `accounting-software.png`
- `social-media-platforms.png`

**Supported formats:** PNG, JPG, SVG

### 📍 **src/assets/images/icons/**
**Use for:** Service icons, UI elements
- `accounting-icon.png`
- `social-media-icon.png`
- `content-writing-icon.png`
- `customer-support-icon.png`

**Supported formats:** PNG, JPG, SVG (recommended for icons)

## 🚀 How to Use Images in Your Code

### Method 1: Import and Use (Recommended for src/assets)
```javascript
// Import the image
import wisewayLogo from '../assets/images/logos/wiseway-logo.png';
import reactIcon from '../assets/images/technologies/react-logo.png';

// Use in JSX
<img src={wisewayLogo} alt="The WiseWay Solutions Logo" />
<img src={reactIcon} alt="React" />
```

### Method 2: Public Folder (Alternative)
If you prefer, you can also place images in the `public` folder:
- `public/images/logo.png`
- `public/images/technologies/react.png`

```javascript
// Use directly with public path
<img src="/images/logo.png" alt="Logo" />
<img src="/images/technologies/react.png" alt="React" />
```

## 📋 Best Practices

### ✅ **Do:**
- Use **SVG** for logos and icons (scalable, small file size)
- Use **PNG** for images with transparency
- Use **JPG** for photos and complex images
- Keep file names descriptive and lowercase
- Use hyphens instead of spaces: `wiseway-logo.png`
- Optimize images before uploading (compress to reduce file size)

### ❌ **Avoid:**
- Large file sizes (aim for <500KB per image)
- Spaces in file names
- Special characters in file names
- Uploading images larger than needed

## 🛠️ How to Add Images to Your Website

1. **Copy your image files** to the appropriate folder
2. **Import them** in your React component
3. **Update the JSX** to use the imported image

### Example: Adding a Company Logo
```javascript
// 1. Place logo in: src/assets/images/logos/wiseway-logo.png

// 2. Import in App.tsx
import wisewayLogo from './assets/images/logos/wiseway-logo.png';

// 3. Replace the emoji in the logo
<div className="logo">
  <img src={wisewayLogo} alt="The WiseWay Solutions" className="logo-icon" />
<span className="logo-text">The WiseWay Solutions</span>
</div>
```

### Example: Adding Technology Icons
```javascript
// 1. Place icons in: src/assets/images/technologies/

// 2. Import multiple icons
import reactIcon from './assets/images/technologies/react.png';
import nodeIcon from './assets/images/technologies/nodejs.png';
import excelIcon from './assets/images/technologies/excel.png';

// 3. Create a technologies section
<div className="technologies">
  <img src={reactIcon} alt="React" />
  <img src={nodeIcon} alt="Node.js" />
  <img src={excelIcon} alt="Microsoft Excel" />
</div>
```

## 📐 Recommended Image Sizes

- **Company Logo:** 200x60px (or maintain aspect ratio)
- **Technology Icons:** 64x64px or 80x80px
- **Service Icons:** 48x48px or 64x64px
- **Hero Images:** 1200x600px
- **Thumbnails:** 300x200px

## 🔧 Need Help?

If you need assistance implementing any images, just let me know and I'll help you:
1. Update the code to use your new images
2. Create responsive image components
3. Add proper styling and animations
4. Optimize the images for web performance 