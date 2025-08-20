# reCAPTCHA Setup Guide

This guide explains how to properly configure reCAPTCHA for the contact form to prevent spam and verify human users.

## Prerequisites

1. A Google account
2. Access to the Google reCAPTCHA admin console

## Step 1: Create reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to add a new site
3. Choose "reCAPTCHA v2" with "I'm not a robot" checkbox
4. Add your domain(s) to the list of domains
5. Accept the terms of service and click "Submit"

## Step 2: Get Your Keys

After creating the reCAPTCHA, you'll get two keys:
- **Site Key**: Used in the frontend (client-side)
- **Secret Key**: Used in the backend (server-side)

## Step 3: Configure Frontend (React/Vite)

1. Update your `.env` file in the project root:
```env
VITE_SITE_KEY=your_site_key_here
```

2. The ContactForm component is already configured to use this environment variable.

## Step 4: Configure Backend (PHP)

1. Open `public/api/send_email.php`
2. Replace `YOUR_RECAPTCHA_SECRET_KEY_HERE` with your actual secret key:
```php
$recaptcha_secret = 'your_secret_key_here';
```

## Step 5: Test the Implementation

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out the form and complete the reCAPTCHA
4. Submit the form
5. Check that the email is sent successfully

## Security Notes

- **Never expose the secret key** in client-side code
- The secret key should only be used in server-side code (PHP)
- The site key is safe to use in client-side code
- Always validate reCAPTCHA responses on the server side

## Troubleshooting

### "reCAPTCHA site key not configured"
- Check that your `.env` file exists in the project root
- Verify the environment variable name is `VITE_SITE_KEY`
- Restart your development server after changing the `.env` file

### "reCAPTCHA verification failed"
- Check that you're using the correct secret key in the PHP file
- Verify that your domain is added to the reCAPTCHA admin console
- Ensure the reCAPTCHA is completed before form submission

### "Missing required parameters: sitekey"
- This error occurs when the site key is not properly loaded
- Check the browser console for the actual site key value
- Verify the `.env` file format and location

## Current Configuration

- **Frontend**: Uses `import.meta.env.VITE_SITE_KEY` to access the site key
- **Backend**: Validates reCAPTCHA responses with Google's API
- **Error Handling**: Shows user-friendly error messages for reCAPTCHA issues
- **Security**: Prevents form submission without valid reCAPTCHA verification
