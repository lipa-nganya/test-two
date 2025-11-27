# Kelvin Murumba Custom Cars Website

A modern website for Kelvin Murumba's custom car business, allowing clients to inquire about custom car services.

## Project Structure

```
murumba/
├── backend/          # Express.js API server
│   ├── server.js     # Main server file
│   └── package.json  # Backend dependencies
├── frontend/         # React + Vite frontend
│   ├── src/          # React components
│   └── package.json  # Frontend dependencies
└── README.md         # This file
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure email settings (optional):
   - Copy `.env.example` to `.env`
   - Update email credentials for contact form notifications

4. Start the backend server:
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`

## Features

- **Modern UI**: Beautiful, responsive design with gradient backgrounds
- **Contact Form**: Inquiry form for custom car projects
- **Service Showcase**: Display of available customization services
- **About Section**: Information about Kelvin Murumba
- **Email Integration**: Backend sends inquiry emails (requires email configuration)

## Email Configuration

To enable email notifications, update the `.env` file in the backend directory:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=kelvin@example.com
```

Note: For Gmail, you'll need to use an App Password instead of your regular password.

## Technologies Used

- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express, Nodemailer
- **Styling**: CSS3 with modern gradients and animations

