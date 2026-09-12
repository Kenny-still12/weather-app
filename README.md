# Weather App

A simple, clean weather search app built with React, Vite, and Tailwind CSS. Search for any city and get current conditions, temperature, and key atmospheric stats — powered by the OpenWeatherMap API.

## Features

- **City search** — look up current weather for any city by name
- **Current conditions** — temperature, "feels like", and a short description
- **Condition icons** — custom weather icons mapped to conditions (with an OpenWeatherMap icon fallback)
- **Additional info** — wind speed, humidity, pressure, and visibility at a glance
- **Live clock** — real-time clock in the header
- **Loading & error states** — friendly feedback while fetching or if a city isn't found
- **Responsive UI** — styled with Tailwind CSS

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons
- [OpenWeatherMap API](https://openweathermap.org/api) (Geocoding + Current Weather)
- [Oxlint](https://oxc.rs/) for linting

## Project Structure

```
weather-app/
├── public/
│   └── favicon.svg, icons.svg
├── src/
│   ├── assets/              # Weather condition images
│   ├── Components/
│   │   ├── Header.jsx       # Logo + live clock
│   │   ├── SearchBar.jsx    # City search input + submit
│   │   ├── Result.jsx       # Renders weather card / loading / error states
│   │   ├── WeatherCard.jsx  # Main temperature + condition display
│   │   ├── AdditionalInfo.jsx # Wind, humidity, pressure, visibility
│   │   ├── Loading.jsx
│   │   ├── Error.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectLogo.jsx
│   ├── services/
│   │   └── weatherApi.js    # Geocoding + current weather fetch logic
│   ├── utils/
│   │   ├── weatherMapper.js # Maps conditions to icons
│   │   ├── IconMapper.jsx
│   │   └── LiveClock.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Kenny-still12/weather-app.git
   cd weather-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up your environment variables

   Create a `.env` file in the project root:
   ```
   VITE_WEATHER_API=your_openweathermap_api_key
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Other Scripts

| Command           | Description                          |
|--------------------|--------------------------------------|
| `npm run dev`      | Start the development server         |
| `npm run build`    | Build the app for production         |
| `npm run preview`  | Preview the production build locally |
| `npm run lint`     | Run Oxlint                           |

## How It Works

1. The user types a city name into the search bar and submits.
2. `weatherApi.js` first calls OpenWeatherMap's **Geocoding API** to resolve the city name into latitude/longitude.
3. It then calls the **Current Weather API** using those coordinates to fetch live conditions.
4. The result is rendered through `WeatherCard` (temperature, condition, icon) and `AdditionalInfo` (wind, humidity, pressure, visibility), with loading and error states handled along the way.

## Credits

Weather icons by [iconixar on Flaticon](https://www.flaticon.com/free-icons/weather).

## License

No license specified yet — consider adding one (e.g. MIT) if you plan to share or open this project up for contributions.