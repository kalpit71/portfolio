# GitHub Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to GitHub.com and log in to your account
2. Click the "+" button in the top-right corner
3. Select "New repository"
4. Fill in the repository details:
   - Repository name: `portfolio` (or whatever you prefer)
   - Description: `Full-stack portfolio website with React and Node.js`
   - Visibility: Choose Public or Private as you prefer
   - DO NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Your Code to GitHub

Once you've created the repository, GitHub will show you some commands. Run these commands in your terminal:

```bash
cd /Users/kalpityadav/Desktop/portfolio
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel (Recommended for Frontend)

### Frontend Deployment:

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. For the **Root Directory**, select `frontend`
5. Vercel will automatically detect Vite
6. Click "Deploy"

### Backend Deployment Options:

**Option 1: Render.com (Free)**
1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set Root Directory to `backend`
5. Add environment variables:
   - `PORT`: 5001
   - `MONGODB_URI`: Your MongoDB connection string
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
6. Deploy

**Option 2: Railway.app (Free tier available)**
1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Deploy from GitHub repository
4. Add backend service and configure environment variables

**Option 3: Keep on local server**
- Keep running backend locally and use ngrok for public access

## Step 4: Update Frontend API URL

After deploying the backend, update the frontend's API URL:

1. In Vercel dashboard, go to your project settings
2. Add environment variable: `VITE_API_URL` = your backend deployment URL
3. Redeploy the frontend

## Environment Variables Setup

For the backend deployment, you'll need:

1. **MongoDB Atlas** (Recommended for production):
   - Create a free account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Create a cluster and get your connection string
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`

2. **Gmail App Password**:
   - Go to Google Account Security
   - Enable 2-Step Verification
   - Generate App Password for "Portfolio Contact Form"
   - Use this as `EMAIL_PASS`

## Quick Summary

- ✅ Frontend: Deploy to Vercel (easiest, free)
- ✅ Backend: Deploy to Render or Railway (free tiers available)
- ✅ Database: Use MongoDB Atlas (free tier)
- ✅ Email: Use Nodemailer with Gmail (free)

Your portfolio will be live and fully functional!