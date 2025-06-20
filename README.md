# Data Room Website

A modern, secure data room website with SmartBlocks Homes inspired aesthetic. Features a dark theme, clean typography, and professional design optimized for GitHub Pages deployment.

## Features

- 🎨 Modern dark theme with gradient backgrounds
- 📱 Fully responsive design
- ⚡ Smooth scrolling navigation
- 🔒 Professional data room presentation
- 📊 Analytics and document management sections
- 👥 Team showcase
- 📧 Contact form with validation
- 🚀 Optimized for GitHub Pages

## Setup Instructions

### 1. Create a Private GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `data-room-site`)
5. **Important**: Set visibility to "Private"
6. Initialize with README (optional, since we have one)
7. Click "Create repository"

### 2. Upload Your Files

#### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop or select these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add a commit message like "Initial data room website setup"
4. Click "Commit changes"

#### Option B: Using Git Commands
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Copy your files to the repository directory
# Then commit and push
git add .
git commit -m "Initial data room website setup"
git push origin main
```

### 3. Enable GitHub Pages

1. In your repository, go to "Settings" tab
2. Scroll down to "Pages" section (left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch
5. Select "/ (root)" folder
6. Click "Save"
7. GitHub will provide your site URL (usually: `https://yourusername.github.io/repository-name`)

**Note**: Since this is a private repository, GitHub Pages is only available with GitHub Pro, GitHub Team, or GitHub Enterprise. For free accounts, you'll need to make the repository public to use GitHub Pages.

### 4. Access Your Site

After enabling GitHub Pages, your site will be available at:
```
https://yourusername.github.io/repository-name
```

It may take a few minutes for the site to become available after the initial setup.

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styling (SmartBlocks inspired)
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Customization

### Updating Content
- Edit `index.html` to change text, team members, and sections
- Modify `styles.css` to adjust colors, fonts, and layout
- Update `script.js` for additional functionality

### Color Scheme
The site uses a modern dark theme with these primary colors:
- Background: `#0a0a0a`
- Secondary: `#0f0f0f`
- Accent: `#64ffda` (teal)
- Text: `#ffffff`
- Muted text: `#b0b0b0`

### Typography
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

## Security Considerations

- This is a static site suitable for presenting information
- For actual data room functionality, you'll need backend integration
- Consider adding authentication for sensitive content
- Use HTTPS (GitHub Pages provides this automatically)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

Private repository - All rights reserved.

## Support

For questions or customization requests, contact the development team. 