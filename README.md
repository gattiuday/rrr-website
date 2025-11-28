# Ram Raj Resorts Website 🍓

A premium, responsive website for **Ram Raj Resorts** in Lambasingi, Andhra Pradesh. Built with HTML, Vanilla CSS, and JavaScript.

## Features ✨
- **Premium Dark Theme**: Modern, glassmorphism-inspired design.
- **AI Concierge**: Integrated Gemini AI for real-time guest assistance.
- **Dynamic Navigation**: Smooth single-page application (SPA) feel.
- **Mobile Optimized**: Smooth animations and touch-friendly interface.
- **Interactive Booking**: Modals for calling, WhatsApp, or Goibibo booking.

## Project Structure mb
- `index.html`: Main entry point.
- `styles.css`: All styling (Custom CSS variables, no frameworks).
- `script.js`: Logic for navigation, data rendering, and AI integration.

## How to Deploy to GitHub Pages 🚀

1.  **Create a Repository**:
    - Go to GitHub and create a new repository (e.g., `rrr-website`).

2.  **Push Code**:
    - Initialize git in this folder:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin https://github.com/YOUR_USERNAME/rrr-website.git
      git push -u origin main
      ```

3.  **Enable GitHub Pages**:
    - Go to your repository **Settings** > **Pages**.
    - Under **Source**, select `main` branch and `/ (root)` folder.
    - Click **Save**.

4.  **Done!**: Your site will be live at `https://YOUR_USERNAME.github.io/rrr-website/`.

## Configuration ⚙️
- **API Key**: The Gemini API key is set in `script.js`. Ensure you restrict this key in Google Cloud Console if deploying publicly.
- **Contact Info**: Update `PHONE_NUMBER` and `GOIBIBO_URL` in `script.js` to change booking details.
