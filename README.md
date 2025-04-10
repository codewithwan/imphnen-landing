# IMPHNEN Landing Page

IMPHNEN - Ingin Menjadi Programmer Handal Namun Enggan Ngoding. Landing page for a community of lazy programmers.

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Then edit .env.local with your Firebase credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

This project uses environment variables to store Firebase configuration. Create a `.env.local` file based on the provided `.env.example` and fill in your Firebase details:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

For hosting platforms (Vercel, Netlify, etc.), set these environment variables in their configuration.

## Firebase Setup

This project uses Firebase for storing and retrieving quotes. To set up:

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore database
3. Update the Firebase configuration in:
   - `lib/firebase.ts`
   - `components/firebase-provider.tsx`

### Firebase Rules

For production, deploy these Firestore security rules in the Firebase console:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /quotes/{quote} {
      // Allow anyone to read quotes
      allow read: if true;
      
      // Allow anyone to create quotes but with field validation
      allow create: if 
        // Required fields must exist
        request.resource.data.keys().hasAll(['author', 'text', 'createdAt']) &&
        
        // Author must be a string between 2-50 characters
        request.resource.data.author is string &&
        request.resource.data.author.size() >= 2 &&
        request.resource.data.author.size() <= 50 &&
        
        // Text must be a string between 5-300 characters
        request.resource.data.text is string &&
        request.resource.data.text.size() >= 5 &&
        request.resource.data.text.size() <= 300 &&
        
        // CreatedAt must be a timestamp
        request.resource.data.createdAt is timestamp;
      
      // No one can update or delete quotes except admins
      allow update, delete: if false;
    }
  }
}
```

### Common Issues

- **Storage Bucket URL**: Make sure the `storageBucket` value is correct (usually `[PROJECT_ID].appspot.com`)
- **Missing Collection**: The quotes collection is created automatically on first use
- **Permissions Errors**: Check that your Firestore security rules are properly configured

## Features

- Landing page for a "lazy programmer" community
- Quote submission and gallery
- Firebase integration for quote storage
- Responsive design with fun animations
- Localized content in Indonesian 