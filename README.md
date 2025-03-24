# Personal Portfolio Website

This is a modern, responsive portfolio website built with HTML, CSS, and JavaScript. It features a clean design with smooth animations and a mobile-friendly layout.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated sections on scroll
- Contact form
- Skills showcase
- Projects showcase
- Social media links
- Modern and clean UI

## Customization

### 1. Personal Information
Edit the following in `index.html`:
- Your name in the hero section
- Your tagline/role
- About me section content
- Social media links (GitHub, LinkedIn, email)
- Skills list
- Projects section

### 2. Styling
You can customize the colors by modifying the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --section-bg: #f3f4f6;
}
```

### 3. Projects
To add your projects, add project cards in the projects section of `index.html`. Example structure:
```html
<div class="project-card">
    <h3>Project Name</h3>
    <p>Project description</p>
    <div class="project-links">
        <a href="project-url" target="_blank">View Project</a>
        <a href="github-url" target="_blank">GitHub</a>
    </div>
</div>
```

## Deployment

### Option 1: GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Create an account on Netlify
2. Connect your GitHub repository
3. Deploy with default settings
4. Your site will be available at `https://your-site-name.netlify.app`

### Option 3: Vercel
1. Create an account on Vercel
2. Connect your GitHub repository
3. Deploy with default settings
4. Your site will be available at `https://your-site-name.vercel.app`

## Local Development

To run the website locally:
1. Clone this repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests! 