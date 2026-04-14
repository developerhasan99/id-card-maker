# ID Card Maker

A simple web application built with React and Vite that allows users to create and customize ID cards with avatars and export them as PNG images.

## Features

- **Avatar Selection**: Choose from a variety of predefined avatars (Commander, Gangster, Luna, Shooter, Warrior).
- **Customizable Details**: Enter your name and star sign to personalize the ID card.
- **Live Preview**: See a real-time preview of your ID card as you make changes.
- **Export Functionality**: Download your customized ID card as a high-quality PNG image using html2canvas.
- **Responsive Design**: Built with Tailwind CSS for a clean, modern, and responsive UI.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and building.
- **Tailwind CSS**: For styling and responsive design.
- **html2canvas**: For exporting the ID card as an image.
- **GitHub Pages**: For deployment.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/id-card-maker.git
   cd id-card-maker
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. **Select an Avatar**: Click on one of the avatar images to choose your preferred character.
2. **Enter Details**: Fill in your name and star sign in the input fields.
3. **Preview**: View the live preview of your ID card on the right side.
4. **Download**: Click the "Download ID Card" button to export your ID card as a PNG file.

## Deployment

This project is configured for deployment to GitHub Pages. The build process uses Vite with a relative base path for subdirectory deployment.

To deploy:
1. Ensure GitHub Pages is enabled in your repository settings.
2. Push changes to the `main` branch.
3. The GitHub Actions workflow will automatically build and deploy the site.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
