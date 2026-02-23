# Personal Website

A beautiful, modern personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern UI with beautiful gradients and animations
- 🌙 Dark mode toggle
- 📱 Fully responsive design
- ⚡ Fast loading with Vite
- 🎭 Smooth animations with Framer Motion
- 🛠️ Built with modern technologies

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Update your name, tagline, and social links
- `src/components/About.jsx` - Update your story and skills
- `src/components/Projects.jsx` - Add your projects
- `src/components/Contact.jsx` - Update your contact information
- `src/components/Footer.jsx` - Update footer information

### Colors and Themes

The color scheme can be customized in `src/index.css` and through Tailwind's configuration in `tailwind.config.js`.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add a navigation link in `src/components/Navbar.jsx`

## Deployment

This website can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React and Tailwind CSS
