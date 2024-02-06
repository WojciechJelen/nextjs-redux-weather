# Weather App

Deployed at: [https://nextjs-redux-weather.vercel.app](https://nextjs-redux-weather.vercel.app)
This is a weather forecasting application built with Next.js, TypeScript, and various other modern web technologies. It allows users to search for and display weather forecasts for cities worldwide.

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
