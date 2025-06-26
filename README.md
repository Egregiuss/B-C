# React Wedding Website

A sophisticated, modern wedding website built with React, TypeScript, Material-UI, and advanced animations. Features real-time RSVP management, interactive gallery, and beautiful user experience.

## 🚀 Features

### Advanced React Features
- **TypeScript**: Full type safety and better development experience
- **Material-UI**: Professional design system with custom theming
- **React Router**: Multi-page navigation with smooth transitions
- **Context API**: Global state management for wedding data
- **React Hook Form**: Advanced form handling with validation
- **Framer Motion**: Smooth animations and transitions

### Interactive Components
- **Parallax Hero**: Stunning hero section with parallax scrolling
- **Live Countdown**: Real-time countdown to wedding day
- **Interactive Gallery**: Swiper carousel with lightbox and like functionality
- **RSVP Management**: Real-time RSVP tracking with statistics
- **Guestbook**: Interactive guest messages
- **Floating Hearts**: Double-click anywhere for heart animations

### Modern UI/UX
- **Glass Morphism**: Modern glass effects and blur backgrounds
- **Responsive Design**: Perfect on all devices and screen sizes
- **Smooth Animations**: Page transitions and scroll animations
- **Custom Theme**: Wedding-specific color palette and typography
- **Loading States**: Beautiful loading animations

## 📁 Project Structure

```
wedding-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CountdownSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── FloatingElements.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Gallery.tsx
│   │   ├── RSVP.tsx
│   │   └── Registry.tsx
│   ├── context/
│   │   └── WeddingContext.tsx
│   ├── styles/
│   │   ├── theme.ts
│   │   └── global.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## 🛠 Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Wedding Information
Edit `src/context/WeddingContext.tsx`:
- Couple names
- Wedding date
- Venue information
- Contact details

### Theme & Colors
Edit `src/styles/theme.ts`:
- Primary colors: `#8B4B8C` (Purple)
- Secondary colors: `#D4A5D6` (Light Purple)
- Typography settings
- Component styling

### Images
Replace placeholder images in components:
- Hero background
- Gallery images
- Story timeline photos

## 📱 Pages & Features

### Home Page
- Parallax hero section
- Live countdown timer
- Love story timeline
- Wedding details
- Interactive guestbook

### Gallery
- Swiper image carousel
- Grid layout with hover effects
- Lightbox with navigation
- Like/favorite functionality
- Category filtering

### RSVP
- Advanced form with validation
- Real-time RSVP statistics
- Guest management
- Dietary restrictions
- Special messages

### Registry
- Gift item showcase
- Store integration links
- Wishlist management
- Price tracking

## 🔧 Advanced Features

### State Management
- React Context for global state
- Real-time RSVP tracking
- Guest data persistence
- Form state management

### Animations
- Framer Motion page transitions
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading animations

### Performance
- Code splitting with React.lazy
- Image optimization
- Smooth scrolling
- Responsive images

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure form handling for RSVP

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Configure environment variables

### Traditional Hosting
1. Build: `npm run build`
2. Upload `build` folder contents
3. Configure server for SPA routing

## 📊 Analytics & Tracking

Add analytics to track:
- Page views
- RSVP submissions
- Gallery interactions
- User engagement

## 🔒 Security & Privacy

- Form validation and sanitization
- HTTPS enforcement
- Privacy-compliant data handling
- Secure RSVP storage

## 🎯 SEO Optimization

- Meta tags for social sharing
- Structured data markup
- Optimized images
- Fast loading times

## 📞 Support & Customization

For advanced customization:
- Custom animations
- Additional pages
- Backend integration
- Payment processing
- Email notifications

## 🎉 Wedding Day Features

- Live streaming integration
- Real-time photo sharing
- Guest check-in system
- Digital guestbook
- Social media integration

---

**Congratulations on your upcoming wedding! 💕**

This React wedding website provides a modern, professional platform to share your special day with family and friends.