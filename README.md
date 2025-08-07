# Hacettepe Weather 🌤️

A modern, responsive weather application built with Next.js that displays current weather conditions and 5-day forecast for Ankara, Turkey (specifically for Hacettepe University area).

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)

## ✨ Features

- **Real-time Weather Data**: Current weather conditions with automatic updates every 10 seconds
- **5-Day Forecast**: Detailed weather predictions for the next 5 days
- **Dynamic Backgrounds**: Beautiful weather-based background images that change according to current conditions
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean interface built with Tailwind CSS and Radix UI components
- **Location-specific**: Focused on Hacettepe University area (Ankara, Turkey)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- An OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hacettepe-weather.git
   cd hacettepe-weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   PUBLIC_WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## 📁 Project Structure

```
hacettepe-weather/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Main page component
├── components/
│   ├── Background.tsx    # Dynamic background component
│   ├── footer/
│   └── ui/              # Reusable UI components
├── lib/
│   └── utils.ts         # Utility functions
├── public/
│   └── background/      # Weather background images
├── styles/
│   └── styles.css       # Additional styling
├── utils/
│   └── WeatherApi.tsx   # Weather API integration
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🌍 API Integration

The application uses the OpenWeatherMap API to fetch:
- Current weather data for Hacettepe University coordinates (39.8674°N, 32.7354°E)
- 5-day weather forecast with 3-hour intervals
- Weather icons and descriptions

### API Endpoints Used:
- Current Weather: `/weather?lat=39.8674482&lon=32.7353845`
- 5-Day Forecast: `/forecast?lat=39.8674482&lon=32.7353845`

## 🎨 Dynamic Backgrounds

The application features weather-condition-based background images:
- Different backgrounds for day/night cycles
- Specific images for various weather conditions (sunny, cloudy, rainy, snowy, etc.)
- High-quality WebP format for optimal performance

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Add your `PUBLIC_WEATHER_API_KEY` environment variable
4. Deploy!

### Other Deployment Options:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform/)

## 🔧 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Hacettepe University](https://www.hacettepe.edu.tr/) for inspiration
- [Vercel](https://vercel.com/) for Next.js framework and deployment platform

---

Made with ❤️ for Hacettepe University community
