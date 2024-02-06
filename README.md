# Weather App

This is a weather forecasting application built with Next.js, TypeScript, and various other modern web technologies. It allows users to search for and display weather forecasts for cities worldwide.

**Live Demo:** [https://nextjs-redux-weather.vercel.app](https://nextjs-redux-weather.vercel.app)

## Installation

First, clone the repository to your local machine. Then, run the following command to install the necessary dependencies:

To start the development server, run:

    ```bash
    pnpm run dev
    ```

This will start the Next.js development server, making the app accessible at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the source code of the application.
- `src/app/`: Contains the main application code including components and pages.
- `src/lib/`: Contains utility functions, custom hooks and slices for Redux Toolkit.

## Running Tests

Run the following command to execute the unit tests via Jest:

        ```bash
        pnpm run test
        ```

## Dependencies

This project makes use of several key dependencies:

- `@googlemaps/js-api-loader`: For loading Google Maps.
- `@reduxjs/toolkit` and `react-redux`: For state management.
- `chart.js` and `react-chartjs-2`: For rendering charts.
- `next-auth`: For authentication.
- `use-places-autocomplete`: For Google Places autocomplete functionality in search.

## Deploying to Vercel

Easily deploy your Weather App to Vercel with the click of a button.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/yourusername/weather-app)

## Environment Variables

Ensure the following environment variables are set in your project:

### Server

- `AUTH_SECRET`: Secret key for authentication. _(Example: `AUTH_SECRET=your_auth_secret_here`)_

- `GOOGLE_CLIENT_ID`: ID for Google OAuth client. _(Example: `GOOGLE_CLIENT_ID=your_google_client_id_here`)_

- `GOOGLE_CLIENT_SECRET`: Secret for Google OAuth client. _(Example: `GOOGLE_CLIENT_SECRET=your_google_client_secret_here`)_

- `MAPS_API_KEY`: API key for Google Maps services. _(Example: `MAPS_API_KEY=your_maps_api_key_here`)_

### Client

- `NEXT_PUBLIC_OPENWEATHERMAP_API_KEY`: Public API key for OpenWeatherMap. _(Example: `NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key_here`)_

- `NEXT_PUBLIC_MAPS_API_KEY`: Public API key for Google Maps, identical to the server-side key but exposed to the client. _(Example: `NEXT_PUBLIC_MAPS_API_KEY=your_maps_api_key_here`)_
