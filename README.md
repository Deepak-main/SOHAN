# Video Editing Studio Website

A professional multi-page React website for a video editing studio, built with Vite and React Router.

## Features

- **5 Pages**: Home, Product, Courses, Contact Us, and About
- **Modern Design**: Dark theme with gradient accents
- **Responsive Layout**: Works on all devices
- **React Router**: Smooth navigation between pages
- **Professional UI**: Beautiful, modern interface perfect for a video editing studio

## Pages

- **Home**: Hero section with features showcase
- **Product**: Services and pricing information
- **Courses**: Video editing courses with enrollment options
- **Contact Us**: Contact form and studio information
- **About**: Studio information, values, and team

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
src/
  ├── components/
  │   └── Navigation.jsx      # Navigation bar component
  ├── pages/
  │   ├── Home.jsx            # Home page
  │   ├── Product.jsx         # Product/Services page
  │   ├── Courses.jsx         # Courses page
  │   ├── Contact.jsx         # Contact page
  │   └── About.jsx           # About page
  ├── styles/
  │   ├── Navigation.css      # Navigation styles
  │   ├── Home.css            # Home page styles
  │   ├── Product.css         # Product page styles
  │   ├── Courses.css         # Courses page styles
  │   ├── Contact.css         # Contact page styles
  │   └── About.css           # About page styles
  ├── App.jsx                 # Main app component with routing
  ├── App.css                 # Global app styles
  ├── main.jsx                # Entry point
  └── index.css               # Base styles
```
