# Medical Image Annotation SaaS

The **Medical Image Annotation SaaS** is a web application developed for annotating medical images. It provides a user-friendly interface built with **Nuxt.js** and leverages **Tailwind CSS** for styling. The image annotation is powered by the **Konva** library, which allows users to interact with images by adding various annotations, such as regions of interest, text, and shapes.

## Tech Stack

- **Frontend**: Nuxt.js
- **CSS Framework**: Tailwind CSS
- **Image Annotation Library**: Konva
- **Deployment Platforms**: Vercel, Netlify, or GitHub Pages
- **Hosting Environment**: Docker

## Features

- **Image Annotation**: Users can annotate medical images using Konva’s canvas-based tools.
- **Responsive Design**: The app is fully responsive, ensuring a good experience across all devices.
- **Easy-to-Use Interface**: Built using Nuxt.js, making it fast and simple for users to interact with the application.

## Installation and Setup

### Prerequisites

Before running the project locally or in a production environment, make sure to install Docker and Node.js.

### Local Development

To set up the project locally and run it in development mode, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone <your-repository-url>
    cd medical-image-annotation
    ```

2. **Install Dependencies Using Docker**:
    The project is containerized using Docker. To install dependencies, run:
    ```bash
    docker run --rm -v $(pwd):/app -w /app node:16 npm install
    ```

3. **Run the Application Locally**:
    After dependencies are installed, the application can be started in development mode:
    ```bash
    docker-compose up
    ```

4. **Access the Application**:
    Once the server is up, the application can be accessed in the browser at `http://localhost:3000`.

### Production Build

To create a production-ready build of the application, follow these steps:

1. **Build the Application**:
    Use the following command to build the app for production:
    ```bash
    docker-compose run app npm run build
    ```

2. **Start the Production Server**:
    To serve the app in production mode, run:
    ```bash
    docker-compose up
    ```

3. **Access the Production Application**:
    The app can be accessed in the browser at `http://localhost:3000`.

## Deployment

The app can be deployed to various platforms. Below are the steps for deploying to popular free hosting services:

### Vercel

1. Push the project to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and link the GitHub repository.
3. Vercel automatically detects the Nuxt.js app and deploys it.

### Netlify

1. Push the project to GitHub.
2. Go to [Netlify](https://www.netlify.com) and link the GitHub repository.
3. Configure the build settings for Nuxt.js (e.g., build command: `npm run build`).
4. Deploy the app and get the live URL.

### GitHub Pages

1. Push the build folder to the `gh-pages` branch of the GitHub repository.
2. Follow the instructions provided by [GitHub Pages](https://pages.github.com/) to deploy.

## Files and Directories

### Key Files

- **`nuxt.config.ts`**: Nuxt.js configuration file.
- **`package.json`**: Contains the dependencies and scripts for the project.
- **`docker-compose.yml`**: Defines the Docker setup for the application.
- **`assets/css/tailwind.css`**: Custom Tailwind CSS file.
- **`pages/index.vue`**: The main page of the application.

### Key Directories

- **`components/`**: Contains reusable components.
- **`pages/`**: Contains the pages of the app.

## Troubleshooting

### Common Issues

- **Error: "docker-compose command not found"**: Ensure Docker and Docker Compose are installed on the machine.
- **Nuxt.js not working**: If the app doesn't load, try stopping the Docker container and restarting it using `docker-compose down` and then `docker-compose up`.

### Debugging

1. **Check Docker Logs**: If there are issues starting the app, review the Docker logs for any error messages:
    ```bash
    docker-compose logs
    ```

2. **Console Errors**: Open the browser's developer tools (F12) and check for any JavaScript errors that might be preventing the app from loading correctly.

## Additional Information

- **Author**: Shaurya
- **Email**: shaurya.tripathi07@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/shaurya-tripathi-34378a191/
- **GitHub**: https://github.com/shaurya721/medical-image-annotation.git
