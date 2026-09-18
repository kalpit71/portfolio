# Kalpit Yadav - Portfolio( portfolio-git-main-kalpit72.vercel.app )

A professional portfolio website built with React and MERN stack showcasing my skills, projects, and achievements as a Full-Stack Engineer.

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS3 (Responsive Design)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Features

- **Hero Section**: Professional introduction with contact links
- **About Section**: Professional summary and background
- **Skills Section**: Comprehensive technical skills organized by category
- **Projects Section**: Showcase of 3 major projects with live demos
- **Education Section**: Academic background and achievements
- **Achievements Section**: Awards, certifications, and competition results
- **Contact Form**: Functional contact form with MongoDB integration
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean, professional design with smooth animations

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── App.css          # Styling
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── .env                 # Environment variables
├── backend/
│   ├── server.js            # Express server
│   ├── package.json
│   └── .env                 # Environment variables
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
```

4. Start the backend server:
```bash
npm start
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

3. Configure environment variables in `.env`:
```
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### POST /api/contact
Submit contact form data
- Request body: `{ name, email, message }`
- Response: `{ message: "Contact form submitted successfully" }`

### GET /api/contacts
Retrieve all contact submissions (for admin purposes)
- Response: Array of contact objects

## Contact Information

- **Email**: kalpityadav9@gmail.com
- **Phone**: +91 9140253271
- **Location**: Kanpur, India
- **LinkedIn**: https://linkedin.com/in/kalpit-yadav-378676343
- **GitHub**: https://github.com/kalpit71

## Projects Showcased

1. **ReachInbox** - Distributed Email Scheduling Platform
   - Live: https://reach-inbox-geskgw8k8-kalpit72.vercel.app
   - GitHub: https://github.com/kalpit71/ReachInbox.git

2. **NextHire** - Full-Stack Job Portal
   - Live: https://next-hire-umber.vercel.app
   - GitHub: https://github.com/kalpit71/NextHire.git

3. **Stock Predictor** - Time-Series Market Analysis App
   - Live: https://lstm-stock-prediction-pxk3.onrender.com
   - GitHub: https://github.com/kalpit71/LSTM_Stock_Prediction.git

## License

This project is for personal portfolio use.

## Author

Kalpit Yadav - Full-Stack Engineer & Backend Specialist
