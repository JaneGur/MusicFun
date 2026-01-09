# 🎵 MusicFun - Playlist Manager

A modern, stylish music playlist management application built with React, Redux Toolkit, and TypeScript. This application provides a beautiful and intuitive interface for creating, managing, and organizing your music playlists.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 🎨 **Modern Dark Theme UI** - Beautiful gradient design with smooth animations
- 📋 **Playlist Management** - Create, edit, and delete playlists with ease
- 🔍 **Search Functionality** - Real-time search with debouncing for optimal performance
- 📄 **Pagination** - Efficient data browsing with customizable page sizes
- 🎯 **Type-Safe** - Full TypeScript support for better code quality
- ⚡ **Fast & Responsive** - Built with Vite for lightning-fast development and optimized production builds
- 🎭 **Component-Based Architecture** - Clean, maintainable, and scalable code structure
- 🔄 **State Management** - Redux Toolkit with RTK Query for efficient data fetching and caching

## 🚀 Tech Stack

### Core
- **React 19.1.1** - Latest React with modern features
- **TypeScript 5.8.3** - Type-safe development experience
- **Vite 7.0.6** - Next-generation frontend tooling

### State Management
- **Redux Toolkit 2.11.2** - Simplified Redux development
- **RTK Query** - Powerful data fetching and caching tool
- **React Redux 9.2.0** - Official React bindings for Redux

### Routing & Forms
- **React Router 7.11.0** - Declarative routing for React
- **React Hook Form 7.69.0** - Performant, flexible forms with easy validation

### UI & Notifications
- **React Toastify 11.0.5** - Beautiful toast notifications
- **CSS Modules** - Scoped styling for components

### Development Tools
- **ESLint 9.32.0** - Code quality and consistency
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd musicfun
```

2. **Install dependencies**
```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install
```

3. **Environment Setup**
Create a `.env` file in the root directory (if needed for API configuration):
```env
# Add your environment variables here
VITE_API_URL=your_api_url
```

## 🎮 Usage

### Development

Start the development server with hot module replacement:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Production Build

Create an optimized production build:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
pnpm lint
# or
yarn lint
```

## 📁 Project Structure

```
musicfun/
├── public/                 # Static assets
│   ├── vite.svg
│   └── ...
├── src/
│   ├── app/               # App configuration
│   │   ├── baseApi.ts    # RTK Query base API configuration
│   │   ├── model/
│   │   │   └── store.ts  # Redux store configuration
│   │   └── ui/
│   │       ├── App/      # Main App component
│   │       └── MainPage/ # Main page component
│   ├── assets/           # Images, fonts, etc.
│   ├── common/           # Shared code
│   │   ├── components/   # Reusable components
│   │   │   ├── Header/
│   │   │   ├── PageNotFound/
│   │   │   └── components/
│   │   │       └── Pagination/
│   │   ├── enums/        # Enumerations
│   │   ├── hooks/        # Custom hooks
│   │   ├── routing/      # Routing configuration
│   │   ├── types/        # TypeScript types
│   │   └── utils/        # Utility functions
│   ├── features/         # Feature-based modules
│   │   ├── auth/         # Authentication
│   │   │   └── ui/
│   │   │       └── ProfilePage/
│   │   ├── playlists/    # Playlist management
│   │   │   ├── api/      # API layer with RTK Query
│   │   │   └── ui/       # UI components
│   │   │       └── PlaylistsPage/
│   │   │           ├── CreatePlaylistForm/
│   │   │           ├── EditPlaylistForm/
│   │   │           ├── PlaylistItem/
│   │   │           └── PlaylistsList/
│   │   └── tracks/       # Tracks management
│   │       └── ui/
│   │           └── TracksPage/
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite type definitions
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🎨 Design System

The application uses a modern design system with:

### Color Palette
- **Primary**: Indigo gradient (`#6366f1` to `#4f46e5`)
- **Secondary**: Pink (`#ec4899`)
- **Background**: Dark slate (`#0f172a`)
- **Surface**: Lighter slate (`#1e293b`)
- **Text**: Multiple shades for hierarchy

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Heading Styles**: Gradient text effects on h1 elements
- **Body Text**: Clear hierarchy with different weight and color variations

### Component Styling
- **Cards**: Elevated with shadows and hover effects
- **Buttons**: Gradient backgrounds with smooth transitions
- **Inputs**: Focus states with glow effects
- **Animations**: Smooth fade-in and slide-up effects

## 🔧 Configuration Files

- **tsconfig.json** - TypeScript compiler options
- **vite.config.ts** - Vite build configuration
- **eslint.config.js** - ESLint rules and settings
- **.prettierrc** - Code formatting rules (if present)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines

- Use TypeScript for all new code
- Follow the existing component structure
- Use CSS Modules for styling
- Write meaningful commit messages
- Ensure code passes ESLint checks

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by modern music streaming applications
- UI/UX design focused on user experience and accessibility

## 📞 Support

If you have any questions or run into issues, please:
- Check the documentation
- Search existing issues
- Create a new issue with detailed information

---

**Happy playlist managing! 🎵✨**
