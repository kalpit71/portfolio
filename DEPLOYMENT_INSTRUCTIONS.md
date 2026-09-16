# Portfolio Deployment Guide

## Quick Deployment Steps

### 1. Frontend Deployment (Vercel - Recommended)

1. **Sign up/Login to Vercel**: [vercel.com](https://vercel.com)
2. **Import your GitHub repository**: `https://github.com/kalpit71/portfolio`
3. **Configure the project**:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables** (add in Vercel project settings):
   - `VITE_API_URL`: Add your backend URL after deploying backend (see step 2)
5. **Click "Deploy"**

Your frontend will be live at: `https://your-project.vercel.app`

### 2. Backend Deployment (Render.com - Free)

1. **Sign up/Login to Render**: [render.com](https://render.com)
2. **Create a new Web Service**
3. **Connect your GitHub repository**: `https://github.com/kalpit71/portfolio`
4. **Configure the service**:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Environment Variables** (required):
   - `PORT`: `5001`
   - `MONGODB_URI`: Your MongoDB connection string (see MongoDB setup below)
   - `EMAIL_USER`: `kalpityadav9@gmail.com`
   - `EMAIL_PASS`: Your Gmail app password (see Gmail setup below)
6. **Click "Deploy Web Service"**

Your backend will be live at: `https://your-service.onrender.com`

### 3. MongoDB Setup (MongoDB Atlas - Free)

1. **Create MongoDB Atlas account**: [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. **Create a free cluster** (M0 Sandbox)
3. **Database Access**: Create a database user with username and password
4. **Network Access**: Allow access from anywhere (0.0.0.0/0)
5. **Get connection string**:
   - Go to Database → Connect → Connect your application
   - Copy the connection string
   - Format: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`

### 4. Gmail App Password Setup

1. **Go to Google Account Security**: [myaccount.google.com/security](https://myaccount.google.com/security)
2. **Enable 2-Step Verification** (if not already enabled)
3. **Generate App Password**:
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the 16-character password
4. **Use this password** as `EMAIL_PASS` in your backend environment variables

### 5. Connect Frontend to Backend

After deploying your backend:

1. **Copy your backend URL** from Render (e.g., `https://your-service.onrender.com`)
2. **Update Vercel environment variables**:
   - Go to your Vercel project → Settings → Environment Variables
   - Add `VITE_API_URL` = your backend URL
3. **Redeploy the frontend** (Vercel will auto-deploy on push)

## Alternative Deployment Options

### Netlify (Frontend Alternative)
- Similar to Vercel, also free
- Go to [netlify.com](https://netlify.com)
- Import from GitHub
- Set root directory to `frontend`
- Add environment variables

### Railway.app (Backend Alternative)
- Go to [railway.app](https://railway.app)
- Create new project from GitHub
- Add backend service
- Configure environment variables

### Keep Backend Local (For Testing)
- Keep backend running locally: `cd backend && npm start`
- Use ngrok to expose local backend: `ngrok http 5001`
- Use ngrok URL as `VITE_API_URL`

## Environment Variables Summary

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.onrender.com
```

### Backend (.env)
```
PORT=5001
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=kalpityadav9@gmail.com
EMAIL_PASS=your_16_char_app_password
```

## Testing Your Deployment

1. **Test frontend**: Open your Vercel URL
2. **Test navigation**: Click all nav links
3. **Test contact form**: Submit a test message
4. **Check email**: Verify you receive the notification
5. **Check database**: Verify message is saved in MongoDB

## Troubleshooting

**Frontend issues:**
- Check Vercel deployment logs
- Verify environment variables are set
- Clear browser cache

**Backend issues:**
- Check Render deployment logs
- Verify MongoDB connection string
- Check email credentials
- Ensure all environment variables are set

**Contact form not working:**
- Verify backend is deployed and running
- Check CORS settings in backend
- Verify API URL in frontend is correct
- Check browser console for errors

## Production Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Render
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured
- [ ] Gmail app password generated
- [ ] Backend environment variables set
- [ ] Frontend environment variables updated
- [ ] Contact form tested
- [ ] Email notifications tested
- [ ] All links verified working

Your portfolio will be fully functional and live!