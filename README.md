# BillionaireBride

## 📌 Overview
BillionaireBride is a React Native-based mobile application designed to deliver a smooth and immersive short-video experience similar to TikTok and Instagram Reels. The app incorporates Firebase for backend services and ensures seamless playback of videos with an intuitive UX/UI design.

## 🚀 Features
- **Auto-Play Trailer**: After 3 seconds, the trailer video starts automatically with muted sound.
- **Seamless Video Transition**: Clicking on the trailer redirects to the Shorts page, continuing the video from the exact timestamp with sound enabled.
- **Smooth Scroll Experience**: Swipe through videos effortlessly, mimicking TikTok and Instagram Reels UX.
- **Firebase Integration**: Videos are loaded dynamically from an API connected to Firebase.
- **Optimized Performance**: Next video preloaded while scrolling to ensure lag-free playback.

## 🛠️ Tech Stack
- **Frontend**: React Native, Expo
- **Navigation**: React Navigation (Bottom Tabs, Stack Navigation)
- **State Management**: Context API / Hooks
- **Backend**: Firebase (Firestore, Storage)
- **Video Handling**: react-native-video

## 📂 Project Setup
### Prerequisites
- Node.js (>=18)
- Expo CLI
- Firebase account & configuration

### Installation
```sh
# Clone the repository
git clone <repo-url>
cd BillionaireBride

# Install dependencies
yarn install  # or npm install

# Configure Firebase
# Add your Firebase configuration in a .env file or inside the project

# Run the project
npx expo start  # or npm run start
```

### Running on Android/iOS
```sh
npm run android  # For Android
tnpm run ios     # For iOS
```

## 🔍 Project Structure
```
BillionaireBride/
│── src/
│   ├── components/        # Reusable UI components
│   ├── screens/           # App screens
│   ├── navigation/        # Navigation setup
│   ├── services/          # API calls & Firebase services
│   ├── assets/            # Images, icons, etc.
│── App.js                 # Main app entry point
│── package.json           # Project dependencies
│── README.md              # Documentation
```

## 🛠 Development Notes
- Ensure smooth transitions between videos by preloading the next one.
- Optimize Firebase queries to avoid delays in loading new videos.
- Implement lazy loading for better performance.

## 📌 Future Enhancements
- User authentication & profile system
- Like, comment, and share functionalities
- Video upload feature

## 🤝 Contributions
Contributions are welcome! Feel free to open issues and PRs.

## 📄 License
MIT License

---

### 🚀 Enjoy the experience of BillionaireBride! 🎥✨

