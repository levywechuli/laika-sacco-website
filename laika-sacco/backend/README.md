# Laika SACCO Backend API

A complete Node.js backend for the Laika SACCO website with authentication, membership applications, loan management, and more.

## Features

- **User Authentication** (JWT-based)
- **Membership Applications** with email notifications
- **Loan Applications** with automatic calculations
- **Contact Form** with email integration
- **Admin Dashboard** with statistics
- **Email Notifications** for all major actions
- **Rate Limiting** and security middleware
- **MongoDB** integration with Mongoose

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required environment variables:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - A secure random string for JWT tokens
- `EMAIL_USER` - Your email address (Gmail recommended)
- `EMAIL_PASS` - Your email app password

### 3. Database Setup
Make sure you have MongoDB running (local or cloud):
- **Local**: Install MongoDB locally
- **Cloud**: Use MongoDB Atlas (free tier available)

### 4. Start Development Server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## Deployment

### Deploy to Render
1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add environment variables in Render dashboard

### Deploy to Railway
1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables
4. Deploy automatically

### Deploy to Heroku
1. Install Heroku CLI
2. Create new app: `heroku create your-app-name`
3. Set environment variables: `heroku config:set MONGODB_URI=your_uri`
4. Deploy: `git push heroku main`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update profile (protected)

### Membership
- `POST /api/membership/apply` - Submit membership application
- `GET /api/membership/applications` - Get all applications (admin)
- `GET /api/membership/applications/:id` - Get single application
- `PATCH /api/membership/applications/:id/status` - Update application status

### Loans
- `POST /api/loans/apply` - Submit loan application (protected)
- `GET /api/loans/my-applications` - Get user's loan applications (protected)

### Contact
- `POST /api/contact/submit` - Submit contact form

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics (protected)
- `GET /api/dashboard/recent-applications` - Get recent applications (protected)

## Email Configuration

### Using Gmail
1. Enable 2-factor authentication
2. Generate an app password
3. Use these settings:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Using Other Providers
- **Outlook**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **SendGrid**: Use SendGrid SMTP credentials

## Frontend Integration

Update your React app to use this backend:

```javascript
// In your React app
const API_BASE_URL = 'https://your-backend-url.com/api';

// Example: Submit membership application
const submitApplication = async (data) => {
  const response = await fetch(`${API_BASE_URL}/membership/apply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Example: Login user
const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  
  return data;
};
```

## Security Features

- **JWT Authentication** with secure tokens
- **Password hashing** with bcrypt
- **Rate limiting** to prevent abuse
- **Input validation** with express-validator
- **CORS protection** configured for your frontend
- **Helmet** for security headers

## Database Models

### User
- Personal information
- Authentication credentials
- Membership status and role
- Auto-generated membership numbers

### MembershipApplication
- Complete application form data
- Document upload support
- Status tracking and review system
- Email notifications

### LoanApplication
- Different loan types with specific rates
- Automatic payment calculations
- Guarantor support for development loans
- Comprehensive approval workflow

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support with this backend:
1. Check the logs for error messages
2. Verify environment variables are set correctly
3. Ensure MongoDB connection is working
4. Test API endpoints with tools like Postman

## License

MIT License - feel free to use this for your projects!