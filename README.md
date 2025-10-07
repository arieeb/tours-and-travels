# 🌍 TRVL - Tours and Travels Website

A modern, responsive travel and tourism website built with React and Vite. This application showcases various adventure destinations, services, and includes an interactive video trailer feature.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.3-CA4245?style=flat&logo=react-router&logoColor=white)

## ✨ Features

- 🏠 **Hero Section** - Eye-catching landing page with background video
- 🎬 **Video Trailer** - Dedicated page to watch adventure trailers
- 🗺️ **Destination Cards** - Showcase of epic travel destinations with beautiful imagery
- 🧭 **Responsive Navigation** - Mobile-friendly navbar with hamburger menu
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎨 **Modern UI/UX** - Clean and intuitive design with smooth animations
- 🔄 **React Router Integration** - Seamless page navigation without reloads

## 🚀 Live Pages

- **Home** - Main landing page with hero section and destination cards
- **Services** - Travel services and packages
- **Products** - Travel products and merchandise
- **Sign Up** - User registration page
- **Trailer** - Watch adventure trailers in full screen

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM 7.9.3
- **Styling:** CSS3 with custom stylesheets
- **Icons:** Font Awesome
- **Version Control:** Git

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arieeb/tours-and-travels.git
   cd tours-and-travels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
tours-and-travels/
├── public/
│   ├── img/                    # Image assets
│   │   ├── img-2.jpg
│   │   ├── img-3.jpg
│   │   ├── img-4.jpg
│   │   ├── img-8.jpg
│   │   └── img-9.jpg
│   └── videos/                 # Video assets
│       ├── video-1.mp4
│       └── video-2.mp4
├── src/
│   ├── components/
│   │   ├── Pages/
│   │   │   ├── Home.jsx       # Home page component
│   │   │   ├── Services.jsx   # Services page
│   │   │   ├── Products.jsx   # Products page
│   │   │   ├── SignUp.jsx     # Sign up page
│   │   │   ├── Trailer.jsx    # Video trailer page
│   │   │   └── Trailer.css    # Trailer styles
│   │   ├── Button.jsx         # Reusable button component
│   │   ├── Button.css
│   │   ├── CardItem.jsx       # Individual card component
│   │   ├── Cards.jsx          # Cards container
│   │   ├── Cards.css
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Footer.css
│   │   ├── HeroSection.jsx    # Hero section with video
│   │   ├── HeroSection.css
│   │   ├── Navbar.jsx         # Navigation bar
│   │   └── Navbar.css
│   ├── App.jsx                # Main app component with routes
│   ├── App.css
│   ├── main.jsx               # Entry point with Router
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Key Components

### Navbar
- Responsive navigation with mobile menu
- Sticky positioning for better UX
- Dynamic sign-up button based on screen size

### HeroSection
- Full-screen background video
- Call-to-action buttons
- Link to trailer page

### Cards
- Grid layout of destination cards
- Hover effects and animations
- Categorized with labels (Adventure, Luxury, Mystery, etc.)

### Trailer
- Dedicated video player page
- Full-screen video with controls
- Responsive design

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Arieeb**
- GitHub: [@arieeb](https://github.com/arieeb)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- React team for the amazing framework
- Vite team for the blazing fast build tool
- All contributors who helped improve this project

---

Made with ❤️ and React