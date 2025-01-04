# Chat App

A real-time chat application that allows users to communicate with each other seamlessly. This project demonstrates the use of modern web technologies to create a full-stack application.

## Features

- Real-time messaging
- User authentication and authorization
- Profile management
- Image upload and display
- Responsive design

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

- **Cloud Services:**
  - AWS S3 for image storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   AWS_BUCKET_NAME=your_bucket_name
   AWS_BUCKET_REGION=your_bucket_region
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the development servers:
   ```bash
   cd frontend
   npm start
   cd ../backend
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Register a new account or log in with existing credentials.
3. Start chatting with other users in real-time.

## License

© 2024 Aarav Agarwal. All Rights Reserved. Unauthorized copying, modification, or distribution of this project is strictly prohibited.
