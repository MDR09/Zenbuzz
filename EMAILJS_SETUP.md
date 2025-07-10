# EmailJS Setup Instructions for ZenBuzz Media Contact Form

## Overview
The contact form uses EmailJS to send emails directly from the frontend without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Configure Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_zenbuzz`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested: {{service}}

Message:
{{message}}

---
This message was sent from the ZenBuzz Media contact form.
```

4. Note down the **Template ID** (e.g., `template_contact`)

### 4. Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_xyz123`)

### 5. Update Environment Variables
Update the `.env` file in your project root with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_TO_EMAIL=Info@zenbuzzmedia.in
```

### 6. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your registered email inbox

## Features Implemented

✅ **Form Validation**: Required fields validation
✅ **Loading State**: Shows spinner while sending
✅ **Success/Error Messages**: User feedback after submission
✅ **Form Reset**: Clears form after successful submission
✅ **Environment Variables**: Secure configuration management

## Email Template Variables

The following variables are available in your EmailJS template:
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{phone}}` - User's phone number (optional)
- `{{service}}` - Selected service
- `{{message}}` - User's message
- `{{to_email}}` - Your business email

## Troubleshooting

### Common Issues:
1. **"EmailJS configuration is missing"**: Check your `.env` file
2. **Email not received**: Check spam folder, verify EmailJS service setup
3. **Template variables not working**: Ensure variable names match in template

### Testing:
- Use EmailJS's test mode during development
- Check the browser console for error messages
- Verify EmailJS dashboard for sent email logs

## Security Notes
- Never commit your `.env` file to version control
- Add `.env` to your `.gitignore` file
- Use different credentials for production vs development

## Support
For EmailJS specific issues, check their [documentation](https://www.emailjs.com/docs/)
