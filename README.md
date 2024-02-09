# MERN YouTube Clone

## About
This project is a feature-rich YouTube clone developed using the MERN stack, JWT for authentication, and Firebase Storage for video and file storage. The aim of this project is to replicate the core functionalities of YouTube, providing users with the ability to upload, view, like, comment, and interact with videos in a seamless manner.

## Demo
A demonstration of the project can be found [here](https://github.com/chaudharimanav/youtube-clone/raw/main/manav.youtube-clone.mp4).

## Features
- **User Authentication:** Utilizing JWT for secure user authentication.
- **User Registration and Login:** Seamless registration and login processes for users.
- **Video Management:** Enables uploading and viewing of videos.
- **Channel Creation:** Users can create channels and upload their own content.
- **Interaction Features:** Including liking, commenting, saving, and sharing videos.
- **Playlist Creation:** Users can create playlists and share them with others.
- **Cloud Storage:** Utilizes Firebase Storage for efficient video storage.
- **YouTube Studio:** Provides a platform for managing channels and content.
- **Responsive Design:** Ensures a consistent user experience across mobile and desktop devices.

## Technologies Used
- **MongoDB:** A robust database solution for storing user data and video metadata.
- **Express.js:** A minimalist web application framework for handling API requests.
- **React.js:** A powerful frontend library for building the user interface.
- **Node.js:** A JavaScript runtime environment for server-side development.
- **Firebase Storage:** Cloud-based storage solution for efficient video uploads.
- **JSON Web Tokens (JWT):** Used for secure user authentication.
- **React Icons & MUI:** Libraries for incorporating icons and UI components.

## Configuration
1. **Create `.env` File:** Start by creating a `.env` file in the root directory of the project.
2. **Add Environment Variables:** Populate the `.env` file with necessary environment variables such as database connection URLs and API keys. Ensure sensitive information is securely stored.
3. **MongoDB URI Configuration:** Insert your MongoDB Atlas URI in the `database` file located within the `backend` folder.

```
SECRET_KEY=your-secret-key
EMAIL=email-to-use-as-nodemailer-service
PASSWORD=google-app-password
```

## Running the Application
### Server
1. **Install Dependencies:** Begin by installing the server dependencies:
```
npm install
```
2. **Start the Server:** Initiate the server by running:
```
npm start
```

### Client
1. **Install Dependencies:** Install client dependencies using:
```
npm install
```
2. **Start the Client Application:** Launch the client application with:
```
npm run dev
```

Access the application by navigating to [http://localhost:5173](http://localhost:5173) in your web browser.
